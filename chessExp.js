const getData = async(e) =>{
    e.preventDefault();
    // console.log(formValues.name);
    try{
        const response = await fetch('https://chess-tournament-api.devtest.ge/api/register',{
            method: 'POST',
            headers:{
                'accept': 'application/json',
                'Content-Type': 'application/json'
        
            },
            body: JSON.stringify({
                "name": formValues.name,
                "email": formValues.email,
                "phone": formValues.phone,
                "date_of_birth": "10/20/1997",
                "experience_level": "begginer",
                "already_participated": true,
                "character_id": 2                    
            })
        });
        console.log(response.statusText)
    }catch(error){
        console.log(error)
    }
}


var button = document.querySelector(".next-button");

button.addEventListener("click", getData);


select = document.getElementById("selectKnowledge"); 
if (select.value) {
  // value is set to a valid option, so submit form
  return true;
}
return false;