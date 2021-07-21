// Exercise 1
const { uppercase, getUserName, getRepos } = require('./exercises.js')

describe('Test on uppercase function', () => {
    test('calling callback function', (done) => {
        uppercase('testing', (string) => {
            expect(string).toBe('TESTING');
            done();
        })
    })
})

// Exercise 2 and 3

// Using Promise Structure;

// describe('Test on getUserName function', () => {
//     test('if return user name', () => {
//         expect.assertions(1);
//         return getUserName(4)
//             .then((name) => {
//                 expect(name).toBe('Mark');
//             })
//     })    

// test('if return error when the ID is not found', () => {
//     expect.assertions(1);
//     return getUserName(9)
//         .catch((error) => {
//             expect(error).toEqual({ error: 'User with 9 not found.' })
//         })
// })

// Using Async/Await Structure;

describe('Test on getUserName function', () => {
    test('if return user name', async () => {
        const result = await getUserName(4)
        expect(result).toBe('Mark')
    })    
    test('if return error when the ID is not found', async () => {
        try {
            await getUserName(9)
        } catch(error) {
          expect(error).toEqual({ error: 'User with 9 not found.' })
        }
    })
})

// Exercise 4

describe('Tests on getRepos Function', () => {
    test('if getRepos returns the correct object', () => {
        expect.assertions(1);
        const url = 'https://api.github.com/orgs/tryber/repos' 
        return getRepos(url)
        .then((obj) => {
            expect(obj).toContain('sd-01-week4-5-project-todo-list')
        })
    })
})

