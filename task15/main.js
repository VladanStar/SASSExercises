

function deljiv(){
    let broj = document.getElementById('broj').value;
    let result = document.getElementById('result');
    if (broj % 3 === 0) {
    //  alert("Divisible by 3");
  
  result.innerHTML += ` Uneti broj: ${broj} je deljiv sa 3`;
    } else {
    //  alert("Not divisible by 3");
    result.innerHTML += ` Uneti broj: ${broj} nije deljiv sa 3`;
    }
  }