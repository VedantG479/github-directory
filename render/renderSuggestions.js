const suggestionContainer = document.querySelector('.suggestions-container')

export function renderSuggetions(suggestionsList){
    let suggestionHTML = ''
    
    suggestionsList.forEach((suggestion) => {
        const userDetails = {
            id: suggestion.id,
            avatar: suggestion.avatar_url,
            username: suggestion.login
        }
        const {id, avatar, username, followers, following, repos} = userDetails

        suggestionHTML += `<div class="suggestion-item" data-username=${username}>
                                <img src="${avatar}" class="suggestion-avatar" />

                                <div class="suggestion-info">
                                    <div class="suggestion-username">${username}</div>
                                </div>
                            </div>`
    })

    suggestionContainer.innerHTML = suggestionHTML
}

export function clearSuggestions(){
    suggestionContainer.innerHTML = ''
}