//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n ^ 0) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    const mass = [];
    for (let i = 1; i <= 10; ++i) mass.push(i * 2);
    return mass;
}
//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; ++i) sum += i;
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n) {
        return n + recSumTo(n - 1);
    } else return 0;
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if (n) {
        return n * factorial(n - 1);
    } else return 1;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    let temp = 0;
    while (n) {
        temp += n & 1;
        n >>= 1;
    }
    return temp === 1;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n > 2) {
        return fibonacci(n - 2) + fibonacci(n - 1);
    } else return 1;
}

/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn) {
    if (operatorFn !== undefined) {
        const res = function (value) {
            return (initialValue = operatorFn(initialValue, value));
        };
        return res;
    }
    return () => initialValue;
}

/**
 * Напишите функцию создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start = 0, step = 1) {
    const res = function () {
        const temp = start;
        start += step;
        return temp;
    };
    return res;
}

/**
 * Напишите функцию deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp итп) не обязательно
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(firstObject, secondObject) {
    if (typeof firstObject !== typeof secondObject) {
        return false;
    }

    const prortyArray1 = Object.getOwnPropertyNames(firstObject);
    const prortyArray2 = Object.getOwnPropertyNames(secondObject);

    if (prortyArray1.length !== prortyArray2.length) {
        return false;
    } else if (prortyArray1.length === 0) {
        return Object.is(firstObject, secondObject);
    } else {
        for (let i = 0; i < prortyArray1.length; i++) {
            const temp = prortyArray1[i];
            const flag =
                typeof firstObject[temp] === 'object' &&
                typeof secondObject[temp] === 'object' &&
                firstObject[temp] !== null;

            if (
                (!flag && firstObject[temp] !== secondObject[temp]) ||
                (flag && !deepEqual(firstObject[temp], secondObject[temp]))
            )
                return false;
        }

        return true;
    }
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
