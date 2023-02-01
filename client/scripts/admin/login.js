document.querySelector('form').addEventListener('submit', loginAdmin);

function loginAdmin(e) {
	e.preventDefault();
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;
	console.log(email, password);
    if(email === "admin@gmail.com" && password === "masai"){
        alert('login successfull');
        window.location.href = '../../html/admin/dashboard.html'
    }else{
        alert('wrong credentials')
    }
}
