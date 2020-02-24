const quickShot = [document.getElementsByClassName('dronie'), document.getElementsByClassName('rocket'), document.getElementsByClassName('helix')];

function showAll() {
   let all = quickShot.filter(quickShot => quickShot);

   return all; 
}
//console.log(showAll());

function showDronie() {
    let dronie = quickShot.filter(quickShot => quickShot[0])

    return dronie;
}
console.log(showDronie())

console.log(quickShot);
