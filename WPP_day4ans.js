today = new Date();
xmas = new Date(today.getFullYear(),11,25);
if (today.getMonth() === 11 && today.getDate() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
}var dayconvert = 1000 * 60 * 60 * 24;
console.log(`${Math.ceil((xmas.getTime() - today.getTime()) / dayconvert)} More Days For Christmas`); 