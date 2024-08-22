document.getElementById("myForm").addEventListener("submit", function(event) {
    
    event.preventDefault();
  
   
    let name = document.getElementById("name").value;

   let email = document.getElementById("email").value;
   let nameRegex = /^.{7,}$/;
   let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
   
  



   
   
    if (!nameRegex.test(name)) {
       document.getElementById("nameError").textContent = "Name should be atleast 7 chars";



    } else {
      document.getElementById("nameError").textContent = "";
    }
    if (!emailRegex.test(email))
         {
      document.getElementById("emailError").textContent = "incorrect form of email";
      
    } else
     {

      document.getElementById("emailError").textContent = "";
    }
  
   
    
  });
  