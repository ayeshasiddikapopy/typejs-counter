
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
let counter = document.querySelector(".counter");
let counterArrays = Array.from(counter);
// let count = 0;


function isinviewport(){
    let viewport = counter.getBoundingClientRect();

    return(
        viewport.top >=0 && viewport.left >=0 && viewport.bottom <= (window.innerHeight || document.documentElement.clientHeight) && viewport.right <= (window.innerWidth || document.documentElement.clientWidth));
}

window.addEventListener("scroll", () => {
    if(isinviewport()){

        // console.log(`is in viewport`);
         let count = 0;
         console.log(count); // count e hosce na

        counterArrays.map((items) => { 

        // let count = 0;
        // console.log(count); // count e hosce na

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




// vannilla code for counter
let a = document.querySelectorAll(".counter");
let arrays = Array.from(a);
let count = 0;

arrays.map((items) => {
  function counterUp(){
    count++;
    items.innerHTML = count;

    if(count == items.dataset.number){
      clearInterval(stop)
    }
  }
  let stop = setInterval(() => {
    counterUp()
  }, items.dataset.speed);  // (1000 / item.dataset.speed ) for ending same time in all values from counter
});
