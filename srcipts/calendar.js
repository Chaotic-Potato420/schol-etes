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

//code for adding a task
function addTask() {
  //create a DIV element.
  var txtNewInputBox = document.createElement("div");

  // Then add a new input box
  txtNewInputBox.innerHTML =
    "<input type='text' id='newInputBox' class='row border border-3 border-secondary'>";

  // Finally, put it where it is supposed to appear.
  document.getElementById("tasks").appendChild(txtNewInputBox);
}
function addTaskm() {
  //create a DIV element.
  var txtNewInputBox = document.createElement("div");

  // Then add a new input box
  txtNewInputBox.innerHTML =
    "<input type='text' id='newInputBox' class='row border border-3 border-secondary'>";

  // Finally, put it where it is supposed to appear.
  document.getElementById("tasksm").appendChild(txtNewInputBox);
}
function addTaskt() {
  //create a DIV element.
  var txtNewInputBox = document.createElement("div");

  // Then add a new input box
  txtNewInputBox.innerHTML =
    "<input type='text' id='newInputBox' class='row border border-3 border-secondary'>";

  // Finally, put it where it is supposed to appear.
  document.getElementById("taskst").appendChild(txtNewInputBox);
}
function addTaskw() {
  //create a DIV element.
  var txtNewInputBox = document.createElement("div");

  // Then add a new input box
  txtNewInputBox.innerHTML =
    "<input type='text' id='newInputBox' class='row border border-3 border-secondary' style='width:125%;'>";

  // Finally, put it where it is supposed to appear.
  document.getElementById("tasksw").appendChild(txtNewInputBox);
}
function addTaskth() {
  //create a DIV element.
  var txtNewInputBox = document.createElement("div");

  // Then add a new input box
  txtNewInputBox.innerHTML =
    "<input type='text' id='newInputBox' class='row border border-3 border-secondary'>";

  // Finally, put it where it is supposed to appear.
  document.getElementById("tasksth").appendChild(txtNewInputBox);
}
function addTaskf() {
  //create a DIV element.
  var txtNewInputBox = document.createElement("div");

  // Then add a new input box
  txtNewInputBox.innerHTML =
    "<input type='text' id='newInputBox' class='row border border-3 border-secondary'>";

  // Finally, put it where it is supposed to appear.
  document.getElementById("tasksf").appendChild(txtNewInputBox);
}
function addTaskS() {
  //create a DIV element.
  var txtNewInputBox = document.createElement("div");

  // Then add a new input box
  txtNewInputBox.innerHTML =
    "<input type='text' id='newInputBox' class='row border border-3 border-secondary'>";

  // Finally, put it where it is supposed to appear.
  document.getElementById("tasksS").appendChild(txtNewInputBox);
}

//code for downloading the week
function download() {
  var fileName = document.getElementById("file");
  var element = document.getElementById("week");
  var opt = {
    filename: fileName.value + ".pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
  };

  // New Promise-based usage:
  html2pdf().set(opt).from(element).save();
}
