import React,{useState,useEffect} from 'react';
import useStyles from './styles';
import {TextField,Button,Typography,Paper} from '@material-ui/core';
import {useDispatch,useSelector} from 'react-redux';
import {createPosts,updatePost} from '../../actions/posts';
import FileBase from 'react-file-base64';

const Form = ({currentId,setCurrentId}) => {
  const classes = useStyles();
  const [postData,setPostData] = useState({creator:'',title:'',message:'',tags:'',selectedFile:''});
  const dispatch = useDispatch();
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(currentId!==0){
      dispatch(updatePost(postData));
    }
    else{
      dispatch(createPosts(postData));
    }
    clear();
   
    console.log(postData);      
  }
  
  const clear = () =>{
    setCurrentId(0);
    setPostData({creator:'', title:'', message:'',tags:'', selectedFile:''})
  }
  
  
  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.form} ${classes.root} `} onSubmit = {handleSubmit}>

        <Typography className={classes.heading}>Creating memories</Typography>

        <TextField className={classes.inputText} name='creator'  label= 'creator'   variant = 'outlined'  fullWidth value={postData.creator}  onChange={(e) =>{setPostData({ ...postData,creator:e.target.value})}} />
        
        <TextField  className={classes.inputText}   name='title'  label= 'title'   variant = 'outlined'  fullWidth value={postData.title}  onChange={(e) =>setPostData({ ...postData,title:e.target.value})} />

        <TextField  className={classes.inputText}  name='message'  label= 'message'   variant = 'outlined'  fullWidth value={postData.message}  onChange={(e) =>setPostData({ ...postData,message:e.target.value})} />

        <TextField  className={classes.inputText}  name='tags'  label= 'tags'   variant = 'outlined'  fullWidth value={postData.tags}  onChange={(e) =>setPostData({ ...postData,tags:e.target.value.split(',')})} />

        <div className={classes.fileInput}><FileBase multiple={false} onDone={({ base64 }) => {setPostData({...postData,selectedFile:base64});console.log(postData.selectedFile)}}/></div>
        <Button className={classes.buttonSubmit} variant='contained' color='primary' type='submit'>Submit</Button>
        <Button className={classes.buttonSubmit} variant='contained' color='secondary' onClick={clear}>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form
