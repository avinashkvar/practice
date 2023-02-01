let users = JSON.parse(localStorage.getItem('users'));

document.querySelector('form').addEventListener('submit',loginUser)

function loginUser(e){
    e.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let flag = false;
    for(let i=0;i<users.length;i++){
        if(users[i].email===email && users[i].password===password){
            flag = true;
            break;
        }
    }
    if(flag){
        alert('login successfull');
        window.location.href = '../../html/user/dashboard.html'
    }else{
        alert('wrong credentials');
    }
}