// let userNameUl = [];
// let userReposUl = [];
// const getUserURl = 'https://api.github.com/users';
// const getuserRepoURL = 'https://api.github.com/repos/'


let form;
document,addEventListener('submit',
function(){
    form = document.getElementById('#github-form');
}) 

function searchUsers(){
    return fetch('getUserURl', {
        method: 'get',
        headers: {
            'Content - Type': 'application/json',
            'Accept': 'application/vnd.github.v3+json'
},
        body: JSON.stringify()
    })
    .then(response => response.json())
    .then(obj => displayUsers(obj.message))
    
}

function displayUsers(userNameUl) {
    const userList = document.getElementById('#user-list');
    for (user in userNameUl){
        let li = document.createElement('li');
        let node = document.createTextNode(user);
        li.appendChild(node);
        userList.appendChild(li);
        userNameUl.filter(showUser => showUser.login === )
    }
        
    }

//     I'd suggest making a function to display a single user first (displayUser) and then in your displayUsers function, pass in each user from the array into your displayUser function.

// Your displayUser function would take in a user object, create the relevant HTML tags, add content to those tags and then return the data in a div or li (check out the Fetch Part 2 lecture for a demo on how to create a component. I created a createPokemonCard function in that lecture).

// In your displayUsers function, you'd call the displayUser function to get the div or li, and then append it to the DOM.