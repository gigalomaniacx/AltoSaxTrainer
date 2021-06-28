function scaleView(){
    let dropDown ='';
    for (let i = 0; i < model.notes.length; i++){
    dropDown += dropDownOptions(model.notes[i]);
    }

    document.getElementById('app').innerHTML =  /*html*/ `
        <h1>scalePage</h1>
        <select onchange="noteImgChanger()" id="notes">
            ${dropDown}
        </select><br/>
        <img src="${model.noteImg}" width="${model.noteImgWidth}" />
        <button onclick="mainPageView()">main page</button>
    `;

    // <select onchange="noteImgChanger()" id="notes">
    //         <option value="fullChart">Full chart</option>
    //         <option value="A#-Bb">A# Bb</option>
    //         <option value="B-Cb">B Cb</option>
    //         <option value="B#-C">B# C</option>
    //         <option value="C#-Db">C# Db</option>
    //         <option value="D">D</option>
    //     </select><br></br>
}

function noteImgChanger(){
    let imgchanger = document.getElementById('notes');
    imgchanger.value == 'fullChart' ? setImgAndWidth("./src/sax-fingering-chart-final.png", "600vw"):
    imgchanger.value == 'LowA#-Bb' ? setImgAndWidth("./src/LowAsh-Bb-Finger.png", "140vw"):
    imgchanger.value == 'LowB-Cb' ? setImgAndWidth("./src/LowB-Cb-Finger.png", "140vw"):
    imgchanger.value == 'LowB#-C' ? setImgAndWidth("./src/LowBsh-C-Finger.png", "140vw"):
    imgchanger.value == 'LowC#-Db' ? setImgAndWidth("./src/LowCsh-Db-Finger.png", "140vw"):
    imgchanger.value == 'LowD' ? setImgAndWidth("./src/LowD-Finger.png", "140vw"):
    imgchanger.value == 'LowD#-Eb' ? setImgAndWidth("./src/LowDsh-Eb-Finger.png", "140vw"):
    imgchanger.value == 'LowE-Fb' ? setImgAndWidth("./src/LowE-Fb-Finger.png", "140vw"):
    imgchanger.value == 'LowE#-F' ? setImgAndWidth("./src/LowEsh-F-Finger.png", "140vw"):
    imgchanger.value == 'LowF#' ? setImgAndWidth("./src/LowFsh-Finger.png", "140vw"):
    imgchanger.value == 'LowGb' ? setImgAndWidth("./src/LowGb-Finger.png", "140vw"):
    imgchanger.value == 'LowG' ? setImgAndWidth("./src/LowG-Finger.png", "140vw"):
    imgchanger.value == 'LowG#-Ab' ? setImgAndWidth("./src/LowGsh-Ab-Finger.png", "140vw"):
    imgchanger.value == 'LowA' ? setImgAndWidth("./src/LowA-Finger.png", "140vw"):
    imgchanger.value == 'A#' ? setImgAndWidth("./src/Ash-Finger.png", "140vw"):
    imgchanger.value == 'Bb' ? setImgAndWidth("./src/Bb-Finger.png", "140vw"):
    imgchanger.value == 'B-Cb' ? setImgAndWidth("./src/B-Cb-Finger.png", "140vw"):
    imgchanger.value == 'B#' ? setImgAndWidth("./src/Bsh-Finger.png", "140vw"):
    imgchanger.value == 'C' ? setImgAndWidth("./src/C-Finger.png", "140vw"):
    imgchanger.value == 'C#-Db' ? setImgAndWidth("./src/CshDb-Finger-Finger.png", "140vw"):
    imgchanger.value == 'HighD' ? setImgAndWidth("./src/HighD-Finger.png", "140vw"):
    imgchanger.value == 'HighD#-Eb' ? setImgAndWidth("./src/HighDsh-Eb-Finger.png", "140vw"):
    imgchanger.value == 'HighE-Fb' ? setImgAndWidth("./src/HighE-Fb-Finger.png", "140vw"):
    imgchanger.value == 'HighE#-F' ? setImgAndWidth("./src/HighEsh-F-Finger.png", "140vw"):
    imgchanger.value == 'HighF#' ? setImgAndWidth("./src/HighFsh-Finger.png", "140vw"):
    imgchanger.value == 'HighGb' ? setImgAndWidth("./src/HighGb-Finger.png", "140vw"):
    imgchanger.value == 'HighG' ? setImgAndWidth("./src/HighG-Finger.png", "140vw"):
    imgchanger.value == 'HighG#-Ab' ? setImgAndWidth("./src/HighGsh-Ab-Finger.png", "140vw"):
    imgchanger.value == 'HighA' ? setImgAndWidth("./src/HighA-Finger.png", "140vw"):
    console.log('noteImgChanger not workie');

    scaleView();
}

function setImgAndWidth(imgSrc,imgWidth){
    model.noteImg = imgSrc;
    model.noteImgWidth = imgWidth;
}

function dropDownOptions(value){
return `<option value="${value}">${value}</option>`;
}