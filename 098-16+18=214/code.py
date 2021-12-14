# 16+18=214
def add(num1, num2):
    num1 = list(str(num1))
    num2 = list(str(num2))
    num1bk = num1.copy()
    num2bk = num2.copy()
    tmp = []
    res = ''
    
    for i in range (min(len(num1), len(num2))):
        tmp.append(int(num1[len(num1)-1-i]) + int(num2[len(num2)-1-i]))
        num1bk.pop(len(num1)-1-i)
        num2bk.pop(len(num2)-1-i)
    
    if (len(num1bk) > 0):
        for i in range (len(num1bk)):
            res += num1bk[i]
    elif (len(num2bk) > 0):
        for i in range (len(num2bk)):
            res += num2bk[i]
        
    for i in range (len(tmp)):
        res += str(tmp[len(tmp) -1 -i])
    
    return int(res)



# -- Instruction
# For this kata you will have to forget how to add two numbers.

# It can be best explained using the following meme:

# Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

# In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

# You may assume both integers are positive integers.



# -- Sample Tests:
# @test.it("Actual Addition")
# def real_addition_test():
#     test.assert_equals(add(2,11), 13)
#     test.assert_equals(add(0,1), 1)
#     test.assert_equals(add(0,0), 0)

# @test.it("Silly Addition")
# def silly_addition_test():
#     test.assert_equals(add(16,18), 214)
#     test.assert_equals(add(26,39), 515)
#     test.assert_equals(add(122,81), 1103)