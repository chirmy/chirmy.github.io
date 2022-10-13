let myHeading1 = document.querySelector('h1');
myHeading1.textContent = 'Hello world!';

let myHeading2 = document.querySelector('h2');
myHeading2.textContent = 'Hello JavaScript!';
  alert('我最喜欢巧克力冰激淋了。');
document.querySelector('h1').addEventListener('click',()=> {
    alert('别戳我，我怕疼。');
});


let myImage = document.querySelector('img');

myImage.addEventListener('click',()=> {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox.png');
    }
});


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('请输入你的名字。');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla 酷毙了，' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}
myButton.onclick = function() {
   setUserName();
}



