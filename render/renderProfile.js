const profileSection = document.querySelector('.profile-section')

export function renderProfile(details){
    console.log(details)
    const {avatar_url, html_url, login, followers, following, public_repos, name, location, company, email, created_at} = details
    profileSection.classList.remove('hidden')

    profileSection.querySelector('.profile-avatar').src = avatar_url
    profileSection.querySelector('.profile-username-link').href = html_url 
    profileSection.querySelector('.profile-username').innerHTML = login + `<span class="redirect-arrow">↗</span>`
    profileSection.querySelector('.followers').innerText = followers
    profileSection.querySelector('.following').innerText = following
    profileSection.querySelector('.repos').innerText = public_repos

    profileSection.querySelector('.profile-details-box').innerHTML = `<p><strong>Name:</strong> ${name ? name : 'NA'}</p>
                                                                    <p><strong>Location:</strong> ${location ? location : 'NA'} </p>
                                                                    <p><strong>Company:</strong> ${company ? company : 'NA'} </p>
                                                                    <p><strong>Website:</strong> ${email ? email : 'NA'}</p>
                                                                    <p><strong>Joined:</strong> ${created_at ? new Date(created_at).getFullYear() : 'NA'} </p>`

    profileSection.querySelector('.contribution-graph-img').src = `https://ghchart.rshah.org/${login}`
}

export function clearProfile(){
    profileSection.classList.add('hidden')
}