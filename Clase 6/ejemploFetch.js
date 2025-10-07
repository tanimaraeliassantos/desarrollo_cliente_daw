fetch('https://jsonplaceholder.typicode.com/users')
	.then((response) => response.json())
	.then((users) => {
		console.log(users);
		users.forEach((user) => {
			console.log(user.name);
		});
	});
