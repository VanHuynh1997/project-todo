import React, { Component } from 'react';


class Item extends Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        
    }
    handleDelete(id){
        this.props.onClickDelete(id)
    }
    handleEdit(item){
        this.props.onClickEdit(item)
    }


    render(){
        const {item} = this.props;
        const {index} = this.props;
        // let elmLevel = <span className="label label-default">Small</span>;
        // if(item.level===1){
        //     elmLevel= <span className="label label-info">Medium</span>;
        // }else if(item.level===2){
        //     elmLevel = <span className="label label-danger">High</span>;
        // }
        return(
            <tr>
                <td className="text-center">{index + 1}</td>
                <td>{item.name}</td>
                <td className="text-center">{this.showElementLevel(item.level)}</td>
                <td>
                  <button onClick={()=>this.handleEdit(item)} type="button" className="btn btn-warning btn-sm">Edit</button>
                  <button onClick={()=>this.handleDelete(item.id)} type="button" className="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
        )
    }
    showElementLevel(level){
        let elmLevel = <span className="label label-default">Small</span>;
        if(level===1){
            elmLevel= <span className="label label-info">Medium</span>;
        }else if(level===2){
            elmLevel = <span className="label label-danger">High</span>;
        }
        return elmLevel;
        
    }
}
export default Item;