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
      let displaySubItems = this.props.label + 'Open';
      this.setState({
        [displaySubItems]: false
      })
    }
  }

  toggleSubItems=()=>{
    let toggleThisSubItem = this.props.label + 'Open';
    this.setState({
      [toggleThisSubItem]: !this.state[toggleThisSubItem]
    })
  }

  render(){
    const IconComp = Icons[this.props.icon];
    const listItems = this.props.subItems ?
      // If it has subitem(s)
      (<div>
        <Divider/>
        <ListItem button onClick={()=>this.toggleSubItems()}>
          <ListItemIcon>
            <IconComp/>
          </ListItemIcon>
          <ListItemText primary={this.props.label}/>
          {this.state[`${this.props.label}Open`]?<Icons.ExpandLess /> : <Icons.ExpandMore />}
        </ListItem>
        <div className="nested">
          <Collapse in={this.state[`${this.props.label}Open`]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {this.props.subItems}
            </List>
          </Collapse>
        </div>
      </div>) :
      // if it does not have subitem(s)
      (<div>
        <Divider/>
        <ListItem button component={Router.Link} to={this.props.url}>
          <ListItemIcon>
            <IconComp/>
          </ListItemIcon>
          <ListItemText primary={this.props.label}/>
        </ListItem>
      </div>)

    return(
      <div>
        {listItems}
      </div>
    )
  }
}

export default ListItemTemplate;
