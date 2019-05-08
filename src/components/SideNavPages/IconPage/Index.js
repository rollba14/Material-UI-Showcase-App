import React, {Component}from 'react';
import './style.styl';
import {AppBar,Icons, Button, Dialog, DialogTitle, CodeBlock, ReactMarkdown} from '../../';

class IconPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      selected: null,
    }
  }

  handleClose=()=>{
    this.setState({
      selected: null,
    })
  }

  onSelect=(key)=>{
    this.setState({
      selected: key,
    })
  }

  buildMarkdown=()=>{
    const md = `
    import * as Icons from '@material-ui/icons/';

    const IconComponent = Icons[${this.state.selected}];

    return <div><IconComponent /></div>;
    `
    return(<ReactMarkdown
      source={md}
      renderers={{code:CodeBlock}}
    />)
  }

  renderDialog=()=>{
    const {selected} = this.state;
    if(!selected) return;
    const Icon = Icons[selected];
    return (<Dialog onClose={this.handleClose} aria-labelledby="dialog-box"
      open={!!selected}
    >
      <div id="dialog-box-title">
        <div>Sample Usage for Icon {selected}</div>
        <Icon/>
      </div>
      <div className="dialog-content">
        {this.buildMarkdown()}
      </div>
      <div className="dialog-footer">
        <Button onClick={()=>{this.handleClose()}} color="primary" variant="outlined">Close</Button>
      </div>
    </Dialog>)
  }

  buildIconComps=()=>{
    let iconEles=[];
    let Icon = null;
    let IconEle = null;
    for(var key in Icons){
      Icon = Icons[key];
      IconEle = (<Button key={'icon-'+key} onClick={()=>this.onSelect(key)}><Icon className="icon"/></Button>);
      iconEles.push(IconEle);
    }
    return iconEles;
  }

  render(){
    return(
      <div className="icon-page">
        {this.buildIconComps()}
        {this.renderDialog()}
      </div>
    )
  }
}

export default IconPage;
