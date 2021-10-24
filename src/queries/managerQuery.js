module.exports = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Please enter your Name.',
        validate: (managerName) => {
            if (managerName) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'managerOffice',
        message: 'what is your office number?',
        validate: (managerOffice) => {
            if (managerOffice) {
                return true;
            } else {
                return false;
            }
        }
    }
];