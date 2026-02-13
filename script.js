import { handleSearch } from "./fetch/fetch.js"
import { clearSuggestions } from "./render/renderSuggestions.js"

const searchInput = document.querySelector('.search-input')

searchInput.addEventListener('input', () => {
    const searchName = searchInput.value.trim()
    if(searchName.length <= 3){
        clearSuggestions()
        return
    }

    handleSearch(searchName)
})

document.body.addEventListener('click', (e) => {
    const suggestedItem = e.target.closest('.suggestion-item')
    if(!suggestedItem)  return
    console.log(suggestedItem.dataset.id)
})