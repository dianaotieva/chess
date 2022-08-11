function validation(){
    
    var name = document.reg_form.name;
    var email = document.reg_form.email;
    var phone = document.reg_form.phone;
    var date = document.reg_form.date;

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

   
}

let keys = Object.keys(localStorage);
for(let key of keys) {
  console.log(`${key}: ${localStorage.getItem(key)}`);
}

