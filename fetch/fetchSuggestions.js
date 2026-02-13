import { clearProfile } from "../render/renderProfile.js"
import { renderSuggetions } from "../render/renderSuggestions.js"
import { debounce } from "./utils.js"

export const handleSuggestions = debounce(getSuggestions, 400)
let suggestionsList
let requestCounter = 0

function getSuggestions(searchName){
    fetchSuggestions(searchName)
      .then((list) => {
        if(!list)   return
        suggestionsList = list.items
        clearProfile()
        renderSuggetions(suggestionsList)
      })
}

function fetchSuggestions(searchName){
    let currRequestCounter = ++requestCounter
    return fetch(`https://api.github.com/search/users?q=${searchName}&sort=followers&order=desc&per_page=5`)
      .then((response) => {
        if(!response.ok)    throw new Error('not found')  
        return response.json()
      })
      .then((data) => {
        if(currRequestCounter != requestCounter)    return null
        return data
      })
      .catch((error) => {
        console.log(error)
        return null
      })
}

export function getUserName(userId){
    let matchingItem
    if(!suggestionsList)   return

    suggestionsList.forEach((suggestion) => {
        if(suggestion.id == userId)  matchingItem = suggestion
    })
    return matchingItem.login
}