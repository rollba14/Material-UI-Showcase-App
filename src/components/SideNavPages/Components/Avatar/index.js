import React, {Component} from 'react';
import './style.styl';
import {Avatar, Icons, Grid, Paper,CodeBlock, ReactMarkdown} from '../../../';
import TabsTemplate from '../../../TabsTemplate'
import markdownFile from './markdown.md'

class AvatarPage extends Component{
  constructor(props) {
    super(props)
    this.state = { code: null }
  }

  componentWillMount() {
    fetch(markdownFile).then((response) => response.text()).then((text) => {
      this.setState({ code: text })
    })
  }

  buildMarkdown=()=>{
    return(<ReactMarkdown
      source={this.state.code}
      renderers={{code:CodeBlock}}
    />)
  }

  createContent=()=>{
     return (
       <div className="demo-avatar">
         <div className="demo-avatar-external-img">
           <h4>External Images</h4>
           <Paper className="bg-light-gray paper">
             <Grid container justify="space-evenly" alignItems="center">
               <Avatar className="pageview-avatar" src="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_960_720.png">
               </Avatar>
               <Avatar className="folder-avatar" src="https://image.flaticon.com/icons/svg/1716/1716937.svg">
               </Avatar>
               <Avatar className="assignment-avatar" src="https://image.flaticon.com/icons/svg/345/345736.svg">
               </Avatar>
             </Grid>
           </Paper>
         </div>
         <div className="demo-avatar-svg-icons">
           <h4>Svg Icons</h4>
           <Paper className="bg-light-gray paper">
             <Grid container justify="space-evenly" alignItems="center">
               <Avatar className="assignment-avatar">
                 <Icons.Assignment/>
               </Avatar>
               <Avatar className="pageview-avatar">
                 <Icons.Pageview/>
               </Avatar>
               <Avatar className="folder-avatar">
                 <Icons.Folder/>
               </Avatar>
             </Grid>
           </Paper>
         </div>
         <div className="demo-avatar-letters">
           <h4>Letters</h4>
           <Paper className="bg-light-gray paper">
             <Grid container justify="space-evenly" alignItems="center">
               <Avatar className="pageview-avatar">
                 R
               </Avatar>
               <Avatar className="folder-avatar">
                 B
               </Avatar>
               <Avatar className="assignment-avatar">
                 G
               </Avatar>
             </Grid>
           </Paper>
         </div>
       </div>
     )
   }

  render(){
    return(
      <div>
        <TabsTemplate label="button"
          content={this.createContent()}
          markdown={this.buildMarkdown()}
        />
      </div>
    )
  }

}

export default AvatarPage;
