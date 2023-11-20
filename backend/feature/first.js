const response = require('./_response.sys.js');
const setting = require('../core/setting.js');
const util = require('../core/util.js');

module.exports = async function(){
    return new response.IdNotFound();

    return new response.BadRequest('email', '이메일 형식이 일치하지 않음')

    return new response.OK({
        id: 123,
        name: "asdfaf"
    }, "유저 정보 조회 됨");
}