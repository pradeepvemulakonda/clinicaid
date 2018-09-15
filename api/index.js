const faker = require('faker/locale/en_AU');
const RandomUser = require('randomuser');
const randomUser = new RandomUser();

let db = {
    users: []
};

randomUser.getUsers({
    results: 50,
    inc: 'name,picture'
}, users => {

    for (let i=0; i < 50; i++) {
        let u = users[i];
        const user = {
            id: faker.random.uuid(),
            firstName: u.name.first,
            lastName: u.name.last,
            picture: u.picture,
            address: faker.address.streetAddress(),
            phone: faker.phone.phoneNumber(),
            bio: faker.lorem.sentences(2),
        };

        db.users.push(user);
    }

});

module.exports = () => db;
