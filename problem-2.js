function centimeterToMeter(centimeter) {
    const meter = centimeter * 0.01;
    return meter;
}

const centimeter = 120;
const totalMeter = centimeterToMeter(centimeter);
console.log(totalMeter);