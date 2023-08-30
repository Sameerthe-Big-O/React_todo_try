setItemsArray([taskValue]);


//*if we just simply pass the element as the array and assume that it'd merger with the prevos then it's not to be able to that we first need the previous array then we need the new array and then we can  merger them and to be able to do that we can use the spread operator

//*this way we replace the like if this an item string itemAray will be equal to the string and willl be anymore the array andt that's why it's showing me the error
// setItemsArray(items); arry=null;



//*setItemsArray(() => [...items]) so we use this way when we don't want the merge with the previous array


//*also that when the first time chagnges occur still it'l display the crrent one and then it'll move to the next one




// itemsArray.forEach((todo, i) => { todo.id === id ? itemsArray.splice(i, 1) : itemsArray });

//*so this is the rules if we're wrapping the close parnthesi in the arrw function then we have to return something in the react even if we're using the forEach