const app = document.querySelector("#app");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

app.addEventListener("keypress", async function (event) {
  if (event.key === "Enter") {
    await delay(150);
    getInputValue();

    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function (event) {
  const input = document.querySelector("input");
  input.focus();
});

async function open_terminal() {
  createText("Welcome");
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("You can run several commands:");
  createCode("projects", "See things I have built with coding");
  createCode("about me", "Who am i and what do i do.");
  createCode("GUI", "Open the non terminal verison of the website");

  await delay(500);
  new_line();
}

function new_line() {
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path");
  p.textContent = "anonymous";
  span1.textContent = "@";
  span2.textContent = "rudyp.me";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
}

function removeInput() {
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue() {
  const value = document.querySelector("input").value;
  if (value === "help") {
    trueValue(value);

    createCode(
      "projects",
      "My github page with my projects. Follow me there ;)"
    );
    createCode("about me", "Who am i and what do i do.");
    createCode("gui", "open GUI verison of website");
    createCode("clear", "Clean the terminal.");
  } else if (value === "projects") {
    trueValue(value);
    createText(
      "<a href='https://rudyp.me/gui'><i class='fa-solid fa-code'></i> rudyp.me- GUI verison</a>"
    );
    createText(
      "<a href='https://github.com/realrudy' target='_blank'><i class='fab fa-github white'></i> github.com/realrudy</a>"
    );
    createText(
      "<a href='https://shelf.rudyp.me' target='_blank'><i class='fa-solid fa-book-atlas'></i> KMS Shelf Finder</a>"
    );
  } else if (value === "gui") {
    trueValue(value);
    createText("Loading %%....");
    setTimeout(() => {
      createText("Loading%%%..");
    }, 1000);
    setTimeout(() => {
      createText("Loading %%%%%.");
      var x = document.getElementById("contain");
      x.style.display = "none";

    }, 3000);

  } else if (value === "about me") {
    trueValue(value);
    createText("I'm Rudy!!)");
    createText(
      "I'm just a kid who probally codes to many sites and helps his freinds code. I know HTML/Css/Js and a bit of Python."
    );
  } else if (value === "clear") {
    document.querySelectorAll("p").forEach((e) => e.parentNode.removeChild(e));
    document
      .querySelectorAll("section")
      .forEach((e) => e.parentNode.removeChild(e));
  } else {
    falseValue(value);
    createText(`command not found: ${value}`);
    createText('Run the command: "help" for help.');
  }
}

function trueValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess");
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error");
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname) {
  const p = document.createElement("p");

  p.innerHTML = text;
  app.appendChild(p);
}

function createCode(code, text) {
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML = `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();
