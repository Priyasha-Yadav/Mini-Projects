Clear()

function Clear() {
    // Clear the screen
    document.getElementById('screen').textContent = '0';
}

function display(val) {
    let screen = document.getElementById('screen');
    if (val === "+/-") {
        screen.textContent = screen.textContent === '0' ? '0' : -parseFloat(screen.textContent);
    } else if (screen.textContent === '0') {
        screen.textContent = val;
    } else {
        screen.textContent += val;
    }

}

function solve() {
    let x = document.getElementById('screen').textContent;
    
   
        let y = eval(x);
        
        document.getElementById('screen').textContent = y;

    
}