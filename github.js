class Github {
  constructor() {
    this.client_id = "42a76ecd8f87d8fc1fc4";
    this.client_secret = "d1a26c7bcc64fd9c738e705edd24c652c5556440";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
