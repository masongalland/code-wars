/*
http://www.codewars.com/kata/55f89832ac9a66518f000118/train/javascript

1. use regex to replace symbols with the symbol with a space before it
2. split the string at every space
3. map over the array to sort the letters in each element.
4. do nested loops to perform the math.
5. after doing math, remove second element being worked on from the array.
6. sort the array based on number of variables in each element.
    - if they have the same number of variables, sort those two alphabetically
7. if first element in array has a plus symbol.

*/


function evaluate(op, num1, num2) {
	switch (op) {
		case "+":
			let sum = +num1 + +num2;
			return sum >= 0 ? `+${sum}` : sum;
		case "-":
			let sum2 = +num1 - +num2;
			return sum2 >= 0 ? `+${sum2}` : sum2;
	}
}

function simplify(poly) {
	var arr = poly
		.replace(/([+-])/g, " $1")
		.trim()
		.split(" ");
	var alph = arr.map(
		e =>
			e[0] +
			e
				.slice(1)
				.split("")
				.sort()
				.join("")
	);
	alph[0] = alph[0].replace(/^([^+-])/, "+$1");

	for (let i = 0; i < alph.length; i++) {
		alph[i] = alph[i].replace(/^(.)(\D)/, "$11$2");
		let v1 = alph[i].slice(2);

		for (let j = i + 1; j < alph.length; j++) {
			alph[j] = alph[j].replace(/^(.)(\D)/, "$11$2");
			let v2 = alph[j].slice(2);
			if (v1 === v2) {
				let op = alph[j][0];
				let num2 = alph[j][1];
				let sum = evaluate(op, alph[i].slice(0, 2), num2);
				if (sum === 1) sum = "";
				alph[i] = alph[i].replace(/[+-]\d/, sum);
				alph.splice(j, 1);
			}
		}
		alph[i] = alph[i].replace(/([+-])1/, "$1");
		if (alph[i][1] === "0") {
			alph.splice(i, 1);
			i--;
		}
	}

	alph.sort((a, b) => {
		let aVar = a.match(/[^-+\d]\D*/)[0];
		let bVar = b.match(/[^-+\d]\D*/)[0];
		if (aVar.length !== bVar.length) {
			return aVar.length - b.match(/[^-+\d]\D*/)[0].length;
		} else {
			for (let i = 0; i < aVar.length; i++) {
				if (aVar[i] !== bVar[i]) {
					return aVar.charCodeAt(i) > bVar.charCodeAt(i);
				}
			}
		}
  });
  alph[0] = alph[0].replace(/^\+/, "")

  return alph.join("")
}
