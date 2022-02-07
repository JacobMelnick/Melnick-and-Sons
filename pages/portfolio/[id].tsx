import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { useRouter } from "next/router";
import { SanityClient } from "../../services/SanityClient";
import Layout from "../../components/Layout/Layout";
import { Grid, Typography } from "@material-ui/core";
import SelectedJobCard from "../../components/SelectedJobCard/SelectedJobCard";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: "relative",
    },
    background: {
      position: "absolute",
      backgroundRepeat: "no-Repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "90%",
      opacity: 1.5,
      display: "flex",
    },
    rootImage: {
      display: "flex",
      position: "relative",
      width: "100vw",
      height: 600,
    },

  }),
  { name: "MuiExample_Component" }
);

type PortfolioJobProps = {
  job: any;
  slug: string;
};

// This function gets called at build time
export async function getStaticPaths() {
  const jobs = await SanityClient.fetch(`*[_type == "Job"]{
    _id,
    slug,
  }`);
  const paths = jobs.map(({ slug }: any) => ({
    params: { id: slug.current },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const job = await SanityClient.fetch(
    `*[_type == "Job" && slug.current == "${params.id}"]{
      _id,
      JobName,
      slug,
      Featured,
      Description,
      images[]{
        asset->
      }
    }`
  );

  
  return { props: { job } };
}

const PortfolioJob: React.FC<PortfolioJobProps> = ( { job } ) => {
  const classes = useStyles();
  const router = useRouter();
  const queryParams = router.query;
  
  const firstImage = []
  const restOfImages = []
  for (let i = 0; i < job.length; i++) {
    const curr = job[i];
    firstImage.push(curr.images[0].asset.url);
    restOfImages.push(curr.images.slice(1))
    
  }


  return (
    <Layout>
      <SelectedJobCard  name={job[0].JobName}
                      key={job._id}
                      image={firstImage[0]}
                      featured={job.Featured}
                      description={job.Description}
                      restOfImages={restOfImages}/>
    </Layout>
  );
};

export default PortfolioJob;
