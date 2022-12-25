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

    alert('Command is being processed')
  });

  create()
}

function create(){
const input = document.querySelector('form')
input.addEventListener('submit', (e)=>{
  e.preventDefault();
  let fullname = document.querySelector('#new_input').value
  let age = document.querySelector('#new_age').value
  let nextofkin = document.querySelector('#new_kin').value
  let phonenumber = document.querySelector('#new_number').value

  const obj = {
    fullname: fullname,
    age: age,
    nextofkin: nextofkin,
    phonenumber: phonenumber
  }


  fetch('http://localhost:3000/partients', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((res)=>{
    return res.json()
  })
  .then((data)=>{
    console.log(data)
  })

})

}



document.addEventListener('DOMContentLoaded', main);