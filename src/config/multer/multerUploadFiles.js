const multer = require('multer');

const path = require('path');

const crypto = require('crypto');

module.exports = {

    dest: path.resolve(__dirname, '..','..','..','uploads','files'),
    storage: multer.diskStorage({
        
        destination: (HttpRequest, file, CallBack) => {

            CallBack(null, path.resolve(__dirname, '..','..','..','uploads','files'));

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

        fileSize: 20 * 1024 * 1024

    },
    filFilter: (HttpRequest, file, CallBack) => {
        const allowedMimes = [
            'file/pdf',
            'file/xls',
            'file/osd',
            'file/doc',
            'file/docx',
            'file/txt',
        ];

        if (allowedMimes.includes(file.mimetype)){

            CalBack(null, true);

        }else{

            CallBack(new Error("Invalid file type."));

        }
    }

}