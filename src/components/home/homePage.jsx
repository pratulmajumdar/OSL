import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  constructor(props) {
    super();
    // this.state = {
    // };
  }

  render() {
      return(
    <Fragment>
        <div style={{display: 'flex', marginTop: '10rem', marginLeft: '20%'}}>
            <div className="indivisual-link">
                <Link className="home-links" to={{pathname: '/todo/today'}}>Today's Tasks</Link>
            </div>
            <div className="indivisual-link">
                <Link className="home-links" to={{pathname: '/todo/all', todoType: 'All'}}>ALL</Link>
            </div>
            <div className="indivisual-link">
                <Link className="home-links" to={{pathname: '/todo/pending', todoType: 'Pending'}}>Pending</Link>
            </div>
            <div className="indivisual-link">
                <Link className="home-links" to={{pathname: '/todo/abandon', todoType: 'Abandon'}}>Abandon</Link>
            </div>
            <div className="indivisual-link">
                <Link className="home-links" to={{pathname: '/todo/completed', todoType: 'Completed'}}>Completed</Link>
            </div>
            <div className="indivisual-link">
                <Link className="home-links" to={{pathname: '/todo/inprogress', todoType: 'In Progress'}}>In Progress</Link>
            </div>
        </div>
    </Fragment>
      )
  }
}

export default HomePage
