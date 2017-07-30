import { sum } from '../helpers'

test('returns 0 when given sum of nothing', () => {
    expect(sum()).toBe(0)
})

test('returns 3 when given 1 and 2 to sum', () => {
    expect(sum(1, 2)).toBe(3)
})
