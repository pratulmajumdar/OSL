import React, { Component, Fragment } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { updateTodoList } from '../../actions/todoAction';

class Today extends Component {
  constructor(props) {
    super();
    this.state = {
            todoText: '',
            todoStatus: 'In Progress',
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.todo.todoList !== this.props.todo.todoList){
            this.setState({todoText: '', todoStatus: 'In Progress'})
            window.alert('Todo is added to the list!')
        }
    }

    updateTodo = e => {
        let val = e.target.value
        this.setState({todoText: val.trim()})
    }

    handleAddTodo = _ => {
        if(this.state.todoText.length === 0){
            window.alert("Please enter a valid Todo item!")
        } else {
            let data = {todo: this.state.todoText, id: moment.now(), status: this.state.todoStatus}
            this.props.updateTodoList(data)
        }
    }

    updateTodoStatus = e => {
        let val = e.target.value
        this.setState({todoStatus: val})
    }

  render() {
      return(
          <Fragment>
              <div className="add-todo-box">
                  <input type="text" placeholder="Add Todo" onChange={this.updateTodo} value={this.state.todoText} className="add-todo-input-box" />
                  <select value={this.state.todoStatus} onChange={this.updateTodoStatus}>
                      <option value="In Progress">In Progress</option>
                      <option value="Pending">Pending</option>
                      <option value="Abandon">Abandon</option>
                      <option value="Completed">Completed</option>
                  </select>
                  <input type="button" value="Click to Add Todo" className="add-todo-button" onClick={this.handleAddTodo} />
              </div>
          </Fragment>
      )
  }
}

const mapStateToProps = state => ({
    todo: state.todo,
  });
  
  const mapDispatchToProps = {
    updateTodoList,
  };

export default connect(mapStateToProps, mapDispatchToProps)(Today);