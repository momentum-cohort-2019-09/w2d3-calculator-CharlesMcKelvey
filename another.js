addButton.addEventListener('click', function() {
    const field = document.querySelector('#add-item')
    const itemText = field.value

    if (itemText !== '') {
        const newListItem = document.createElement('li')
        newListItem.innerText = itemText
        
        document.querySelector('#grocery-list').appendChild(newListItem);
        field.value = ''
        field.focus()
    }
})