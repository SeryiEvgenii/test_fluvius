/*
*
* 1. Есть массив [10, 20, 30].
*    Поменяйте местами 0 и 1 элементы, чтобы получилось [20, 10, 30]
*
*/

const list = [10, 20, 30];

function changeElements(list){
	let firstEl = list[0];
	let secondEl = list[1];
  list.splice(0, 2, secondEl, firstEl);
}

changeElements(list);
console.log(list);

/*
*
* 2. Есть массив [30, -5, 0, 10, 20].
*    Напишите функцию сортировки от наименьшего к наибольшему, результат [-5, 0, 10, 20, 30]
*
*/

const list2 = [30, -5, 0, 10, 20];

function mySort(list){
	list.sort((first, next) => first > next);
}

mySort(list2);
console.log(list2);

/*
*
* 3. Напишите свою реализацию bind.
*
*/

var func1 = function(message) {
	this(message);
}

var func2 = func1.bind(alert);
func2('Test'); // alert 'Test'

function myBind(context) {
  return function() {
    var bindArguments = [].slice.call(arguments);
    return func2.apply(context, bindArguments);
  };
}

var func3 = myBind(func1, alert);
func3('Test'); // alert 'Test'
