import React from "react";
import axios from "axios";

export default class Todos extends React.Component {
  state = {
    todos: []
  };

  getTodos = () => {
    let url = "https://jsonplaceholder.typicode.com/todos";
    axios.get(url).then(res => {
      this.setState({
        todos: res.data
      });
    });
  };

  componentDidMount() {
    this.getTodos();
  }

  
  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todos</h1>
        {todos.map(todo => (
          <div key={todo.id}>
            <h4>{todo.title}</h4>
            <p>Completed: {`${todo.completed}`}</p>
          </div>
        ))}
      </div>
    );
  }
}
