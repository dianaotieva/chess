// const getData = async(e) =>{
//     e.preventDefault();
//     console.log(formValues.name);
//     try{
//         const response = await fetch('https://chess-tournament-api.devtest.ge/api/register',{
//             method: 'POST',
//             headers:{
//                 'accept': 'application/json',
//                 'Content-Type': 'application/json'
        
//             },
//             body: JSON.stringify({
//                 "name": formValues.name,
//                 "email": formValues.email,
//                 "phone": formValues.phone,
//                 "date_of_birth": "10/20/1997",
//                 "experience_level": "begginer",
//                 "already_participated": true,
//                 "character_id": 2                    
//             })
//         });
//         console.log(response.statusText)
//     }catch(error){
//         console.log(error)
//     }
// }


let inputs = document.getElementById("inputs");

inputs.addEventListener("submit", async (e)=>{
    e.preventDefault();

    let form = e.currentTarget;

    let url = form.action;

    try {
        let formFields = new FormData(form);

        let responseData = await postFormFieldsAsJson({url,FormData});

        let{serverDataResponse} = responseData;

        console.log(serverDataResponse);
    }catch (error){
        console.error(error);
    }
});

