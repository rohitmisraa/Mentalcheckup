var questions = ["I have saved up so many things that they get in the way.","I check things more often than necessary.","I get upset if objects are not arranged properly.","I feel compelled to count while I am doing things.","I find it difficult to touch an object when I know it has been touched by strangers or certain people.","I find it difficult to control my own thoughts.","I repeatedly check doors, windows,drawer etc.","I get upset when others change the way i have arrange things.","I feel i have to repeat certain numbers.","I sometimes have to wash or clean myself simply because i feel contaminated.","I am upset by unpleasent thoughts that come into my mind against my will.","I avoid throwing things away because i am afraid i might need them later.","I need things to be arranged in a particular ways."]
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

var st1bar = document.getElementById("stepbar");
var stpbardata = "";
questions.forEach(function question(value, index) {
    if (index == 0) {
        stpbardata = stpbardata +  `
        <a id="st${(index + 1)}" class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 text-gray-500 tracking-wider rounded-t">
            ${(index + 1)}
        </a>`
        
    }else{
        stpbardata = stpbardata +  `
        <a id="st${(index + 1)}" class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 text-gray-500 tracking-wider rounded-t">
            ${(index + 1)}
        </a>`

    }
});

st1bar.innerHTML = stpbardata;

changestep();
function changestep() {
    if (step <= questions.length) {
        const steps = document.getElementById("st"+step);
        steps.style.color = "green";
        steps.style.backgroundColor = "#f0f0f0";
    }
}

function next() {
    if (step < questions.length) {
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
            message.innerText = "Little to Moderate OCD disorder";
            suggestions.innerText = "Your Score: " + "("+ score+"/60)";

            
        }if (score < 50) {
            // alert("You are depressed and you should seek for proffessional guidance");
            message.innerText = "Moderate to severe OCD disorder";
            suggestions.innerText = "Your Score: " + "("+ score+"/60)";
        }
        // alert("You are depersed by Score: "+ score);
        
    }
    changetab();
    changestep();
    changeQN(step-1);
}