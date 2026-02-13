import { getUser } from "./fetch/fetchProfile.js"
import { getUserName, handleSuggestions } from "./fetch/fetchSuggestions.js"
import { clearSuggestions } from "./render/renderSuggestions.js"

const searchInput = document.querySelector('.search-input')

searchInput.addEventListener('input', () => {
    const searchName = searchInput.value.trim()
    if(searchName.length <= 3){
        clearSuggestions()
        return
    }
    handleSuggestions(searchName)
})

document.body.addEventListener('click', (e) => {
    const suggestedItem = e.target.closest('.suggestion-item')
    if(!suggestedItem)  return

    getUser(getUserName(suggestedItem.dataset.id))
    clearSuggestions()
})