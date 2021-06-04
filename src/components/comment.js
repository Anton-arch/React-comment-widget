import React from 'react';

//Функциональный компонент (важное отличие функционального компонета от компонента основанного на классе
//это то что функционального компонента нет своего состояния он представляет собой pure function - это функция
//которая всегда возвращает один и тот же результат в зависимости от тех параметров которые ей передали)
const Comment = (props) => {
    console.log(props);

    return (
        <li 
            className={className}
            onClick={props.toggleTodo}
        >
            {props.name}
        </li>
    );
}

export default Comment;