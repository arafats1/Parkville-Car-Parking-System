

const fastFocus = () =>{
    // focus means that you put the cusor on the field you want to focus on
    let userid = document.register.firstname.focus();
    return true
};

// errors
const firstname_error = document.getElementById('fName');
const lastname_error = document.getElementById('lName');
const email_error = document.getElementById('email2');
const password_error = document.getElementById('pwd');
const confirmpassword_error = document.getElementById('pwdd');



// validating the firstname
const userN = (max,min) =>{
    let userN = document.register.firstname;
    var userLen = userN.value.length;
    // if is the function calling the alert and length is wrong giv us
    if(userLen == 0 || userLen >= min || userLen < max ){
        // alert('user id shouldnt be empty/length should be between'+ max +'to'+ min)
        firstname_error.textContent ='Firstname must be 4 to 10 characters'
        firstname.style.border ='1px solid red'
        firstname.focus();
        return false
      
    }
    // if its correct send us to the pass word line 
    document.register.lastname.focus()
    firstname_error.innerHTML = '';
    firstname.style.border ='1px solid green'
    return true
}

// validating the lastname
const usern = (max,min) =>{
    let usern = document.register.lastname;
    var userLen = usern.value.length;
    // if is the function calling the alert and length is wrong giv us
    if(userLen == 0 || userLen >= min || userLen < max ){
        // alert('user id shouldnt be empty/length should be between'+ max +'to'+ min)
        lastname_error.textContent ='Firstname must be 4 to 10 characters'
        lastname.style.border ='1px solid red'
        lastname.focus();
        return false
      
    }
    // if its correct send us to the pass word line 
    document.register.email.focus()
    lastname_error.innerHTML = '';
    lastname.style.border ='1px solid green'
    return true
}

// validating email
const userE = () => {
    let userE = document.register.email
    let emailexp = "^(.+)@(.+)$"
    if(userE.value.match(emailexp)){
        document.register.password.focus()
        email_error.innerHTML = '';
        email.style.border ='1px solid green'
        return true
    }
    else {
        // if it is wrong
        // alert('email invalid')
        email.style.border ='1px solid red'
        email_error.textContent ='Email must have @'
        email.focus()
        return false
    }
}

// validating the password 
const passW = (max,min) =>{
    let passid = document.register.password;
    var passLen = passid.value.length;
    // if is the function calling the alert and length is wrong giv us
    if(passLen == 0 || passLen >= min || passLen < max ){
        password.style.border ='1px solid red'
        password_error.textContent ='must be between 8-12'
        password.focus()
        return false;
        
    }
    // if its correct send us to the pass word line 
    document.register.confirmpassword.focus()
    password_error.innerHTML = '';
    password.style.border ='1px solid green'
    return true
}
// confirmpassword
const passC = () =>{
    let passid = document.register.password.value;
    let passCom = document.register.confirmpassword.value;
    console.log('password and confirm password',passCom, passid)
    if (passid != passCom) {
        confirmpassword.style.border ='1px solid red'
        confirmpassword_error.textContent ='passwords dont match'
        confirmpassword.focus()
        return false;
    }
     else {
        confirmpassword_error.innerHTML = '';
        confirmpassword.style.border ='1px solid green'
        return true
    }
}







const validateRegister = () => {
    var firstName = document.getElementById('firstname');
    var lastName = document.getElementById('lastname');
    var ninNumber = document.getElementById('usernin');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmpassword');
    var phoneNumber = document.getElementById('phonenumber');

   
    var firstNameError = document.getElementById('firstNameError');
    var lastNameError = document.getElementById('lastNameError');
    var emailError = document.getElementById('emailError');
    var userNinError = document.getElementById('userNinError');
    var passwordError = document.getElementById('passwordError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');
    var phoneNumberError = document.getElementById('phoneNumberError');

    

    //We are going to use regular expressions(regex)
    
    if(firstName.value == ''){
        firstName.style.border = '1px solid red';
        firstNameError.innerHTML = 'Please provide your first name';
        firstNameError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
        return false;

    }else{
        const firstNameRegex = /^[A-Z][a-z]*$/;
        if(firstNameRegex.test(firstName.value)== false){
            firstName.style.border = '1px solid red';
            firstNameError.innerHTML = 'Please start with capital letter';
            firstNameError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
            return false;

        }else{
            const firstNameRegexLength = /^[A-Z][a-z]{5,10}$/;
            if(firstNameRegexLength.test(firstName.value)=== false){
                firstName.style.border = '1px solid red';
                firstNameError.innerHTML = 'First name should be 5-10 characters';
                firstNameError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
                return false;
    
            }


        }
    }



    if(email.value == ''){
        email.style.border = '1px solid red';
        emailError.innerHTML = 'Please provide your email';
        emailError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
        return false;

    }else {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        ;
        if(emailRegex.test(email.value)== false){
            email.style.border = '1px solid red';
            emailError.innerHTML = 'Provide a valid email';
            emailError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
            return false;
        }
        
    }


}

