const screen = {
	renderProfile(username) {
		console.log(`Renderizando usuário ${JSON.stringify(username)}`);
		return `
        <div class="info">
            <img src="${username.avatar_url}" alt="Avatar do usuário ${
			username.name
		}">
            <div class="userData">
                <h1>${username.name}</h1>
                <p>${username.bio ?? " "}</p>
            </div>
        </div>
        `;
	},
	renderRepositories(repositories) {
		console.log(`Renderizando Repositórios ${JSON.stringify(repositories)}`);
		const repos = repositories.map(
			(repository) => `
                            <li>        
                                <a href="${repository.html_url}" target="_blank" rel="noopener noreferrer">${repository.name}</a>
                            </li>        
        `
		).join("");
		return `<ul>
                    ${repos}
                </ul>`;
	},
};
export { screen };
