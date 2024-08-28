// Date: 26/08/2024
// Name: Phan Nguyễn Khôi Nguyên
// MSSV: 21068021
// Description: Coding Challenge #1 Dom and Events


/*
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input 
fields
4. Also restore the original background color (#222) and number width (15rem)
*/

// document.querySelector('.again').addEventListener('click', function(){
//     score = 20;
//     secretNumber = Math.trunc(Math.random()*20)+1;
//     document.querySelector('.message').textContent = 'Start guessing...';
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.guess').value = '';
//     document.querySelector('body').style.backgroundColor = '#222';
//     document.querySelector('.number').style.width = '15rem';    
// })



document.querySelector('.again').addEventListener('click', function() {
    let score = 20; //tạo biến score để lưu điểm
    const secretNumber = Math.trunc(Math.random() * 20) + 1; //tạo biến secretNumber để lưu số bí mật
  
    
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
  
    // Step 4: Restore original background color and number width
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });