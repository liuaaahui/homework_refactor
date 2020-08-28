import Employee from "../src/employee";

const rankTest = require('ava');

rankTest('Sample test1', t => {
    const expectResult = 'Employee cannot be of type sale';

    try{
        new Employee('penny','sale');
        t.fail();
    }
    catch (e){
        t.is(e.message,expectResult);
    }
});