const adminModel = require('./model')
const { Parser } = require('json2csv')
const getCsvFile = async (req, res) => {
    try {
        const fileName = 'users.csv' //generate csv file with this name
        var data = await adminModel.find({})
        const fields = [
            {
                label: 'Admin FirstName',
                value: 'firstName'
            },
            {
                label: 'Admin LastName',
                value: 'lastName'
            },
            {
                label: 'Admin Email Address',
                value: 'email'
            },
            {
                label: 'Admin Password',
                value: 'password'
            },
            {
                label: 'Admin Status',
                value: 'status'
            }
        ];
        const json2csv = new Parser({ fields });
        const csv = json2csv.parse(data);
        res.header('Content-Type', 'text/csv');
        res.attachment(fileName);
        res.send(csv);
    }
    catch (e) {
        res.send(e)
    }
}


module.exports = {
    getCsvFile: getCsvFile
}