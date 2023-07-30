var app = document.getElementById("test1");

var typewriterSkills1 = new Typewriter(app, {
  delay: 20,
  deleteSpeed: 30,
  loop: true,
});

typewriterSkills1
  .typeString("Docker")
  .pauseFor(1500)
  .deleteChars(5)
  .typeString("ata Engineering")
  .pauseFor(1500)
  .deleteAll()
  .typeString("Traefik, Node.js, REST/API")
  .pauseFor(1500)
  .deleteAll()
  .typeString("Python, C#")
  .pauseFor(1500)
  .deleteAll()
  .typeString("Azure Functions, Azure Cosmos DB, Azure API Management")
  .pauseFor(1500)
  .deleteAll()
  .start();

var frontpageHeader1 = document.getElementById("frontpage-header-1");

let typewriterFrontpage1 = new Typewriter(frontpageHeader1, {
  delay: 20,
  deleteSpeed: 30,
  loop: false,
});

typewriterFrontpage1
  .typeString("A place where the matrix")
  .deleteChars(6)
  .typeString("<span class='Pulse'>MATRIX</span> becomes a reality")
  .deleteChars(7)
  .typeString("<span class='Pulse'>REALITY</span>")
  .start()
  .callFunction(() => {
    typewriterFrontpage1.stop();
    typewriterFrontpage1 = null;
  });
