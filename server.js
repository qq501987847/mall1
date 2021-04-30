const express = require("express")
const app = express()

const port = 8088

let history = require('connect-history-api-fallback')

//重定向到index.html
history({
  rewrites: [{
      from: /^\/libs\/.*$/,
      to: '/index.html'
    }]
});

app.use(history());

app.use(express.static('./dist'))

app.listen(port, () => {
  console.log('Listening at http://localhost:' + port)
})
