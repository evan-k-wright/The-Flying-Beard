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

const quickShot = [{
    video: document.getElementsByClassName('dronie'),
    type: 'dronie' 
},
{
    video: document.getElementsByClassName('rocket'),
    type: 'rocket'
},
{
    video: document.getElementsByClassName('helix'),
    type: 'helix'
}];

function showDronie() {
    let dronieShow = quickShot.filter(function(dronie) {
    return dronie.type === 'dronie';
})
    console.log(dronieShow);
};

//console.log(showDronie());
