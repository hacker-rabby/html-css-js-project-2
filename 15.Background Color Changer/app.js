const btn = document.getElementById("btn");
let hex = document.getElementById("hexCode");

function randomColor(){
    let letters='0123456789ABCDEF'
    let color = "#";
    for(let i=0; i<6; i++){
        color +=letters[Math.floor(Math.random()*16)]
    }
    return color;
}


if(btn){
    btn.addEventListener("click", ()=>{
        document.body.style.backgroundColor = randomColor();
        if(hex){
            hex.innerHTML = randomColor();
        }
    })
}