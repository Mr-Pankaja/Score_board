let ptHome = document.getElementById("pointTextHome")
let ptGuest = document.getElementById("pointTextGuest")
let inch = 0
let incg = 0

function incrementh1() {
    inch = inch + 1
    ptHome.textContent = inch
    console.log(inch)
}

function incrementh2() {
    inch = inch + 2
    ptHome.textContent = inch
    console.log(inch)
}

function incrementh3() {
    inch = inch + 3
    ptHome.textContent = inch
    console.log(inch)
}

function incrementg1() {
    incg = incg + 1
    ptGuest.textContent = incg
    console.log(incg)
}

function incrementg2() {
    incg = incg + 2
    ptGuest.textContent = incg
    console.log(incg)
}

function incrementg3() {
    incg = incg + 3
    ptGuest.textContent = incg
    console.log(incg)
}

function reset() {
    inch = inch - inch
    incg = incg - incg
    ptGuest.textContent = incg
    ptHome.textContent = inch
    titleGuest.style.color = "white"
    titleHome.style.color = "white"
}

let titleHome = document.getElementById("titletextHome")
let titleGuest = document.getElementById("titletextGuest")

function leading() {
    if (inch>incg) {
        titleHome.style.color = "yellow"
    } else {
       titleGuest.style.color =  "yellow"
    }
}
