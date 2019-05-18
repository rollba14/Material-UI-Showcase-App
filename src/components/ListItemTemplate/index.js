import React, {Component} from 'react';
import './style.styl';
import {Icons, List, ListItem, ListItemIcon, ListItemText, Divider, Router, Collapse} from '../';
import {connect} from 'react-redux';

class ListItemTemplate extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const key = this.props.label + '-Toggler'
    const IconComp = Icons[this.props.icon];
    const listItems = this.props.subItems ?
      // If it has subitem(s)
      (<div>
        <Divider/>
        <ListItem button onClick={(e,key)=>this.props.toggleFn(e,key)}>
          <ListItemIcon>
            <IconComp/>
          </ListItemIcon>
          <ListItemText primary={this.props.label}/>
          {this.props.collapsableTogglers[key]?<Icons.ExpandLess /> : <Icons.ExpandMore />}
        </ListItem>
        <div className="nested">
          <Collapse in={this.props.collapsableTogglers[key] || false} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {this.props.subItems}
            </List>
          </Collapse>
        </div>
      </div>) :
      // if it does not have subitem(s)
      (<div>
        <Divider/>
        <Router.NavLink exact to={this.props.url} key={this.props.label} activeClassName="active">
          <ListItem button>
            <ListItemIcon>
              <IconComp/>
            </ListItemIcon>
            <ListItemText primary={this.props.label}/>
          </ListItem>
        </Router.NavLink>
      </div>)

    return(
      <div>
        {listItems}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps)=>{
  const key = ownProps.label + '-Toggler';
  let collapsableTogglers = null;
  if(ownProps.subItems){
      collapsableTogglers = state.sideBarItems.collapsableTogglers
  }
  return {
    ...ownProps,
    collapsableTogglers
  }
}

export default connect(mapStateToProps)(ListItemTemplate);
