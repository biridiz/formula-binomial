function P (n, p, x, percent = false, acum = false) {
  if (percent) {
    p = (p / 100);
  }

  if (acum) {
    let total = 0;
    for (let i = 0; i <= x; i++) {
      total += P(n, p, i, false, false);
    }
    return total;
  }

  const q = (1 - p);
  return C(n, x) * Math.pow(p, x) * Math.pow(q, n - x);
}

function C (n, x) {
  return fat(n) / (fat(n - x) * fat(x));
}

function fat (n) {
  let result = n;
  if (n === 0 || n === 1) {
    return 1;
  }
  while (n > 1) { 
    n--;
    result *= n;
  }
  return result;
}

const calculateButton = document.getElementById("calculateButton");

calculateButton.onclick = function () {
  const n = document.getElementById("n").value;
  const p = document.getElementById("p").value;
  const x = document.getElementById("x").value;

  if (!(n, p, x)) {
    return alert("Preencha todos os campos");
  }

  const percent = document.getElementsByName("type")[0].checked;
  const acum = document.getElementById("acum").checked;

  const result = P(n, p, x, percent, acum);
  formatedResult = (result * 100).toFixed(2);

  const divResult = document.getElementById("result");
  divResult.innerHTML = `Resultado: ${formatedResult}%`;
}
