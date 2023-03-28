// // Get all buttons with class "my-button"
// const button = document.querySelector(".goals");

// button.addEventListener("click",  () => {
//     console.log('Button clicked!');
// });

var toggle = true;
const buttons = document.querySelectorAll('.goals');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    if (toggle) {
      button.style.backgroundColor = "#D6D7D9";
      button.dataset.value = "notcompleted";
    } else {
      button.style.backgroundColor = '#94BFA2';
      button.dataset.value = "completed";
    }
    toggle = !toggle;
  });
});

// function completed(event) {
//     var button = event.target;

//     if(button.style.backgroundColor = "#D6D7D9")
//     {
//         button.style.backgroundColor = "#94BFA2";
//         button.dataset.value == "completed";
//     }
//     // else{
//     //     button.style.backgroundColor = "#D6D7D9";
//     //     button.dataset.value = "notcompleted";
//     // }  
// }

// var test1 = document.getElementById("test");
// test1.addEventListener("click", function() {
//     alert("Hello, World!");
//   });