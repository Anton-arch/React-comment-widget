import React from 'react';
import Comment from './comment'

class App extends React.Component {
    constructor() {
        super()

        if(!localStorage.getItem('state')) {
            localStorage.setItem('state', JSON.stringify([]))
        }
        
        this.state = {
            comments: localStorage.getItem('state'),
        }
    }

    // addCommetToLocalStorage() {

    // }

    render() {
        let commentsArr;
        let name;
        let commentText;

        return (
            <div>
                <form
                    className='form'
                    onSubmit={ev => {
                        ev.preventDefault()
                        }
                    }
                >
                    <label
                        className='label'
                        htmlFor='name'
                    >
                        Ваше имя:
                    </label>
                    <input
                        className='input'
                        type='text'
                        id='name'
                        onInput={event => {
                            name = event.currentTarget.value;
                        }}
                    ></input>
                    <label
                        className='label'
                        htmlFor='textarea'
                    >
                        Ваш коментарий:
                    </label>
                    <textarea
                        className='textarea'
                        type='text'
                        id='textarea'
                        onInput={event => {
                            commentText = event.currentTarget.value;
                        }}
                    ></textarea>

                    <button
                        className='button'
                        onClick={ev => {
                                ev.preventDefault()

                                commentsArr = JSON.parse(localStorage.getItem('state'));

                                commentsArr.push({
                                    name,
                                    commentText,
                                })

                                localStorage.setItem('state', JSON.stringify(commentsArr))

                                this.setState({ comments: JSON.parse(localStorage.getItem('state')) })

                                console.log(this.state.comments)
                            }
                        }
                    >
                        Добавить комментарий
                    </button>
                </form>

                <ul
                    className='commet-list'
                >
                    <li
                        className='comment-item'
                    >
                        
                    </li>
                </ul>
            </div>
        )
    }
}


export default App;