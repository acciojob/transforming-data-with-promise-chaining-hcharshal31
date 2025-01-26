//your JS code here. If required.
let inputNum = document.getElementById("ip");
let outputNum = document.getElementById("output");
// let val = document.getElementById("ip").value;
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {

    let promise = new Promise((resolve) => {
        setTimeout(() => {
          let num = parseInt(inputNum.value); // Get the input number
          outputNum.textContent = `Result: ${num}`;
          resolve(num);
        }, 2000);
      });    

	promise
	.then((data) =>{
		// outputNum.textContent = `Result: ${data}`;
		return promise1(data);
	})
	.then((data) =>{
		outputNum.textContent = `Result: ${data}`;
		return promise2(data);
	})
	.then((data) =>{
		outputNum.textContent = `Result: ${data}`;
		return promise3(data);
	})
	.then((data) =>{
		outputNum.textContent = `Result: ${data}`;
		return promise4(data);
	})
	.then((data) =>{
		outputNum.textContent = `Result: ${data}`;
		return promise5(data);
	})
	.then((data) =>{
		outputNum.textContent = `Final Result: ${data}`;
	})
});


let promise1 = (data) =>{ 
	return new Promise(resolve =>{
		setTimeout(() => {
			resolve(data);
		}, 2000);
	});
}

let promise2 = (data) => {
	return new Promise(resolve => {
		setTimeout(() => {
			data *= 2;
			resolve(data);
		}, 1000);
	})
}

let promise3 = (data) => {
	return new Promise(resolve => {
		setTimeout(() => {
			data -= 3;
			resolve(data);
		}, 1000);
	})
}

let promise4 = data => {
	return new Promise(resolve => {
		setTimeout(() => {
			data /= 2;
			resolve(data);
		}, 1000);
	})
}

let promise5 = data => {
	return new Promise(resolve => {
		setTimeout(() => {
			data += 10;
			resolve(data);
		}, 1000);
	})
}