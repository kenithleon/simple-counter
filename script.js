const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
const myCount = document.getElementById('myCount');

let count=0;
increase.onclick =  function(){
    count++;
    myCount.textContent = count;
}

decrease.onclick =  function(){
    count--;
    myCount.textContent = count;
}
reset.onclick =  function(){
    count=0;
    myCount.textContent = count;
}