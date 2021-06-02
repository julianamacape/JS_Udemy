'use strict';

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    weight: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.weight / (this.height ** 2);
        return this.bmi;
    }
};

const john = {
    firstName: 'John',
    lastName: 'Smith',
    weight: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.weight / (this.height ** 2);
        return this.bmi;
    }
};

console.log(mark.calcBMI() > john.calcBMI() ? `${mark.firstName} ${mark.lastName} has a BMI of ${mark.calcBMI()} which is higher than ${john.firstName} ${john.lastName}'s BMI.` : `${john.firstName} ${john.lastName} has a BMI of ${john.calcBMI()} which is higher than ${mark.firstName} ${mark.lastName}'s BMI.`);