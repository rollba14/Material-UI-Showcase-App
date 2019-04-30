import React, {Component} from 'react';
import './style.styl';
import {Icons, List, ListItem, ListItemIcon, ListItemText, Divider, Router, Collapse} from '../';

class ListItemTemplate extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount=()=>{
    if(this.props.subItems) {
      let toggleThisSubItem = this.props.label + 'Open';
      this.setState({
        [toggleThisSubItem]: false
      })
    }
  }

  toggleSubItems=()=>{
    if(this.props.subItems){
      let toggleThisSubItem = this.props.label + 'Open';
      this.setState({
        [toggleThisSubItem]: !this.state[toggleThisSubItem]
      })
    }
  }

  render(){
    const IconComp = Icons[this.props.icon];
    // const triggerCollapse = this.props.subItems ? {onClick()=>{this.toggleSubItems()}} : ""
    const renderExpandBtn = this.props.subItems ?
      (<div>
        {this.state[`${this.props.label}Open`]?<Icons.ExpandLess /> : <Icons.ExpandMore />}
      </div>) : "";
    const subItems = this.props.subItems ? (
      <div className="nested">
        <Collapse in={this.state[`${this.props.label}Open`]} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {this.props.subItems}
          </List>
        </Collapse>
      </div>
    ) : "";
    return(
      <div>
        <ListItem button component={Router.Link} to={this.props.url}
           onClick={()=>this.toggleSubItems()}
        >
          <ListItemIcon>
            <IconComp/>
          </ListItemIcon>
          <ListItemText primary={this.props.label}/>
          {renderExpandBtn}
        </ListItem>
        {subItems}
        <Divider/>
      </div>
    )
  }
}

export default ListItemTemplate;
