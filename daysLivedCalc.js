const daysLivedCalc = () => {
    const years = prompt("Enter your age in years");
    const yearsNumber = Number(years);
    const daysLived = yearsNumber * 365;
    alert(`You have lived approximately ${daysLived} days.`);
};

daysLivedCalc();