import './style.css';
// import models
// import controller
// import view
import exampleFn from "./example.ts";

exampleFn();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    Hello, world!
  </div>
`;
