const db = require('../database/dbConfig.js');
const Users = require('./users-model.js');

describe('users model', () => {
    describe('insert', () => {

        // it("get", async () => {
        //     const res = await Users.find();
        //     expect(res).toHaveLength(5);
        // });



        // it('should insert the provided users into the db', async () => {
        //     await Users.add({ name: "matheew" });
        //     await Users.add({ name: "hermanaasas" });

        //     const users = await db('users');
        //     expect(users).toHaveLength(2);
        // })

        it("get", async () => {
            const res = await Users.find();
            expect(res).toHaveLength(2);
        });

        // it('should return the inserted user', async () => {
        //     let user = await Users.add({ name: 'pip' });
        //     expect(user.name).toBe('pip');

        //     user = await Users.add({ name: 'sam' });
        //     expect(user.name).toBe('sam');

        // })
    })

    describe('remove', () => {
        it('should remove the user from the db', async () => {
            await Users.remove(2)

            const users = await db('users');
            expect(users).toHaveLength(1);
        })
    })
})

// beforeEach(async () => {
//     await db('users').truncate();
// })

// function remove(id) {
//     return db('users')
//         .where('id', id)
//         .del();
// }