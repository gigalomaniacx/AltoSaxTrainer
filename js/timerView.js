function timerView(){
    document.getElementById('app').innerHTML = /*html*/ `
    <div onload="makeListeners()">
        <h3>supertimer</h3><br/>
        <h5>spent seconds: ${model.timer.time}</h5>
        <button datakey="32" id="timer-start" onclick="startTimer()">${model.timer.timerButton}</button><br/>
        <button onclick="scaleView()">scale</button>
        <button onclick="mainPageView()">main</button>
        </div>
    `;
}