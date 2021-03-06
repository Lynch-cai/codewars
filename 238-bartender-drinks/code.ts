// L1: Bartender, drinks!
export function getDrinkByProfession(profession:string): string{
  switch(profession.toLowerCase()){
      case "jabroni":
        return "Patron Tequila"
      case "school counselor":
        return "Anything with Alcohol"
      case "programmer":
        return "Hipster Craft Beer"
      case "bike gang member":
        return "Moonshine"
      case "politician":
        return "Your tax dollars"
      case "rapper":
        return "Cristal"
      default:
        return 'Beer'
  }
}


// -- Instruction
// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".




// -- Sample Tests:
// import {getDrinkByProfession} from './solution';
// import {assert} from "chai";

// describe("L1: Bartender, drinks!", function(){
//   it("Sample tests", function() {
//     assert.equal(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
//     assert.equal(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
//     assert.equal(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
//     assert.equal(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
//     assert.equal(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
//     assert.equal(getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
//     assert.equal(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
//     assert.equal(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");
//     assert.equal(getDrinkByProfession("jabrOnI"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
//     assert.equal(getDrinkByProfession("scHOOl COUnselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
//     assert.equal(getDrinkByProfession("prOgramMeR"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
//     assert.equal(getDrinkByProfession("bike GanG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
//     assert.equal(getDrinkByProfession("poLiTiCiAN"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
//     assert.equal(getDrinkByProfession("RAPPer"), "Cristal", "'Rapper' should map to 'Cristal'");
//     assert.equal(getDrinkByProfession("punDIT"), "Beer", "'Pundit' should map to 'Beer'");
//     assert.equal(getDrinkByProfession("pUg"), "Beer", "'Pug' should map to 'Beer'");
//   });
// });