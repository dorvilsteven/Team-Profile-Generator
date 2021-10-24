module.exports = [
            {
                type: 'input',
                name: 'engineerName',
                message: 'Enter the name of the Engineer.',
                validate: (engineerName) => {
                    if (engineerName) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'Please enter the github username of the engineer.',
                validate: (engineerGithub) => {
                    if (engineerGithub) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        ];