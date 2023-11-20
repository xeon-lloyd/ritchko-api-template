const router = require("express").Router();

const setting = require('./core/setting.js');
const operationSetting = require('./_operations.sys.js');
const response = require('./_response.sys.js');

router.get("/style.css", function(req, res, next){
    res.sendFile(__dirname + '/doc-style.css')
})

router.get("/script.js", function(req, res, next){
    res.sendFile(__dirname + '/doc-script.js')
})

router.get("/", function(req, res, next){
    if(setting.isProduction){
        next();
        return;
    }

    let html = `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>API Document</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="stylesheet" href="/API-doc/style.css">
        </head>
        <body>

        <div class="container">
    `;

    let opreationList = Object.keys(operationSetting);

    for(let i=0;i<opreationList.length;i++){
        let responses = '';
        for(let j=0;j<operationSetting[opreationList[i]].responseSchema.length;j++){
            responses += `<div>
                <div class="label">${operationSetting[opreationList[i]].responseSchema[j].name}</div>
                <textarea readonly>${JSON.stringify(new operationSetting[opreationList[i]].responseSchema[j](), null, 4)}</textarea>
            </div>`
        }
        if(operationSetting[opreationList[i]].authRequire){
            responses += `<div>
                <div class="label">${response.Unauthorized.name}</div>
                <textarea readonly>${JSON.stringify(new response.Unauthorized(), null, 4)}</textarea>
            </div>`
        }


        let needAuth = ""
        if(operationSetting[opreationList[i]].authRequire) needAuth = `<i class="fa-solid fa-lock"></i>`
        html += `
            <div class="operation folded">
                <div class="title">
                    ${opreationList[i]}
                    ${needAuth}
                    <i class="fold-toggle fa-solid fa-chevron-down"></i>
                </div>
                <div class="param">
                    <div class="label">Param</div>
                    <textarea readonly>${JSON.stringify(operationSetting[opreationList[i]].paramSchema, null, 4)}</textarea>
                </div>

                <div class="response">
                    <div class="label">Response</div>
                    <div class="list">
                        ${responses}
                    </div>
                </div>
            </div>
        `
    }

    html += `
        </div>

        <script src="/API-doc/script.js"></script>

        </body>
    </html>
    `

    res.send(html)
})


module.exports = router;