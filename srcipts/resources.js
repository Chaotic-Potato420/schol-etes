//code for the sidebar
document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId);

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener("click", () => {
        // show navbar
        nav.classList.toggle("show");
        // change icon
        toggle.classList.toggle("bx-x");
        // add padding to body
        bodypd.classList.toggle("body-pd");
        // add padding to header
        headerpd.classList.toggle("body-pd");
      });
    }
  };

  showNavbar("header-toggle", "nav-bar", "body-pd", "header");

  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll(".nav_link");

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
  }
  linkColor.forEach((l) => l.addEventListener("click", colorLink));

  // Your code to run since DOM is loaded and ready
});

//scripts for the text-to-speach page
//script that creates the voice
//var that changes talk functionality
var jim = 0;
function talk() {
    var text = document.getElementById('owo')
  var synth = window.speechSynthesis;

  var msg = new SpeechSynthesisUtterance();
  msg.text = text.value;
  //the voice's name is jim
  jim += 1;
  console.log(jim);
  //check if jim is even
  if (jim % 2 == 0) {
    synth.pause();
    document.getElementById('talk').innerHTML = 'Play'
  }
  // check if jim is odd
  else {
    if (jim <= 1) {
        document.getElementById('talk').innerHTML = 'Pause'
      speechSynthesis.cancel();
      synth.speak(msg);
    }else{
        document.getElementById('talk').innerHTML = 'Pause'
        synth.resume();
    }
  }
}
