

function turnOff(){
    doucument.querySelector('#stopLight').classList.remove('stop');
    doucument.querySelector('#slowLight').classList.remove('slow');
    doucument.querySelector('#goLight').classList.remove('go');
}

// go function
function go(){
    turnOff();
    document.getElementById('goLight').
    classList.add('go');
}

// slow function
function slow(){
    turnOff();
    document.getElementById('slowLight').
    classList.add('slow');
}


// stop function
function stop(){
    turnOff();
    document.getElementById('stopLight').
    classList.add('stop');
}


// bind to clicks
document.getElementById('stopButton').addEventListener('click',stop);
document.querySelector('#slowButton').addEventListener('click',slow);
document.querySelector('#goButton').addEventListener('click',go);