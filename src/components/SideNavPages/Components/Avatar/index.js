import React from 'react';
import './style.styl';
import {Avatar, Icons, Grid, Paper} from '../../../';
import TabsTemplate from '../../../TabsTemplate'

function createContent(props){
  return (
    <div className="demo-avatar">
      <div className="demo-avatar-external-img">
        <h4>External Images</h4>
        <Paper className="bg-light-gray paper">
          <Grid container justify="space-evenly" alignItems="center">
            <Avatar className="pageview-avatar" src="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_960_720.png">
              <Icons.Pageview/>
            </Avatar>
            <Avatar className="folder-avatar" src="https://image.flaticon.com/icons/svg/1716/1716937.svg">
              <Icons.Folder/>
            </Avatar>
            <Avatar className="assignment-avatar" src="https://image.flaticon.com/icons/svg/345/345736.svg">
              <Icons.Assignment/>
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

function AvatarPage(props){
  return(
    <div>
      <TabsTemplate label="Avatar" content={createContent()}/>
    </div>
  )

}

export default AvatarPage;
