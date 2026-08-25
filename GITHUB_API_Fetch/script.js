let myInput = document.getElementById("usernameInput");
let myButton = document.getElementById("fetchBtn");
let dataBox = document.getElementById("userData");
let loadingMsg = document.getElementById("loadingText");
let errorMsg = document.getElementById("errorText");
myButton.addEventListener("click", function () {
    let nameToSearch = myInput.value;
    if (nameToSearch === "") {
        alert("Please enter a name first!");
        return;
    }
    dataBox.style.display = "none";
    errorMsg.style.display = "none";
    loadingMsg.style.display = "block";
    let apiUrl = "https://api.github.com/users/" + nameToSearch;
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok === false) {
                throw new Error("User not found");
            }
            return response.json();
        })
        .then(function (data) {
            loadingMsg.style.display = "none";
            dataBox.style.display = "block";
            document.getElementById("profilePic").src = data.avatar_url;
            if (data.name) {
                document.getElementById("fullName").innerText = data.name;
            } else {
                document.getElementById("fullName").innerText = data.login;
            }
            if (data.bio) {
                document.getElementById("userBio").innerText = data.bio;
            } else {
                document.getElementById("userBio").innerText = "No bio available";
            }
            document.getElementById("repoCount").innerText = data.public_repos;
            document.getElementById("followerCount").innerText = data.followers;
            
            document.getElementById("profileLink").href = data.html_url;
        })
});