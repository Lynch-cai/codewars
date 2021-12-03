# Turn with a Compass
def direction(facing, turn):
    res = 0
    c = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]
    for i in range(len(c)):
        if(facing == c[i]):
            res = int(i + turn/45)
    return c[res%8]



# -- Instruction
# You have an 8-wind compass, like this:

# You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

# Return the direction you will face after the turn.

# Examples
# "S",  180  -->  "N"
# "SE", -45  -->  "E"
# "W",  495  -->  "NE"



# -- Sample Tests:
# import codewars_test as test
# from solution import direction

# @test.describe("Sample tests")
# def tests():
#     @test.it("Some examples")
#     def tests():
#         test.assert_equals(direction("S", 180),  "N")
#         test.assert_equals(direction("SE", -45), "E")
#         test.assert_equals(direction("W", 495),  "NE")