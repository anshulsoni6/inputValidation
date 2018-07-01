    # inputValidation
    input Validations for express and koa frameworks

    # Installation instructions

    npm install input-validations-js

    # How to use this package

    Currently, there are methods available through this package :
```sh

    checkEmptyInput(arr, container)
    checkFileType(file, fileType)
    checkRequiredFields(arr, container)

```

    example:
```sh

    router.post('/', (req, res) => {
        let arr = ['firstName', 'lastName', 'email'];
        let container = req.body;
        let file = req.body.myFile;
        let fileType = 'image';
        let testArray = []
        checkRequiredFields(arr, container); // check required fields
        checkFileType(file, fileType); // check uploading file type
        string([req.body.firstName, req.body.listName]);
        number([req.body.pinCode, req.body.phoneNo]);
        array(testArray);
    });

```