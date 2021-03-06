{


    // here are your objects and scenes
    // scene is een variable 
    // THREE.Scene is een classe met bepaalde instellingen
    const scene = new THREE.Scene();

    // perspective camera 4 parameters => is most close to human eye
    // 75 for field of view, aspect ratio => based on brwser inner width en heigt, for plain ? 
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5;



    // webGL is craziest/ with this you can create crazy stuff, the others renderers are most simplistic
    // je hebt een renderer nodig voor elk tree.js project 
    // anti-alias true is to smooth out, otherwise jagged
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    // setting background color
    renderer.setClearColor("#e5e5e5");
    // based on window height en width
    renderer.setSize(window.innerWidth, window.innerHeight);


    // we need to create a canvas element with our render settings 
    document.body.appendChild(renderer.domElement);

    // to change values in canvas of width & height => check in inspector
    window.addEventListener('resize', () => {
        // the window size must adjust
        renderer.setSize(window.innerWidth, window.innerHeight);
        // camera aspect ratio veranderen
        camera.aspect = window.innerWidth, window.innerHeight
        // update camera matrix
        camera.updateProjectionMatrix();
    })



    // creating a box
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    // a material for non shiny objects
    const material = new THREE.MeshLambertMaterial({ color: 0xFFCC00 });
    // const mesh = new THREE.Mesh(geometry, material);


    // to not let object scale along but its not working yet
    const render = () => {

        requestAnimationFrame(render);


        renderer.render(scene, camera);
    }


    // parameter kleur, intensiteit en afstand
    const light = new THREE.PointLight(0xFFFFF, 1, 500);
    // light positie
    light.position.set(10, 0, 25);
    // light toevoegen aan de scene
    scene.add(light);

    // je moet de renderer renderen 
    console.log(camera);
    renderer.render(scene, camera);
    console.log(scene);



    // we are going to add a timeline to make  change mesh
    console.log(new TimelineMax());


    this.tl = new TimelineMax();
    console.log(this.tl);
    this.tl.to(this.mesh.scale, 1, { x: 2, ease: Expo.easeOut });
    this.tl.to(this.mesh.scale, 0.5, { x: 0.5, ease: Expo.easeOut });
    this.tl.to(this.mesh.position, 0.5, { x: 2, ease: Expo.easeOut });
    this.tl.to(this.mesh.rotation, 1, { y: Math.PI * 0.5, ease: Expo.easeOut });





    const init = () => {
        // render 1 keer oproepen om animatie te laten starten
        render();




    }




    init();


}

