let btn=document.querySelectorAll(".btn");
let reset=document.querySelector(".new");
let para=document.querySelector("p");

let winner=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let turnX= true;
btn.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnX===true){
            box.innerText="X";
            turnX=false;
        }
        else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled= true;
        checkwinner();
    });
});
const checkwinner= () => {
    for(win of winner){
        let w1=btn[win[0]].innerText;
        let w2=btn[win[1]].innerText;
        let w3=btn[win[2]].innerText;
        if(w1!="" && w2!="" && w3!=""){
            if(w1===w2 && w2===w3){
                console.log("winner");
                showwinner(w1);
            }
        }
    }
}

const showwinner = (w1) =>
{
    para.innerText=`Congratulations, winner is ${w1}`;
    para.classList.remove("hide");
    disableboxes();
}
const disableboxes = () => {
    for(box of btn){
        box.disabled=true;
    }
}
const resetGame= ()=>{
    turnX=true;
    enableboxes();
    para.classList.add("hide");
}
const enableboxes = () => {
    for(box of btn){
        box.disabled=false;
        box.innerText="";
    }
}
reset.addEventListener("click",resetGame);