document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelectorAll('.tab-btn')
  const container = document.querySelector('.btn-container')
  const about = document.querySelectorAll('.content')

  console.log(button)
  container.addEventListener('click', function (container) {
    const e = container.target
    const element = document.getElementById(e.dataset.id)
    about.forEach((about) => {
      about.classList.remove('active')
    })
    button.forEach((button) => {
      button.classList.remove('active')
    })

    element.classList.add('active')
    e.classList.add('active')
  })
})
