const express = require('express')
const cors = require('cors') // Esto es por seguridad para evitar inserciones de codigo o datos
const app = express()

app.use(cors())

app.get('/data', (req, res) => {
  // If not posible conect with mongo use de raw data
  const chartData = [["Mes 1",2687],["Mes 2",2438],["Mes 3",2317],["Mes 4",2330],["Mes 5",2654],["Mes 6",2312],["Mes 7",2363],["Mes 8",2434],["Mes 9",2138],["Mes 10",2400],["Mes 11",2264],["Mes 12",2003]];
  res.send(chartData)

})

app.get('/*', (req, res) => res.send('To get de data go to /data'))


app.listen(3000, () => console.log('App listening on port 3000!'))