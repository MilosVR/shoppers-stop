import  groceryItemsList from '../data/groceryItems.json'

export function addToBag(id) {
    let itemFind = groceryItemsList.find((item)=> item.id === id);
    return itemFind;   
 
}