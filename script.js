//your JS code here. If required.
btn.addEventListener("click", () => {
	
});

// let num = parseInt(prompt());
let inputNum = document.getElementById("ip");
let outputNum = document.getElementById("output");

let promise = new Promise((resolve, reject) =>{
	setTimeout(() => {
		inputNum.value = num;
		
		resolve(num);
	}, 2000);
});

let promise1 = (data) =>{ 
	return new Promise((resolve, reject) =>{
		setTimeout(() => {
			inputNum.value = num;
			// outputNum.textContent = `Result: ${outputNum}`;
			resolve(num);
		}, 2000);
	});
}

let promise2 = (data) => {
	return new Promise(resolve => {
		setTimeout(() => {
			data *= 2;
			inputNum.value = data;
			resolve(data);
		}, 1000);
	})
}

let promise4 = (data) => {
	return new Promise(resolve => {
		setTimeout(() => {
			data -= 3;
			inputNum.value = data;
			resolve(data);
		}, 1000);
	})
}

let promise4 = (data) => {
	return new Promise(resolve => {
		setTimeout(() => {
			data /= 2;
			inputNum.value = data;
			resolve(data);
		}, 1000);
	})
}

let promise5 = (data) => {
	return new Promise(resolve => {
		setTimeout(() => {
			data += 10;
			inputNum.value = data;
			resolve(data);
		}, 1000);
	})
}

promise.then(data => {
	outputNum.textContent = `Result: ${data}`;
	return promise1;
})
.then(data => {
	outputNum.textContent = `Result: ${data}`;
	return promise2;
})
.then(data => {
	outputNum.textContent = `Result: ${data}`;
	return promise3;
})
.then(data => {
	outputNum.textContent = `Result: ${data}`;
	return promise4;
})
.then(data => {
	outputNum.textContent = `Result: ${data}`;
	return promise5;
})
.then(data => {
	outputNum.textContent = `Final Result: ${data}`;
})