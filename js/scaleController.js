// Grabs the imgsrc & image size from the model to print the fingering images correctly
function setImgAndWidth(imgSrc,imgWidth){
    model.noteImg = imgSrc;
    model.noteImgWidth = imgWidth;
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
        if (imgchanger.value == model.fingerchart[i].name)  setImgAndWidth(model.fingerchart[i].noteImg,model.fingerchart[i].size);
        
    }
    setDropdownOption(val);
    scaleView();
}