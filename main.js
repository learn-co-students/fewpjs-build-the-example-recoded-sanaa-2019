// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let like=document.querySelectorAll('.like-glyph')
document.getElementById("modal").className="hidden";
like.forEach(function(element){
  element.addEventListener('click',simpleLiker)
 
})


function simpleLiker(e){
  let liker=e.target;
mimicServerCall("bogusUrl")
.then(()=>{
  if(liker.innerText ==EMPTY_HEART){
    liker.innerText =FULL_HEART
    liker.style.color="red";
  }
  else{
    liker.innerText =EMPTY_HEART;
    liker.style.color="";
  }
}).catch((error)=>{
  document.getElementById('modal-message').innerText=error;
  document.getElementById("modal").classList.remove('hidden');
  setTimeout(()=>{
    document.getElementById("modal").classList.add('hidden');
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
  })
}
