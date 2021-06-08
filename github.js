class Github {
    constructor(){
        this.client_id = '42a76ecd8f87d8fc1fc4';
        this.client_secret = 'd1a26c7bcc64fd9c738e705edd24c652c5556440';
    }

    async getUser(user){
        const profileRes = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileRes.json();

        return {
            profile
        }
    }
}