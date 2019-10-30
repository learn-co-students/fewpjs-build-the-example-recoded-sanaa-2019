// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


console.log(FULL_HEART)
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

// click on heart 

let like = document.querySelectorAll("li")


like.forEach(function(e) {
    e.addEventListener("click", function(e) {
        //this function does stuff
        console.log("you can click more than once")

      if (e.target && e.target.matches(".like-glyph")){

       // e.target.style.color  = "red" //save this at the server using fetch "POST"

       // get the heart sign from html
       let heart = document.querySelector(".like-glyph")
      console.log("This heart" +  heart.innerHTML)

       if( e.target.innerHTML == EMPTY_HEART){
        e.target.innerHTML = FULL_HEART;
        e.target.style.color = "red"
        // e.target.className = "activated-heart";

      }else { 
        console.log("removed")
        e.target.innerHTML = EMPTY_HEART;
        e.target.style.color  = "black";
      }
       
//////////fetch here////////////////


// submitData( e.target.innerHTML);
// console.log("New data"+ e.target.innerHTML)

// function submitData( likes ){

//   let formData = {
//      like: likes
//     };
     
//     let configObj = {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify(formData)
//     };
     
//     return fetch(" http://localhost:3000/likes/1", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//       // return document.body.innerHTML = object.id
//     })
//     .catch(function(error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
  
      
//       // return document.body.innerHTML = error.message;
  
//     });
    
//   }

////////NEW FETCH
let newlike = {
  like : e.target.innerHTML

 }
 //request to sever to update using fetch PATCH

 fetch("http://localhost:3000/likes/1", {
    method: "PATCH",
    headers: {"content-Type": "application/json", "Accept":"application/json"},
    body: JSON.stringify(newlike)
 })
  
  
    }

    // You can write these comments to yourself 
    //now I need to applay the catch alert message
    });
});