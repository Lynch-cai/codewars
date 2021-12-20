# Double Every Other
def double_every_other(lst):
    for i in range(len(lst)):
        if i%2 == 1:
            lst[i] = lst[i]*2
    return lst



# -- Instruction
# Write a function that doubles every second integer in a list starting from the left.

# Example:

#   double_every_other([1,2,3,4]) # -> [1, 4, 3, 8]



# -- Sample Tests:
# test.assert_equals(double_every_other([1,2,3,4,5]), [1,4,3,8,5])
# test.assert_equals(double_every_other([1,19,6,2,12,-3]), [1,38,6,4,12,-6])
# test.assert_equals(double_every_other([-1000,1653,210,0,1]), [-1000,3306,210,0,1])