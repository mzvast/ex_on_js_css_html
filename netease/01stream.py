def stream(inputStr):
    arr = list(inputStr)
    for x in xrange(0, len(arr)):
        print x
        for y in range(len(arr) - 1, x + 1, -1):
            print y, arr[y]
    return arr

def hello():
    return "hey fucker"

print stream('1')
print hello()