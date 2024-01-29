
import "/styles.css";

import { Scene, PerspectiveCamera } from "three";
import {
  CSS3DRenderer,
  CSS3DObject
} from "three/examples/jsm/renderers/CSS3DRenderer";

let scene, camera, renderer;
let object;

const init = () => {
  // Create Scene, camera and renderer
  window.addEventListener("touchstart", () => {}, {
    passive: false
  });
  window.addEventListener("touchmove", () => {}, {
    passive: false
  });

  scene = new Scene();
  camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    100000
  );
  camera.position.z = 600;
  camera.lookAt(0, 0, 0);
  renderer = new CSS3DRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Create DOM for CSS3D
  const objectDOM = document.createElement("div");

  const content = document.createElement("p");
  let contentString = "";
  for (let i in new Array(100).fill(0)) {
    contentString += "Scrollable content <br>";
  }
  content.innerHTML = contentString;
  content.classList.add("content");
  objectDOM.appendChild(content);

  // Update style, content for your DOM
  // ...
  objectDOM.className = "mystyle";
  // Create CSS3D Objects
  object = new CSS3DObject(objectDOM);
  // const sprite = new CSS3DSprite(spriteDOM);
  // Add to your scene
  scene.add(object);

  // Render, on each frame, or manually
  renderer.render(scene, camera);
};

const animate = (time) => {
  requestAnimationFrame(animate);

  object.rotation.y = Math.sin(time / 1000) * 0.6;
  object.rotation.z = Math.sin(time / 1000) * 0.4;

  renderer.render(scene, camera);
};

init();
animate();
