const baseUrl = "https://api.github.com/users/";

async function getUser(username) {
	console.log(`Função getUser com usuário: ${username}`);
	const response = await fetch(`${baseUrl}${username}`);
	const data = await response.json();
	return data;
}


