import Layout from "../../components/Layout/Layout";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: "relative",
    },
    background: {
      position: "absolute",
      backgroundImage: 'url("/images/logos/MainPageHouse1.jpg")',
      backgroundRepeat: "no-Repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "90%",
      opacity: 0.9,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    rootImage: {
      display: "flex",
      position: "relative",
      width: "100vw",
      height: 500,
      paddingTop: "1%",
    },
  }),
  { name: "MuiExample_Component" }
);
type portfolioProps = {};

const portfolio: React.FC<portfolioProps> = (props) => {
  const classes = useStyles(props);

  return (
    <Layout>
      <Grid className={classes.root}>
        <div className={classes.rootImage}>
          <div className={classes.background}></div>
        </div>
      </Grid>
    </Layout>
  );
};

export default portfolio;
