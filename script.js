"use strict";
// let money,
// 		time;

// money = prompt("Ваш бюджет на месяц?");

// time = prompt("Введите дату в формате YYYY-MM-DD");
var money,
		time,
		a,
		b;

let appData = {
	budjet:money,
	timeData:time,
	expenses:{
		a:"1",
		b:"50000"
	},
	optionalExpenses:{

	},
	income:[
	],
	savings:false
}

a = prompt("Введите объязательную статью расходов в этом месяце?");
b = prompt("Во сколько обойдется?");
var third = alert(appData.expenses);



