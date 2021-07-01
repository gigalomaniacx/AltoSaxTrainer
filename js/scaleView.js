// Draws the page
function scaleView(){
    let dropDown ='';
    for (let i = 0; i < model.fingerchart.length; i++){
    dropDown += dropDownOptions(model.fingerchart[i].name);
    }

    document.getElementById('app').innerHTML =  /*html*/ `
        <h1>scalePage</h1>
        <select onchange="noteImgChanger(this.value)" id="notes">
            ${dropDown}
        </select><br/>
        <img src="${model.noteImg}" width="${model.noteImgWidth}" />
        <button onclick="mainPageView()">main page</button>
        <button onclick="timerView()">Timer</button>
    `;
}


// Prints the options in the dropdown menu
function dropDownOptions(value){
    return `<option ${getSelectedDropdown(value)} value="${value}">${value}</option>`;
    }