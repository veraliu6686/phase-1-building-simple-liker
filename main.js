// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorDiv = document.getElementById("modal");
errorDiv.className = "hidden";

const likeGlyph = document.querySelectorAll(".like-glyph");
let redHeart = false;

likeGlyph.forEach ( item => {
  item.addEventListener("click", (e)=>{

    redHeart = !redHeart;

    if (redHeart) {
      e.target.className = 'activated-heart';
      e.target.textContent= FULL_HEART;

    } else{
      e.target.className = 'like-glyph';
      e.target.textContent = EMPTY_HEART;
    }

    mimicServerCall()
    .then (() => {})
    .catch(() => {
      errorDiv.className = ""
      setTimeout(()=> {errorDiv.className = "hidden"}, 3000)
    })


  });

})

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
  });
}
