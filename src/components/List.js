import React, { Component } from 'react';
import Item from './Item';

class List extends Component{
  constructor(props){
    super(props);
  }
    render(){
      
      const items = this.props.items;
      const elmItem = items.map((item,index)=>{
        return (
          <Item key={index} item={item} index={index}
          onClickEdit={this.props.onClickEdit} 
          onClickDelete={this.props.onClickDelete}
          />
        )
      })
        return(
        <div className="panel panel-success">
          <div className="panel-heading">List Item</div>
          <table className="table table-hover ">
            <thead>
              <tr>
                <th style={{width: '10%'}} className="text-center">#</th>
                <th>Name</th>
                <th style={{width: '15%'}} className="text-center">Level</th>
                <th style={{width: '15%'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {elmItem}
              
            </tbody>
          </table>
        </div>
        )
    }
}
export default List;