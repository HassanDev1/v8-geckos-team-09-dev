import React from 'react';
import '../style/Todos.css';
import TodoItem from './TodoItem';

class Todos extends React.Component {
    
    constructor(props){
        super(props);
    
        this.state = {
            todos: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    addTodo(event) {
        event.preventDefault();

        const newTodos = [...this.state.todos];

        newTodos.push({
            id: this.state.todos.length + 1,
            text: this.refs.search.value,
            completed: false
        });

        this.setState({
            todos : newTodos
        });

        this.refs.search.value = ''
    }

    deleteTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }
    
    render(){

        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} deleteTodo={this.deleteTodo}/>)

        return(
            <div className='todos-container'>
                <h4 className="todos-heading">Todos</h4>
                <div className="todo-items">
                {todoItems}
                </div>
                <form className="todo-form" onSubmit={this.addTodo}>
                    <div className="input-container">
                        <input className="todo-input" type="text" ref="search" placeholder="add todo..."></input>
                        <button className="todo-button">+</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Todos;
