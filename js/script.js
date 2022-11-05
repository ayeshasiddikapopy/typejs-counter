
// ---------------type js----------//
let type = document.querySelector(".type");

function isinviewport(){
    let viewport = type.getBoundingClientRect();
    return (
        viewport.top >= 0 && viewport.left >= 0 && viewport.bottom <= (window.innerHeight || document.documentElement.clientHeight) && viewport.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

let text = type.innerHTML;
let typeArray = text.split(""); 
let onetime =true; 

window.addEventListener("scroll" ,() =>{
    if(isinviewport() && onetime){
        onetime = false;  // ekhane eshe false kore dite hobe
        let type = document.querySelector(".type");
        let count = 0;
        type.innerHTML= "";

        function typejs() {
            if(count < text.length){
                type.innerHTML += text.charAt(count);
                count++; 
                typeArray = text.split(""); // for remove a space when retype,
            }else{
                typeArray.pop(); //reduce end words
                type.innerHTML = typeArray.join(""); // string to array
                if(typeArray.length == 0){ //retyping again after else 
                    count = 0;
                }
            }
        }
        setInterval(() => {
            typejs();
        },100);
    }
});


// ------------counter------------//
let counters = document.querySelector(".counters");
let counter = document.querySelectorAll(".counter")
let counterArrays = Array.from(counter);


function ISviewport(){
    let viewport = counters.getBoundingClientRect();

    return(
        viewport.top >=0 && viewport.left >=0 && viewport.bottom <= (window.innerHeight || document.documentElement.clientHeight) && viewport.right <= (window.innerWidth || document.documentElement.clientWidth));
}

window.addEventListener("scroll", () => {
    if(ISviewport() && onetime){
        onetime = false;
        counterArrays.map((items) => { 

        let count = 0;
        console.log(count); // count e hosce na

        function counterUp(){
            count++;
            items.innerHTML = count;

            if(count == items.dataset.number){
            clearInterval(stop)
            }
        }
        let stop = setInterval(() => {
                counterUp()
            }, 500);  
        });
    }
})



//-------------------cursor-----------------------//
let body = document.querySelector("body");
let count = 0 ;

function circle(e){
    count++;

    if(count <= 1){
    let circlediv = document.createElement("div");
    circlediv.classList.add("circle");
    
    body.appendChild(circlediv);

    circlediv.style.transition = "all 2s linear"
    circlediv.style.top = e.clientY + "px";
    circlediv.style.left = e.clientX + "px";
    circlediv.style.top = circlediv.offsetTop - 20 + "px";
    circlediv.style.left = circlediv.offsetLeft -20 + "px";
    circlediv.style.visibility = "hidden";

    }else{
        count = 0;
        let circles = document.querySelectorAll(".circle");
        let circleArray = Array.from(circles);

        circleArray.map((item) => {
            item.remove();
        })
    }
}
document.addEventListener("mousemove",circle);

// prblm -- scroll korle circle mouse theke opure othe jai, r bar bar div create korbo keno ? its look like odd if i go for count 1.