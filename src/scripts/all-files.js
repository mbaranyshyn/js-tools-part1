jQuery(" h2").css(
    "font-size",
    "24px"
);
jQuery(document).ready(function() {
    jQuery(" h2").css(
        "background-color",
        "grey"
    );
});


$(function() {
    $(" h1").css("color", "red");
});
//task1
console.log(moment().format('DD.MM.YYYY'));

console.log('-----------------------------');

//task2
console.log(moment('06/11/1995', ('DD/MM/YYYY')).format('DD/MMMM/YYYY HH:mm'))
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
console.log(numeral(1000).format('0,0'));
console.log(numeral(1001).format('$ 0,0[.]00'));
console.log(numeral(1).format('0%'));