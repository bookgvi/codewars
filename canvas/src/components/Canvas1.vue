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
    intId: '',
    rightPress: false,
    leftPress: false

  }),
  methods: {
    stopMovement() {
      clearInterval(this.intId)
      this.rightPress = false
      this.leftPress = false
    },
    drawBtn() {
      let canvas, ctx
      canvas = document.getElementById('canvas')
      ctx = canvas.getContext('2d')

      document.addEventListener('keyup', this.hKeyUp)
      document.addEventListener('keydown', this.hKeyDown)

      let ballX = 20, ballY = 20, dx = 2, dy = 2
      let radius = 10
      let paddleHeight = 10, paddleWidth = 75
      let paddleX = (canvas.width - paddleWidth) / 2
      let breaksWidth = 75, breaksHeight = 10, breaksPaddingX = 10, breaksPaddibgY = 10
      let breaks, breaksCol = 5, breaksRow = 3

      this.intId = setInterval(()=>{
        this.ball(canvas, ctx, ballX, ballY, radius)
        this.paddle(canvas, ctx, paddleX, paddleWidth, paddleHeight)
        this.breaks(canvas, ctx, breaksCol, breaksRow, breaks, breaksWidth, breaksHeight)
        ballX += dx
        ballY += dy
        if (ballY >= canvas.height - radius - paddleHeight / 2) {
          if (ballX > paddleX && ballX < paddleX + paddleWidth) {
            dy = -dy
          } else {
            document.location.reload()
            alert('Game over...')
          }
        }
        if(ballY <= 0 + radius) {
          dy = -dy
        }
        if(ballX >= canvas.width - radius || ballX <= 0 + radius) {
          dx = -dx
        }

        if(this.leftPress) {
          paddleX -= 7
          if (paddleX < 0) {
            paddleX = 0
          }
        }
        else if (this.rightPress) {
          paddleX += 7
          if (paddleX + paddleWidth > canvas.width) {
            paddleX = canvas.width - paddleWidth
          }
        }

      },10)
    },
    ball (canvas, ctx, x, y, radius) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI*2)
      ctx.fillStyle = '#0095dd'
      ctx.fill()
      ctx.closePath()
    },
    paddle (canvas, ctx, paddleX, pWidth, pHeight) {
      ctx.beginPath()
      ctx.rect(paddleX, canvas.height - pHeight, pWidth, pHeight)
      ctx.fillStyle = '#0095dd'
      ctx.fill()
      ctx.closePath()
    },
    breaks(canvas, ctx, breaksCol, breaksRow, breaks, breaksWidth, breaksHeight) {
      for(let c=0; c<breaksCol; c++) {
        for (let r=0; r<breaksRow; r++) {
          breaks[c][r] = {x:0, y:0}
          let b = breaks[c][r]
          ctx.beginPath()
          ctx.rect(b.x, b.y, breaksWidth, breaksHeight)
          ctx.fillStyle = '#0095dd'
          ctx.fill()
          ctx.closePath()
        }
      }
    },
    hKeyUp (e) {
      if (e.key == 'ArrowLeft' || e.key == 'Left' || e.code == 'KeyA') {
        this.leftPress = false
      }
      if (e.key == 'ArrowRight' || e.key == 'Right' || e.code == 'KeyD') {
        this.rightPress = false
      }
    },
    hKeyDown (e) {
      if(e.key == 'ArrowLeft' || e.key == 'Left' || e.code == 'KeyA') {
        this.leftPress = true
      }
      if(e.key == 'ArrowRight' || e.key == 'Right' || e.code == 'KeyD') {
        this.rightPress = true
      }
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
