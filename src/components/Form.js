import React, { Component } from 'react';


class Form extends Component{
  constructor(props){
    super(props);
    this.state = {
      task_id: '',
      task_name:'',
      task_level: 0

    }
    

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    //console.log(this.props.itemSelected)
  }

    componentWillMount(){
      let item = this.props.itemSelected;
      if(item !== null){
        this.setState({
          task_id:item.id,
          task_name:item.name,
          task_level:item.level
        })
      }
    }
    componentWillReceiveProps(nextProps){
      let item = nextProps.itemSelected;
      if(item !== null){
        this.setState({
          task_id:item.id,
          task_name:item.name,
          task_level:item.level
        })
      }
    }
    handleCancel(){
      this.props.onClickCancel()
    }
   
    handleInputChange(event){
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
        [name]: value
      })
    }   
    handleSubmit(event){
      let item = {
        id: this.state.task_id,
        name: this.state.task_name,
        level: this.state.task_level
      }
      this.props.onClickSubmit(item)
      event.preventDefault();
    }


    
    render(){
      
        return(
        <div className="row marginB10">
          <div className="col-md-offset-7 col-md-5">
            <form className="form-inline" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input type="text" name="task_name" value={this.state.task_name} onChange={this.handleInputChange} className="form-control" placeholder="Item Name" />
              </div>
              <div className="form-group">
                <select className="form-control" name="task_level" value={this.state.task_level} onChange={this.handleInputChange}>
                  <option value={0}>Small</option>
                  <option value={1}>Medium</option>
                  <option value={2}>High</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              <button onClick={this.handleCancel} type="button" className="btn btn-default">Cancel</button>
            </form>
          </div>
        </div>
        )
    }
}
export default Form;