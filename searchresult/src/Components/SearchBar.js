import React, { Component } from 'react';
import axios from 'axios';

function HandleList(props){
  const numbers = props.numbers;
  console.log(numbers)
  const list = numbers.map((element,i) => 
  <tr>
    <th scope="row">{i+1}</th>
    <th>{element['name']}</th>
    <th>{element['count']}</th>
  </tr>)
  return (
    <tbody>{list}</tbody>
  )
}

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: [],
      name: '',
    }
    
  }

  componentDidMount(){
    const axios_url = process.env.REACT_APP_URL+'?name=';
    console.log(axios_url);
    axios
    .get(axios_url)
    .then((result) => {
      this.setState({ query: result.data['message'], });
    })
    .catch((err) => {
      console.log(err)
    })
    
  }
 
 handleInputChange = () => {
  const axios_url = process.env.REACT_APP_URL+'?name=';
    axios
    .get(axios_url+this.search.value)
    .then((result) => {
      this.setState({ query: result.data['message'], name: this.search.value});
    })
    .catch((err) => {
      console.log(err)
    })
 }

 render() {
   let results = ''
   if(this.state.query){
      results = <div>Most Common Names in US start with {this.state.name} are:
        <table className="table table-light">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Total Count</th>
          </tr>
          </thead>
          <HandleList numbers={this.state.query}/> 
        </table>
        </div>
   }
   else{
     results = ''
   }
   return (
     <div>
     <form>
       <input
         placeholder="Search for name..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
     </form>
     {results}
     </div>
   )
 }
}

export default SearchBar
