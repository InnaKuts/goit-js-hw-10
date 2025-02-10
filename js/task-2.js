class Storage {
  #items;

  constructor(initialItems) {
    this.#items = [...(initialItems || [])];
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items = [...this.#items, newItem];
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
/*
    removeItem(itemToRemove) {
    const index = this.#items.indexOf(itemToRemove);
    if (index !== -1) {
      this.#items.splice(index, 1); // Видаляє елемент за індексом
    }
    }
    */
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
