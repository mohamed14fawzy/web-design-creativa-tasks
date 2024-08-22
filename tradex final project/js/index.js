$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:2,
        margin:10,
        nav:true,
        navText:['<i class="fa-solid fa-arrow-left text-white fs-5 bg-primary rounded-start-5 px-3 me-3"></i> ','<i class="fa-solid fa-arrow-right text-black fs-5 text-white bg-primary rounded-end-5 px-3"></i>']
        
    });
  });



 //the fixed arrow up bottom//
  let scrollBtn = document.getElementById("scroll")

  window.addEventListener('scroll' , ()=>{
    if(document.documentElement.scrollTop > 100) { scrollBtn.style.display = 'block';}

else {scrollBtn.style.display = 'none'}


    }


)




///counter method(not completed)//

document.addEventListener("scroll", function () {


  
       let counterSection = document.querySelector('.counter-section');
    


    
});


function startCounter(id, target) {
      let count = 0;

    let counter1 = document.getElementById('counter-1');
    let counter2 = document.getElementById('counter-2');
    let counter3 = document.getElementById('counter-3');
    let counter4 = document.getElementById('counter-4');

    var interval = setInterval(() => {
        
           count++;

        counter1.textContent = count;
        counter2.textContent = count;
        counter3.textContent = count;
        counter4.textContent = count;

        if (count === target) {



            clearInterval(interval);
        }
    }, 200); 
}

