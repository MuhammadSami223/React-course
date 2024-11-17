import conf from "../conf/conf";
import { Storage,Client,ID,Databases,Query } from "appwrite";


export default class Service{
client = new Client();
databases;
bucket;

constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)
    this.databases = new Databases(this.client )
    this.bucket= new Storage(this.client )
}
async createPost({title,slug,content,featueredImage,status,userId}){
    try {
        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,{
                title,
                content,
                featueredImage,
                status,
                userId
            }
        )
    } catch (error) {
        console.log("Appwrite :: cratePost error",error);
        
    }
}
async updatePost(slug,{title,content,featueredImage,status}){
    try {
        return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,{
                title,
                content,
                featueredImage,
                status,
            
            }
        )
    } catch (error) {
        console.log("Appwrite :: updatePost error",error);
        
    }
}

async deletePost(slug){
    try {
        return await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
        return true;
    } catch (error) {
        console.log("Appwrite :: deletepost error",error);
        return false
    }
}
async getPost(slug){
    try {
        return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
    } catch (error) {
        console.log("Appwrite :: getPost error",error);
        return false
    }
}

async getPosts(queries = [Query.equal("status","active")]){
    try {
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries
        )
    } catch (error) {
        console.log("Appwrite :: getPosts error",error);
        return false
    }
}
async uploadFile(file){
    try {
        return await this.bucket.createFile(
          conf.appwriteBucketId,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log("Appwrite :: uploadFile  error",error);
        return false
    }
}

async deleteFile(fileId){
    try {
        return await this.bucket.deleteFile(
          conf.appwriteBucketId,
          fileId
        )
        return true
    } catch (error) {
        console.log("Appwrite :: deletefile  error",error);
        return false
    }
}
 getFilePreview(fileId){
        return  this.bucket.getFilePreview(
          conf.appwriteBucketId,
          fileId
        )
    }
}
