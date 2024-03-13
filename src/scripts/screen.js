const screen = {
    renderProfile(username) {
        // console.log(username);
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
	renderRepositories(repositorie) {
		``;
	},
};
export { screen };
