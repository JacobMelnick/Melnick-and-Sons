import Image from "next/image";
import Layout from "../components/Layout/Layout";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  photo: {
    display: "flex",
  },
  root: {
    display: "flex",
    position: "relative",
    width: "1800px",
    height: "700px",
  },
  imageText: {
    position: "absolute",
    height: "200px",
    width: "1800px",
    display: "flex",
    justifyContent: "center",
    zIndex: 1000,
    fontSize: "40px",
    color: "white",
    alignItems: "center",
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.root}>
        <div style={{ marginTop: "3%" }}>
          <div
            style={{
              backgroundColor: "black",
              opacity: ".6",
            }}
          >
            <div className={classes.imageText}>
              Painting just got a whole lot easier
            </div>
          </div>
          <Image
            className={classes.photo}
            width={1800}
            height={700}
            src="/images/melnickHouse/melnickHouse15.jpg"
            alt="MelnickHomePage"
          />
        </div>
      </div>
    </Layout>
  );
}
