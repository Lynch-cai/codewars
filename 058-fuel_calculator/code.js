// Fuel Calculator
function fuelPrice(litres, pricePerLitre) {
    let res = 0
    let red = 0
    for (let i = 1; i <= litres; i++){
        if (i%2 == 0 && i <= 10){
            red = (0.05*(i/2))
        }
        res += pricePerLitre
    }
    return Number((res - red*litres).toFixed(2))
}



// -- Instruction
// In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the toal cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

// Good Luck!

// Note
// 1 Dollar = 100 Cents



// -- Sample Tests:
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(fuelPrice(5, 1.23), 5.65);
//   Test.assertEquals(fuelPrice(8, 2.5), 18.40);
//   Test.assertEquals(fuelPrice(5, 5.6), 27.50);
//     });
// });