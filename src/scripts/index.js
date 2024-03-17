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
	console.log(username);
	if (!(username === "" && username === null && username === undefined)) {
		renderUser(username);
	}
});

searchBar.addEventListener("keyup", (event) => {
	// console.log("tecla pressionada");
	// console.log(event);
	const username = event.target.value;
	const key = event.key;
	const isKeyEnterPressed = key === "Enter";
	if (isKeyEnterPressed) renderUser(username);
});

async function getUser(username) {
	// console.log(`Função getUser com usuário: ${username}`);
	const response = await fetch(`${baseUrl}${username}`);
	const data = await response.json();
	return data;
}
async function getRepos(username) {
	// console.log(`Função getRepos com usuário: ${username}`);
	const response = await fetch(`${baseUrl}${username}/repos`);
	const data = await response.json();
	return data;
}

async function renderUser(username) {
	// console.log(`Função renderUser com usuário: ${username}`);
	const user = await getUser(username);
	if (user.message === "Not Found") {
		htmlProfile.innerHTML = "";
		htmlRepositories.innerHTML = "";
		return;
	}
	const repos = await getRepos(username);
	htmlUserDetails.classList.add("populated");
	htmlProfile.innerHTML = "";
	htmlRepositories.innerHTML = "";
	htmlProfile.innerHTML = screen.renderProfile(user);
	htmlRepositories.innerHTML = screen.renderRepositories(repos);
}

async function searchUser(username) {
	try {
		renderUser(username);
	} catch (err) {
		console.log(err);
	}
}
