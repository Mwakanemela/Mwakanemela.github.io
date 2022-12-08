// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// document.querySelector("body").addEventListener("click", () => {
//     alert("Stop clicking the heading");
// });

const myImg = document.querySelector("img");

myImg.onclick = () => {
    const mySrc = myImg.getAttribute("src");

    if(mySrc === "images/dyuni.jpg") {
        myImg.setAttribute("src", "images/dyuniElders.jpg");
    }else {
        myImg.setAttribute("src", "images/dyuni.jpg");
    }
};

let myButton = document.querySelector("button");
myButton.onclick = () => {
    setUserName();
}
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Enter user name : ");

    if(!myName) {
        setUserName();
    }else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `JavaScript is cool, ${myName}`;
    }
    

    if(!localStorage.getItem("name")) {
        setUserName();
    }else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `JavaScript is cool, ${storedName}`;
    }
     
}