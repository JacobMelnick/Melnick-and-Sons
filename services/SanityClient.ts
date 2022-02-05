import Sanity from '@sanity/client';

export const SanityClient = Sanity({
  projectId: `ffh4rn3d`,
  dataset: `production`,
  apiVersion: `2021-03-25`,
  useCdn: true,
});