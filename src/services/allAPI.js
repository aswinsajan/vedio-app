import { serverUrl } from "./serverUrl"
import { commonAPI } from "./commonAPI"
// upload a video


export const uploadVideo = async(reqBody)=>{
    //call POST http request tp "http://localhost:4000/videos" to add video tp json server and return response add component
    
    return await commonAPI("POST",`${serverUrl}/videos`,reqBody)
}

//get all videos from json server
export const getAllVideo = async()=>{
    //make get "http://localhost:4000/videos" to get all video from json server to view component

    return await commonAPI("GET",`${serverUrl}/videos`,"")
}

//get all videos from json server
export const getAVideo = async(id)=>{
    //make get "http://localhost:4000/videos" to get all video from json server to view component

    return await commonAPI("GET",`${serverUrl}/videos/${id}`,"")
}

//remove videos from json server

export const deleteVideo = async(id)=>{
    //make get "http://localhost:4000/videos" to get all video from json server to view component

    return await commonAPI("DELETE",`${serverUrl}/videos/${id}`,{})
}

//store watch history in json server

export const addToHistory = async(videoDetails)=>{
     //make get "http://localhost:4000/history" to add watch history to  json server and return response to videoCard
     return await commonAPI("POST",`${serverUrl}/history`,videoDetails)

}

//get all watching video history
export const getAllHistory = async()=>{
     //make get "http://localhost:4000/history" to get all video watchHistory from json server to watchhistory component
     return await commonAPI("GET",`${serverUrl}/history`,"")
}

//get all watching video history
export const deleteHistory = async(id)=>{
    //make get "http://localhost:4000/history/id" to delete watchHistory from json server to watchhistory component
    return await commonAPI("DELETE",`${serverUrl}/history/${id}`,{})
}



// add a category to json server
export const addCategory = async(reqBody)=>{
    //call POST http request tp "http://localhost:4000/categories" to add video tp json server and return response category component
    
    return await commonAPI("POST",`${serverUrl}/categories`,reqBody)
}


// get  all category to json server
export const getAllCategory = async()=>{
    //call GET http request tp "http://localhost:4000/categories" to get video tp json server and return response category component
    
    return await commonAPI("GET",`${serverUrl}/categories`,"")
}

// delete all category to json server
export const deleteCategory = async(id)=>{
    //make delete http request tp "http://localhost:4000/categories" to get video from json server and return response category component
    
    return await commonAPI("DELETE",`${serverUrl}/categories/${id}`,{})
}

// update category to json server
export const updateCategory = async(id,body)=>{
    //make UPDATE http request tp "http://localhost:4000/categories" to UPDATE particular category to  json server and return response category component
    
    return await commonAPI("PUT",`${serverUrl}/categories/${id}`,body)
}