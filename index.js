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
        let check = { fail: true, msg: 'This file type is not supported', status: 400}
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
    }

}