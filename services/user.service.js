const { faker } = require('@faker-js/faker');

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        username: faker.internet.userName(),
        gender: faker.person.gender(),
        avatar: faker.image.avatar(),
        email: faker.internet.email(),
        password: faker.internet.password(),birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    });
  }
  }

  create() {}

  find() {
    return this.users;
  }

  findOne(id) {
    return this.users.find(item => item.id === id);

  }

  update() {}

  delete() {}

}

module.exports = UsersService;
