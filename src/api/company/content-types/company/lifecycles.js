function formatTitle(data) {
    const {hr_dept, hr_number, company_name} = data;
    return `${hr_dept} ${hr_number} ${company_name}`;
}

module.exports = {
    beforeCreate({params:{data}}) {
        data.company_displaytitle = formatTitle(data);
    },
    beforeUpdate({params:{data}}) {
        data.company_displaytitle = formatTitle(data);
    },
};