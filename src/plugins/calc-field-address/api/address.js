module.exports = {
    lifecycles: {
      beforeSave: async (model, attrs, options) => {
        // get values of street, number, zip and place
        const street = attrs.street;
        const number = attrs.number;
        const zip = attrs.zip;
        const place = attrs.place;
  
        // combine values into custom field
        attrs.calcAddress = `${street} ${number}, ${zip} ${place}`;
      },
    },
  };