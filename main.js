// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// let like = document.querySelector(".like").addEventListener("click", mimicServerCall)

fetch("http://localhost:3000/likes")
.then(function(resp){
  return resp.json()
}).then(function(data){
  console.log(data);
  let like = document.querySelector(".like-glyph");
  like.className = like.className.replace("like-glyph","activated-heart")
  like.innerHTML = FULL_HEART;
  if (like.innerHTML == FULL_HEART) {
    like.addEventListener("click", function(){
      like.innerHTML = EMPTY_HEART
      like.className = like.className.replace("activated-heart","like-glyph")

    })
    
  }

  

}).catch(function(error){
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

function mimicServerCall(url="http://localhost:3000/likes", config={}) {
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
