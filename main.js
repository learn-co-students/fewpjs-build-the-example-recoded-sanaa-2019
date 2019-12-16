// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


let like = document.querySelectorAll('.like-glyph')
let model = document.getElementById('modal')
like.forEach(e=>{
  e.addEventListener('click',likeClicked)
});

function likeClicked(e){
  let liked= e.target;
  mimicServerCall()
  .then(()=>{
    if(liked.innerText==EMPTY_HEART){
      liked.innerText=FULL_HEART
      liked.classList.add('activated-heart')
    }
    else{
      liked.innerText=EMPTY_HEART;
      liked.classList.remove('activated-heart')
    }
  }).catch((err)=>{
    let msg= document.getElementById('modal-message')
    msg.innerText= err;
    model.classList.remove('hidden')
    setTimeout(()=>{
      model.classList.add('hidden')
    },5000);
  })

}

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
