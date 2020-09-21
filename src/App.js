import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';

import _ from 'lodash';

import { v4 as uuidv4 } from 'uuid';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      items:[],
      isShowForm: false,
      strSearch: '',
      orderBy:'name',
      orderDir:'asc',
      itemSelected:null
    }
    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  componentWillMount(){
    let items = JSON.parse(localStorage.getItem('task'));
    this.setState({
      items:items
    })
  }
  handleSort(orderBy,orderDir){
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir
    })
  }


  handleToggleForm(){
    this.setState({
      isShowForm: !this.state.isShowForm,
      itemSelected: null
    })

  }
  closeForm(){
    this.setState({
      isShowForm: false
    })
  }
  handleSearch(value){
    this.setState({
      strSearch: value
    })
  }
  handleDelete(id){
   let items = this.state.items;
   _.remove(items,item=>{
     return item.id === id
   })
    this.setState({
      items: items
    })
    localStorage.setItem('task', JSON.stringify(items))
  }
  handleSubmit(item){
    let items = this.state.items;
    
    if(item.id !== ''){
      items.forEach((elm,key)=>{
        if(elm.id === item.id){
          items[key].name = item.name;
          items[key].level = +item.level;
        }
      })
      
    }else{

      items.push({
        id: uuidv4(),
        name: item.name,
        level: +item.level
      })
      
    }
    
    this.setState({
      items: items,
      isShowForm:false
    })
    localStorage.setItem('task', JSON.stringify(items))
  }
  handleEdit(item){
    this.setState({
      itemSelected: item,
      isShowForm:true
    })
  }
  render(){
    let {orderBy,orderDir,itemSelected,strSearch} = this.state;
    let items = [];
    let itemsOrigin = [...this.state.items];

    
    //search
    items = itemsOrigin.filter(item=>{
      return item.name.toLowerCase().indexOf(strSearch) > -1;
    })
    // sort
    items = _.orderBy(items, [orderBy], [orderDir]);

    //items = _.orderBy(items, ['name'], ['asc']); khi ta chon orderBy-orderDir => name - asc nó sẽ gán vào
    // items.name và sắp xếp theo tăng dần



    let isShowForm = this.state.isShowForm;
    let elmForm = null;
    if(isShowForm){
      elmForm = <Form itemSelected={itemSelected} onClickCancel={this.closeForm} onClickSubmit={this.handleSubmit}/>
    }
    return (
      <div className="container"> 
          <Title />
          <Control 
          orderBy = {orderBy}
          orderDir = {orderDir}
          onClickSort={this.handleSort}
          onClickSearchGo={this.handleSearch}
          onClickAdd={this.handleToggleForm} 
          isShowForm={isShowForm}/>
          {elmForm}
          <List items={items}
          onClickEdit={this.handleEdit} 
          onClickDelete={this.handleDelete}/>
      </div>
    );
  }
  
}

export default App;
