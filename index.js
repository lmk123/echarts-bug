const echarts = require('echarts')
const Canvas = require('canvas')
const http = require('http')

echarts.setCanvasCreator(() => new Canvas(32, 32))

http
  .createServer((req, res) => {
    const canvas = new Canvas(400, 400)

    const chart = echarts.init(canvas, {}, {
      devicePixelRatio: 2
    })
    chart.setOption({
      title: {
        text: 'Line Chart'
      },
      legend: {
        data: ['Marketing', 'AD']
      },
      xAxis: {
        data: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {},
      series: [
        {
          name: 'Marketing',
          type: 'line',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'AD',
          type: 'line',
          data: [220, 182, 191, 234, 290, 330, 310]
        }
      ]
    })

    canvas.toBuffer((err, buf) => {
      if (err) {
        res.writeHead(500)
        res.end()
      } else {
        res.writeHead(200, {
          'Conent-Length': buf.length,
          'Content-Type': 'image/png'
        })
        res.end(buf)
      }
      chart.dispose()
    })
  })
  .listen(8080)
