// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let error= document.getElementById('modal');
error.className='hidden';
let allHearts= document.querySelectorAll('.like-glyph');
allHearts.forEach(function(e){
  e.addEventListener('click',getLike)
})

function getLike(event){
  let like= event.target;
  mimicServerCall("bogusUrl")
  .then(()=>{
    if(like.innerText==EMPTY_HEART){
      like.innerText=FULL_HEART;
      like.classList.add('activated-heart');
    }
    else{
      like.innerText=EMPTY_HEART;
      like.classList.remove('activated-heart');
    }
  }).catch((err)=>{
    let errorMessage= document.getElementById('modal-message');
    errorMessage.innerText= err;
    error.classList.remove('hidden');
    setTimeout(()=>{
    error.classList.add('hidden');
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
