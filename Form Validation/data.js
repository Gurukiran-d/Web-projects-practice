
    var arrFirstname = new Array();
    var arrLastname = new Array();
    var arrDob = new Array();
    var arrPassword = new Array();
    var arrcfPassword = new Array();
    var arrEmail = new Array();
    var arrphone = new Array();
    
    var checkUpper = /[A-Z]+/.test(password),
    checkLower = /[a-z]+/.test(password),
    checkNumber= /[0-9]+/.test(password); 

function saveForm(){
    var firstname = document.getElementById('fname').value;
    var lastname = document.forms["MyForms"]["lname"].value;
    var email = document.forms["MyForms"]["email"].value;
    var password = document.forms["MyForms"]["password"].value;
    var cfpassword = document.forms["MyForms"]["cfpassword"].value;
    var phonenumber = document.forms["MyForms"]["phno"].value;
    var dob = document.forms["MyForms"]["dob"].value;
    var checkUpper = /[A-Z]+/.test(password),
    checkLower = /[a-z]+/.test(password),
    checkNumber= /[0-9]+/.test(password); 

    arrFirstname[arrFirstname.length]=firstname;
    arrLastname[arrLastname.length] = lastname;
    arrPassword[arrPassword.length] = password;
    arrcfPassword[arrcfPassword.length] = cfpassword;
    arrEmail[arrEmail.length] = email;
    arrphone[arrphone.length] = phonenumber;

    if(firstname == ""){
        alert("kindly fill first name");
        return false;
    }

    var currentDate = new Date();
    var selectedDate = new Date(dob);
    
    if(selectedDate > currentDate){
        alert("invalid Date of birth - Date of birth cannot be greater than today's date");
        return false;
    }

    if(phonenumber==""){
        alert("Please enter the Phone number");
        return false;
    }
    
    if(password==""){
            alert("Password is mandatory.");
            return false;
    }

    if (password !== cfpassword){
        alert("password doesn't match");
        return false;
    }
    if(phonenumber.length < 10 || phonenumber.length > 10){
        alert("phone number must be 10 digit");
        return false;
    }

    if(password.length<3){
        alert("Password is very weak");
        return false;
    }


    if(password.length<= 5){
        alert("password is weak - must be b/w 5-15 characters");
        return false;
    }

    if(password.length >= 16){
        alert("password cannot be more than 15 characters");
        return false;
    }

    if(password.includes("%")|| password.includes("#") || password.includes("$") 
    || password.includes("@") || password.includes("*") || checkUpper && checkLower && checkNumber){
        displayData(dob);
        
        return true;

    }
    else{
      alert("Password doesn't meet requirements");
      return false;
    }
    
}   

function displayData(dob)
{
    document.getElementById("outputheading").innerHTML="Here are the details entered by You :";
    
    var inputFirstname=" <br> First Name :"+[arrFirstname]+"</br>";
    document.getElementById('firstnameoutput').innerHTML = inputFirstname;
    [arrFirstname.every]="";

    var inputLastname="<br>Last name :"+[arrLastname]+"</br>";
    document.getElementById('lastnameoutput').innerHTML = inputLastname;

    var inputEmail="<br>Email :"+[arrEmail]+"</br>";
    document.getElementById('emailoutput').innerHTML = inputEmail;
    
    var inputphno="<br>Phone No : "+[arrphone]+"</br>";
    document.getElementById('phnooutput').innerHTML = inputphno;

    var inputdob="<br>Date of Birth :"+dob+"</br>";
    document.getElementById('doboutput').innerHTML = inputdob;
    
    document.getElementById('passwordoutput').innerHTML ="<br>Password has been set";  
    
    
}  
