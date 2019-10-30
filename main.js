// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// console.log(FULL_HEART)
// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}



//////Start my code here/////////////////////

// hide error block when the page first loads
let error = document.getElementById("modal")
error.className= "hidden"

;

      //I need to fetch the info in db.json 

      fetch("http://localhost:3000/likes")
      // .then(resp => resp.json())
      .then(data => {//console.log(data)
       


        let heart = document.querySelectorAll(".like-glyph"); //console.log(heart) //node list (use for..in)
      //get the heart from here
        for(const element in data){//console.log(data[element]["like"])
          let data2 = data[element]["like"];
          heart[element].innerHTML = data2;
        //  heart[element].style.color = "red";

          console.log(heart[element].innerHTML)

         if( heart[element].innerHTML == FULL_HEART){
           //to add a second class (.add) and get the color red from activated heart (without messing with the style)
          heart[element].classList.add("activated-heart");
       
         }else {
          heart[element].classList.remove("activated-heart")
      
         }
       
          
        }

        }) //after then.. now catch error when we call mimicServerCall>> it always return FAILIUR 
        .catch(function(err) {
          //remove error model(which means add hidden) after 5 seconds = 5000
          setTimeout(function() {error2.classList.add("hidden")} , 5000);

          let error2 = document.getElementById("modal");
          error2.classList.remove("hidden")
          console.log(error2.className)
          console.log(err.message);
        
          let errorMessage = document.getElementById("modal-message")
          return errorMessage.innerHTML = err.message;
       
          
         
        })//end catch
         

// click on heart 

let like = document.querySelectorAll("li")


 like.forEach(function(e) {
    e.addEventListener("click", function(e) {
//         //this function does stuff
        console.log("you can click more than once")

      if (e.target && e.target.matches(".like-glyph")){

//        // e.target.style.color  = "red" //save this at the server using fetch "POST"

//        // get the heart sign from html
       let heart = document.querySelector(".like-glyph")
      //  console.log("This heart" +  heart.innerHTML)

       if( e.target.innerHTML == EMPTY_HEART){
        e.target.innerHTML = FULL_HEART;
       // e.target.style.color = "red" //dont use style 
       e.target.classList.add("activated-heart");

       }else { 
         console.log("removed")
         e.target.innerHTML = EMPTY_HEART;
         e.target.classList.remove("activated-heart");
        // e.target.style.color  = "black";
      }

            ////////NEW FETCH PATCH
            let newlike = {
              like : e.target.innerHTML
            }

            
          //request to sever to update using fetch PATCH 

          fetch("http://localhost:3000/likes/201811189", {
              method: "PATCH",
              headers: {"content-Type": "application/json", "Accept":"application/json"},
              body: JSON.stringify(newlike)
          })

      }//end if 

 

   })//end event listener
   })//end for each 
     
