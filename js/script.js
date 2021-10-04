function calc () {
    let add = '+';
    let sub = '-';
    let mult = '*';
    let div = '/';

    let operation = prompt (`Здарова, двоечник. Не можешь два числа сложить - отнять? Лады,  помогу. Выбери операцию: (${add}, ${sub}, ${mult}, ${div})`);
    let num1 = +prompt ('Клацни какое-то число');
    let num2 = +prompt ('Ну ты понял.. Нужно еще одно');

    let result;

    switch (operation) {
        case add:
            result = num1 + num2;
            break;
        case sub:
            result = num1 - num2;
            break;
        case mult:
            result = num1 * num2;
            break;
        case div:
            result = num1 / num2;
            break;
    }
    console.log (`${num1} ${operation} ${num2} = ${result}`);
    alert (`Не благодари: ${num1} ${operation} ${num2} = ${result}`);
}

calc ();