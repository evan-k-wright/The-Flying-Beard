// const quickShot = [document.getElementsByClassName('dronie'), document.getElementsByClassName('rocket'), document.getElementsByClassName('helix')];

// function showAll() {
//    let all = quickShot.filter(quickShot => quickShot);

//    console.log(all); 
// }
// //console.log(showAll());

// function showDronie() {
//     let dronie = quickShot.filter(quickShot => quickShot[0]);

//     console.log(dronie);
//     return dronie;
// }
// console.log(showDronie())

// console.log(quickShot);

// const quickShot = [{
//     video: './quickshots/bridalVeilFalls.mov',
//     name: 'Bridal Veil Falls',
//     type: 'dronie' 
// },
// {
//     video: './quickshots/provoCanyon.mov',
//     name: 'Provo Canyon',
//     type: 'dronie'
// },
// {
//     video: document.getElementsByClassName('rocket'),
//     type: 'rocket'
// },
// {
//     video: document.getElementsByClassName('helix'),
//     type: 'helix'
// }];

// function showDronie() {
//     let dronieShow = quickShot.filter(function(dronie) {
//     return dronie.type === 'dronie';
// })
//     return dronieShow;
// };

// console.log(showDronie());


filterSelection('all')
function filterSelection(c) {
    let x, i;
    x = document.getElementsByClassName('filter');
    if (c == 'all') c = '';
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], 'show');
        if (x[i].className.indexOf(c) > -1) addClass(x[i], 'show');
    }
}

function addClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(' ');
    arr2 = name.split(' ');
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += ' ' + arr2[i];}
    }
}

function removeClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(' ');
    arr2 = name.split(' ');
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i])> -1) {arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(' ');
}

var btnContainer = document.getElementById("filterBtn");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}