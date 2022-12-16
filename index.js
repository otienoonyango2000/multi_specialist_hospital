const main = () => {
    const inputForm = document.querySelector('form')

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('input#searchByID');

    fetch(`http://localhost:3000/partients/${input.value}`)
    .then(response => response.json())
    .then(data => {
      const fullname = document.querySelector('section#movieDetails h4');
      const age = document.querySelector('section#movieDetails p');
      const next = document.querySelector('section#movieDetails p1');
      const phone = document.querySelector('section#movieDetails p2');

      fullname.innerText = data.fullname;
      age.innerText = data.age;
      next.innerHTML = data.nextofkin
      phone.innerHTML = data.phonenumber
    });


    document.querySelector('input#searchByID').addEventListener('submit', handlesubmit)
    function handlesubmit(e){
        e.preventDefault()
        let partientobj = {
            fullname:e.target.name.value
        }
    }


    fetch(`http://localhost:3000/partients/${input.value}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(partientobj)
    })
    .then(res => res.json())
    .then(data => console.log(partient))
  });
}



document.addEventListener('DOMContentLoaded', main);