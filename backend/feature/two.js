const response = require('./_response.sys.js');
const setting = require('../core/setting.js');
const util = require('../core/util.js');

module.exports = async function(){
    return new response.Forbidden(undefined, '스트리머 본인만 가능')

    return new response.BadRequest('email', '잘 못 보냄')

    return new response.OK({
        id: 123,
        name: "asdfaf"
    }, "유저 정보 조회 됨");
}