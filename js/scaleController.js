// Grabs the imgsrc & image size from the model to print the fingering images correctly
function setImgAndWidth(imgSrc,imgWidth){
    model.noteImg = imgSrc;
    model.noteImgWidth = imgWidth;
}
function setNoteImgAndWidth(imgSrc,imgWidth){
    model.notesImg = imgSrc;
    model.notesImgWidth = imgWidth;
}

// Sets the dropdownOption to the current note with some help
function setDropdownOption (val) {
    return model.inputs.dropDownOption = val;
}

// Sets the selected dropdown option to selected for the updateview
function getSelectedDropdown(option){
    return model.inputs.dropDownOption == option ? 'selected' : '';
}

// Loops through the notes array & sets the ifstatements for changing of the different finger charts
function noteImgChanger(val){
    let imgchanger = document.getElementById('notes');
    for (let i = 0; i < model.fingerchart.length; i++){
        if (model.inputs.fingerCheck && imgchanger.value == model.fingerchart[i].name) setImgAndWidth(model.fingerchart[i].noteImg,model.fingerchart[i].size);
        
    }
    setDropdownOption(val);
    scaleView();
}
function setNoteDropdownOption (val) {
    return model.inputs.noteDropDown = val;
}
function getSelectedDropdown(option){
    return model.inputs.noteDropDown == option ? 'selected' : '';
}
function notesImgChanger(val){
    let imgchanger = document.getElementById('note');
    for (let i = 0; i < model.notes.length; i++){
        if (model.inputs.noteCheck && imgchanger.value == model.notes[i].name) setNoteImgAndWidth(model.notes[i].noteImg, model.notes[i].size);
    }
    setNoteDropdownOption(val);
    scaleView();
}


function getCheckBoxes(chkId){
    return document.getElementById(chkId);
}

function checkCheck(chkId){
    (getCheckBoxes(chkId).checked == true) ? model.inputs[chkId] = true : model.inputs[chkId] = false;
    checkLogic();
}
function checkLogic(){
    model.inputs.fingerCheck ? model.inputs.fingerChk = 'checked': model.inputs.fingerChk = '';
    model.inputs.noteCheck ? model.inputs.noteChk = 'checked': model.inputs.noteChk = '';
}