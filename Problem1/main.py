
def count(input1):
    stack={}
    char_upper = [char.upper() for char in input1]
    for val in char_upper:
        if val not in stack:
            stack[val] = 1
        else:
            stack[val] += 1
    for k,v in stack.items():
        print(k,'-',v)

print(count('Chinmay Kulkarni'))