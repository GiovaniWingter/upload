const multer = require("multer");
const path = require("path");

const fileFilter = (req, file, callBack) => {
    const allowedExtensions = /jpeg|jpg|png|gif/;
    const extname = allowedExtensions.test(
        path.extname(file.originalname).toLowerCase()
    );
    const mimetype = allowedExtensions.test(file.mimetype);

    if (extname && mimetype) {
        return callBack(null, true);
    } else {
        callBack(new Error("Apenas arquivos de imagem são permitidos!"));
    }
};

var storagePasta = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, "./app/public/imagens/galeria-prod/"); // diretório de destino
    },
    filename: (req, file, callBack) => {
        //renomeando o arquivo para evitar duplicidade de nomes
        callBack(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});
upload = multer({
    storage: storagePasta,
    limits: { fileSize: 3 * 1024 * 1024 },
    fileFilter: fileFilter,
});

module.exports = {upload};