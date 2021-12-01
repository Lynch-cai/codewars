// Extract the domain name from a URL
function domainName(url){
    const webThings = ["http://", "https://", "www."]
    webThings.map(thing => {
        url = url.replace(thing, "")
    })
    url = url.slice(0, url.indexOf("."))
    return url
}



// -- Instruction
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"



// -- Sample Tests:
// const { assert } = require("chai");

// describe("Sample test", () => {
//   it("Should pass sample tests", () => {
//     assert.equal(domainName("http://google.com"), "google");
//     assert.equal(domainName("http://google.co.jp"), "google");
//     assert.equal(domainName("www.xakep.ru"), "xakep");
//     assert.equal(domainName("https://youtube.com"), "youtube");
//   })  
// })
