let myImage = document.querySelector("img");
myImage.onclick = () => {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/lb5.jfif"){
        myImage.setAttribute("src","images/lb4.jfif");
    }else{
        myImage.setAttribute("src","images/lb5.jfif");
    }
}

let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");

function setUserName(){
    let myName = prompt("请输入您的姓名");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem("name",myName);
        myHeading.innerHTML = `${myName}，李白诗词很好背！`;
    } 
}

if(!localStorage.getItem("name")){
    setUserName();
}else{
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = `${storedName}，李白诗词很好背！`;
}

myButton.onclick = () => {
    setUserName();
};
