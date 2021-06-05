class Github {
    constructor(){
        this.client_id = '42a76ecd8f87d8fc1fc4';
        this.client_secret = '3f17d908726569af7a39b25573ddafde2f0dc954';
    }

    async getUser(user){
        const profileRes = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileRes.json();

        return {
            profile
        }
    }
}