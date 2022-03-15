window.addEventListener("load", () => {
 document.querySelector("body").classList.add("loaded"); 
});

function myFunctionForBtn(x) { document.getElementById("opnClsBtn").classList.toggle("open");
    x.classList.toggle("change");
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}