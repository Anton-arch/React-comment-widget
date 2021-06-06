import React from 'react';
import Comment from './comment'

class App extends React.Component {
    constructor() {
        super()
        
        this.state = {
            comments: localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : [],
        }
    }

    deleteCommnet(key) {
        const comments = this.state.comments.map((comment, i) => {
        console.log(comments)
        });
    }

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

                                commentsArr = this.state.comments;
                                const date = new Date().toUTCString();

                                commentsArr.push({
                                    name,
                                    commentText,
                                    date,
                                });

                                this.setState({ comments: commentsArr });

                                localStorage.setItem('state', JSON.stringify(this.state.comments));

                                document.querySelector('.input').value = '';
                                document.querySelector('.textarea').value = '';
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
                        onInput={event => name = event.currentTarget.value}
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
                        onInput={event => commentText = event.currentTarget.value}
                    ></textarea>

                    <button
                        className='button'
                    >
                        Добавить комментарий
                    </button>
                </form>

                <ul
                    className='comment-list'
                >
                    {
                        this.state.comments.map((comment, i) => {

                            return(
                                <Comment 
                                    key={i}
                                    name={comment.name}
                                    commentText={comment.commentText}
                                    date={comment.date}
                                    deleteCommnet={this.deleteCommnet.bind(this, i)}
                                />
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
}


export default App;