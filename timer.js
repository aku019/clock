const start = document.getElementById('start');
const reset = document.getElementById('reset');
let h = document.getElementById("hh");
let m = document.getElementById("mm");
let s = document.getElementById("ss");

let startTimer = null;
let stoptime=true;
function stopInterval() {
    clearInterval(startTimer);
}

function stopTimer() {
    if (stoptime == false) {
      stoptime = true;
    }
  }

function timer() {
    
    if(h.value == 0 && m.value == 0 && s.value == 0) {
        h.value = 0;
        m.value = 0;
        s.value = 0;
    } else if(s.value != 0) {
        s.value -= 1;
    } else if(m.value != 0 && s.value == 0) {
        s.value = 59;
        m.value -= 1;
    } else if(h.value != 0 && m.value == 0) {
        m.value = 60;
        h.value -= 1;
    }

    return;
}

start.addEventListener('click', function() {
    function startInterval() {
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    
    startInterval();
});

reset.addEventListener('click', function() {
    h.value = 0;
    m.value = 0;
    s.value = 0;
    stopInterval();
});