/*create an object and assign it to a variable "spinner".  (The trick is how you create the object)
The object should exhibit the following behavior:*/

spinner.up() //=> 1
spinner.up() //=> 2
spinner.up() //=> 3
spinner.up() //=> 4

spinner.down() //=> 3
spinner.down() //=> 2
spinner.down() //=> 1
spinner.down() //=> 0
spinner.down() //=> -1


function getSpinner(){
	var counter = 0;
	function increment(){
		return ++counter;
	}
	function decrement(){
		return --counter;
	}
	return {
		up : increment,
		down : decrement,
	}
}

/*create a function that will return if the given number 
is a prime number or not. The function should be able to remember 
the result and return the result from the cache if the algorithm was 
already run for the given number*/


isPrime(100) // => run the algorithm
isPrime(100) // => return the result from the cache
