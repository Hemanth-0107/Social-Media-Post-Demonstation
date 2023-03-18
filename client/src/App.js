import React,{useEffect,useState} from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import memories from './images/memories.png';
import Form from './components/Forms/Form';
import {getPosts} from './actions/posts';
import Posts from './components/Posts/Posts';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

const App = () => {
  const [currentId,setCurrentId] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  },[dispatch]);

  return (
   <Container maxwidth="lg">
    <AppBar position="static" color="inherit" className={classes.appBar} >
    <Typography className={classes.heading} variant="h2" align="center" color="inherit" >Yo!Book</Typography>
    <img className={classes.image} src = {memories} alt = "memories" height={120}/>
    </AppBar>

    <Grow in>
      <Container>
        <Grid container justifyContent="space-between" alignItems='stretch' spacing={3}>
          
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId}/>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
          </Grid>

        </Grid>
      </Container>
      </Grow>
    
   </Container>
  );
}

export default App;
