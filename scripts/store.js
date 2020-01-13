import item from './item.js';

let items = [];
let hideCheckedItems = false;

function findById(id) {
    return this.items.find(x => x.id === id);
}

function addItem(name) {
    try {
        item.validateName;
        let newItem = item.create(name);
        this.items.push(newItem);
    }
    catch {
        console.log(`Cannot add item: ${error.message}`);
    }
}

function findAndToggleChecked(id) {
    this.findById(id).checked = !this.findById(id).checked;
}

function findAndUpdateName(id, newName) {
    try {
        item.validateName;
        this.findById(id).name = newName;
    }
    catch {
        console.log(`Cannot update name: ${error.message}`);
    }
}

function findAndDelete(id) {
    this.items = this.items.filter(x => x.id !== id);
}

function toggleCheckedFilter() {
    this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter
};