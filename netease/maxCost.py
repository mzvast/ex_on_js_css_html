from math import sqrt, floor


def maxCost(h):
    if h > 0:
        right = (-1 + sqrt(1 + 4 * h)) / 2
        return int(floor(right))

print maxCost(-1)
