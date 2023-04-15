function formatAddress(data) {
    const {street, place_number, zip, city} = data;
    return `${street} ${place_number}, ${zip} ${city}`;
}

module.exports = {
    beforeCreate({params:{data}}) {
        data.address = formatAddress(data);
    },
    beforeUpdate({params:{data}}) {
        data.address = formatAddress(data);
    },
};