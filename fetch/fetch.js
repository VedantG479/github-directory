import { renderSuggetions } from "../render/renderSuggestions.js"

export const handleSearch = debounce(getUser, 400)
export let userList
let requestCounter = 0

function debounce(func, delay){
    let timerId
    return function(...args){
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}

function getUser(searchName){
    fetchUser(searchName)
      .then((list) => {
        if(!list)   return
        userList = list.items
        console.log(userList)
        renderSuggetions(userList)
      })
}

function fetchUser(searchName){
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