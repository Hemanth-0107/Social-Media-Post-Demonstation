import React from 'react'
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import useStyles from './styles';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import {likePost,deletePost} from '../../../actions/posts'
import {useDispatch} from'react-redux';

const Post = ({post,setCurrentId}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
   <Card className={classes.card}>
    <CardMedia  className={classes.media}

    image={post.selectedFile} title={post.title} />

    <div className={classes.card}>
      <Typography variant='h6'>{post.creator}</Typography>
      <Typography variant='body2'> {moment(post.createdAt).fromNow()}</Typography>
    </div>

    <div className={classes.overlay2} >
      <Button size='small' color='primary' style={{color:'white'}} onClick={()=>setCurrentId(post._id)}>
        <MoreHorizIcon /></Button>
        
    </div>
    <div className={classes.details}>
      <Typography variant='body2' className={classes.details}>{post.tags.map(tag=> `#${tag} `)}</Typography>
    </div>
    <CardContent>
    <Typography variant='h5' className={classes.title}>{post.message}</Typography>
    </CardContent>
    <CardActions>
      <Button size='small' color='primary'  onClick={()=>dispatch(likePost(post._id))}>
        <ThumbUpIcon size='small'/>{post.likeCount}
        </Button>
      <Button size='small' color='primary' onClick={()=>dispatch(deletePost(post._id))}>
        <DeleteIcon size='small'/>Delete
        </Button>
    </CardActions>
   </Card>
  )
}

export default Post
