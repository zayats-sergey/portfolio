
  const res = document.querySelector('#kvadro');
  const resetButton = document.querySelector('.reset');
  const counter = document.querySelector('#newId');
  const arr = ['kvadrat', 'item1', 'item2', 'item3'];
  let count = 0;

  function work() {
    count +=1;
  if (count === 0) {
     res.className = arr[0];
      } else if (count === 1) {
     res.className = arr[1];
    } else if (count === 2) {
      res.className = arr[2];
    }else if (count === 3) {
      res.className = arr[3];
    } else if (count === 4) {
      res.className = arr[0];
      count = 0;
    } 
}

const workout = ()=>{
  work()
  numberCount = `${count}`
  counter.innerHTML = numberCount;
}

function resetResponse(){
  count = 0;
  numberCount = `${count}`
  counter.innerHTML = numberCount;
  res.className = arr[0];
}

  counter.addEventListener("click", workout);
  resetButton.addEventListener("click", resetResponse);
