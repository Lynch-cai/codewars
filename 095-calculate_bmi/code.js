// Calculate BMI
const bmi = (weight, height) => {
    const b = weight/height**2
    if (b < 18.5) { return "Underweight" }
    else if (b < 25) { return "Normal" }
    else if (b < 30) { return "Overweight" }
    else { return "Obese" }
}



// -- Instruction
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"



// -- Sample Tests:
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(bmi(80, 1.80), "Normal");
//     });
// });