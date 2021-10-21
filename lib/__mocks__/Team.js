const Manager = require('../Manager');
const Engineer = require('../Engineer');
const Intern = require('../Intern'); 

const mark = new Manager('Mark', 111);
const peter = new Engineer('Peter', 'peterjuanpablo');
const mary = new Intern('mary', 'Princeton University');


module.exports = function() {
    this.members = [mark, peter, mary];
};