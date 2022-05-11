// Find Maximum and minimum element from an array

const maxAndMinElement = (array) => {
    const length = array.length
    let max = array[0]
    let min = array[0]
    if(length == 1){
         max = array[0]
         min = array[0]
    }
    
    if(array[0] > array[1]){
        max = array[1]
        min = array[0]
    }
    else{
        max = array[0]
        min = array[1]
    }
   
    for(let i = 2; i < array.length; i++){
        if(array[i] > max)
            max = array[i]
        if(array[i] < min)
            min = array[i]
    }


    return `Maximum = ${max}, Minimum = ${min}`
}

let array = [44,55,5,4354,3333,55,2,0,2]

const result = maxAndMinElement(array)
console.log(result)