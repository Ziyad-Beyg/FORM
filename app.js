

function getDate(){
let currentDate = new Date()
let dateElement = document.getElementById("date")
let month = currentDate.getMonth()
month = parseInt(month) + 1

dateElement.innerHTML += currentDate.getDate() + " - " + month + " - " + currentDate.getFullYear()

// console.log(currentDate)

}


function getTime(){
    let timeElement = document.getElementById("time")
    let time = new Date()
    let hours = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
    let currentTime = hours 
    timeElement.innerHTML = currentTime
    // console.log(currentTime)
}

// console.log(document.getElementById("Dropdown1.checked"))
// console.log(Dropdown1.value)

function getDateTime(){
    getDate()
    setInterval(()=>{
        getTime()
    },1000) 
}

let downloadBtn = document.getElementById("downloadBtn")


function pdfGenerator(){
    let documentElement = document.getElementById("pdfDocument")
    let inputElement1 = document.getElementById("input1")
    let inputElement2 = document.getElementById("input2")
    let inputElement3 = document.getElementById("input3")
    let inputElement4 = document.getElementById("input4")
    if(inputElement1.value == "" || inputElement1.value == " " || inputElement1.value == "  " || inputElement1.value == "   "  ){
        alert("Enter Some Data!!!")
        console.log("input")
    }
    else if(inputElement2.value == "" || inputElement2.value == " " || inputElement2.value == "  " || inputElement2.value == "   "  ){
        alert("Enter Some Data!!!")
        console.log("input")

    }
    else if(inputElement3.value == "" || inputElement3.value == " " || inputElement3.value == "  " || inputElement3.value == "   "  ){
        alert("Enter Some Data!!!")
        console.log("input")

    }
    else if(inputElement4.value == "" || inputElement4.value == " " || inputElement4.value == "  " || inputElement4.value == "   "  ){
        alert("Enter Some Data!!!")
        console.log("input")

    }
    else{
        downloadBtn.className = "display-none"
        setTimeout(()=>{
            downloadBtn.className = "display-block submit-btn"
        },1)
        html2pdf()
            .from(documentElement)
            .save()
    }


    
}