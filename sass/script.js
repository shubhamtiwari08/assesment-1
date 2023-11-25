var number = document.getElementById('number')
var inputEl = document.getElementById("input-num")
var marksEl = document.getElementById("mark_obtained")
var elibilityEl = document.getElementById("eligibility")





 
inputEl.addEventListener("input",()=>{
    if( inputEl.value <= 100 && inputEl.value > 40 ){
        number.textContent = inputEl.value + "%";
        marksEl.style.strokeDashoffset = (450 - (450*inputEl.value)/100);
        elibilityEl.innerHTML = `<p><i class="fas fa-check"></i> you are eligible</p>`
        elibilityEl.style.color = "green"
    }else if(inputEl.value > 0 && inputEl.value < 40 ){
        number.textContent = inputEl.value + "%";
        marksEl.style.strokeDashoffset = (450 - (450*inputEl.value)/100);
        elibilityEl.innerHTML = `<p><i class="fas fa-times"></i> you are not eligible</p>`
        elibilityEl.style.color = "red"
    }else{
        number.textContent =  "100%";
        marksEl.style.strokeDashoffset = (450 - (450*100)/100);


    }
})


