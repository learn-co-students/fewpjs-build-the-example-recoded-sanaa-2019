// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const articles = document.querySelector('.all-articles')
articles.addEventListener('click', f => {
  mimicServerCall().then(r => {
    if (f.target.className === 'like') {
      if (f.target.children[0].innerHTML === EMPTY_HEART) {
        f.target.children[0].innerHTML = FULL_HEART
        f.target.children[0].style.color = 'red'
      } else {
        f.target.children[0].innerHTML = EMPTY_HEART
        console.log('object')
      }

    }
  }).catch(() => { document.querySeslector('.hidden').className = 'show' })
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
