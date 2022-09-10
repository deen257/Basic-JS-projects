document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('DOMContentLoaded', setUpItems)
  const alert = document.querySelector('.alert')
  const form = document.querySelector('.grocery-form')
  const grocery = document.getElementById('grocery')
  const submitBtn = document.querySelector('.submit-btn')
  const container = document.querySelector('.grocery-container')
  const list = document.querySelector('.grocery-list')
  const clear = document.querySelector('.clear-btn')

  let editElement
  let editFlag = false
  let editId = ''

  form.addEventListener('submit', addItem)
  clear.addEventListener('click', clearlist)

  function addItem(e) {
    e.preventDefault()
    const value = grocery.value
    const id = new Date().getTime().toString()

    if (value && !editFlag) {
      createListItem(id, value)
      displayAlert('New item added', 'success')
      container.classList.add('show-container')
      addToLocalStorage(id, value)
      setToDefault()
    } else if (value !== '' && editFlag) {
      console.log(editElement)
      editElement.innerHTML = value
      displayAlert('value changed', 'success')
      editLocalStorage(editId, value)
      setToDefault()
    } else {
      displayAlert('Please Enter Value', 'danger')
    }
  }

  function displayAlert(text, action) {
    alert.innerHTML = text
    alert.classList.add(`alert-${action}`)

    setTimeout(() => {
      alert.innerHTML = ''
      alert.classList.remove(`alert-${action}`)
    }, 1000)
  }

  function addToLocalStorage(id, value) {
    const grocery = { id, value }
    let items = localStorage.getItem('list')
      ? JSON.parse(localStorage.getItem('list'))
      : []
    items.push(grocery)
    localStorage.setItem('list', JSON.stringify(items))
    console.log(items)
  }

  function removeFromLocalStorage(id) {
    let items = getLocalStorage()
    items = items.filter((item) => {
      if (item.id !== id) {
        return item
      }
    })
    localStorage.setItem('list', JSON.stringify(items))
    console.log('deleted from local storage')
    console.log(items)
  }

  function editLocalStorage(id, value) {
    let items = getLocalStorage()
    items = items.map((item) => {
      if (item.id === id) {
        item.value = value
      }
      return item
    })
    localStorage.setItem('list', JSON.stringify(items))
  }

  function getLocalStorage() {
    return localStorage.getItem('list')
      ? JSON.parse(localStorage.getItem('list'))
      : []
  }

  function setToDefault() {
    grocery.value = ''
    editFlag = false
    editId = ''
    submitBtn.innerHTML = 'submit'
  }

  function clearlist() {
    const items = document.querySelectorAll('.grocery-item')
    console.log(items)

    if (items.length > 0) {
      items.forEach((item) => {
        list.removeChild(item)
      })
      container.classList.remove('show-container')
      displayAlert('List Emptied', 'danger')
      localStorage.removeItem('list')
      setToDefault()
    }
  }

  function editItem() {
    const element = this.parentElement.parentElement
    editElement = this.parentElement.previousElementSibling
    const id = element.dataset.id
    console.log('edit')
    console.log(editElement)

    grocery.value = editElement.innerHTML
    editFlag = true
    editId = id
    submitBtn.innerHTML = 'Edit'
  }

  function deleteItem() {
    const element = this.parentElement.parentElement
    const id = element.dataset.id
    list.removeChild(element)
    if (list.children.length === 0) {
      container.classList.remove('show-container')
    }
    displayAlert('item removed', 'danger')
    setToDefault()
    removeFromLocalStorage(id)
  }

  function createListItem(id, value) {
    const element = document.createElement('article')
    element.classList.add('grocery-item')
    const attr = document.createAttribute('data-id')
    attr.value = id
    element.setAttributeNode(attr)
    element.innerHTML = `<p class="title">${value}</p>
                <div class="btn-container">
                    <button type="button" class="edit-btn">
                    <i class="fas fa-edit"></i>
                    </button>
                     <button type="button" class="delete-btn">
                    <i class="fas fa-trash"></i>
                    </button>
                </div>`

    const deleteBtn = element.querySelector('.delete-btn')
    const editBtn = element.querySelector('.edit-btn')

    deleteBtn.onclick = deleteItem
    editBtn.onclick = editItem

    list.appendChild(element)
  }

  function setUpItems() {
    let items = getLocalStorage()

    if (items.length > 0) {
      items.forEach((item) => {
        createListItem(item.id, item.value)
      })
      container.classList.add('show-container')
    }
  }
})
