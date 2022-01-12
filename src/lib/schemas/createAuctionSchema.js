const schema = {
  properties: {
    body: {
      type: 'string',
      properties: {
        title: {
          type: 'string',
        },
      },
      required: ['title'],
    },
  },
  required: ['body'],
};

export default schema;
