//TO FIX: 
//Still the Bill Amount can be put in negative which is offcourse not desired
//Because of which all the other value will also get disturbed
//TIP% starts @15%, find the problem and solve it.
//I Don't like the amount badhane wale upar niche wale arrow in bill amount, so try to find fix for them and try to remove them.

const sliders = document.querySelectorAll("input[type= 'range']");
sliders.forEach(function(slider){
    slider.addEventListener("input", calculateTip);
})


const billInput = document.getElementById("bill");
billInput.addEventListener("change", calculateTip);


function calculateTip(){
    let bill = parseFloat(billInput.value);
    let tipPercent = document.getElementById("tip").value;
    let noOfPeople = document.getElementById("no-of-people").value;

    billInput.value = bill.toFixed(2);

    let totalTip = parseFloat(bill * (tipPercent/100).toFixed(2));
    let total = parseFloat((bill + totalTip).toFixed(2));

    let tipPerPerson = (totalTip / noOfPeople).toFixed(2);
    let totalPerPerson = (total / noOfPeople).toFixed(2);

    document.getElementById("tip-amount").textContent = `\$ ${totalTip}`;
    document.getElementById("total-amount").textContent = `\$ ${total}`;

    document.getElementById("tip-percent").textContent = `${tipPercent}%`;
    document.getElementById("split-num").textContent = noOfPeople;

    document.getElementById("tip-per-person").textContent = `\$ ${tipPerPerson}`;
    document.getElementById("total-per-person").textContent = `\$ ${totalPerPerson}`;

}

calculateTip();