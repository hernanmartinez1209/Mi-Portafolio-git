const form = document.getElementById('form');

form.addEventListener('submit', function(e){
       e.preventDefault()
       
       const URL_BASE = "https://formsubmit.co/ajax/hernanconce011228@hotmail.com"
  
      
      const input = e.currentTarget.elements;

    const dataForm ={
        name: input.name.value,
        email: input.email.value,
        message: input.message.value 

    }

    window.fetch(URL_BASE, {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(dataForm )
})
    alert('enviado correctamente')
    console.log(dataForm)
    e.currentTarget.reset()
    })