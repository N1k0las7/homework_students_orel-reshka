//первая задача
let but = document.getElementById('but')
let out = document.getElementById('out')
const students = ['Sidorov', 'Ivanov', 'Petrov', 'Dzambulaev', 'Magomedov', 'Ivankova', 'Messi', 'Dzuba', 'Kamikadzeva', 'Gromov']
let max = 5
let min = 2
let str = ''
but.onclick = f1
function f1() {
    for (let i = 0; i < students.length; i++) {
        str += students[i] + ' - ' + Math.floor(Math.random() * (max - min + 1) + min) + '<br>'
    }
    out.innerHTML = str
    but.onclick = false
}

// вторая задача орел решка

let but1 = document.getElementById('but1')
let image = document.getElementById('image')
let out1 = document.getElementById('out1')

but1.onclick = f2
function f2() {
    let coins = Math.floor(Math.random() * 3)
    if (coins == 0) {
        image.src = '1.moneta.png'
        out1.innerText = 'Выпала решка'
    }
    else if (coins == 1) {
        image.src = '3.moneta.png'
        out1.innerText = 'Ребром,Твоя удача'
    }
    else {
        image.src = '2.moneta.png'
        out1.innerText = 'Выпал орел'
    }
}

