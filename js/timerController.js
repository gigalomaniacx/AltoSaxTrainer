function startTimer(){
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

if (model.timer.timerButtonId){
    model.timer.timerButtonId.addEventListener('keyup', e => {
        if (e.keyCode == 32){
            startTimer();
            // e.preventDefault();
        }
    })
}