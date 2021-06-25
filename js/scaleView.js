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
    imgchanger.value == 'A#-Bb' ? setImgAndWidth("./src/LowAsh-Bb-Finger.png", "140vw"):
    imgchanger.value == 'B-Cb' ? setImgAndWidth("./src/LowB-Cb-Finger.png", "140vw"):
    imgchanger.value == 'B#-C' ? setImgAndWidth("./src/LowBsh-C-Finger.png", "140vw"):
    imgchanger.value == 'C#-Db' ? setImgAndWidth("./src/LowCsh-Db-Finger.png", "140vw"):
    imgchanger.value == 'D' ? setImgAndWidth("./src/LowD-Finger.png", "140vw"):
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