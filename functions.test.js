const {returnTwo, greeting, add} = require('./functions')

describe('returnTwo tests', () => {
    test('checks if returnTwo is equal to 2', () => {
        let returningTwo = returnTwo()
        expect(returningTwo).toEqual(2)
    }) 
})  

describe('greeting tests', () => {
    test('"Hello, James." is returned', () => {
        let returnGreeting = greeting('James')
        expect(returnGreeting).toBe('Hello, James.')
    })  

    test('"Hello, Jill." is returned', () => {
        let returnGreeting = greeting('Jill')
        expect(returnGreeting).toBe('Hello, Jill.')
    })
})

describe('add tests', () => {
    test('tests for add function to equal 3', () => {
        let returnAdd = add(1, 2)
        expect(returnAdd).toEqual(3)
    })

    test('tests for add function to equal 14', () => {
        let returnAdd = add(5, 9)
        expect(returnAdd).toEqual(14)
    })
})