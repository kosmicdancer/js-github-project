// api: https://api.github.com/search/users
// configObj to be included as 2nd value
// headers: Accept: application/vnd.github.v3+json
// method: get

// objective 1
// step 1: create a function that takes in a value and searches github for that value

function fetchGithubByValue(value) {
    fetch (`https://api.github.com/search/users?q=${value}`, {
        headers: {
            'Accept': 'application/vnd.github.v3+json'
        }
    })
        .then(res => res.json())
        // .then(users => {users.array.forEach(user =>
        //     createUserListDiv(array))
        }
                 

// step 2: add an eventlistener to my submit button take the value of that input box 
// call my fetch function with that value

const submitBtn = document.getElementById('submit-button')
const searchBox = document.getElementById('search')
submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    fetchGithubByValue(searchBox.value)
})

// objective 2
// step 1: create a function to create li with the user data
// <div id='github-container'>
// <ul id='user-list'>
// {['userName':]
//</ul>
function createUserListDiv(userObj) {
    const userList = createElement.forEach
    ({"login": `${login}`}, 
    {"html_url": `https://github.com/${login}`}, 
    {"avatar_url": `https://avatars.githubusercontent.com/u/`},
    {"repos_url": `https://api.github.com/users/${login}/repos`})
        

    // for(let i = 0; i < array.length; i++) {

    // const userUl = document.getElementById ('user-list')
    // const repoUl = document.getElementById ('repo-list')
    // const user_url = `https://api.github.com/users/`
    // const avatar_url = `https://avatars.githubusercontent.com/u/996818?v=4`
    // const repos_url = `https://api.github.com/users/repos`

    // step 2: create a function to append the li to user list

    function appendLiforUser() {
        div.appendChild(userList, 'user-list')
        return userList
}}

const testUser = {
    "login": "kosmicdancer",
    "html_url": "https://github.com/kosmicdancer",
    "avatar_url": "https://avatars.githubusercontent.com/u/79486121?v=4",
    "repos_url": "https://api.github.com/users/kosmicdancer/repos"}
    

// step 3: append components to DOM

const testUserObj = [
    {
        "login": "kosmicdancer",
        "id": 79486121,
        "node_id": "MDQ6VXNlcjc5NDg2MTIx",
        "avatar_url": "https://avatars.githubusercontent.com/u/79486121?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kosmicdancer",
        "html_url": "https://github.com/kosmicdancer",
        "followers_url": "https://api.github.com/users/kosmicdancer/followers",
        "following_url": "https://api.github.com/users/kosmicdancer/following{/other_user}",
        "gists_url": "https://api.github.com/users/kosmicdancer/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kosmicdancer/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kosmicdancer/subscriptions",
        "organizations_url": "https://api.github.com/users/kosmicdancer/orgs",
        "repos_url": "https://api.github.com/users/kosmicdancer/repos",
        "events_url": "https://api.github.com/users/kosmicdancer/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kosmicdancer/received_events",
        "type": "User",
        "site_admin": false,
        "score": 1.0
      }
]












// let userUl = [];
// let reposUl = [];
// let form = document.getElementById ('#github-form');
// const userFetchURL = 'https://api.github.com/search/users'
// const repoFetchURL = 'https://api.github.com/user/${username}/repos'

// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById ('#github-form')});

// form.addEventListener('submit', function() {
//     fetch (userFetchURL, {
//         headers: {'Accept': 'application/vnd.github.v3+json'
//     }})
//     .then(function (response) {
//         return response.json()})
//     .then(function (json) {
//         console.log(json);
        
//     return (userUl)

// })}