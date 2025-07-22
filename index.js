let slogan = document.getElementById("slogan");


const avatarChoise = document.getElementById("avatarChoise");

const sloganArray = ["Un Mars et ça repart ","Parce que nous le valons bien","C’est beau la vie, pour les grands et les petits "]

document.getElementById('randomDescription').addEventListener("click",(e)=>{
    const random=  Math.round(Math.random(1)*2)
    if (sloganArray[random]!== slogan.textContent) {
        slogan.textContent = sloganArray[random]
    } else if (sloganArray[random] === slogan.textContent) {
        if (random < 1 ) slogan.textContent = sloganArray[random +1]
        if (random > 1 ) slogan.textContent = sloganArray[random -1]
        if (random == 1 ) slogan.textContent = sloganArray[random +1]
    }
})


const username =document.getElementById("userName");

username.addEventListener("keypress",(e)=>{
    let errUserName = document.getElementById('regexUserName')
    let newUserName = document.getElementById('userName')
    newUserName = newUserName.value + e.key
        const regex = /^[a-zA-Z]+$/;
        console.log();
        
        if (!regex.test(newUserName)) {
            errUserName.classList.remove("hidden")
        } else if (regex.test(newUserName)) {
            errUserName.classList.add("hidden")
        }
})

avatarChoise.addEventListener("click",(e)=>{
    if (e.srcElement.id !== "img") return
    document.querySelector(".selected").classList.remove("selected");
    e.srcElement.classList.add("selected")
})

