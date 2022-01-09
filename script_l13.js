//lesson 13 if & swith

const num = 50;
if (num==50) {
    console.log('TRUE');
} else {
    console.log('Error');
}
// or
(num == 50) ? console.log('TRUE') : console.log('Error');

const num2 = 51;

switch (num2) {
    case 49:
        console.log('49 is flase');
        break;
    case 50:
        console.log('49 is true');
        break;
    default:
        console.log('nor jet');
        break;
}