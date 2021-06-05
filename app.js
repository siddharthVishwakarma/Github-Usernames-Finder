// Init Github
const github = new Github

// Search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const input = e.target.value;

    if(input !== ''){
        github.getUser(input).then(data => {
            if(data.profile.message === 'Not Found'){
                // Show alert
            } else {
                // Show profile
            }
        });
    } else {
        // Clear Profile
    }
})

