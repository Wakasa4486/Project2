const img = document.querySelectorAll(".box2 img");
const sho = document.getElementById("show");

img.forEach(item => {
    item.addEventListener("mouseenter", () =>{
        sho.innerHTML = `<img src = "${item.src}">`;
    });

    item.addEventListener("mouseleave", () => {
        sho.innerHTML = "";
    });
});


let name;

document.getElementById("click").onclick = function(){
    name = document.getElementById("in").value;
    document.getElementById("title").textContent = `welcome ${name}`;
}

