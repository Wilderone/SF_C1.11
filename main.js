let minarea = document.querySelector('.minutes'),
    secarea = document.querySelector('.seconds'),
    plus = document.querySelector('.plus'),
    minus = document.querySelector('.minus'),
    start = document.querySelector('.start'),
    stop = document.querySelector('.stop'),
    min = 0,
    sec = 0;

// minarea.textContent = min;
// secarea.textContent = sec;
function updateText() {
    secarea.textContent = `0${sec}`.slice(-2);
    minarea.textContent = `0${min}`.slice(-2);
}

function checkAndCountPlus() {
    if (sec < 59) {
        ++sec
    } else {
        sec = 0
        min++
    }
    updateText();
}

function checkAndCountMinus() {
    if (min <= 0 && sec <= 0) {
        sec = 1
        min = 0
    }
    if (0 < sec < 59) {
        console.log(sec, 'sec<59')
        --sec
    }
    if (sec == -1) {
        console.log(sec, 'sec<=1')
        sec = 59
        min--
    }
    updateText();
}
plus.onclick = () => {
    checkAndCountPlus();
}

plus.onmousedown = () => {
    let md = setInterval(() => {
        checkAndCountPlus();
    }, 100)
    plus.addEventListener('mouseup', () => {
        clearInterval(md);
    })

};

minus.onclick = () => {
    checkAndCountMinus();
}

minus.onmousedown = () => {
    let md = setInterval(() => {
        checkAndCountMinus();
    }, 100)
    minus.addEventListener('mouseup', () => {
        clearInterval(md);
    })

};

start.onclick = () => {
    if (sec > 0) {
        sec--;
        let cdwn = setInterval(() => {
            sec--;
            updateText();
            if (sec <= 0 && min <= 0) {
                clearInterval(cdwn);
            } else if (min > 0 && sec < 1) {
                min--;
                sec = 60
            }
        }, 1000);
        stop.onclick = () => {
            clearInterval(cdwn);
        }
    }
    updateText()
}



