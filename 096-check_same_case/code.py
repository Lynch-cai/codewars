# Check same case
def same_case(a, b):
    if ((a.isupper() and b.isupper()) or (a.islower() and b.islower())):
        return 1
    elif (a.isalpha() and b.isalpha()):
        return 0
    else: 
        return -1



#  -- Instruction
# Write a function that will check if two given characters are the same case.

# 'a' and 'g' returns 1

# 'A' and 'C' returns 1

# 'b' and 'G' returns 0

# 'B' and 'g' returns 0

# '0' and '?' returns -1

# If any of characters is not a letter, return -1.

# If both characters are the same case, return 1.

# If both characters are letters and not the same case, return 0.



# -- Sample Tests:
# import codewars_test as test
# from solution import same_case

# @test.describe("Basic Tests")
# def test_group():
#     @test.it("basic test case")
#     def test_case():
#         test.assert_equals(same_case('C', 'B'), 1)
#         test.assert_equals(same_case('b', 'a'), 1)
#         test.assert_equals(same_case('d', 'd'), 1)
#         test.assert_equals(same_case('A', 's'), 0)
#         test.assert_equals(same_case('c', 'B'), 0)
#         test.assert_equals(same_case('b', 'Z'), 0)
#         test.assert_equals(same_case('\t', 'Z'), -1)
#         test.assert_equals(same_case('H', ':'), -1)