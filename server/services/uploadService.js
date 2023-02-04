const AWS = require('aws-sdk');
const BUCKET_NAME = process.env.BUCKET_NAME;
const s3 = new AWS.S3({});

// BUCKET_ACCESS_KEY="AKIA4D3QC5LIQL3GVTF6"
// BUCKET_SECRET_ACCESS_KEY="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"
// BUCKET_NAME="hr-portal-bucket"
// BUCKET_REGION="us-west-1"
/**
 * @description Uploads an image to S3
 * @param imageName Image name
 * @param base64Image Image body converted to base 64
 * @param type Image type
 * @return string S3 image URL or error accordingly
 */
async function upload(imageName, base64Image, type) 
    const params = {
        Bucket: `${BUCKET_NAME}/images`,
        Key: imageName,
        Body: new Buffer.from(base64Image.replace(/^data:image\/\w+;base64,/, ""), 'base64'),
        ContentType: type
    };

    let data;

    try {
        data = await promiseUpload(params);
    } catch (err) {
        console.error(err);

        return "";
    }

    return data.Location;
}
/**
 * @description Promise an upload to S3
 * @param params S3 bucket params
 * @return data/err S3 response object
 */
function promiseUpload(params) {
    return new Promise(function (resolve, reject) {
        s3.upload(params, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

module.exports = {upload};