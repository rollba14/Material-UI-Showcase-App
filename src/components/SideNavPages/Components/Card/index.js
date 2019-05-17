import React, {Component} from 'react';
import './style.styl';
import {Icons, IconButton, Button, Typography, Paper, CodeBlock, Card, Avatar, CardHeader, Divider, CardActions, CardContent, ReactMarkdown} from '../../../';
import TabsTemplate from '../../../TabsTemplate'
import markdownFile from './markdown.md'

class CardPage extends Component{
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
    return(<div className="demo-card">
      <Card>
        <CardHeader
          avatar={
            <Avatar className="orange-bg">
              C
            </Avatar>
          }
          title="Card Title Here"
          subheader="Sub Title"
        />
        <Divider/>
        <CardContent>
          <Typography>
            Card Content Goes Here - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
        <Divider/>
        <CardActions>
        <Button size="medium" color="primary" variant="outlined">Learn More</Button>
</CardActions>
      </Card>
    </div>)
  }

  render(){
    return(
      <div>
        <TabsTemplate label="card"
          content={this.createContent()}
          markdown={this.buildMarkdown()}
        />
      </div>
    )
  }
}

export default CardPage;
