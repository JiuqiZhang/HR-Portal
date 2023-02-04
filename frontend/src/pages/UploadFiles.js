import React from 'react';
import API from '../../api';

const UploadFiles = () => {
    const onSelectFile = async (event) => {
        const file = event.target.files[0];
        const convertedFile = await convertToBase64(file);

        // const s3URL = await axios.post(
        //     'http://localhost:3001/upload',
        //     {
        //         file: convertedFile,
        //         fileName: file.name
        //     }
        // );
        API.post(`/visa_management`, {
            file: convertedFile,
            fileName: file.name
        })
    }
        
        // Request will be sent from here in the future
    const convertToBase64 = (file) => {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
            }
        })
    }

    return (
        <input type="file" accept="file_extension" onChange={onSelectFile}/>
    )
}

export default UploadFiles;