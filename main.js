
//доходы
const incomeSalary = document.getElementById('income-salary'),
    incomeFreelance = document.getElementById('income-freelance'),
    incomeExtra1 = document.getElementById('income-extra-1'),
    incomeExtra2 = document.getElementById('income-extra-2');


    //расходы
const costsFlat = document.getElementById('costs-flat'),
    costsMouseServices = document.getElementById('costs-house-services'),
    costsTransport = document.getElementById('costs-transport'),
    costsCredit = document.getElementById('costs-credit');

//total inputs
const totalMonthInput = document.getElementById('total-month'),
    totalDayInput = document.getElementById('total-day'),
    totalYearInput = document.getElementById('total-year');

let totalMonth, totalDay, totalYear;

//money box
const moneyBoxRange = document.getElementById('money-box-range'),
    accumulationInput = document.getElementById('accumulation'),
    spend = document.getElementById('spend');

let accumulation = 0;
let totalPresents = 0;

const  inputs =  document.querySelectorAll('.input');
for (input of inputs){
    input.addEventListener('input', () =>{
        countingAvailableMoney()
    })
}

const strToNum = srt => srt.value ? parseInt(srt.value) : 0


const countingAvailableMoney = () => {
    const totalPerMonth = strToNum(incomeSalary) +  strToNum(incomeFreelance) + strToNum(incomeExtra1) +strToNum(incomeExtra2);
    const totalCosts = strToNum(costsFlat) +  strToNum(costsMouseServices) + strToNum(costsTransport) +strToNum(costsCredit);

    totalMonth = totalPerMonth - totalCosts;
   totalMonthInput.value = totalMonth
}


