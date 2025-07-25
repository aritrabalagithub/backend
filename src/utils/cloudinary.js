import { v2 as cloudinary } from "cloudinary";
import fs from "fs"
import {v2 as cloudinary} from 'cloudinary';
import { v2 as cloudinary } from 'cloudinary';

 cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_SECRET_KEY // Click 'View API Keys' above to copy your API secret
    });

const uploadOnCloudinar=async(localFilePath)=>{
    try{
        if(!localFilePath) return null
        cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        console.log("file is uploaded on cloudinary",response.url);
        return response;
    }catch(error){
        fs.unlinkSync(localFilePath)
        return null;
    }
}
    
export {uploadOnCloudinar}