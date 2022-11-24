document.addEventListener('DOMContentLoaded', function () {
  const generate = document.getElementById('generate')
  const income = document.getElementById('income')

  const budget = document.querySelector('.budget')
  const form = document.querySelector('.budget-form')
  console.log(form)

  let budgets = [
    'saving',
    'rent',
    'grocies',
    'fuel',
    'internet',
    'school fee',
    'cable',
    'transport',
    'waste',
    'miscellaneous',
  ]

  const percent = [30, 15, 12, 3, 4, 15, 5, 8, 5, 3]

  generate.addEventListener('click', (e) => {
    e.preventDefault()
    form.classList.add('none')
    console.log(income)
    for (let i = 0; i < budgets.length; i++) {
      amount = parseInt(income.value) * (percent[i] / 100)
      console.log(amount)
      budget.innerHTML += `<p>${budgets[i]} : N${amount}</p>`
    }
  })
})
