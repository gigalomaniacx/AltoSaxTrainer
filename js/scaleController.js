function setImgAndWidth(imgSrc,imgWidth){
    model.noteImg = imgSrc;
    model.noteImgWidth = imgWidth;
}

function dropDownOptions(value){
return `<option ${getSelectedDropdown(value)} value="${value}">${value}</option>`;
}

function setDropdownOption (val) {
    return model.inputs.dropDownOption = val;
}

function getSelectedDropdown(option){
    return model.inputs.dropDownOption == option ? 'selected' : '';
}