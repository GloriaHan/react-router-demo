import React, { Component } from 'react'
import Detail from './Detail'
import {Link,Route} from 'react-router-dom'


export default class Message extends Component {
    state = {
        messageArr:[
            {id:'01',title:'message1'},
            {id:'02',title:'message2'},
            {id:'03',title:'message3'},
        ]
    }
  render() {
      const {messageArr} = this.state
    return (
      <div>
        <ul>
          {
              messageArr.map((msgObj)=>{
                  return (
                      <li key={msgObj.id}>
                        {/* 声明search参数*/}
                        {/* <Link to= {`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> &nbsp;&nbsp;  */}
                          {/* 声明 params 参数 */}
                        {/* <Link to= {`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> &nbsp;&nbsp;                 */}
                        {/* 声明state参数 */}
                        <Link to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link> &nbsp;&nbsp;                
                
                      </li>
                       
                  )
              })
          }
      </ul>
       <hr />
       {/* 接收search,state参数 */}
       <Route path="/home/message/detail" component={Detail}/>
       {/*接收 params 参数 */}
       {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}
      </div>
    )
  }
}
