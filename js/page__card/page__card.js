function check__season__price(season, number__button){
  let list__td__price = document.getElementsByClassName('td__price');
  let list__date = document.getElementsByClassName('date');
  let date = list__date[0];
  let price = [];

  if(season == 'low'){
    price = ['5500 руб.', '5000 руб.', '4500 руб.', '30 000 руб.'];
    date.innerHTML = '10.01-30.04; 21.10-27.12';
  }
  else if(season == 'between__season'){
    price = ['6500 руб.', '6000 руб.', '5000 руб.', '40 000 руб.'];
    date.innerHTML = '01.05-31.05; 01.09-20.10';
  }
  else{
    price = ['9000 руб.', '8000 руб.', '6500 руб.', '65 000 руб.'];
    date.innerHTML = '01.06-31.08';
  }
  
  for(let i = 0; i < price.length; i++){
    list__td__price[i].innerHTML = price[i];
  }

  let list__button = document.getElementsByClassName('button__season');
  for(let i = 0; i< list__button.length; i++){
    if(list__button[i].classList.length == 2){
      if(i == number__button){
        break;
      }
      list__button[i].classList.remove('button__season__active');
    }
  }
  list__button[number__button].classList.add('button__season__active');
}