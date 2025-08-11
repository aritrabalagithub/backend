import { asyncHandler } from '../utils/asyncHandler.js';
import{ApiError} from "../utils/ApiError.js"
import { User } from '../models/user.model.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import { ApiResponse } from '../utils/ApiResponse.js';
const registerUser=asyncHandler(async(req,res)=>{
   //get user details form front end
   //validation -not empty
   //check if user already exists
   //check for files  avatar,coverImage
   //uploadto cloudinary,avatar
   //create user Object- create entry in db
   //remove password and refresh token field from response
   //check for user creation
   //return res 

   const{fullNmae,email,username,password}=req.body
   console.log("email",email);
   // if(fullName===""){
   //    throw new ApiError(400,"fullname is required")
   // }
   if([fullNmae,email,username,password].some((field)=>field?.trim()==="")){
      throw new ApiError(400,"Allfields are required");
   }
    User.findOne({
      $or:[{username},{email}]
    })
    if(existedUser){
      throw new ApiError(409,"User with Username or email already exist")
    }
    const avatarLocalPath=req.files?.avatar[0]?.path;
    const coverImageLocalPath=req.files?.coverImage[0]?.path;
    if(!avatarLocalPath){
      throw new ApiError(400,"Avatar file is required")
    }
    const avatar=await uploadOnCloudinary(avatarLocalPath)
    const coverImage=await uploadOnCloudinary
    (coverImageLocalPath)
    if(!avatar){
      throw new ApiError(400,"Avatar file is required")
    }
   User.create({
      fullName,
      avatar:avatar.url,
      coverImage:coverImage?.url||"",
      email,
      password,
      username:username.toLowerCase()
   })
   const createdUser= User.findById(user._id).select("-password -refreshToken") //not the password and refresh token
   if(!createdUser){
      throw new ApiError(500,"Something went wrong while registering the user")
   }
   return res.status(201).json(
      new ApiResponse(200,createdUser,"User Registered Successfully")
   )
   })
export {registerUser,
}