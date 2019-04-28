# Introduction
  input Validations for express and koa frameworks

# Installation instructions

  npm install input-validations-js

# How to use this package

    example:
```javascript
    const validate = require('input-validations-js');
    router.post('/', (req, res) => {
        try {
            let arr = ['firstName', 'lastName', 'email'];
            let container = req.body;
            let file = req.body.myFile;
            let fileType = 'image';
            let testArray = [];
            let minLength = 6;
            let maxLength = 8;
            let abslength = 7;
            let fieldName = 'firstName';
            let fieldName1 = 'age';
            let fieldName2 = 'url';
            let fieldName3 = 'email';
            let pattern = '/hello/g';

            validate.checkRequiredFields(arr, container); // check required fields
            validate.checkFileType(file, fileType); // check uploading file type
            validate.string([req.body.firstName, req.body.listName]);
            validate.number([req.body.pinCode, req.body.phoneNo]);
            validate.array(container.email, fieldName); // checks if testArray is an array or not
            validate.checkEmptyInput(arr, container); // checks if input is empty
            validate.boolean([req.body.newsletter, req.body.married]);// checks if input is of type boolean
            validate.allowOnly(container, arr); // allows given input fields only, in this case fields given in 'arr' array are allowed, if container contains other than these fields then error will be thrown    
            validate.minLen(container.firstName, minLength, fieldName); // checks minimum length of string
            validate.maxLen(container.firstName, maxLength, fieldName); // checks maximum length of string
            validate.absoluteLen(container.firstName, abslength, fieldName); // checks exact length of string
            validate.minVal(container.age, val, fieldName1); // checks minimum value of number
            validate.maxVal(container.age, val, fieldName1); // checks maximum value of number
            validate.absoluteVal(container.age, val, fieldName1); // checks exact value of number
            validate.regExp(container.url, pattern, fieldName2); // checks if input follows given regex
            validate.email(container.email, fieldName3);// checks if input is a valid email address
        } catch(error) {
            if(error && error.msg) {
                res.send(error.msg).status(error.code);
            }
        }
    });

```
