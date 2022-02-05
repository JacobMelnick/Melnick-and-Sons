const TestimonialSchema = {
    // This is the display name for the type
    title: "Testimonials",
    
    // The identifier for this document type used in the api's
    name: "testimonial",
    
    // Documents have the type 'document'. Your schema may describe types beyond documents
    // but let's get back to that later.
    type: "document",
    
    // Now we proceed to list the fields of our document
    fields: [
      // This document has only one field
      {
        // The display name for this field
        title: "Description",

        // The identifier for this field used in the api's
        name: "description",

        // The type of this field
        type: "text",
      },
      
    ]
  }

  export default TestimonialSchema;