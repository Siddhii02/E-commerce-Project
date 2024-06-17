  async function  dynamic(id,filepath){

    let response = await fetch(filepath);
    let html = await response.text();
    document.getElementById(id).innerHTML= html;

}

window.onload = ()=>{
    dynamic("header","header.html")
    dynamic("footer","footer.html")
}

// login
let login = document.querySelector("#login")
login.onclick = function(){
let email = document.querySelector("#input1").value;
let password = parseInt(document.querySelector("#input2").value);
if(!email && !password){
    alert("please fill all the field")
}else if(email === "admin@admin.com" && Number(password) === 123456  ){
    alert("Login Successfull")
}else{
    alert("Incorrect email or password")
}
}