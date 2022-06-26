// Jenny's secret message
export function greet(name) {
  if(name === "Johnny")
    return "Hello, my love!";
  return "Hello, " + name + "!";
}
  


// -- Instruction
// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?



// -- Sample Tests:
// /// <reference path="/runner/typings/mocha/index.d.ts" />
// /// <reference path="/runner/typings/chai/index.d.ts" />
// import { greet } from './solution';
// import { expect } from 'chai';

// describe('Jenny\'s greeting function', function() {
//   it('should greet some people normally', () => {
//    expect(greet('Jim')).to.equal('Hello, Jim!');
//    expect(greet('Jane')).to.equal('Hello, Jane!');
//    expect(greet('Simon')).to.equal('Hello, Simon!');
//   });
  
//   it('should greet Johnny a little bit more special', () => {
//    expect(greet('Jim')).to.equal('Hello, Jim!');
//   });
// });