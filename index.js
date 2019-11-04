// Your code goes here


document.addEventListener("DOMContentLoaded", function() {
  docOnload()
})

console.log(
  "This Console.log() fires when index.js loads - before DOMcontentLoaded is triggered"
)

function docOnload() {
  document.getElementbyId("text")
  .innerhtml = "This is Really Cool"
}
