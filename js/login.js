//login

 document.getElementById('login-submit').addEventListener('click', function(){
    const emailField=document.getElementById('user-email').value;
    const userPass=document.getElementById('user-password').value;
    if(emailField=='fa@gmail.com' && userPass=='secret'){
//console.log("Valid user")
window.location.href='banking.html'
    }
    else{
    console.log('invalid')
    }
})