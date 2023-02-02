document.querySelector('#form1').addEventListener('submit', submitData);
let editId = null;
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

window.onload = fetchData();

function fetchData() {
	fetch('https://mock-server-new.onrender.com/books')
		.then((res) => res.json())
		.then((res) => {
			console.log(res);
			displayResult(res);
			document.getElementById('submit').removeAttribute('disabled')
			document.querySelector('#form2').style.display = 'none';
			document.querySelector('.black_overlay ').style.display = 'none';
		})
		.catch((err) => console.log(err));
}

function displayResult(data) {
	document.querySelector('tbody').innerHTML = null;
	data.map((el) => {
		let tr = document.createElement('tr');

		let image = document.createElement('img');
		image.src = el.image_url;
		let imageTd = document.createElement('td');
		imageTd.append(image);
		let name = document.createElement('td');
		name.textContent = el.book_name;
		let author = document.createElement('td');
		author.textContent = el.author;
		let genre = document.createElement('td');
		genre.textContent = el.genre;
		let edition = document.createElement('td');
		edition.textContent = el.edition;
		let publisher = document.createElement('td');
		publisher.textContent = el.publisher;
		let cost = document.createElement('td');
		cost.textContent = el.cost;
		let edit = document.createElement('button');
		let editTd = document.createElement('td');
		edit.textContent = 'Edit';
		edit.setAttribute('id', 'editButton');
		edit.addEventListener('click', function () {
			editData(el);
		});
		editTd.append(edit);
		let del = document.createElement('button');
		let delTd = document.createElement('td');
		del.textContent = 'Delete';
		del.addEventListener('click', () => {
			deleteItem(el.id);
		});
		delTd.append(del);
		tr.append(
			imageTd,
			name,
			author,
			genre,
			edition,
			publisher,
			cost,
			editTd,
			delTd,
		);

		document.querySelector('tbody').append(tr);
	});
}

function deleteItem(id) {
	fetch(`https://mock-server-new.onrender.com/books/${id}`, {
		method: 'DELETE',
	}).then(() => {
		fetchData();
	});
}

function editData(el) {
	window.scrollTo(0, 0);
	document.getElementById('url1').value = el.image_url;
	document.getElementById('name1').value = el.book_name;
	document.getElementById('author1').value = el.author;
	document.getElementById('gener1').value = el.genre;
	document.getElementById('edition1').value = el.edition;
	document.getElementById('publisher1').value = el.publisher;
	document.getElementById('cost1').value = el.cost;
	document.querySelector('#form2').style.display = 'block';
	document.querySelector('.black_overlay ').style.display = 'block';
	editId = el.id
}

document.querySelector('#form2').addEventListener('submit', function (e) {
	e.preventDefault();
	document.getElementById('submit').setAttribute('disabled', 'disabled');
	let url = document.getElementById('url1').value;
	let name = document.getElementById('name1').value;
	let author = document.getElementById('author1').value;
	let gener = document.getElementById('gener1').value;
	let edition = document.getElementById('edition1').value;
	let publisher = document.getElementById('publisher1').value;
	let cost = document.getElementById('cost1').value;
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
	patchData(data,editId)
});

function patchData(data, id) {
	console.log('patchdata', id);
	fetch(`https://mock-server-new.onrender.com/books/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(data),
	}).then(() => {
		fetchData();
	});
}
