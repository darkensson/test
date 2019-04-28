"use strict"
let money, time;
function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt("Введите дату в формате YYYY-MM-DD", '');

	while(isNaN(money) || money == "" || money == null){
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}
start();



		let appData = {
			budget:money,
			expenses:{},
			optionalExpenses:{},
			income:[],
			timeData:time,
			savings:true
		};
		
		function chooseExpenses() {
					for(let i = 0; i < 2; i++){
				let a = prompt("Введите объязательную статью расходов в этом месяце", ''),
				b = prompt("Во сколько обойдется?", '');

				if((typeof(a))==="string" && (typeof(a)) != null && (typeof(b)) != null
					&& a != '' && b != '' && a.length < 50){
					console.log('done');
					appData.expenses[a] = b;
					appData.moneyPerDay = (appData.budget/30).toFixed();
					alert("Ежедневный бюджет " + appData.moneyPerDay);
				}else{
					i = i - 1;
				}
		};
	}
		chooseExpenses();

function detectDayBudget() {
	appData.moneyPerDay = (appData.budget/30).toFixed();
	alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}
detectDayBudget();


// 	function detectLevel() {
// 		if(appData.moneyPerDay < 100){
// 			console.log("Минимальный уровень достатка");
// 		}else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
// 			console.log("Средний уровень достатка");
// 		}else if(appData.moneyPerDay > 2000){
// 			console.log("Высокий уровень достатка");
// 		}else{
// 			console.log("Произошла ошибка");
// 		};
// }
// detectLevel();

function chooseOptExpenses() {
	for(let i = 1; i <= 3; i++){
	let questionOptExpenses = prompt("Статья необъязательных расходов?");
	appData.optionalExpenses[i] = questionOptExpenses;
	console.log(appData.optionalExpenses);
	}
}

chooseOptExpenses();

// function checkSavings() {
// 	if (appData.savings == true){
// 		let save = +prompt("Какова сумма накоплений?"),
// 				percent = +prompt("Под какой процент?")

// 				appData.monthIncome = save/100/12*percent;
// 				alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
// 	}
// }

// checkSavings();

// var i = 0;
// while(i<2){
// 	i++;
// 	let a = prompt("Введите объязательную статью расходов в этом месяце", ''),
// 				b = prompt("Во сколько обойдется?", '');
// 				if((typeof(a))==="string" && (typeof(a)) != null && (typeof(b)) != null
// 					&& a != '' && b != '' && a.length < 50){
// 					console.log('done');
// 					appData.expenses[a] = b;
// 				}else{
					
// 				}
// };

// let i = 0;
// do{
// 	let a = prompt("Введите объязательную статью расходов в этом месяце", ''),
// 				b = prompt("Во сколько обойдется?", '')

// 				if((typeof(a))==="string" && (typeof(a)) != null && (typeof(b)) != null
// 					&& a != '' && b != '' && a.length < 50){
// 					console.log('done');
// 					appData.expenses[a] = b;
// 				}else{
					
// 				}
// }
// while(i<2);
// let num = 20;
// function showFirstMessege(text) {
// 	alert(text);

// 	console.log(num);
// }

// showFirstMessege("Hello world");
// console.log(num);
// let calc = function (a,b) {
// 		return (a + b);
// }

// let calc = (a,b) => a+b 

// console.log(calc(3,4));
// console.log(calc(8,4));

// function retVar() {
// 	let num = 50;
// 	return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let str = "test";
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = "12.2px";

// // console.log(Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));
