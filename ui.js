class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
            <div class="card card-body mb3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-3" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-info btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-primary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-primary">Followers: ${user.followers}</span>
                        <span class="badge badge-primary">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Members Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
  }

  // Show alert msg
  showAlert(message, className) {
    const div = document.createElement("div");
    // Clear remaning alert
    this.clearAlert();
    // Create class
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.querySelector(".searchContainer");
    // Get search box
    const search = document.querySelector(".search");
    // Insert alert
    container.insertBefore(div, search);

    // Alert time out
    setTimeout(() => {
      this.clearAlert();
    }, 2500);
  }

  // clear extra alert msg
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // clear profile
  clearProfile() {
    this.profile.message = "";
  }
}
