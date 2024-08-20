// var grade = prompt("enter your grade");

// if(grade >=90){
//     console.log("A")
// }

//     else if(grade>=80 && grade< 90){
//         console.log('B')
//     }

//     else if(grade>=70 && grade< 80){
//         console.log('C')

//     }
//     else if(grade>=60 && grade< 70){
//         console.log('F')
//     }


//  function loop(startNum, endNum , breakNum , continueNum){

// for (var i = startNum; i <= end ; i++) { 
//     console.log(i);




let userName= prompt("enter your name");
let userId= prompt("enter your id");
let userBalance = prompt("enter your balance");


 let users=[];

   
function addProducts() {

    let userData ={
        clienName : prompt("enter your name"),
        clientId : prompt("enter your id"),
        clientBalance : prompt("enter your balance") };

        users.push(userData);
};

addProducts()




function editBalance(){
let uId = prompt("enter your id");
let newBalance = prompt("enter user id");
  var userNew = users.findIndex(ele =>ele.clientId==uId);

  if(userNew != -1) {
users[userNew].clientBalance = newBalance;

  }
else { 
    console.log("id not found")

}


}

editBalance()



function deleteUser(){
   var userIdToDelete = prompt("enter your id");


var userDelete = users.findIndex(ele =>ele.userIdToDelete == clientId );

users.splice(userDelete,1)


}
 deleteUser()




