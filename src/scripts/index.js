import { screen } from "./screen.js";
const htmlUserDetails = document.getElementById("user-detail");
const htmlProfile = document.getElementById("profile");
const htmlRepositories = document.getElementById("repositories");
const btnSearch = document.getElementById("button-search");
const baseUrl = "https://api.github.com/users/";
const searchBar = document.getElementById("search-bar");

btnSearch.addEventListener("click", (e) => {
	const searchBar = document.getElementById("search-bar");
	const username = searchBar.value.trim();
	searchUser(username);
});

searchBar.addEventListener("keyup", (event) => {
	const username = event.target.value;
	const key = event.key;
	const isKeyEnterPressed = key === "Enter";
	if (isKeyEnterPressed) searchUser(username);
});

async function getUser(username) {
	const response = await fetch(`${baseUrl}${username}`);
	const data = await response.json();
	return data;
}
async function getRepos(username) {
	const response = await fetch(`${baseUrl}${username}/repos`);
	const data = await response.json();
	return data;
}

async function renderUser(username) {
	const user = await getUser(username);
	if (user.message === "Not Found") {
		const notfound = {
			name: "User not found",
			bio: "",
			avatar_url: "./src/img/notfound.jpg",
		};
		htmlUserDetails.classList.add("populated");
		htmlProfile.innerHTML = screen.renderProfile(notfound);
		htmlRepositories.innerHTML = "";
		htmlRepositories.style.display = "none";
		return;
	}
	htmlUserDetails.classList.add("populated");
	htmlProfile.innerHTML = "";
	htmlProfile.innerHTML = screen.renderProfile(user);
	const repos = await getRepos(username);
	htmlRepositories.innerHTML = "";
	if (repos.length > 0) {
		htmlRepositories.innerHTML = screen.renderRepositories(repos);
		htmlRepositories.style.display = "flex";
	} else {
		htmlRepositories.style.display = "none";
	}
}

async function searchUser(username) {
	try {
		renderUser(username);
	} catch (err) {
		console.log(err);
	}
}
