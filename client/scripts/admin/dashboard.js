document.querySelector('form').addEventListener('submit', submitData);

function submitData(e) {
	e.preventDefault();
	let url = document.getElementById('url').value;
	let name = document.getElementById('name').value;
	let author = document.getElementById('author').value;
	let gener = document.getElementById('gener').value;
	let edition = document.getElementById('edition').value;
	let publisher = document.getElementById('publisher').value;
	let cost = document.getElementById('cost').value;
	let data = {
		image_url: url,
		book_name: name,
		author: author,
		genre: gener,
		edition: edition,
		publisher: publisher,
		cost: cost,
		borrowed: false,
	};
	console.log(data);
	postData(data);
}

function postData(data) {
	fetch('https://mock-server-new.onrender.com/books', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify(data),
	})
		.then(() => {
			fetchData();
		})
		.catch((err) => console.log(err));
}

function fetchData() {
	fetch('https://mock-server-new.onrender.com/books')
		.then((res) => res.json())
		.then((res) => console.log(res))
		.catch((err) => console.log(err));
}
fetchData();
