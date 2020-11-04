console.log('Hello Royals!'); //test code

const today=new Date(); //gets the current date from the computer


function checkForFriday(day){
  if(day.getDay()===5){
    document.querySelector('$answer').innerHTML='YES!';
  } else {
    document.querySelector('#answer').innerHTML='NO';
  }

} //end of checkForFriday

checkForFriday(today);
