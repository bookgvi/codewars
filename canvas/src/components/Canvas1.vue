<template>
  <div class="">
    <button @click="drawBtn" class="btn">Draw</button>
    <button @click="stopMovement" class="btn">Stop</button>
      <canvas width="640" height="480"
        id="canvas"
      ></canvas>
  </div>
</template>

<script>
export default {
  data: () => ({
    intId: ''
  }),
  methods: {
    stopMovement() {
      clearInterval(this.intId)
    },
    drawBtn() {
      let canvas, ctx
      canvas = document.getElementById('canvas')
      ctx = canvas.getContext('2d')
      let x = 20, y = 20, dx = 2, dy = 2
      let radius = 10

      this.intId = setInterval(()=>{
        this.ball(canvas, ctx, x, y, radius)
        x += dx
        y += dy
        if(y >= canvas.height - radius || y <= 0 + radius) {
          dy = -dy
        }
        if(x >= canvas.width - radius || x <= 0 + radius) {
          dx = -dx
        }
      },10)
    },
    ball(canvas, ctx, x, y, radius) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI*2)
      ctx.fillStyle = '#0095dd'
      ctx.fill()
      ctx.closePath()
    }
  }
}
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
  }
  canvas {
    background: #eee;
    display: block;
    margin: 0 auto;
  }
</style>
