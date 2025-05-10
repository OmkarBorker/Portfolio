function typeName() {
  const name = "Hi, my name is Omkar_Borker";
  const terminal = document.getElementById('terminalName');
  let i = 0;

  function type() {
    if (i < name.length) {
      terminal.innerHTML += name.charAt(i);
      i++;
      setTimeout(type, 100);
    } else {
      terminal.classList.add('glitch');
    }
  }
  type();
}
typeName();

function typeName2() {
  const name = "I'm A Cyber Security Analyst and A Software Developer.";
  const terminal = document.getElementById('heroName2');
  let i = 0;

  function type() {
    if (i < name.length) {
      terminal.innerHTML += name.charAt(i);
      i++;
      setTimeout(type, 100);
    } else {
      terminal.classList.add('glitch');
    }
  }
  type();
}

typeName2();