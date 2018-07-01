module.exports = {
    checkEmptyInput: function (inputs, container) {
        let check = { fail: false, msg: 'Vaild input', status: 200 }
        let fields = []
        inputs.forEach((val) => {
            if (!container[val]) {
                check.fail = true
                fields.push(' ' + val)
                check.msg = fields + ' should not be empty'
                check.status = 400
            }
        })
        if (check.fail) {
            throw check
        }
        return check
    },
    checkFileType: function (file, fileType) {
        let check = { fail: true, msg: 'This file type is not supported', status: 400 }
        fileType.forEach((val) => {
            if (file.type.includes(val)) {
                check.fail = false
                check.msg = 'This file type is supported'
                check.status = 200
            }
        })
        if (check.fail) {
            throw check
        }
        return check
    },
    checkRequiredFields: function (arr, container) {
        let check = { fail: false, msg: 'Vaild input', status: 200 }
        arr.forEach((val) => {
            if (!container[val]) {
                check.fail = true
                check.msg = val + ' is required'
                check.status = 400
            }
        })
        if (check.fail) {
            throw check
        }
        return check
    },
    string: function (arr) {
        let check = { fail: false, msg: 'Input is a string', status: 200 }
        arr.forEach((val) => {
            if (typeof val !== 'string') {
                check.fail = true
                check.msg = val + ' must be a string'
                check.status = 400
            }
        })
        if (check.fail) {
            throw check
        }
        return check
    },
    number: function (arr) {
        let check = { fail: false, msg: 'Input is a number', status: 200 }
        arr.forEach((val) => {
            if (typeof val !== 'number') {
                check.fail = true
                check.msg = val + ' must be a number'
                check.status = 400
            }
        })
        if (check.fail) {
            throw check
        }
        return check
    },
    array: function (arr) {
        let check = { fail: false, msg: 'Input is an array', status: 200 }
        if (!(arr instanceof Array)) {
            check.fail = true
            check.msg = val + ' must be an array'
            check.status = 400
        }
        if (check.fail) {
            throw check
        }
        return check
    }
}

