const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

document.addEventListener('DOMContentLoaded', function () {
  const deadline = document.querySelector('.deadline')
  const giveaway = document.querySelector('.giveaway')
  const items = document.querySelectorAll('.deadline-format h4')

  let tempDate = new Date()
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();

  //const futureDate = new Date(tempYear,tempMonth, tempDay + 1, 11, 30, 0);
  const futureDate = new Date(tempYear, tempMonth, tempDay + 1, 11, 30, 0)
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const mins = futureDate.getMinutes();
  const date = futureDate.getDate();

  let month = futureDate.getMonth();
  let day = futureDate.getDay();
  month = months[month];
  day = weekdays[day];

  giveaway.innerHTML = `giveaway ends on ${day}, ${date} ${month} ${year} ${hours}: ${mins}am`;

  const futureTime = futureDate.getTime()

  function getRemainingTime() {
    const today = new Date().getTime()
    const t = futureTime - today

    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMinute = 60 * 1000

    let days = t / oneDay
    days = Math.floor(days)
    let hours = Math.floor((t % oneDay) / oneHour)
    let mins = Math.floor((t % oneHour) / oneMinute)
    let secs = Math.floor((t % oneMinute) / 1000)

    const values = [days, hours, mins, secs]

    function format(item) {
      if (item < 10) {
        return (item = `0${item}`)
      }
      return item
    }

    items.forEach(function (items, index) {
      items.innerHTML = format(values[index])
    })

    if (t < 0) {
      clearInterval(countdown)
      deadline.innerHTML = `<h4 class='expired'> sorry this giveaway is expired  </h4>`
    }
  }

  //countdown
  let countdown = setInterval(getRemainingTime, 1000)
  getRemainingTime()
})
