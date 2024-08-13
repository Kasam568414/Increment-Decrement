const count = document.getElementById("count");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const resetBtn = document.getElementById('reset')
const Input = document.querySelector('input[type ="number"]');
const SubmitBtn = document.getElementById("submit")
let value = 0;


increment.addEventListener('click', function(){
   value = parseInt(value)+1
   count.innerText = value
})



decrement.addEventListener('click', function(){
    if (value <=0) {
        value=0
        
    }
   else{
    value = parseInt(value)-1
   }
    count.innerText = value
 
})

SubmitBtn.addEventListener("click", function(){
  const Inputvalue =parseInt(Input.value, 10) || 0;
  value += Inputvalue;
  count.innerText=value
   
})

function reset ()
{
    value = 0;
    count.innerText=value;
}



