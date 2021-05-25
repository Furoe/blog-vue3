import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

export default class ThreeScene  {
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  controls: OrbitControls
  model: null
  lights: null
  AnimationMixer: null

  constructor(){
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(90,window.innerWidth/window.innerHeight,0.1,1000)
    this.renderer = new THREE.WebGLRenderer({antialias: true})
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.init()
    window.addEventListener('resize', this.onWindowResize, false)
  }

  private init(){
    this.camera.position.set(200,200,400)
    this.camera.lookAt(this.scene.position)
    //this.scene.background = new THREE.Color(0x282923)
    this.renderer.setClearColor(new THREE.Color(0xF7F2F1))
    this.renderer.setSize(window.innerWidth,window.innerHeight)
    this.renderer.shadowMap.enabled = true
    document.body.appendChild( this.renderer.domElement );

    this.controls.target = new THREE.Vector3(0, 0, 0)

    //this.scene.add(new THREE.AxesHelper(10))
    this.loadLight()
    this.loadModel()
  }

  private onWindowResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  private render(){
    this.renderer.render(this.scene, this.camera)
  }

  private animate = () => {
    requestAnimationFrame(this.animate)
    this.render()
  }

  private loadLight(){
    const ambient = new THREE.AmbientLight(0xFFFFFF)
    ambient.position.set(0, 1, 0)
    this.scene.add(ambient)
  }

  private setContent(object: any) {
 
    object.updateMatrixWorld();
    const box = new THREE.Box3().setFromObject(object);
    const size = box.getSize(new THREE.Vector3()).length();
    const boxSize = box.getSize();
    const center = box.getCenter(new THREE.Vector3());

    object.position.x += object.position.x - center.x;
    object.position.y += object.position.y - center.y;
    object.position.z += object.position.z - center.z;

    this.camera.position.copy(center);
    if (boxSize.x > boxSize.y) {
        this.camera.position.z = boxSize.x * -2.85
    } else {
        this.camera.position.z = boxSize.y * -2.85
    }
    this.camera.lookAt(0, 0, 0);
  }

  private loadModel(){
    // var geometry1 = new THREE.BoxGeometry(100, 100, 100);
    // var material1 = new THREE.MeshLambertMaterial({
    //   color:0x0000ff,
    //   specular:0x4488ee,
    //   shininess:12
    // }); //材质对象Material
    // var mesh1 = new THREE.Mesh(geometry1, material1); //网格模型对象Mesh
    // this.scene.add(mesh1);
    // return
    const loader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/draco/gltf/')
    dracoLoader.preload()
    loader.setDRACOLoader(dracoLoader)
 
    loader.load('/model/njdj_2.glb', (gltf) => {
      const model = gltf.scene;
      console.log(model)
      this.setContent(gltf.scene)
			// model.position.set( 1, 1, 0 );
			// model.scale.set( 0.01, 0.01, 0.01 );
			// this.scene.add( model );
      this.scene.add(gltf.scene)
      
      this.animate()
    }, (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    }, (error) => {
      console.error(error)
    })
  }
}