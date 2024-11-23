// 1. Create a scene
const scene = new THREE.Scene();

// 2. Create a camera with a field of view (FOV), aspect ratio, and near/far clipping planes
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// 3. Set up the WebGL renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);  // Set the size of the renderer
document.body.appendChild(renderer.domElement);  // Add the renderer to the DOM

// 4. Create a geometry (cube) and a material (color)
const geometry = new THREE.BoxGeometry(1, 1, 1);  // Dimensions of the cube
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });  // Green color

// 5. Create a mesh with the geometry and material
const cube = new THREE.Mesh(geometry, material);

// 6. Add the cube to the scene
scene.add(cube);

// 7. Position the camera away from the origin to view the cube
camera.position.z = 5;  // Move the camera 5 units along the z-axis

// 8. Create an animation loop
function animate() {
  requestAnimationFrame(animate);  // Request the next frame

  // Rotate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene from the camera's perspective
  renderer.render(scene, camera);
}

animate();  // Start the animation

// 9. Handle window resizing
window.addEventListener('resize', () => {
  // Update the camera aspect ratio
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  // Update the renderer size
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// 10. Add a light to the scene
const light = new THREE.PointLight(0xffffff, 1, 100);  // White light, intensity 1, distance 100
light.position.set(5, 5, 5);  // Position the light
scene.add(light);

// 11. Load a texture
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('path/to/texture.jpg');  // Replace with your image path

// 12. Apply the texture to the material
const materialWithTexture = new THREE.MeshBasicMaterial({ map: texture });

// 13. Create a new cube with the textured material
const texturedCube = new THREE.Mesh(geometry, materialWithTexture);
scene.add(texturedCube);
