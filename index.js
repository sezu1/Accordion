const accordion = document.querySelectorAll('.accordion');


accordion.forEach((el) => {
        el.addEventListener('click', function (){
          let hiddenTextEl = el.nextElementSibling;
          // console.log(el);//buttons accordion
          // console.log(hiddenTextEl);//kajdyi text p po ocheredi
   if (hiddenTextEl.classList.contains('hiddenText')){
    hiddenTextEl.classList.toggle('showText');
   }    
  })
})
      
      

