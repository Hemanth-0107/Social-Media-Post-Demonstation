import mongoose from 'mongoose';
import express from 'express';
import PostMessage from '../models/postMessage.js'

export const getPosts= async(req,res)=>{
    try{
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    }
    catch(err){
        console.log(err);
        res.status(404).json({message:err.message})
    }
}

export const createPost =async (req,res) => {
   const post=req.body;
   const newPost = new PostMessage(post);
   try{
    await newPost.save();
    res.status(201).json(newPost);

   }catch(err){
    console.log(err);
    res.status(409).json({message:err.message})
   }
}
export const updatePost =async (req,res) => {
    const {id}=req.params;
    const { title, message, creator, selectedFile, tags } = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:`Post not found with ${id}`});
    }
   const updatedPost = { creator, title, message, tags, selectedFile, _id: id };
   await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });
   res.json(updatedPost);
}

export const getPost= async(req,res)=>{
    const {id}=req.params;
    try{
        const post = await PostMessage.findById(id);
        res.status(200).json(post);
    }catch(err){
        console.log(err);
        res.status(404).json({message:err.message})
    }
}

export const deletePost =async (req,res) => {
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:`Post not found with ${id}`});
    }
   await PostMessage.findOneAndRemove(id,
    (err,data)=>{
        if(err) console.log(err);
        else console.log('deleted'+data);
    });
}
export const likePost = async (req,res) => {
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:`Post not found with ${id}`});
    }
    const updatedPost = await PostMessage.findByIdAndUpdate(id,{likeCount:post.likeCount+1},{new:true});
    res.json(updatedPost);  
}


