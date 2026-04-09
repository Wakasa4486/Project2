const tang = document.getElementById("tang")
const reset = document.getElementById("reset")
const giam = document.getElementById("giam")
const dem = document.getElementById("count")
let count = 0;

tang.onclick = function(){
    count++;
    dem.textContent = count;
}

giam.onclick = function(){
    if(count > 0){
        count--;
        dem.textContent = count;
    }
    
}

reset.onclick = function(){
    count = 0;
    dem.textContent = count;
}