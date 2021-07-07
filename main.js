// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let like = document.querySelectorAll('.like-glyph');
let model = document.getElementById('modal');
let msg = document.getElementById('modal-message');
let liked;
like.forEach(function(e){
  e.addEventListener('click',mimicServerCall);
  liked = e;
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
  }).then(res=>{
    console.log(liked.innerHTML)
    if(liked.innerHTML == EMPTY_HEART){
      liked.innerHTML = FULL_HEART;
      liked.classList.add('activated-heart');
    }else{
      liked.innerHTML = EMPTY_HEART;
      liked.classList.remove('activated-heart');
    }
  }).catch((err)=>{
    msg.innerHTML = err;
    console.log(err)
    model.classList.remove('hidden');
    setTimeout(function(){
      model.classList.add('hidden');
    },5000);
  });
}
