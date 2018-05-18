// task 1
const user = [{ 'name': 'Ira', 'age': 18, 'phone': '0997787678' },
    { 'name': 'Maria', 'age': 22, 'phone': '0997787678' },
    { 'name': 'Petro', 'age': 23, 'phone': '0997787678' }
];

_.each(user, function(param) {
    console.log("Hi, my name is " + param.name + '. ' + ' I am ' + param.age + ' years old, ' + ' my number: ' + param.phone);
});

//task2
const arrUserName = _.map(user, function(param) {
    return param.name;
});

const arrUserId = _.map(user, function(param) {
    return param.age;
});

const arrUserNum = _.map(user, function(param) {
    return param.phone;
});

for (var i = 0; i < arrUserId.length; i++) {
    console.log("Hi, my name is " + arrUserName[0] + '. ' + ' I am ' + arrUserId[0] + ' years old,' + ' my number: ' + arrUserNum[0]);
}