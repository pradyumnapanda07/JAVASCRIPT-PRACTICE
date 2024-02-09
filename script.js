// // // //
// // // let count = 0;

// // // document.getElementById("decresebtn").onclick = function () {
// // //   count -= 1;
// // //   document.getElementById("countlabel").innerHTML = count;
// // // };
// // // document.getElementById("resetbtn").onclick = function () {
// // //   count = 0;
// // //   document.getElementById("countlabel").innerHTML = count;
// // // };
// // // document.getElementById("increasebtn").onclick = function () {
// // //   count += 1;
// // //   document.getElementById("countlabel").innerHTML = count;
// // // };





let count = 0;

document.addEventListener("DOMContentLoaded", function () {
  console.log("Script is running.");

  let decreaseBtn = document.getElementById("decresebtn");
  let resetBtn = document.getElementById("resetbtn");
  let increaseBtn = document.getElementById("increasebtn");
  let countLabel = document.getElementById("countlabel");

  console.log("decreaseBtn:", decreaseBtn);
  console.log("resetBtn:", resetBtn);
  console.log("increaseBtn:", increaseBtn);
  console.log("countLabel:", countLabel);

  decreaseBtn.onclick = function () {
    count -= 1;
    countLabel.innerHTML = count;
  };

  resetBtn.onclick = function () {
    count = 0;
    countLabel.innerHTML = count;
  };

  increaseBtn.onclick = function () {
    count += 1;
    countLabel.innerHTML = count;
  };
});



// document.addEventListener("DOMContentLoaded", function () {
//     let count = 0;

//     // Function to set onclick property for an element if it exists
//     function setClickHandler(elementId, handler) {
//         const element = document.getElementById(elementId);
//         if (element) {
//             element.onclick = handler;
//         } else {
//             console.error(`Element with ID '${elementId}' not found`);
//         }
//     }

//     // Set onclick handlers with additional checks
//     setClickHandler("decresebtn", function () {
//         count -= 1;
//         document.getElementById("countlabel").innerHTML = count;
//     });

//     setClickHandler("resetbtn", function () {
//         count = 0;
//         document.getElementById("countlabel").innerHTML = count;
//     });

//     setClickHandler("increasebtn", function () {
//         count += 1;
//         document.getElementById("countlabel").innerHTML = count;
//     });
// });

