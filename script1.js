let money = +prompt("Ваш бюджет на месяц?", ''),
		time = prompt("Введите дату в формате YYYY-MM-DD", '');

		let appData = {
			budget:money,
			expenses:{},
			optionalExpenses:{},
			income:[],
			timeData:time,
			savings:false
		};
		



let i = 0;
do{
	let a = prompt("Введите объязательную статью расходов в этом месяце", ''),
				b = prompt("Во сколько обойдется?", '')

				if((typeof(a))==="string" && (typeof(a)) != null && (typeof(b)) != null
					&& a != '' && b != '' && a.length < 50){
					console.log('done');
					appData.expenses[a] = b;
				}else{
					
				}
}
while(i<2);