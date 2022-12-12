//Question 5
 function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "osimeon313@gmail.com" && password == "simeon1234"){
        alert ("Login Successfully");   
        window.location = "index.html";
    }
    else{
        alert("Incorrect username / password.");
        window.location = "login.html";
    }
}


