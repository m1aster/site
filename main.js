// 1. Проблема Голов и Ног

function animals(x, y) {
	return x + y;
}
console.log( animals(42,29) );
console.log( animals(100,100) ); 


// Function Expression
var funcExp = function(x, y) {
	return [x + y];
}

console.log( funcExp(42,29) );
console.log( funcExp(100,100) ); 


// Function Declaration

function func() { 
	function funcDecl() {
		return 'one';
	}

	var variable = funcDecl(); 

function funcDecl() {
		return 'two';
	}

	return variable;

};

function func1() { 
	function funcDecl() {
		return 'one';
	}

	var variable = funcDecl(); 

  var funcDecl = function () {
		return 'two';
	}

	return variable;

};
console.log( func() );
console.log( func1() );


// Функции (возврат значений)

var func = function(callback) {
	var name = "Serega";
	return callback(name);
};

console.log( func(function(n){
	return "Hello " + n;
}) );


var func = function() {
	return function() {
		console.log('Hello!!!' );
	};
};
func()();


// Аноним функция

(function(){
	console.log( 'Анонимная самовызывающая функция' );
})();

var funcArgs = function(a,b,c){
	console.log( arguments );
};

funcArgs(1,2,3);

var funcArgs = function(){
	var i,
	   sum = 0;
	for(i = 0; i < arguments.length; i++){
		sum += arguments[i]
	} ;  
	
	return sum;
};

console.log( funcArgs(29,42) );

// Стрелочная function

let add = (x, y) => x + y;

let square = (x) => x * x;

console.log( add(2,6) );
console.log( square(6) );


// 2. Возможные реакции:

function my_fun(a){

var a = 2 + 2;


switch (a) {
  case 2: respond = "10";
    alert( "Чего так мало?" );
  case 3: respond = "50";
    alert( "Более чем достаточно" );
  case 4: respond = "100";
    alert( "Почему их так много" );
  case 5: respond = "101";
    alert( "Ого, 101 далматинец!"  );
}
}
console.log(my_fun(101));


//3. Fizz Buzz.

for (var i = 1; i <= 100; i++) {

	if ( i % 3 == 0 && i % 5 == 0) {
		console.log("Fizz Buzz");
	}
	else if ( i % 3 == 0) {
		console.log("Fizz");
	}

	else if ( i % 5 == 0) {
		console.log("Buzz");
	}

	else {
		console.log(i);
	}
}

