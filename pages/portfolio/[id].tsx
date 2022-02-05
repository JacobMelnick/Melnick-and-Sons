import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { useRouter } from "next/router";
// import { SanityClient } from '~/services/SanityClient';


const data = [
  {
    id: 1,
    slug: 'wilhelm-home',
    title: 'Wilhelm Home',
    description: 'Wilhelm Home',
  }
]

const useStyles = makeStyles({
  root: {},
});

type PortfolioJobProps = {
  job: typeof data[0]
};

const PortfolioJob: React.FC<PortfolioJobProps> = ({job}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3>PortfolioJob</h3>
    </div>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  const jobs = data;
  const paths = jobs.map((job) => ({
    params: { id: job.slug },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const job = data.find((job) => job.slug === params.id);

  // Pass post data to the page via props
  return { props: { job } }
}

export default PortfolioJob;
