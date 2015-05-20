var express = require('express')
var React = require('react')
var AltIsomorphicElement = require('AltIsomorphicElement')
var Iso = require('iso')
var app = express()

var path = require('path')
app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'templates'))
app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  
  Server(function (images) {
    var images = ['/public/img/react-black.png', '/public/img/react-white.png']

    var data = {
      ImageStore: {
        images: images
      }
    }

    var node = React.createElement(AltIsomorphicElement, {
      altStores: data
    })

    res.render('layout', {
      html: Iso.render(React.renderToString(node), { altStores: data }, { react: true })
    })
  })

})

app.listen(8080)
