from math import sqrt
def F(n):
    return ((1+sqrt(5))**n-(1-sqrt(5))**n)/(2**n*sqrt(5))
def fib_min_step(input):  
    currentIndex = 0
    while F(currentIndex) < input:
        currentIndex = currentIndex + 1      
    left_step = input - F(currentIndex-1);
    right_step = F(currentIndex) - input  
    if left_step<right_step:
        return int(round(left_step))
    else:
        return int(round(right_step))
