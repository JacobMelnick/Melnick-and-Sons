import Link from 'next/link'
import Layout from '../../components/Layout/Layout'
import { makeStyles } from "@material-ui/styles";
import { Grid, Stack, Typography } from "@material-ui/core";
import { ClassNames } from '@emotion/react';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: "relative",
      height: "100%",
    },
    background: {
      position: "absolute",
      backgroundImage: 'url("public/images/paintSelection/background.jpg")',
      backgroundRepeat: "no-Repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: '100%',
      height: '90%',
      marginTop: '2%'
    }
  }),
  { name: "MuiExample_Component" }
);


const paintSelection = (props) => {

  const classes = useStyles(props)

    return (
      <Layout>
        <Grid container className={classes.root}>
      <div className={classes.background}>

      </div>
        </Grid>
    <h1>Paint Selection</h1>
      
      </Layout>
    )
  }

  export default paintSelection