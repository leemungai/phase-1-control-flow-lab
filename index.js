function scuberGreetingForFeet(distance) {

  if (distance <= 400){
    return "This one is on me!";
  }
  else if (distance > 400 && distance <2000) {
    return "That will be twenty bucks.";
  }
  else if (distance > 2000 && distance < 2500) {
    return "I will gladly take your thirty bucks.";

 } else if (distance > 2500) {
   return "No can do.";
  }
}

function ternaryCheckCity(city, result) {
  //if(city === 'NYC'){
      //return 'Ok, sounds good.'
      // else 'Pittsburgh';{
      //   return 'No go'
      // }
      
  //result = city === 'NYC' ?
  result = city ==='NYC' ? "Ok, sounds good." : "No go."
    return result
  }


function switchOnCharmFromTip(tip) {
//  if (tip >= 'generous') {
//   return 'Thank you so much.'
//  }
  switch (tip){
    case 'generous':
      return 'Thank you so much.'
      break;
      case 'not as generous' :
        return 'Thank you.'
        break;
        default :
        return 'Bye.'
  }
        

}
