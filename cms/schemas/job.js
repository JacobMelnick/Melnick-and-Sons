const jobSchema = {
    title: "Jobs",
    name: "Job",
    type: "document",
    fields: [
      {
        title: "Job Title",
        name: "JobName",
        type: "string",
      },
      {
        title: "Job Description",
        name: "Description",
        type: "text",
      },
      {
        title: "Images",
        name: "images",
        type: "array",
        of: [{ type: "image" }],
        description: "Images of the job",
      },
      {
        title: "Slug",
        name: "slug",
        type: "slug",
        description: "The text used for the url, cannot contain spaces, MUST be unique",
      },
      {
        title: "Featured",
        name: "Featured",
        type: "boolean",
        description: "If the job is featured",
      },
    ]
  }

  export default jobSchema;