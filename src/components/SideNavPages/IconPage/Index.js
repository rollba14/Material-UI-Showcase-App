import React, {Component}from 'react';
import './style.styl';
import {AppBar,Icons} from '../../';

class IconPage extends Component{
  render(){
    let iconEle=[]
    for(var key in Icons){
      let Icon = Icons[key];
      let IconEle = (<span key={key}><Icon className="icon"/></span>);
      iconEle.push(IconEle);
    }
    return(
      <div className="icon-page">
        {iconEle}
      </div>
    )

  }
}

export default IconPage;
