// 
function dashatize(num) {
    if (isNaN(num)){
        return num.toString()
    }
    else{
        let res = ''
        num = Math.abs(num).toString().split('')
        num.map((n, i) => {
            if(n%2 == 0){
            res += n
            if (num[i+1]%2 !== 0){
                res += '-'
            }
            }
            else{
            res += n + '-'
            }
        })
        res = res.slice(0, -1)
        return res
    }
}

// -- Instruction
Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return an empty value.

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'


// -- Sample Tests:
describe("Basic", function(){
    Test.assertEquals(dashatize(274), "2-7-4", "Should return 2-7-4");
    Test.assertEquals(dashatize(5311), "5-3-1-1", "Should return 5-3-1-1");
    Test.assertEquals(dashatize(86320), "86-3-20", "Should return 86-3-20");
    Test.assertEquals(dashatize(974302), "9-7-4-3-02", "Should return 9-7-4-3-02");
});
describe("Weird", function(){
    Test.assertEquals(dashatize(NaN), "NaN", "Should return NaN");
    Test.assertEquals(dashatize(0), "0", "Should return 0");
    Test.assertEquals(dashatize(-1), "1", "Should return 1");
    Test.assertEquals(dashatize(-28369), "28-3-6-9", "Should return 28-3-6-9");
});
  