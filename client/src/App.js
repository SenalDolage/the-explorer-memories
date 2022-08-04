import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';

import { Posts, Form } from "./components";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div>
      <AppBar className={classes.appBar} position="static" color="primary">
        <Container maxWidth="lg">
          <Typography className={classes.heading} variant="h5" align="center">
            The Explorer Memories
          </Typography>
        </Container>
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} style={{ marginTop: '20px' }}>
            <Grid item xs={12} sm={8}>
              <Posts />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
}

export default App;
