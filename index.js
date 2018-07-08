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
                throw check
            }
        })
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
                throw check
            }
        })
        return check
    },
    string: function (arr) {
        let check = { fail: false, msg: 'Input is a string', status: 200 }
        arr.forEach((val) => {
            if (typeof val !== 'string') {
                check.fail = true
                check.msg = val + ' must be a string'
                check.status = 400
                throw check
            }
        })
        return check
    },
    number: function (arr) {
        let check = { fail: false, msg: 'Input is a number', status: 200 }
        arr.forEach((val) => {
            if (typeof val !== 'number') {
                check.fail = true
                check.msg = val + ' must be a number'
                check.status = 400
                throw check
            }
        })
        return check
    },
    boolean: function (arr) {
        let check = { fail: false, msg: 'Input is a boolean', status: 200 }
        arr.forEach((val) => {
            if (typeof val !== 'boolean') {
                check.fail = true
                check.msg = val + ' must be a boolean'
                check.status = 400
                throw check
            }
        })
        return check
    },
    array: function (arr, fieldName) {
        let check = { fail: false, msg: 'Input is an array', status: 200 }
        if (!(arr instanceof Array)) {
            check.fail = true
            check.msg = fieldName + ' must be an array'
            check.status = 400
            throw check
        }
        return check
    },
    allowOnly: function (container, fields) {
        let check = { fail: false, msg: 'Valid input', status: 200 }
        let keyNames = Object.keys(container)
        keyNames.forEach((key) => {
            if (fields.indexOf(key) === -1) {
                check.fail = true
                check.msg = key + ' not allowed in request'
                check.status = 400
                throw check
            }
        })
        return check
    },
    minLen: function (field, len, fieldName) { // string min length
        let check = { fail: false, msg: 'Valid input', status: 200 }
        if (typeof field !== 'string') {
            check.fail = true
            check.msg = 'Give a string as input'
            check.status = 400
            throw check
        }
        if (field.length < len) {
            check.fail = true
            check.msg = `Minimum length of ${fieldName} should be ${len}`
            check.status = 400
            throw check
        }
        return check
    },
    maxlen: function (field, len, fieldName) { // string max length
        let check = { fail: false, msg: 'Valid input', status: 200 }
        if (typeof field !== 'string') {
            check.fail = true
            check.msg = 'Give a string as input'
            check.status = 400
            throw check
        }
        if (field.length > len) {
            check.fail = true
            check.msg = `Maximum length of ${fieldName} should be ${len}`
            check.status = 400
            throw check
        }
        return check
    },
    absoluteLen: function (field, len, fieldName) { // string absolute length
        let check = { fail: false, msg: 'Valid input', status: 200 }
        if (typeof field !== 'string') {
            check.fail = true
            check.msg = 'Give a string as input'
            check.status = 400
            throw check
        }
        if (field.length !== len) {
            check.fail = true
            check.msg = `The length of ${fieldName} should be ${len}`
            check.status = 400
            throw check
        }
        return check
    },
    minVal: function (field, val, fieldName) { // number min value
        let check = { fail: false, msg: 'Valid input', status: 200 }
        if (typeof field !== 'number') {
            check.fail = true
            check.msg = 'Give a number as input'
            check.status = 400
            throw check
        }
        if (field < val) {
            check.fail = true
            check.msg = `Minimum value of ${fieldName} should be ${val}`
            check.status = 400
            throw check
        }
        return check

    },
    maxVal: function (field, val, fieldName) { // number max value
        let check = { fail: false, msg: 'Valid input', status: 200 }
        if (typeof field !== 'number') {
            check.fail = true
            check.msg = 'Give a number as input'
            check.status = 400
            throw check
        }
        if (field > val) {
            check.fail = true
            check.msg = `Maximum value of ${fieldName} should be ${val}`
            check.status = 400
            throw check
        }
        return check

    },
    absoluteVal: function (field, val, fieldName) { // number absolute val
        let check = { fail: false, msg: 'Valid input', status: 200 }
        if (typeof field !== 'number') {
            check.fail = true
            check.msg = 'Give a number as input'
            check.status = 400
            throw check
        }
        if (field !== val) {
            check.fail = true
            check.msg = `The value of ${fieldName} should be ${val}`
            check.status = 400
            throw check
        }
        return check
    },
    regExp: function (field, pattern, fieldName) {
        let check = { fail: false, msg: 'Valid input', status: 200 }
        let patt = new RegExp(pattern)
        let res = patt.test(field)
        if (!res) {
            check.fail = true
            check.msg = `${fieldName} doesnot match the ${pattern} pattern`
            check.status = 400
            throw check
        }
        return check

    },
    email: function (field, fieldName) {
        let check = { fail: false, msg: 'Valid email address', status: 200 }

        let patt = '/^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+")) @(([[0 - 9]{ 1, 3}.[0 - 9]{ 1, 3}.[0 - 9]{ 1, 3}.[0 - 9]{ 1, 3}]) | (([a - zA - Z - 0 - 9] +.) + [a - zA - Z]{ 2,})) $ / igm'

        if (!patt.test(field)) {
            check.fail = true
            check.msg = `${fieldName} is not a valid email address`
            check.status = 400
            throw check
        }
        return check
    }
}

