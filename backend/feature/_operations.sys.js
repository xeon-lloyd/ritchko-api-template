const paramSchema = require('./_param.sys.js');
const responseSchema = require('./_response.sys.js');

authRequire = true;
module.exports = {
    'OperationOne': {
        logic: '/feature/first.js',
        authRequire: false,
        
        //documentation
        group: 'user',
        paramSchema: paramSchema.OperationOne,
        responseSchema: [
            responseSchema.LoginOK,
            responseSchema.IdNotFound,
            responseSchema.PwNotCorrect,
        ]
    },

    'OperationTwo': {
        logic: '/feature/two.js',
        authRequire: true,

        //documentation
        group: 'user',
        paramSchema: paramSchema.OperationTwo,
        responseSchema: [

        ]
    },
}