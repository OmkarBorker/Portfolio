import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

// scripts.js
// function typeName() {
//   const name = "Omkar_Borker@root:~$ ";
//   const terminal = document.getElementById('terminalName');
//   let i = 0;

//   function type() {
//     if (i < name.length) {
//       terminal.innerHTML += name.charAt(i);
//       i++;
//       setTimeout(type, 100);
//     } else {
//       terminal.classList.add('glitch');
//     }
//   }
//   type();
// }
// typeName();