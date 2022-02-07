import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { useRouter } from "next/router";
import { SanityClient } from "../../services/SanityClient";
import Layout from "../../components/Layout/Layout";

const useStyles = makeStyles({
  root: {},
});

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
    `*[_type == "Job" && slug.current == "${params.id}"]`
  );
  return { props: { job } };
}

const PortfolioJob: React.FC<PortfolioJobProps> = ({ job }) => {
  const classes = useStyles();
  const router = useRouter();
  const queryParams = router.query;
  console.log(job);

  return (
    <div className={classes.root}>
      <h3>PortfolioJob</h3>
    </div>
  );
};

export default PortfolioJob;
