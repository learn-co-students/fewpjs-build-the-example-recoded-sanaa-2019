// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let mod=document.getElementById('modal').className='hidden';
mod.addEventListener('onload',function(){

})

let like=document.querySelector('.like-glyph')
try{
like.addEventListener('click',function(){
if(like.innerHTML==FULL_HEART){
  like.innerHTML=EMPTY_HEART
  like.className=like.className.replace("activated-heart","")
}
else {
like.className=like.className.replace("","activated-heart")
like.innerHTML=FULL_HEART
like.style.color='red'

}
})
}
catch(e){
  console.log(e);
  let remove=document.querySelector('#modal');
  setTimeout(()=>{
     remove.className=remove.className.replace("hidden","")
  },5000)
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
