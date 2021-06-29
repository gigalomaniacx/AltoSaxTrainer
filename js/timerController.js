function startTimer(){
    startsTime();
    do {
        stopsTime();
        timer();
        timerView();
    }
    while (model.timer.timerOn)
}
function startsTime(){
    return model.timer.starttime = new Date().getTime();
}
function stopsTime(){
    return model.timer.endtime = new Date().getTime();
}
function timer(){
    getSpentMiliSec();
    getSpentSec();
}
function getSpentMiliSec(){
    return model.timer.spentmillisec = Math.floor(model.timer.endtime - model.timer.starttime);
}
function getSpentSec(){
    return model.timer.spentsec = model.timer.spentmillisec / 1000;
}