document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });

  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
  // var collapsibleElem = document.querySelector('.collapsible');
  // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

  // Or with jQuery

  function womenvav(){
// document.getElementById('women').style.display="block"     
  var x = document.getElementById("women");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }
  function menvav(){
    // document.getElementById('women').style.display="block"     
      var y = document.getElementById("men");
      if (y.style.display === "none") {
        y.style.display = "block";
      } else {
        y.style.display = "none";
      }
      }

      
const imgs = document.getElementById('carasole');
let idx = 0;

function run(){
idx++
imgs.style.transform=`translateX(${-idx * 100}%)`
// console.log('hello')
if(idx==1){
    idx = 0;
}
}
setInterval(run,3000);


function hidebox(){
//  var card1 = document.getElementsByClassName("hidebox");
 var card1 = document.getElementById("hidebox")
var button = document.getElementById('btn-container')
card1.style.display="flex";
button.style.display="none"


}