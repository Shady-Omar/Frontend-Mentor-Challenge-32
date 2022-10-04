let bill = document.querySelector("#bill");
let people = document.querySelector("#people");
let amount = document.querySelector("#amount");
let totalPerPerson = document.querySelector("#total");
let tip = document.querySelectorAll(".per");
let custom = document.querySelector("#custom")
let reset = document.querySelector("#reset")

bill.value = "0"
people.value = "1"
amount.innerHTML = "$" +(0.0).toFixed(2)
total.innerHTML = "$" +(0.0).toFixed(2)

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.1;

function billInput () {
    billValue = parseFloat(bill.value);
    calcTip()
}

function peopleInput () {
    peopleValue = parseFloat(people.value);
    calcTip()
} 

function tipInput () {
    tipValue = parseFloat(custom.value) / 100;

    tip.forEach(function(e) {
        e.classList.remove("active");
    });
    calcTip()
}

bill.addEventListener('input', billInput)
people.addEventListener('input', peopleInput)
custom.addEventListener('input', tipInput)
tip.forEach(function(e) {
    e.addEventListener('click', tips)
})
reset.addEventListener('click', clickReset)


function tips(event) {
    tip.forEach(function(e) {
        e.classList.remove("active");
        if (event.target.innerHTML == e.innerHTML) {
            e.classList.add("active");
            tipValue = parseFloat(e.innerHTML) / 100;
        }
    });
    calcTip()
}

function calcTip() {
    if (peopleValue >= 1) {
        let tipAmount = (billValue * tipValue) / peopleValue;
        let total = (billValue / peopleValue) + tipAmount;
        amount.innerHTML = "$" + tipAmount.toFixed(2)
        totalPerPerson.innerHTML = "$" + total.toFixed(2)
    }
    
    if (isNaN(billValue)) {
        amount.innerHTML = "$" +(0.0).toFixed(2)
        total.innerHTML = "$" +(0.0).toFixed(2)
    }
}

function clickReset() {
    bill.value = "0";
    billInput()
    people.value = "1";
    peopleInput()
    amount.innerHTML = "$" +(0.0).toFixed(2);
    total.innerHTML = "$" +(0.0).toFixed(2);
    custom.value = ""
}