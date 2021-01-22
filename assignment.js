
// 1st task -
function kilometreToMetre (kilometre){
    var metre = kilometre * 1000;
    return metre;
}
var length1 = kilometreToMetre(32);
console.log(length1);
var length2 = kilometreToMetre(40);
console.log(length2);


// 2nd task -
 function budgetCalculator(watch, mobile, laptop){
     var total = watch*50 + mobile*100 + laptop*500;
     return total;
 }
 var deviceCost = budgetCalculator(2, 3, 5);
 console.log(deviceCost);


// 3rd task -
 function hotelCost(stayIn) {
     var cost = 0;
     if (stayIn <= 10) {
         cost = stayIn * 100;
     }
      else if (stayIn <= 20) {
          var firstPart = 10 * 100;
          var remaingingday = stayIn - 10;
          var secondPart = remaingingday * 80;
          cost = firstPart + secondPart;
     }
     else{
         var firstPart = 10 * 100;
         var secondPart = 20 * 80;
         var remaingingday = stayIn - 20;
         var thirdPart = remaingingday * 50;
         cost = firstPart + secondPart + thirdPart;
     }
     return cost;

 }
  var totalCost = hotelCost(24);
  console.log(totalCost);


//   4th task-
function megaFriend(friendsName){
    var max = friendsName[0];
    for ( var i = 0; i < friendsName.typeof; i++){
        var element = friendsName[i];
        if( element > max){
            max = element;
        }
    } 
    return max;
}
var  friendsName = ["Rafsasn","Fara","Ria","Onil"]
var result = megaFriend(friendsName);
console.log(result);