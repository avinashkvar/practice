fetch('https://mock-server-new.onrender.com/books')
	.then((res) => res.json())
	.then((res) => {
		console.log(res);
		displayIt(res);
	});
let borrowId = null;
function displayIt(data) {
	document.getElementById('container').innerHTML = null;
	data.map((el) => {
		let div = document.createElement('div');
		let div1 = document.createElement('div');
		let div2 = document.createElement('div');

		let image = document.createElement('img');
		image.src = el.image_url;

		div1.append(image);

		let name = document.createElement('h2');
		name.textContent = el.book_name;

		let author = document.createElement('p');
		author.textContent = `Author : ${el.author}`;

		let genre = document.createElement('p');
		genre.textContent = `Genre : ${el.genre}`;

		let edition = document.createElement('p');
		edition.textContent = `Edition : ${el.edition}`;

		let publisher = document.createElement('p');
		publisher.textContent = `Publisher : ${el.publisher}`;

		let cost = document.createElement('p');
		cost.textContent = `Cost : ${el.cost}`;

		let button = document.createElement('button');
		button.textContent = 'Borrow';
		button.addEventListener('click', () => {
			borrowBook(el);
		});
		div2.append(name, author, genre, edition, publisher, cost, button);

		div.append(div1, div2);
		document.getElementById('container').append(div);
	});
}

function borrowBook(el) {
	window.scrollTo(0,0)
	borrowId=el.id;
	document.getElementById('image_url').src = el.image_url;

	document.getElementById('name').textContent = el.book_name;

	document.getElementById('author').textContent = `Author : ${el.author}`;

	document.getElementById('genre').textContent = `Genre : ${el.genre}`;

	document.getElementById('edition').textContent = `Edition : ${el.edition}`;

	document.getElementById(
		'publisher',
	).textContent = `Publisher : ${el.publisher}`;

	document.getElementById('cost').textContent = `Cost : ${el.cost}`;
	document.querySelector('.borrow').style.display = 'block';
	document.querySelector('.black_overlay').style.display = 'block';
}

// document.getElementById('close').addEventListener('click',function(){

// })
function closeTab() {
	document.querySelector('.borrow').style.display = 'none';
	document.querySelector('.black_overlay').style.display = 'none';
}

function buy(){
	console.log("borrowed",borrowId)
	fetch(`https://mock-server-new.onrender.com/books/${borrowId}`, {
		method: 'PATCH',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify({ borrowed :true}),
	}).then(()=>{
		alert('borrowed succefully');
		document.querySelector('.borrow').style.display = 'none';
		document.querySelector('.black_overlay').style.display = 'none';
	})
	
}