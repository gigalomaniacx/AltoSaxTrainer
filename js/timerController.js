function startTimer(e){
    if(e instanceof KeyboardEvent){
        console.log(e);
    }
    if(model.timer.timerOn == -1){
        model.timer.timerOn = setInterval(function(){
            model.timer.time++;
            model.timer.timerButton = 'stop';
            timerView();
        }, 1000);
    } else {
        clearInterval(model.timer.timerOn);
        model.timer.timerOn = -1;
        model.timer.timerButton = 'start';
    }
}

function stopKey(e){
    model.timer.timerButtonId.addEventListener(`#timer-Start[data-key="${e.keyCode}"]`)
}

function makeListener(){
    window.addEventListener("keydown", stopKey);
}