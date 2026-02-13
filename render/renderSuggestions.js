const suggestionContainer = document.querySelector('.suggestions-container')

export function renderSuggetions(suggestionsList){
    let suggestionHTML = ''
    
    suggestionsList.forEach((suggestion) => {
        const userDetails = {
            id: suggestion.id,
            avatar: suggestion.avatar_url,
            username: suggestion.login,
            followers: suggestion.followers_url.length,
            following: suggestion.following_url.length,
            repos: suggestion.repos_url.length
        }
        const {id, avatar, username, followers, following, repos} = userDetails
        
        suggestionHTML += `<div class="suggestion-item" data-id=${id}>
                                <img src="${avatar}" class="suggestion-avatar" />

                                <div class="suggestion-info">
                                    <div class="suggestion-username">${username}</div>
                                    <div class="suggestion-meta">
                                        <span>Followers: ${followers}</span>
                                        <span>Following: ${following}</span>
                                        <span>Repos: ${repos}</span>
                                    </div>
                                </div>
                            </div>`
    })

    suggestionContainer.innerHTML = suggestionHTML
}

export function clearSuggestions(){
    suggestionContainer.innerHTML = ''
}