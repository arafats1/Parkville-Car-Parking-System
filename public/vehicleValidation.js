const vehicleform = () => {

    //Capturing the input fiends for the vehicle registration form
    const vehicletype  = document.getElementById('vehicletype')
    const numberplate = document.getElementById('numberplate')
    const carmodel  = document.getElementById('carmodel')
    const color = document.getElementById('carcolor')
    const drivername = document.getElementById('drivername')
    const drivernin = document.getElementById('drivernin')
    const phonenumber = document.getElementById('phonenumber')
    const entrydate = document.getElementById('entryDate')
    const entrytime = document.getElementById('entryTime')
    const period = document.getElementById('period')   
    const amount = document.getElementById('amount') 
    

    //Capturing the message field for the errors
    const vehicletypeError  = document.getElementById('vehicletypeError')
    const numberplateError = document.getElementById('numberplateError');
    const carmodelError  = document.getElementById('carmodelError');
    const colorError = document.getElementById('carcolorError');
    const drivernameError = document.getElementById('drivernameError')
    const driverninError = document.getElementById('driverninError');
    const phonenumberError = document.getElementById('phonenumberError');
    const entrydateError = document.getElementById('entrydateError')
    const entrytimeError = document.getElementById('entrytimeError');
    const periodError = document.getElementById('periodError');
    const amountError = document.getElementById('amountError') 

   


    //Vehicle type field validation
    if(vehicletype.value == "Default"){
        vehicletype.style.border = "1px solid red"
        vehicletypeError.textContent = "Select Vehicle Type"
        vehicletypeError.style = "color: red"
        return false
    }else{
        vehicletype.style.border = "1px solid green"
        vehicletypeError.textContent = ""
    }


    //Car Number plate validation
    if(numberplate.value == ''){
        numberplate.style.border = '1px solid red';
        numberplateError.innerHTML = 'Enter number plate';
        numberplateError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
        return false;

    }else{
        const numberplateRegex = /^[U][A-Z]{2} [0-9A-Z]{2}$/; // Number plate starts with U followed by two capital letters and 4 alphanumeric characters
        if(numberplateRegex.test(numberplate.value)== false){
            numberplate.style.border = '1px solid red';
            numberplateError.innerHTML = 'Enter correct number plate';
            numberplateError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
            return false;

        }else{
            numberplate.style.border = "1px solid green"
            numberplateError.textContent  = ""
    
            }
        }


    //Car model validation
     if(carmodel.value == ""){
        carmodel.style.border = "1px solid red"
        carmodelError.textContent = "Enter car model"
        carmodelError.style = "color: red"
        return false

    }else{
        carmodel.style.border = "1px solid green"
        carmodelError.textContent = ""
    };


    //Car color validation
     if(color.value == ""){
        color.style.border = "1px solid red"
        colorError.textContent = "Enter car color"
        colorError.style = "color: red"
        return false
    }else{
        color.style.border = "1px solid green"
        colorError.textContent  = ""
    };


    //Driver name validation
    if(drivername.value == ''){
        drivername.style.border = '1px solid red';
        drivernameError.innerHTML = 'Enter driver name';
        drivernameError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
        return false;

    }else{
        const drivernameRegex = /^[A-Z][ A-Za-z]{2,20}$/; // Name starts witha capital letter
        if(drivernameRegex.test(drivername.value)== false){
            drivername.style.border = '1px solid red';
            drivernameError.innerHTML = 'Start drivername with capital letter';
            drivernameError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
            return false;

        }else{
            drivername.style.border = "1px solid green"
            drivernameError.textContent  = ""
    
            }
        }


    //NIN Validation
    if(drivernin.value == ''){
        drivernin.style.border = '1px solid red';
        driverninError.innerHTML = 'Enter your NIN number';
        driverninError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
        return false;

    }else{
        const ninRegex = /^[C][A-Z]{1}[0-9A-Z]{12}$/; // NIN should be 13 alphanumric characters and starting with two Capital letters
        if(ninRegex.test(drivernin.value)== false){
            drivernin.style.border = '1px solid red';
            driverninError.innerHTML = 'Enter correct NIN number';
            driverninError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
            return false;

        }else{
            drivernin.style.border = "1px solid green"
            driverninError.textContent  = ""
    
            }
        }

     //Ugandan Phone number validation
    if(phonenumber.value == ''){
        phonenumber.style.border = '1px solid red';
        phonenumberError.innerHTML = 'Enter driver phone number';
        phonenumberError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
        return false;

    }else{
        
        const phonenumberRegex = /^[2][5][6][0-9]{9}$/;
        if(phonenumberRegex.test(phonenumber.value)== false){
            phonenumber.style.border = '1px solid red';
            phonenumberError.innerHTML = 'Enter valid Ugandan number';
            phonenumberError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
            return false;

        }else{
            phonenumber.style.border = "1px solid green"
            phonenumberError.textContent  = ""
    
            }
        }
    
   
        //Date validation
    if(entrydate.value == ""){
        entrydate.style.border = "1px solid red"
        entrydateError.textContent = "Enter Date"
        entrydateError.style = "color: red"
        return false

    }else{
        entrydate.style.border = "1px solid green"
        entrydateError.textContent = ""
    };


    //Entry time validation
    if(entrytime.value == ""){
        entrytime.style.border = "1px solid red"
        entrytime.textContent = "Enter Time"
        entrytimeError.style = "color: red"
        return false

    }else{
        entrytime.style.border = "1px solid green"
        entrytimeError.textContent = ""
    };


    //Entry Period Validation
    if(period.value == "Default"){
        period.style.border = "1px solid red"
        periodError.textContent = "Enter Period of parking"
        periodError.style = "color: red"
        return false

    }else{
        period.style.border = "1px solid green"
        periodError.textContent = ""
    };

    //Amount Validation
    if(amount.value == "Default"){
        amount.style.border = "1px solid red"
        amountError.textContent = "Enter Amount"
        amountError.style = "color: red"
        return false

    }else{
        amount.style.border = "1px solid green"
        amountError.textContent = ""
    };
    
}