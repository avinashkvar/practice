let users = JSON.parse(localStorage.getItem('users')) || [];

document.querySelector('form').addEventListener('submit',submitData);

function submitData(e){
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let data = {
        name,
        email,
        password
    }
    console.log(data);
    for(let i=0;i<users.length;i++){
        if(data.email === users[i].email){
            alert('user already exists try to login');
            window.location.href = '../../html/user/signin.html';
            return;
        }
    }
    users.push(data);
    localStorage.setItem('users',JSON.stringify(users));
}