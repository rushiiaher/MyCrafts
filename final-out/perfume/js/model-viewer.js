// Three.js Model Viewer
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

class ModelViewer {
    constructor(container) {
        console.log('ModelViewer constructor called.');
        this.container = container;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ 
            antialias: true, 
            alpha: true,
            powerPreference: 'high-performance'
        });
        this.controls = null;
        this.model = null;
        this.clock = new THREE.Clock();
        
        this.init();
    }

    init() {
        console.log('ModelViewer init method called.');
        // Setup renderer
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.container.appendChild(this.renderer.domElement);
        console.log('Renderer appended to container.');

        // Setup camera
        this.camera.position.set(0, 0, 5);
        this.camera.lookAt(0, 0, 0);
        console.log('Camera initialized.');

        // Add lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        directionalLight.position.set(5, 10, 7.5);
        directionalLight.castShadow = true;
        this.scene.add(directionalLight);

        // Remove point lights for now to simplify
        /* const pointLight1 = new THREE.PointLight(0x00f0ff, 1, 10);
        pointLight1.position.set(2, 2, 2);
        this.scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0x9d00ff, 1, 10);
        pointLight2.position.set(-2, -2, -2);
        this.scene.add(pointLight2); */
        console.log('Lights added.');

        // Setup controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.enableZoom = false;
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 1.0;
        this.controls.minPolarAngle = Math.PI / 4;
        this.controls.maxPolarAngle = Math.PI * 3/4;
        console.log('Controls initialized.');

        // Load model
        this.loadModel();

        // Start animation loop
        this.animate();

        // Handle window resize
        window.addEventListener('resize', () => this.onWindowResize());
    }

    loadModel() {
        console.log('Loading model...');
        const loader = new GLTFLoader();
        loader.load(
            'assets/perfume_bottle/scene.gltf',
            (gltf) => {
                console.log('Model loaded successfully!', gltf);
                this.model = gltf.scene;
                
                // Center and scale the model
                const box = new THREE.Box3().setFromObject(this.model);
                const center = box.getCenter(new THREE.Vector3());
                const size = box.getSize(new THREE.Vector3());
                
                console.log('Model original size:', size);
                const maxDim = Math.max(size.x, size.y, size.z);
                const scale = 2.5 / maxDim;
                this.model.scale.multiplyScalar(scale);
                
                this.model.position.sub(center.multiplyScalar(scale));
                console.log('Model scaled and centered. Final scale:', this.model.scale.x);
                
                // Add holographic material
                /* this.model.traverse((child) => {
                    if (child.isMesh) {
                        child.material = new THREE.MeshPhysicalMaterial({
                            color: 0xffffff,
                            metalness: 0.9,
                            roughness: 0.1,
                            transmission: 0.5,
                            thickness: 0.5,
                            envMapIntensity: 1.0,
                            clearcoat: 1.0,
                            clearcoatRoughness: 0.1
                        });
                    }
                }); */
                
                this.scene.add(this.model);
                console.log('Model added to scene.');
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            (error) => {
                console.error('An error happened during model loading:', error);
            }
        );
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        
        const delta = this.clock.getDelta();
        const elapsedTime = this.clock.getElapsedTime();
        
        if (this.model) {
            // Add subtle floating animation
            this.model.position.y = Math.sin(elapsedTime * 0.5) * 0.1;
            
            // Add gentle rotation
            this.model.rotation.y = Math.sin(elapsedTime * 0.2) * 0.1;
        }
        
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {
        console.log('Window resized. Updating renderer and camera.');
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }
}

// Initialize model viewer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.floating-bottle');
    if (container) {
        console.log('Floating bottle container found. Initializing ModelViewer.', container);
        new ModelViewer(container);
    } else {
        console.error('Floating bottle container not found!');
    }
}); 