import { screen } from "./screen.js";
const htmlProfile = document.getElementById("profile");
const htmlRepositories = document.getElementById("repositories");
const baseUrl = "https://api.github.com/users/";

async function getUser(username) {
	console.log(`Função getUser com usuário: ${username}`);
	const response = await fetch(`${baseUrl}${username}`);
	const data = await response.json();
	return data;
}
async function getRepos(username) {
	console.log(`Função getRepos com usuário: ${username}`);
	const response = await fetch(`${baseUrl}${username}/repos`);
    const data = await response.json();
	return data;
}

async function renderUser(username) {
	console.log(`Função renderUser com usuário: ${username}`);
	const user = await getUser(username);
	htmlProfile.innerHTML = screen.renderProfile(user);
	const repos = await getRepos(username);
	htmlRepositories.innerHTML = screen.renderRepositories(repos);
}

renderUser("github");