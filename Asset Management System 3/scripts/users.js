const addUserButton = () => {
	console.log('addUserButton');

	const addUserDiv = document.getElementById('addUserModal');

	addUserDiv.style.display = 'block';
	document.body.style.marginBottom = '0px';
};

const backButton = () => {
	console.log('backButton');

	const addUserDiv = document.getElementById('addUserModal');

	addUserDiv.style.display = 'none';
	document.body.style.marginBottom = '130px';
};
