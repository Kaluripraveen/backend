module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name:'dir8ykyof',
          api_key:'252621687943849',
          api_secret:'fHKsO5l6KjOV75fMAwoSxQ4JeMk',
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    // ...
  });