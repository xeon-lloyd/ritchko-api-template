module.exports = {
    'OK': class {
        constructor(data, message) {
            this.data = data || null;
            this.message = message || "응답 성공";
        }

        response = 200;
        message = "";
        errorCode = null;
        data = null;
    },

    'BadRequest': class {
        constructor(errorCode, message) {
            this.errorCode = errorCode || null;
            this.message = message || "잘못된 요청";
        }

        response = 400;
        message = "";
        errorCode = null;
        data = null;
    },

    'Unauthorized': class {
        constructor(errorCode, message) {
            this.errorCode = errorCode || null;
            this.message = message || "로그인이 필요한 기능입니다";
        }

        response = 401;
        message = "";
        errorCode = null;
        data = null;
    },
    
    'Forbidden': class {
        constructor(errorCode, message) {
            this.errorCode = errorCode || null;
            this.message = message || "권한이 없습니다";
        }

        response = 403;
        message = "";
        errorCode = null;
        data = null;
    },

    'NotFound': class {
        constructor(errorCode, message) {
            this.errorCode = errorCode || null;
            this.message = message || "찾을 수 없음";
        }

        response = 404;
        message = "";
        errorCode = null;
        data = null;
    },

    'MethodNotAllowed': class {
        constructor(errorCode, message) {
            this.errorCode = errorCode || null;
            this.message = message || "허용되지 않은 요청";
        }

        response = 405;
        message = "";
        errorCode = null;
        data = null;
    },

    
    ...require('./feature/_response.sys.js'),
}