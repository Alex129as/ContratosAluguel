const multer = require('multer');

const path = require('path');

const crypto = require('crypto');

module.exports = {

    dest: path.resolve(__dirname, '..','..','..','uploads','perfils'),
    storage: multer.diskStorage({
        
        destination: (HttpRequest, file, CallBack) => {

            CallBack(null, path.resolve(__dirname, '..','..','..','uploads','perfils'));

        },
        filename: (HttpRequest, file, CallBack) => {

            crypto.randomBytes(24, (error, hash)=>{

                if(error) CallBack(error);

                const filename = `${hash.toString('hex')}-${file.originalname}`;
                
                CallBack(null, filename);

            })
        }
    }),
    limits: {

        fileSize: 10 * 1024 * 1024

    },
    filFilter: (HttpRequest, file, CallBack) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ];

        if (allowedMimes.includes(file.mimetype)){

            CalBack(null, true);

        }else{

            CallBack(new Error("Invalid file type."));

        }
    }

}