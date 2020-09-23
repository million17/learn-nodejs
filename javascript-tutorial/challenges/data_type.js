function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 5;
    const firstDecimal = 4.33;
    const firstString = ' is the best!';

    console.log('Integer ', firstInteger + parseInt(secondInteger));
    console.log('Decimal ', firstDecimal + parseFloat(secondDecimal));
    console.log('String ', firstString + secondString);
}

performOperation('32', '3.23', 'Arsenal');
