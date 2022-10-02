const formEl = document.querySelector('.inputs');

formEl.addEventListener('submit', event =>{
    event.preventDefault();

     const formData = new FormData(formEl);
     const data = Object.fromEntries(formData);

     fetch("https://chess-tournament-api.devtest.ge/api/register",{
        method: 'POST',
        headers: {
            "Content-Type": "aplication/json"
        },
        body: JSON.stringify(data)
     }).then(res => res.json())
     .then(data => console.log(data))
     .catch(console.log(error));
});


