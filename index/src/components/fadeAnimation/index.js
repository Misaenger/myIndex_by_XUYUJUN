import React, { Component } from 'react'

export default class Point extends Component {
	constructor(props){
		super(props)
		this.state = {
			show:false
		}
	}
	hander = () =>{
	    this.setState({
	      show:!this.state.show
	    })
	}
	render() {
	    let { show } = this.state
	    return (
	      <div>
	        <div className='shoppingCart_button' onClick={() => this.hander()}>{show ? '执行出场动画' : '执行入场动画'}</div>
	        <CSSTransition
			    in={this.state.show} // 如果this.state.show从false变为true，则动画入场，反之出场动画
	            timeout={1000} //动画执行1秒
	            classNames='fade' //自定义的class名
	            unmountOnExit // 当动画出场后在页面上移除包裹的dom节点
	            onEntered={(el) => { }} // 入场动画执行完毕的回调
	            onExited={(el) => { }} // 出场动画执行完毕的回调
	        >
	          <div className='main'></div>
	        </CSSTransition>
	      </div>
	    )
	}
}