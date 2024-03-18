const screen = {
	renderProfile(username) {
		return `
        <div class="info">
            <img src="${username.avatar_url}" alt="Avatar do usuário ${
			username.name
		}">
            <div class="user-data">
                <h1>${username.name}</h1>
                <small>${username.login}</small>
                <p>${username.bio ?? " "}</p>
            </div>
        </div>
        <div class="others">
            <div class="follow">Following: ${username.following}</div>
            <div class="followers">Followers: ${username.followers}</div>
        </div>
        `;
	},
	renderRepositories(repositories) {
		const repos = repositories
			.map(
				(repository) => `
                            <li class="repo">        
                                <a href="${repository.html_url}" target="_blank" rel="noopener noreferrer">${repository.name}</a>
                            </li>        
        `
			)
			.join("");
		return `
                <h3>Repositórios</h3>
                <ul>
                    ${repos}
                </ul>`;
	},
};
export { screen };
