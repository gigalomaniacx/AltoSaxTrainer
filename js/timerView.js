function timerView(){
    document.getElementById('app').innerHTML = /*html*/ `
        <h3>supertimer</h3><br/>
        <h5>spent seconds: ${model.timer.spentsec}</h5>
        <button onclick="startTimer()"></button>
        <button onclick="scaleView()">scale</button>
        <button onclick="mainPageView()">main</button>

    `;
}