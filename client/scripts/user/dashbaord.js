fetch('https://mock-server-new.onrender.com/books')
	.then((res) => res.json())
	.then((res) => {
		console.log(res);
		displayIt(res);
	});

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
        
        let button = document.createElement('button')
        button.textContent = 'Borrow'
		div2.append(name, author, genre, edition, publisher, cost,button);

		div.append(div1, div2);
		document.getElementById('container').append(div);
	});
}
