def deleteStr(input):
    obj = {}
    strArr = list(input)
    for i in xrange(0, len(strArr)):
        outterArr = strArr[:]
        outterArr.pop(i)
        for j in xrange(0, len(outterArr)):
            innerArr = outterArr[:]
            innerArr.pop(j)
            currentStr = ''.join(innerArr)
            if not(currentStr in obj):
                obj[currentStr] = True
    return len(obj.keys())

print deleteStr('data')
