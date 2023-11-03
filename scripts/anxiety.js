var questions = ["I find it very hard to unwind, relax or sit still","I have had stomach problems, such as feeling sick or stomach cramps","I have been irritable and easily become annoyed","I have experienced shortness of breath","I have felt dizzy and unsteady at times","I have had difficulties with sleep (including waking early, finding it hard to go to sleep)","I have felt panicked and overwhelmed by things in my life","I have felt nervous and on edge","I have had trembling hands","I seem to be constantly worrying about things"]
var desc = ["This feelings have symptoms", "Please describe your personality"];
var mental = ["Depression","Schizophrenia", "Bipolar disorder", "Obsessive compulsive disorder ( OCD)", "Panic disorder", "Post traumatic stress (PTSD)", "Borderline personality disorder]"];
// var mental = ["Schizophrenia", "Panic Disorder", "Obbesive Compulsive Disorder"];

var qnblock = document.getElementById("qnblock");
var step = 1;
var score = 0;
// qnblock.style.display = "none";                                                                   
// qnblock.style.backgroundColor = "red";
// questions.forEach(function question(value, index) {
//     qnblock.innerHTML =
//     `<h1 class="text-xl font-medium title-font mb-4 text-gray-900">${value}</h1>`
                                      
// });
changeQN(0);
function changeQN(index) {
    qnblock.innerHTML =
    `<h1 class="text-xl font-medium title-font mb-4 text-gray-900">${questions[index]}</h1>`
}

var st1block = document.getElementById("st1-block");
var st1data = "";
mental.forEach(function mental(value, index) {
    st1data = st1data + `<div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
    <input id="mental${index}" type="checkbox" value="100" name="bordered-mental" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label for="mental${index}" class="w-full py-4 ml-2 text-sm font-medium text-gray-900">${value}</label>
    </div>
    `;

});
// console.log(st1data);
st1block.innerHTML = st1data;

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
changetab();
function changetab(params) {
    
    if (step == 1) {
        step1.style.display = "none";
        // step2.style.display = "none";
        step2.style.display = "block";
    }else if (step == 2) {
        step1.style.display = "none";
        step2.style.display = "block"; 
    }
}
changestep();
function changestep() {
    if (step == 1) {
        const st1 = document.getElementById("st1");
        st1.style.color = "green";
        st1.style.backgroundColor = "#f0f0f0";
    }else if (step == 2){
        const st2 = document.getElementById("st2");
        st2.style.color = "green";
        st2.style.backgroundColor = "#f0f0f0";
    }else if (step == 3){
        const st3 = document.getElementById("st3");
        st3.style.color = "green";
        st3.style.backgroundColor = "#f0f0f0";
    }else if (step == 4){
        const st4 = document.getElementById("st4");
        st4.style.color = "green";
        st4.style.backgroundColor = "#f0f0f0";
    }else if (step == 5){
        const st5 = document.getElementById("st5");
        st5.style.color = "green";
        st5.style.backgroundColor = "#f0f0f0";
    }else if (step == 6){
        const st6 = document.getElementById("st6");
        st6.style.color = "green";
        st6.style.backgroundColor = "#f0f0f0";
    }else if (step == 7){
        const st7 = document.getElementById("st7");
        st7.style.color = "green";
        st7.style.backgroundColor = "#f0f0f0";
    }else if (step == 8){
        const st8 = document.getElementById("st8");
        st8.style.color = "green";
        st8.style.backgroundColor = "#f0f0f0";
    }else if (step == 9){
        const st9 = document.getElementById("st9");
        st9.style.color = "green";
        st9.style.backgroundColor = "#f0f0f0";
    }else if (step == 10){
        const st10 = document.getElementById("st10");
        st10.style.color = "green";
        st10.style.backgroundColor = "#f0f0f0";
    }else if (step == 11){
        const st11 = document.getElementById("st11");
        st11.style.color = "green";
        st11.style.backgroundColor = "#f0f0f0";
    }
}
var st1bar = document.getElementById("stepbar");
var stpbardata = "";
questions.forEach(function question(value, index) {
    stpbardata = stpbardata +  `
    <a id="st${(index + 2)}" class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 text-gray-500 tracking-wider rounded-t">
        ${(index + 2)}
    </a>`
});

st1bar.innerHTML = stpbardata;



function next() {
    if (step == 1) {
        for (let index = 0; index < mental.length; index++) {
            // const element = array[index];
            if (document.getElementById('mental'+index).checked) {
                score = score + 10;
                document.getElementById('mental'+index).checked = true; 
            }
        }
        step = 2;
    }else if(step < questions.length-1) {
        if (document.getElementById('answer-yes').checked) {
            score = score + 5;
        }
        step++; 
    }else {
        console.log("Finished");
        const message = document.getElementById('result-message');
        const suggestions = document.getElementById('result-suggest');
        const result = document.getElementById('result');
        document.getElementById('qnlist').style.display = "none";
        step1.style.display = "none";
        step2.style.display = "none"; 
        result.style.display = "block"; 
        if (score < 15) {
            // alert("You are sad And everything will be fine!");
            message.innerText = "Little to Moderate ADHD disorder";
            suggestions.innerText = "Your Score: " + "("+ score+"/60)";

            
        }if (score < 50) {
            // alert("You are depressed and you should seek for proffessional guidance");
            message.innerText = "Moderate to severe ADHD disorder";
            suggestions.innerText = "Your Score: " + "("+ score+"/60)";
        }
        // alert("You are depersed by Score: "+ score);
        
    }
    changetab();
    changestep();
    changeQN(step-2);
}