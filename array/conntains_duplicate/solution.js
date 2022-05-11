// Contains Duplicate

const containsDuplicate = (array) => {
    if (array.length <= 1) return false;
    let iteration = {};
    for (let i = 0; i < array.length; i++) {
        if(iteration[array[i]]){
            return true;
        }
        else{
            iteration[array[i]] = true;
        }
    }
    return false
}

console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 1]));
