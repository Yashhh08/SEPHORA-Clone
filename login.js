
document.querySelector(".login-button").addEventListener("click",function(){
    document.querySelector(".background-body").style.display="flex"
})

document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".background-body").style.display="none"
})
function checkemail(){
    var email=document.getElementById("useremail").value;

    var email1=localStorage.getItem("email").value


    if(email==email1)
    {
        window.location.href="enterPassword.html"
    }
    else if(email!=email1)
    {
        window.location.href="createAccount.html"
    }
}

