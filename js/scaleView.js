// Draws the page
function scaleView() {
    let dropDown = '';
    let noteDropDown = '';
    for (let i = 0; i < model.fingerchart.length; i++) {
        dropDown += dropDownOptions(model.fingerchart[i].name);
    }
    for (let i = 0; i < model.notes.length; i++) {
        noteDropDown += dropDownOptions(model.notes[i].name);
    }

    document.getElementById('app').innerHTML =  /*html*/ `
        <h1>scalePage</h1>
        <select onchange="notesImgChanger(this.value)" id="note">
            ${noteDropDown}
        </select>
        <label for="notesChk">Notes</label>
        <input type="checkbox" id="noteCheck" ${model.inputs.noteChk} onclick="checkCheck('noteCheck')"></label>
        <select onchange="noteImgChanger(this.value)" id="notes">
            ${dropDown}
        </select>
        <input type="checkbox" id="fingerCheck" ${model.inputs.fingerChk} onclick="checkCheck('fingerCheck')">
        <label for="fingerChk">Fingering</label>
        <br/>
        <img src="${model.noteImg}" width="${model.noteImgWidth}" />
        <img src="${model.notesImg}" width="${model.notesImgWidth}" /></br>
        <button onclick="mainPageView()">main page</button>
        <button onclick="timerView()">Timer</button>
    `;
}


// Prints the options in the dropdown menu
function dropDownOptions(value) {
    return `<option ${getSelectedDropdown(value)} value="${value}">${value}</option>`;
}