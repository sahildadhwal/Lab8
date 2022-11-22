// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// Create 2 tests that should be true, and 2 tests that should be false 
// for each function (4 tests x 5 functions = 20 tests).

// For clarification, all of your tests should pass, but you should expect 
// two of your tests to return a true response and two of your tests to return 
// a false response e.g. expect(2+2).toBe(4) and expect(4+4).toBe(10)

//module.exports = { isPhoneNumber, isEmail, isStrongPassword, isDate, isHexColor };
// (1) isPhoneNumber
// true
test('707-123-4567 is a phone number', () => {
    let phoneNum = '707-123-4567';
    expect(functions.isPhoneNumber(phoneNum)).toBe(true);
});

// true
test('816-563-3932 is a phone number', () => {
    let phoneNum = '816-563-3932';
    expect(functions.isPhoneNumber(phoneNum)).toBe(true);
});

// false // 911 edge case!
test('911 not a phone number', () => {
    let phoneNum = '911';
    expect(functions.isPhoneNumber(phoneNum)).toBe(false);
});

// false 
test('666-HOTLINEBLING-666 not a phone number', () => {
    let phoneNum = '666-HOTLINEBLING-666';
    expect(functions.isPhoneNumber(phoneNum)).toBe(false);
});

// (2) isEmail
// true
test('sdadhwal@ucsd.edu is an email', () => {
    let email = 'sdadhwal@ucsd.edu';
    expect(functions.isEmail(email)).toBe(true);
});

// true
test('sahildadhwal@gmail.com is an email', () => {
    let email = 'sahildadhwal2001@gmail.com';
    expect(functions.isEmail(email)).toBe(true);
});

// false
test('dominoes is not an email', () => {
    let email = 'dominoes';
    expect(functions.isEmail(email)).toBe(false);
});

// false
test('applesupport@apple is not an email', () => {
    let email = 'applesupport@apple';
    expect(functions.isEmail(email)).toBe(false);
});

// (3) isStrongPassword
// true
test('password1234 is a valid password', () => {
    let password = 'password1234';
    expect(functions.isStrongPassword(password)).toBe(true);
});

// true
test('s_4D is a valid password', () => {
    let password = 's_4D';
    expect(functions.isStrongPassword(password)).toBe(true);
});

// false
test('5ahil is not a valid password', () => {
    let password = '5ahil';
    expect(functions.isStrongPassword(password)).toBe(false);
});

// false
test('h3y is not a valid password', () => {
    let password = 'h3y';
    expect(functions.isStrongPassword(password)).toBe(false);
});

// (4) isDate 
// false
test('12/25/1234 is a valid date', () => {
    let date = '12/25/1234';
    expect(functions.isDate(date)).toBe(true);
});

// true
test('11/21/2022 is a valid date', () => {
    let date = '11/21/2022';
    expect(functions.isDate(date)).toBe(true);
});

// false
test('december 25, 2023 is not a valid date', () => {
    let date = 'december 25, 2023';
    expect(functions.isDate(date)).toBe(false);
});

// false
test('11/21/22 is not a valid date', () => {
    let date = '11/21/22';
    expect(functions.isDate(date)).toBe(false);
});

// (5) isHexColor
// true
test('000000 is a hex color', () => {
    let hexColor = '000000';
    expect(functions.isHexColor(hexColor)).toBe(true);
});

// true
test('FF0000 is a hex color', () => {
    let hexColor = 'FF0000';
    expect(functions.isHexColor(hexColor)).toBe(true);
});

// false
test('red is not a hex color', () => {
    let hexColor = 'red';
    expect(functions.isHexColor(hexColor)).toBe(false);
});

// false
test('SUP is not a hex color', () => {
    let hexColor = 'SUP';
    expect(functions.isHexColor(hexColor)).toBe(false);
});
