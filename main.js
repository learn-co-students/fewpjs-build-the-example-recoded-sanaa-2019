// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.getElementById("modal").className="hidden"
fetch('http://localhost:3000/likes')
  .then(resp => resp.json())
  .then(json => console.log(json));
let likeIcon=document.querySelector('.like-glyph')
likeIcon.addEventListener('click',function(){

if(likeIcon.innerHTML==FULL_HEART){
  likeIcon.innerHTML=EMPTY_HEART
  likeIcon.className=likeIcon.className.replace("activated-heart","")
console.log("full")
}
else {
  likeIcon.className="activated-heart"
likeIcon.innerHTML=FULL_HEART
console.log("Empty")
}
  console.log("it works")
})
.catch(function(error){
  console.log(error);
  // console.log("error");
  let modal = document.querySelector("#modal");
  modal.className = modal.className.replace("hidden","")
  setTimeout(() => {
    modal.className = modal.className.replace("","hidden")

  }, 5000);
})
  

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
