<template>
  <div class="container">
    <div class="blur-img" />
    <Login v-show="false" ref="login" />
    <div v-show="false" ref="part_one" class="part_one">
      <span>无聊？2048走起</span>
    </div>
    <div v-show="false" ref="part_two" class="part_two">
      <span>来吧，五子棋搞起</span>
    </div>
    <div v-show="false" ref="part_three" class="part_three">
      <span>暂无内容</span>
    </div>
    <div v-show="false" ref="part_four" class="part_four">
      <span>我在上面</span>
    </div>
    <div v-show="false" ref="part_five" class="part_five">
      <span>我在下面</span>
    </div>
    <div id="view_3d" />
  </div>
</template>

<script>
import Login from './login'
import * as THREE from 'three'
// 此处注释event.preventDefault()
import { MapControls, OrbitControls } from './OrbitControls.js'

import { CSS3DObject, CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js'

const { cube_line_length = 800 } = {}

export default {
  name: 'Index',
  components: {
    Login
  },
  data() {
    return {}
  },
  mounted() {
    this.initCanvas()
  },
  methods: {
    initCanvas() {
      const self = this
      const container = document.getElementById('view_3d')
      let camera, scene, renderer
      let controls

      const Element = function({ el, position = {}, rotation = {}}) {
        el.style.display = ''

        const div = document.createElement('div')
        div.style.width = cube_line_length + 'px'
        div.style.height = cube_line_length + 'px'
        div.appendChild(el)

        const object = new CSS3DObject(div)
        object.position.set(position.x, position.y, position.z)

        object.rotation.set(rotation.x, rotation.y, rotation.z)

        return object
      }

      init()
      animate()

      function init() {
        camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 5000)
        camera.position.set(0, 0, cube_line_length * 2)

        scene = new THREE.Scene()
        renderer = new CSS3DRenderer()

        renderer.setSize(window.innerWidth, window.innerHeight)
        container.appendChild(renderer.domElement)

        const group = new THREE.Group()

        const faceArrData = [
          {
            el: self.$refs.login.$el,
            position: {
              x: 0,
              y: 0,
              z: cube_line_length / 2
            },
            rotation: {
              x: 0,
              y: 0,
              z: 0
            }
          },
          {
            el: self.$refs.part_one,
            position: {
              x: cube_line_length / 2,
              y: 0,
              z: 0
            },
            rotation: {
              x: 0,
              y: Math.PI / 2,
              z: 0
            }
          },
          {
            el: self.$refs.part_two,
            position: {
              x: 0,
              y: 0,
              z: -cube_line_length / 2
            },
            rotation: {
              x: 0,
              y: Math.PI,
              z: 0
            }
          },
          {
            el: self.$refs.part_three,
            position: {
              x: -cube_line_length / 2,
              y: 0,
              z: 0
            },
            rotation: {
              x: 0,
              y: -Math.PI / 2,
              z: 0
            }
          },
          {
            el: self.$refs.part_four,
            position: {
              x: 0,
              y: cube_line_length / 2,
              z: 0
            },
            rotation: {
              x: -Math.PI / 2,
              y: 0,
              z: 0
            }
          },
          {
            el: self.$refs.part_five,
            position: {
              x: 0,
              y: -cube_line_length / 2,
              z: 0
            },
            rotation: {
              x: Math.PI / 2,
              y: 0,
              z: 0
            }
          }
        ]

        faceArrData.forEach(item => group.add(new Element(item)))
        scene.add(group)

        controls = new OrbitControls(camera, renderer.domElement)
        controls.minDistance = cube_line_length / 2 + 100
        controls.maxDistance = cube_line_length * 8
        controls.enableDamping = true
        controls.dampingFactor = 0.05
        controls.rotateSpeed = 0.2
        controls.panSpeed = 0.5
        controls.screenSpacePanning = true

        window.addEventListener('resize', onWindowResize, false)

        // Block iframe events when dragging camera
      }

      function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }

      function animate() {
        requestAnimationFrame(animate)
        controls.update()
        renderer.render(scene, camera)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .BCK-COLOR{
    background: url('http://hbimg.b0.upaiyun.com/9102f0010ca86a3124e16c6dec91a45c0650129c23ea4-l6mWuX_fw658') no-repeat 50%;
    background-size: 100% 100%;
    /*background: radial-gradient(circle, white, lightblue);*/
  }
  .blur-img{
    @extend .BCK-COLOR;
    z-index: -1;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    filter: blur(15px);
  }
  .container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .view_3d {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .abo {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;

    span{
      display: block;
      width: 200px;
      text-align: center;
      height: 50px;
      line-height: 50px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
  }

  .part_one {
    @extend .abo;
    @extend .BCK-COLOR;
  }

  .part_two {
    @extend .abo;
    @extend .BCK-COLOR;
  }

  .part_three {
    @extend .abo;
    @extend .BCK-COLOR;
  }

  .part_four, .part_five{
    @extend .abo;
    @extend .BCK-COLOR;
  }
</style>
