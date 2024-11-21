module.exports = {
	prompt: [
		{
			name: "projectName",
			message: "What is your project's name? ",
			default: "project",
		},
	],
	actions: [
		{
			type: "add",
			files: "**",
			transform: (fileContent, data) => {
				return fileContent.replace(/{{projectName}}/g, data.projectName);
			},
		},
	],
};
