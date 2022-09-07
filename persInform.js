function validation(){
    
    var name = document.reg_form.name;
    var email = document.reg_form.email;
    var phone = document.reg_form.phone;
    var date = document.reg_form.date;
    
    
    var inputName = document.getElementById("name");
    var inputEmail= document.getElementById("email");
    var inputPhone = document.getElementById("phone");
    var inputDate = document.getElementById("date");
    


    ////Validation
    if(name.value.length <= 0){
        alert("Name is required");
        name.focus();
        return false;
    }
    if (name.value.length <= 2) {  
        alert("Name should have at least 2 symbols");  
        name.focus();  
        return false; 
    }


   

    if(email.value.length <= 0){
        alert("Email is required");
        email.focus();
        return false;
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email format!")
    return (false);

    
    if(phone.value.length <= 0){
        alert("Phone is required");
        phone.focus();
        return false;
    }


   
      if(phone.value.length < 9)
      {
      alert('Please input numeric characters only');
      phone.focus();
      return false;
      }

      if(date.value.length <=0){
        alert("Date is required");
        date.focus();
        return false;
    }


    /////Store data to storage

    var inputName= document.getElementById("name");
     localStorage.setItem("name", inputName.value);

     var inputEmail= document.getElementById("email");
     localStorage.setItem("email", inputEmail.value);

     var inputPhone= document.getElementById("phone");
     localStorage.setItem("phone", inputPhone.value);

     var inputDate= document.getElementById("date");
     localStorage.setItem("date", inputDate.value);

     

   
}


