import { renderProfile } from "../render/renderProfile.js"

export function getUser(userName){
    fetchUser(userName)
      .then((details) => {
        if(!details)   return
        renderProfile(details)
      })
}

function fetchUser(userName){
    return fetch(`https://api.github.com/users/${userName}`)
      .then((response) => {
        if(!response.ok)    throw new Error('not found')  
        return response.json()
      })
      .catch((error) => {
        console.log(error)
        return null
      })
}