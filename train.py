def count_vowels(string):
    total = 0

    for letter in string:
        if letter in ["a", "e", "i", "o", "u", "y"]:
            total += 1

    return total


print(count_vowels("moneropo"))
