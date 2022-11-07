    var fields = {};
   document.addEventListener("DOMContentLoaded", function() {
    fields.firstName = document.getElementById('firstName');
    fields.lastName = document.getElementById('lastName');
    fields.email = document.getElementById('email');
    fields.resume = document.getElementById('resume');
    fields.question = document.getElementById('question');
   })
   function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }
   function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
   }
   function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }
 
   function fieldValidation(field, validationFunction) {
   // alert("field passed into function " + field)
    if (field == null) return false;
    //alert("validation field is not null")
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }
   function isValid() {
    //alert("in isvalid function")
    var valid = true;
    
    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.question, isNotEmpty);
   
    //alert("leaving function isvalid value" + valid)
    return valid;
   }

   class User {
    constructor(firstName, lastName, email, resume, question) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.resume = resume;
    this.question = question;
    }
   }

   function sendContact(){
   
    if (isValid()){
        
       //let usr = new User(firstName.value, lastName.value, email.value, resume.checked, question.value);
        //alert("in send contact function is true")
            alert("Thanks for contacting me!")
        }
        else{
            alert("There was an error")
        } 
   }