

    
    var inputName = document.getElementById("name");
    var inputEmail= document.getElementById("email");
    var inputPhone = document.getElementById("phone");
    var inputDate = document.getElementById("date");

document.getElementById('button').addEventListener('click', function(e){
 e.preventDefault();
  if(inputName.value.length <= 0 || inputName.value.length <= 2){
    alert("You did not fill the field or i has less than 2 symbols");
    inputName.focus();
    return false;
    }

    if(inputEmail.value.length <= 0){
      alert("Email is required");
      inputEmail.focus();
      return false;
  }


    if(inputPhone.value.length <= 0){
      alert("Phone is required");
      inputPhone.focus();
      return false;
  }


  if(inputDate.value.length <=0){
      alert("Date is required");
      inputDate.focus();
      return false;
  }

  
  if(inputDate.value.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)){
    
    inputDate.focus();
    return true;
  }else{

    alert("Please enter date DD/MM/YYYY, DD-MM-YYYY in this format");
    inputDate.focus();
    return false;
  }


  
});
