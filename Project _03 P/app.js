function Delete() {

    document.getElementById("MyResult").value = ""
}

function Calculator(Newvalu) {

    document.getElementById("MyResult").value += Newvalu

}

function Answer() {


    // let c= eval(document.getElementById("MyResult").value)
    // document.getElementById("MyResult").value =c

    let A = document.getElementById("MyResult").value;
    let B = eval(A)
    document.getElementById("MyResult").value = B
}
