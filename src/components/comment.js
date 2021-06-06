import React from 'react';

//Функциональный компонент (важное отличие функционального компонета от компонента основанного на классе
//это то что функционального компонента нет своего состояния он представляет собой pure function - это функция
//которая всегда возвращает один и тот же результат в зависимости от тех параметров которые ей передали)
const Comment = (props) => {

    const className = 'comment-item'; 

    return (
        <li 
            className={className} 
        >
            <p><b>Автор: {props.name}</b></p>
            <p>Комментарий: {props.commentText}</p>
            <p>Дата: {props.date}</p>
            <button 
                    className="delete-comment" 
                    title="удалить" 
                    onClick={props.deleteCommnet}
            >x</button>
        </li>
    );
}

export default Comment;