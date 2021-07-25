import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import{ modifyTodoList } from '../../actions/todoAction';

class Header extends Component {
  constructor(props) {
    super();
    this.state = {
        todoList: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
      if(prevProps.todo.todoList !== this.props.todo.todoList){
          this.setState({ todoList: this.props.todo.todoList, isEdit: false, editID: '' })
      }
  }

  render() {
      return(
    <Fragment>
        <div style={{marginLeft: 'auto', marginRight: 'auto', display: 'table', borderBottom: '1px solid black'}}>
            <span className="count-data">
                Total Count: {this.state.todoList.length}
            </span>
            <span className="count-data">
                Pending: {this.state.todoList.filter(item => item.status === 'Pending').length}
            </span>
            <span className="count-data">
                Abandon: {this.state.todoList.filter(item => item.status === 'Abandon').length}
            </span>
            <span className="count-data">
                Completed: {this.state.todoList.filter(item => item.status === 'Completed').length}
            </span>
            <span className="count-data">
                In Progress: {this.state.todoList.filter(item => item.status === 'In Progress').length}
            </span>
        </div>
        <h1 style={{marginLeft: 'auto', marginRight: 'auto', display: 'table'}}>TODO LIST APPLICATION</h1>
    </Fragment>
      )
  }
}

const mapStateToProps = state => ({
    todo: state.todo,
  });
  
  const mapDispatchToProps = {
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Header);
