
function showOutput() {
    document.getElementById("output").innerHTML = output;
}f

function clearOutput() {
    document.getElementById("output").innerHTML = " "
}

function getFieldValue(id) {
    return document.getElementById(id).value;
}

function getRandomId() {
    return Math.random().toString(36).slice(2)
}

// let emailValidation =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let emailValidation = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
// console.log(emailValidation.test("abc@gmail.co"))


// function ValidateEmail(mail) 
// {
//  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
//   {
//     return (true)
//   }
//     alert("You have entered an invalid email address!")
//     return (false)
// }

//                                       showNotification

function showNotification(msg, type){

    let bgColor;

    switch (type) {
        case "success" :
            bgColor = "linear-gradient(to right, #1D976C, #93F9B9)"
            break ;
        case "error" :
            bgColor = "linear-gradient(to right, #93291e, #ed213a)"
            break;
        default : 
            bgColor = "#000"

    }

    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "tom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: bgColor,
        },
        onClick: function(){} // Callback after click
      }).showToast();

}


// -----------------------------------------------------------------------------------------------------





function handleSubmit(){

    event.preventDefault();


    let firstName = getFieldValue("firstName");
    let lastName = getFieldValue("lastName");
    let email = getFieldValue("email");
    let dob = getFieldValue("dob")
    

    firstName = firstName.trim();
    lastName = lastName.trim();
    email = email.trim();

    
    let user = {
        firstName,
        lastName,
        email,
        dob,
        calculateAge : function (){
            let dateOfBirth = new Date(dob) ;
            let today = new Date();
            let dateOfBirthTime = dateOfBirth.getTime();
            let todayTime = today.getTime();
            let msDiff = todayTime - dateOfBirthTime ;
            let age = Math.floor(msDiff / (1000 * 60 * 60 * 24 * 365))
            return age ;
        },
    }

    
    // delete user.email
let users = [];

    user.id = getRandomId();
    user.dateCreated = new Date().getTime();
    user.status = "active";
    user.role = "student";
    // console.log(user);
    // console.log(users);

    users.push(user);

    showNotification("A new user has been successfully added", "success")
    
    
    showTable()
    
}


// function addUser(){
//     if(user[firstName].length < 2){
//         showNotification("Your First Name is not correctly", "error")
//         return;
//     }
//     if(lastName.length < 1){
//         showNotification("Your Last Name is not correctly", "error")
//         return;
//     }
//     if(email.length < 2){
//         showNotification("Your Email is not correctly", "error")
//         return;
//     }
//     if(!dob){
//         showNotification("Please enter your Date Of Birth", "error")
//         return;
//     }
// }


function showTable(){

    if(!users.length){
        showNotification("There is no single user available", "error");
        return;
    }

    let tableStartingCode = "<div class='table-responsive'><table class='table'>";
    let tableHead = "<thead><tr><th>#</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Date of Birth</th><th>Age</th>";
    let tableEndingCode = "</table></div>";
    let tableBody = " ";
    for(let i=0; i < users.length; i++){
    tableBody += "<tr><th scope='row'>" + (i+1) + "</th><td>" + users[i].firstName + "</td><td>" + users[i].lastName + "</td><td>" + users[i].email + "</td><td>" + users[i].dob + "</td><td>"  + users[i].calculateAge() + "</td></tr>" ;
        let table = tableStartingCode + tableHead + "<tbody>" + tableBody + "</tbody>" + tableEndingCode ;
        output.innerHTML = table
        // console.log(table)
    }
}

function printUsers(){
    let tableStartingCode = "<div class='table-responsive'><table class='table'>";
    let tableHead = "<thead><tr><th>#</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Date of Birth</th><th>Age</th>";
    let tableEndingCode = "</table></div>";
    let tableBody = " ";
    for(i=0; i < users.length; i++){
    tableBody += "<tr scope='row'><th>" + (i+1) + "</th><td>" + users[i].firstName + "</td><td>" + users[i].lastName + "</td><td>" + users[i].email + "</td><td>" + users[i].dob + "</td><td>"  + users[i].calculateAge() + "</td></tr>" ;
        let table = tableStartingCode + tableHead + "<tbody>" + tableBody + "</tbody>" + tableEndingCode ;
        // document.getElementById("output").innerHTML = table ;
        console.log(table)
    }
}

