

  let btn=document.querySelector("#btnMail");
  let name1=document.querySelector("#Contact_name");
  let email=document.querySelector("#Contact_email");
  let reason=document.querySelector("#Contact_reason");
  let query=document.querySelector("#Contact_line");
  let valueReason=reason.options[reason.selectedIndex].value;


  

 
let message={};

  btn.addEventListener("click",  function(e){
       e.preventDefault();
       console.log("btn clicked");
       if(name1.value && email.value && valueReason && query.value){
          console.log(name1.value);
     

           message.from="amoghsachdeva_ramesh@srmuniv.edu.in";
           message.to=email.value;
           message.subject=reason.value;
           message.text=query.value;
           message.name=name1.value;
       
         
}
 

    console.log(message);

    fetch('http://localhost:3000/sendEmail', {
      method: 'POST',
      body: JSON.stringify({message}),
      headers: {
          'Content-type': 'application/json; charset=UTF-8'
      }
  })
  .then(response => response.json())
  .then(json => {
      console.log(json);
  });
});

    

     
      



