import React from 'react';
import './style.styl';
import {Icons, IconButton, Button, Typography, Paper} from '../../../';
import TabsTemplate from '../../../TabsTemplate'
import data from './data.js'

function createContent(props){
  let buttonTypes = data.buttonTypes;
  let outputEle = buttonTypes.map(t=>{
    let myKey = `Button${t.type}Type`;
    let buttonDemos = [];
    t.styles.forEach(s=>{
      buttonDemos.push((<Button
        color={s.color || 'default'}
        variant={s.variant || 'text'}
        disabled={s.disabled || false}
        size={s.size || 'medium'}
        key={`Button${t.type}Type-${s.label}`}
        >
        {s.label.toUpperCase()}
      </Button>))
    })
    return(<div
      className="demo-body" key={myKey}>
      <h3 className="demo-title">{t.type}</h3>
      <div className="demo-content">
        {buttonDemos}
      </div>
    </div>)
  })
  return outputEle
}

function ButtonPage(props){
  return(
    <div>
      <TabsTemplate label="button" content={createContent()}/>
    </div>
  )

}

export default ButtonPage;
