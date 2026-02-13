const suggestionContainer = document.querySelector('.suggestions-container')

export function renderSuggetions(userList){
    let suggestionHTML = ''
    
    userList.forEach((user) => {
        const userDetails = {
            id: user.id,
            avatar: user.avatar_url,
            username: user.login,
            followers: user.followers_url.length,
            following: user.following_url.length,
            repos: user.repos_url.length
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