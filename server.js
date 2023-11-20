const express = require('express');
const app = express();
const server = require('http').createServer(app);

const setting = require('./backend/core/setting.js');
const util = require('./backend/core/util.js');

/* API 및 API 문서 라우팅 설정 */
const API = require('./backend/middleware.sys.js');
const API_doc = require('./backend/documentation.sys.js');
app.use(express.json());
app.use('/API', API);
app.use('/API-doc', API_doc);


/* 서버 시작 */
server.listen(80, function(){
    console.log("서버 시작")
})