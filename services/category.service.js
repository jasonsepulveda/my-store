const { faker } = require('@faker-js/faker');

class CategoriesService {
  constructor() {
    this.categories = [];
    this.generate();
  };

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id: faker.string.uuid(),
        category: faker.commerce.department()
      });
    };
  }

  async create(data) {
    const newCategory = {
      id: faker.string.uuid(),
      ...data
    }
    this.categories.push(newCategory)
    return newCategory
  }

  async find() {
    return this.categories;
  }

  async findOne(id) {
    return this.categories.find(item => item.id === id);
  }

  async update(id, changes) {
    const index = this.categories.findIndex(item => item.id === id);
    if ( index === -1 ) {
      throw new Error("it could be updated, category not found")
    }
    const category = this.categories[index]
    this.categories[index] = {
      ...category,
      ...changes
    }
    return this.categories[index]
  }

  async delete(id) {
    const index = this.categories.findIndex(item => item.id === id)
    if( index === -1) {
      throw new Error("it could be deleted, category not found")
    }
    this.categories.splice(index, 1)
    return {
      id,
      message: "Category was deleted",
    }
  }

}

module.exports = CategoriesService;
