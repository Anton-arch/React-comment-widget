import React from 'react';
import Comment from './comment'

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            comments: [],
            newComment: ''
        }
    }

    render() {
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
                    ></textarea>

                    <button
                        className='button'
                        onClick={ev => {
                            ev.preventDefault()

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