const w1 = document.querySelector(".w1");
let num1 = document.querySelector(".w1 span");
let x1 = 0;
function num1w() {
    x1++;
    num1.innerHTML = x1;
}
function del1() {
    x1 = 0;
    num1.innerHTML = x1;
}

// ----------------------------

const w2 = document.querySelector(".w2");
const work2 = document.querySelector(".work2");

function seeMore() {
    let ptext1 = document.createElement("b");
    ptext1.innerHTML =
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, autem iste eius nihil reprehenderit necessitatibus. Nisi, magnam ab quasi ipsam at non iste necessitatibus fugiat ad, odio alias sit dolorem.";
    work2.appendChild(ptext1);
}

// -----------------------------------

const form1 = document.querySelector(".work3 form");
const tbody1 = document.querySelector(".work3 tbody");
const inpfn = document.querySelector(".fname");
const inpln = document.querySelector(".lname");

form1.addEventListener("submit", function (e) {
    e.preventDefault();
    let tr = document.createElement("tr");
    let numform = 0;
    numform = tbody1.children.length + 1;
    tr.innerHTML = `
    <td>${numform}</td>
    <td>${inpfn.value}</td>
    <td>${inpln.value}</td>
    `;
    tbody1.appendChild(tr);

    inpfn.value = "";
    inpln.value = "";
});

// ------------------------------------

const formname = document.querySelector(".work4 .username");
const formpass = document.querySelector(".work4 .password");
const formbtn = document.querySelector(".work4 button");

formbtn.addEventListener("click", function () {
    if (formname.value === "john32" && formpass.value === "123456") {
        let ptext2 = document.createElement("p");
        ptext2.innerHTML = "Welcome to the website, John Doe!";
        document.body.appendChild(ptext2);
    } else {
        let ptext3 = document.createElement("p");
        ptext3.innerHTML = "Invalid username or password!";
        document.body.appendChild(ptext3);
    }
});

// ------------------------------------
