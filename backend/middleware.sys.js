const operationSetting = require('./_operations.sys.js');
const response = require('./_response.sys.js');

module.exports = async function(req, res, next){
    if(req.method!='POST'){
        res.status(405).send(new response.MethodNotAllowed())
        return;
    }

    const tasks = [];

    for(let i=0; i<req.body.length; i++){
        const body = req.body[i];

        if(body.operation == undefined){
            tasks.push(new response.BadRequest(undefined, `'operation' 속성 누락`));
            continue;
        }

        const operation = operationSetting[body.operation];


        //로그인 필수인데 로그인 안했으면
        if(operation.authRequire){
            if(req.header('auth')!=undefined){ //나중에 try catch (복호화 로직)으로 변경
                //토큰 유효시간 체크
                //접속 아이피 체크
                req.body[i].uid = '123' //로그인 했으면 param에 유저정보 추가
            }else{
                tasks.push(new response.Unauthorized());
                continue;
            }   
        }

        tasks.push(require(__dirname + operation.logic)(body, req, res))
    }


    let result = await Promise.allSettled(tasks);
    result = result.map((r) => r.value);

    res.send(result)
}