// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const allArticles = document.querySelector('.all-articles')
allArticles.addEventListener('click', e => {
  mimicServerCall().then(r => {
    if (e.target.className === 'like') {
      if (e.target.children[0].innerHTML === EMPTY_HEART) {
        e.target.children[0].innerHTML = FULL_HEART
        e.target.children[0].style.color = 'red'
      } else {
        e.target.children[0].innerHTML = EMPTY_HEART
        console.log('object')
      }

    }
  }).catch(() => { document.querySelector('.hidden').className = 'show' })
})



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
