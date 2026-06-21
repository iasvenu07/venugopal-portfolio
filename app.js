// Typing Animation

const roles = [
    "Cloud Developer",
    "Frontend Engineer",
    "AI/ML Enthusiast",
    "Technical Support Engineer"
];

let roleIndex = 0;
let charIndex = 0;

const typingText = document.getElementById("typing-text");

function typeEffect(){

    if(charIndex < roles[roleIndex].length){

        typingText.textContent +=
            roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }
    else{

        setTimeout(eraseEffect,1500);

    }

}

function eraseEffect(){

    if(charIndex > 0){

        typingText.textContent =
            roles[roleIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }
    else{

        roleIndex++;

        if(roleIndex >= roles.length){

            roleIndex = 0;

        }

        setTimeout(typeEffect,500);

    }

}

document.addEventListener("DOMContentLoaded",()=>{

    if(roles.length){

        setTimeout(typeEffect,1000);

    }

});
