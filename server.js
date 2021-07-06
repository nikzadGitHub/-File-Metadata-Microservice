var express = require('express');
var cors = require('cors');
require('dotenv').config()

var app = express();
var multer  = require('multer');
var upload = multer()

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse',upload.single('upfile'), function (req, res, next) {

  var info = {
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size,
  }

  res.json(info);

})

// Start server and print port.
const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
