// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let errorModal=document.getElementById("modal");
let like=document.getElementsByClassName("like-glyph");
for(ele of like){
  let chech;
  ele.addEventListener('click',function(){
    let a=this;
    console.log(mimicServerCall().then(resp=>resp).then(function(json){
      console.log("Hi resp "+json);
      if(a.classList=="like-glyph"){
        a.innerText=FULL_HEART;
        a.classList.add("activated-heart");
      }
      else if (a.classList=="like-glyph activated-heart"){
        a.innerText=EMPTY_HEART;
        a.classList.remove("activated-heart");
      }
    }).catch(function(error){
      console.log('Hi Error, '+error);
      errorModal.classList.remove("hidden");
      errorModal.innerText+=" "+error;
      setTimeout(function(){
        errorModal.classList.add("hidden");
      },5000);

    }));
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
