module.exports = [
    {
        type: 'input',
        name: 'internName',
        message: 'Enter the name of the intern.',
        validate: (internName) => {
            if (internName) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'Please enter the current school the intern attends.',
        validate: (internSchool) => {
            if (internSchool) {
                return true;
            } else {
                return false;
            }
        }
    }
];