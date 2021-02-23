var customerName = 'bob';
var bestCustomer;

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'some value';

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'some other value';
}