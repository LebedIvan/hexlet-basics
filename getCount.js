//Для массива из десяти чисел подсчитать , сколько чисел меньше первого элемента массива и одновремен но больше последнего элемента.
const getCount = (arr) => {
    if(!arr || !Array.isArray(arr) ) {
        return 'Передан неправильный аргумент'
    }
    const [first] =  arr;
    const last = arr[arr.length - 1];
    return arr.filter(item => item < first && item > last).length
