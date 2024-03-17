const screen = {
	renderProfile(username) {
		// console.log(`Renderizando usuário ${JSON.stringify(username)}`);
		return `
        <div class="info">
            <img src="${username.avatar_url}" alt="Avatar do usuário ${
			username.name
		}">
            <div class="user-data">
                <h1>${username.name}</h1>
                <p>${username.bio ?? " "}</p>
            </div>
        </div>
        `;
	},
	renderRepositories(repositories) {
		// console.log(`Renderizando Repositórios ${JSON.stringify(repositories)}`);
		const repos = repositories.map(
			(repository) => `
                            <li class="repo">        
                                <a href="${repository.html_url}" target="_blank" rel="noopener noreferrer">${repository.name}</a>
                            </li>        
        `
		).join("");
        return `
                <h3>Repositórios</h3>
                <ul>
                    ${repos}
                </ul>`;
	},
};
export { screen };
