const rootResponse = require('../_response.default.sys.js')

module.exports = {
    ...rootResponse,

    'IdNotFound': class IdNotFound extends rootResponse.BadRequest {
        message = "아이디를 찾을 수 없음"
        errorCode = "id"
    },

    'PwNotCorrect': class PwNotCorrect extends rootResponse.BadRequest {
        message = "비밀번호가 일치하지 않음"
        errorCode = "password"
    },

    'LoginOK': class LoginOK extends rootResponse.OK {
        message = "로그인에 성공했습니다"
        data = {
            token: "string"
        }
    }
}