var money = "Ваш бюджет на месяц";
var time = "Введите дату в формате YYYY-MM-DD";
var answer = +prompt(money);
var answer2 = prompt(time);
var appData = {
    moneyData: answer, 
    timeData: answer2,
    expenses : {},
    income: [],
    saving: false,
};



alert("ваш бюджет за один день", (answer / 30)) ;
console.log("appData");