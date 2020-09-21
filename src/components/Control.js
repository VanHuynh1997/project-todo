import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
class Control extends Component{
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleAdd(){
        this.props.onClickAdd()
    }
    render(){
        let {orderBy,orderDir} = this.props;
        console.log(this.props.isShowForm)
        let elmButton = <button onClick={this.handleAdd} type="button" className="btn btn-info btn-block marginB10">Add Item</button>;
        if(this.props.isShowForm===true){
            elmButton = <button onClick={this.handleAdd} type="button" className="btn btn-danger btn-block marginB10">Close Item</button>
        }
        return(
            <div className="row">
                <Search onClickGo={this.props.onClickSearchGo}/>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <Sort
                        onClickSort={this.props.onClickSort}
                        orderBy = {orderBy}
                        orderDir = {orderDir}/>
                </div>
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    {elmButton}
                </div>
            </div>
        )
    }
}
export default Control;