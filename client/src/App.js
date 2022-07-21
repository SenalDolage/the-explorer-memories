import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import { Posts, Form } from "./components";
import useStyles from "./styles";

function App() {
  const classes = useStyles();

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
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
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
