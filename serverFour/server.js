var express = require('express');
var app = new express();
app.use(express.static("./page"));
app.listen(12306);//大于8000   等于80web默认端口     