

{

    // Three.js kan niks doen zonder scene, camer en renderer.
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    let renderer = new THREE.WebGLRenderer();
    // we gaan de renderer een size meegeven
    renderer.setSize(window.innerWidth, window.innerHeight);
    // en hiermee maken we een canvas aan in ons HTML
    document.body.appendChild(renderer.domElement);



    const init = () => {





    }




    init();


}

