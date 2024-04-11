const accordion = document.querySelectorAll('.accordion')
const accordion1 = document.querySelector('#accordion1')
const accordion2 = document.querySelector('#accordion2')
const accordion3 = document.querySelector('#accordion3')

const hiddenText = document.querySelectorAll('.hiddenText')
console.log(hiddenText);


accordion.forEach((elem) => {
    elem.addEventListener('click', function(){
      hiddenText.forEach((el) =>{
        if (el.classList.contains('hiddenText')){
            el.classList.remove('hiddenText')
        }else{
            el.classList.add('hiddenText')
            return;
        }
      })      
    })
})





























    











    
// const arr =Array.from(hiddenText)
// console.log(arr);

// function openAccordion(){
//         if (arr1.style.display === 'none'){
//             arr1.style.display = 'block'
//    }else{
//     arr1.style.display = 'none'
//    } 
// }

// openAccordion()
// accordion1.addEventListener('click', openAccordion)



// function openAccordion2(){
//     if (arr2.style.display === 'none'){
//            arr2.style.display = 'block'
//    }else{
//    arr2.style.display = 'none'
//    }
// }
// accordion2.addEventListener('click', openAccordion2)


// function openAccordion3(){
//     if (arr3.style.display === 'none'){
//            arr3.style.display = 'block'
//    }else{
//    arr3.style.display = 'none'
//    }
// }
// accordion3.addEventListener('click', openAccordion3)








