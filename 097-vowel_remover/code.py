# Vowel remover
def shortcut( s ):
    s = list(s)
    vowels = ['a', 'e', 'i', 'o', 'u']
    i = 0
    while i < len(s):
        for j in range(len(vowels)):
            if s[i] == vowels[j]:
                s.pop(i)
                i = 0
        i += 1
    return ''.join(s)



# -- Instruction
# Create a function called shortcut to remove all the lowercase vowels in a given string.

# Examples
# "hello"     -->  "hll"
# "codewars"  -->  "cdwrs"
# "goodbye"   -->  "gdby"
# "HELLO"     -->  "HELLO"
# Don't worry about uppercase vowels.



# -- Sample Tests:
# test.assert_equals(shortcut('hello'),'hll')