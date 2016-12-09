import React from 'react';
import store from '../store';
import axios from 'axios'

export default class extends React.Component {
    constructor() {
        super();
        this.state = store.getState();

        this.setCategory = this.setCategory.bind(this);
        this.setTime = this.setTime.bind(this);
        this.setNumber = this.setNumber.bind(this);
        this.onSend = this.onSend.bind(this);
    }
    setCategory(evt) {
        this.setState({category: evt.target.value})
    }
    setTime(evt) {
        this.setState({time: evt.target.value})
    }
    setNumber(evt) {
        this.setState({number: evt.target.value})
    }
    onSend(state) {
        console.log(state)
     axios.get(`/popular/${state.category}/${state.time}`, state)
      .then(res => this.setState(state))
      .catch(err => console.error(err))
    }
    render() {
        return (
            <form id ="search-form" onSubmit={() => this.onSend(this.state)}>
                <div className="form-group">
                    <label>category: </label>
                    <input type="text" id="recipient-field" onChange={this.setCategory}/>
                </div>

                <div className="form-group">
                    <label>time: </label>
                    <input type="text" id="subject-field" onChange={this.setTime}/>
                </div>

                <div className="form-group">
                    <label>number of songs: </label>
                    <input type="text" id="subject-field" onChange={this.setNumber}/>
                </div>
       {//<a href="/search">search</a>}
        }
                <button className="btn btn-info submit"type="submit">make my playlist!</button>
            </form>
        );
    }

}


