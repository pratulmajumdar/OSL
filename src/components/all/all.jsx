import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import{ modifyTodoList, searchTodo } from '../../actions/todoAction';

class All extends Component {
  constructor(props) {
    super();
    this.state = {
        todoList: [],
        tableData: [],
        searchedTodoList: [],
        isEdit: false,
        editID: '',
        searchText: '',
    };
  }

  componentDidMount() {
      this.setState({todoList: this.props.todo.todoList, tableData: this.props.todo.todoList})
  }

  componentDidUpdate(prevProps, prevState) {
      if(prevProps.todo.todoList !== this.props.todo.todoList && this.state.searchText.length === 0){
          this.setState({ todoList: this.props.todo.todoList, isEdit: false, editID: '', tableData: this.props.todo.todoList})
      }
  }

  todoAction = (id, action) => {
    if(action === 'E'){
        this.setState({
            isEdit: true,
            editID: id
        })
    } else if (action === 'D') {
        let data = [...this.props.todo.todoList]
        data.map((item, index) => {
            if(id.toString() === item.id.toString()){
                data.splice(index, 1)
            }
        })
        this.setState({searchText: ''})
        this.props.modifyTodoList(data)
    } else {
        this.setState({isEdit: false, editID: '', searchText: ''})
        this.props.modifyTodoList(this.state.todoList)
    }
  }

  updateTodoStatus = (e, id) => {
      let value = e.target.value
      let data = this.state.todoList.map(item => {
        return id.toString() === item.id.toString() ? {...item, status: value} : {...item}
    })
      this.setState(() => ({
        todoList: data,
      }), _ => {
        if(this.state.searchText.length > 0) {
            data.filter(item => item.todo.toLowerCase().includes(this.state.searchText.toLowerCase()))
        } else {
            this.setState({
                tableData: data
            })
        }
      })
  }

  searchTodo = e => {
      let text = e.target.value.trim()
      this.setState(() => ({
        searchText: text
      }), _ => {
          if(text.length > 0){
              let data = this.props.todo.todoList.filter(item => item.todo.toLowerCase().includes(text.toLowerCase()))
              this.setState({
                  tableData: data
              })
          } else {
              this.setState({
                  tableData: this.props.todo.todoList
              })
          }
      })
  }

  render() {
      let todoType = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1] 
      return(
    <Fragment>
            <input disabled={this.state.isEdit} placeholder="Search Todo" type="text" value={this.state.searchText} onChange={this.searchTodo} />
        <div className="list-outer-box">
            <table style={{width: '100%', marginLeft: 'auto', marginRight: 'auto'}}>
                <tr style={{fontSize: '18px'}}>
                    <th>#</th>
                    <th>ID</th>
                    <th>ITEM</th>
                    <th>STATUS</th>
                    <th>ACTION</th>
                </tr>
                {
                    this.state.tableData.length === 0 ? "NO TODOS ADDED" : this.state.tableData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th className="table-td">{index + 1}</th>
                                <th className="table-td">{item.id}</th>
                                <th className="table-td">{item.todo}</th>
                                <th className="table-td">{(this.state.isEdit && this.state.editID.toString() === item.id.toString()) ? <select value={item.status} onChange={e => this.updateTodoStatus(e, item.id)}>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Abandon">Abandon</option>
                                    <option value="Pending">Pending</option>
                                </select> : item.status}</th>
                                <th className="table-td">
                                    {
                                        (this.state.isEdit && this.state.editID.toString() === item.id.toString())
                                         ? 
                                        <input value="SAVE" type="button" onClick={this.todoAction.bind(this, item.id, 'S')} /> 
                                        : 
                                        <>
                                            <input disabled={this.state.isEdit} style={{marginRight: '10px'}} type="button" value="DELETE" onClick={this.todoAction.bind(this, item.id, 'D')} />
                                            <input disabled={this.state.isEdit} type="button" value="EDIT" onClick={this.todoAction.bind(this, item.id, 'E')} />
                                        </>
                                    }
                                </th>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    </Fragment>
      )
  }
}

const mapStateToProps = state => ({
    todo: state.todo,
  });
  
  const mapDispatchToProps = {
    modifyTodoList,
  };

  export default connect(mapStateToProps, mapDispatchToProps)(All);