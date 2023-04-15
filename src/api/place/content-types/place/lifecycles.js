module.exports = {
    beforeCreate(event) {
        const {data, where, select, populate} = event.params;
        event.params.data.address = event.params.data.street + ' ' + event.params.data.place_number + ', ' + event.params.data.zip + event.params.data.city;
    },

    beforeUpdate(event) {
        const {data, where, select, populate} = event.params;
        event.params.data.address = event.params.data.street + ' ' + event.params.data.place_number + ', ' + event.params.data.zip + ' ' + event.params.data.city;
    },
};