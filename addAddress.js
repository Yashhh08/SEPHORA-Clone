var col = JSON.parse(localStorage.getItem('address')) || [];
document.querySelector('#save').addEventListener('click',(el)=>{
    el.preventDefault();
    var form = document.querySelector('#col');
    var obj={
        Name:form.Name.value,
        Address:form.House.value,
        Phone:form.Phone.value,
        AlternativeNumber:form.Alternate.value,
        Pincode:form.Pincode.value,
        Landmark:form.Landmark.value
    };

    col.push(obj)
    console.log(col)
    localStorage.setItem("address",JSON.stringify(col))
    alert('Sign Up Successfull')
    window.location.href="homepage.html"
});




