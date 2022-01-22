import React, { Component } from 'react';
import './index.scss';
import { Image } from 'antd-mobile'
import books from '../../assets/images/books.png';
import { CSSTransition } from 'react-transition-group'

let timeout={
    enter: 800,
    exit: 0,
}



export default class Home extends Component {
    constructor(props){ // 构造器
        super(props);//调用父类的构造函数   用于初始化props属性
        this.state={
            id: '-1',
            show: false
        }
    }
    changeNav(e){
        let {id} = e.target.dataset
        this.setState({
            id,
            show: false
        })
        setTimeout(()=>{
            this.setState({ show:true })
        }, 4)
    }
    componentDidMount(){
        this.setState({
            show:true
        })
    }
    changeToMyIndex(){            // 跳到简历外链
        window.location.href = 'http://www.xuyujun.xyz'
    }
    navigateTo(){
        this.props.history.push({
            pathname: "/work", search: `?name=张三&id=123`
        })
    }
    render() {
        return (
            <div data-component="app" className='V_center'>
                <div className='R'>
                    <Image src={books} fit='fill' className='W750'/>
                    <div className='At V_space W700'>
                        <div></div>
                        <CSSTransition
                            in={this.state.show} // 如果this.state.show从false变为true，则动画入场，反之出场动画
                            timeout={timeout} //动画执行1秒
                            classNames='fade' //自定义的class名
                            unmountOnExit // 当动画出场后在页面上移除包裹的dom节点
                            onEntered={(el) => { }} // 入场动画执行完毕的回调
                            onExited={(el) => { }} // 出场动画执行完毕的回调
                        >
                            <div className='W750 V_center'>{(() => {
                                    switch (this.state.id) {
                                        case '0':
                                            return (
                                                <div className='Ml50'>
                                                    <div className='F_b2_28 Mb50 W16em elps1'>工作&nbsp; <text style={{letterSpacing: '4px'}}>·························</text></div>
                                                    <ul className='Ml30'>
                                                        <li className='f_b2_28 Mb30 W16em elps1'  onClick={this.navigateTo.bind(this)}>工作 &nbsp; <text style={{letterSpacing: '4px'}}>·························</text></li>
                                                        <li className='f_b2_28 Mb30 W16em elps1'>工作 &nbsp; <text style={{letterSpacing: '4px'}}>·························</text></li>
                                                    </ul>
                                                </div>   
                                            )
                                        case '1':
                                            return (
                                                <div className='Ml50'>
                                                    <div className='F_b2_28 Mb50 W16em elps1'>学习&nbsp; <text style={{letterSpacing: '4px'}}>·························</text></div>
                                                    <ul className='Ml30'>
                                                        <li className='f_b2_28 Mb30 W16em elps1'>学习 &nbsp; <text style={{letterSpacing: '4px'}}>·························</text></li>
                                                        <li className='f_b2_28 Mb30 W16em elps1'>学习 &nbsp; <text style={{letterSpacing: '4px'}}>·························</text></li>
                                                    </ul>
                                                </div>
                                            )
                                        case '2':
                                            return (
                                                <div className='Ml50'>
                                                    <div className='F_b2_28 Mb50 W16em elps1'>生活&nbsp; <text style={{letterSpacing: '4px'}}>·························</text></div>
                                                    <ul className='Ml30'>
                                                        <li className='f_b2_28 Mb30 W16em elps1'>生活 &nbsp; <text style={{letterSpacing: '4px'}}>·························</text></li>
                                                        <li className='f_b2_28 Mb30 W16em elps1'>生活 &nbsp; <text style={{letterSpacing: '4px'}}>·························</text></li>
                                                    </ul>
                                                </div>
                                            )
                                        default:
                                            return (
                                                <div className=''>
                                                    <div className='F_r1_36 M0_auto'>欢迎欢迎，热烈欢迎 ！</div>
                                                </div>
                                            )
                                    }
                            })()}</div>
                        </CSSTransition>
                        <div className='f_w0_28 Mh20 H_center'>Be strong and won't lose tenderness!</div>
                    </div>
                </div>
                <div className='V_space f_b2_28 Fr H500 Pl20'  style={{top:'26%'}}>
                    <div className={`bgc W200 H120 H_center Pb10 ${ this.state.id == '0' ? 'f_b1_48':'f_w4_48'}`} onClick={this.changeNav.bind(this)} data-id={0}>工作</div>
                    <div className={`bgc W200 H120 H_center Pb10 ${ this.state.id == '1' ? 'f_b1_48':'f_w4_48'}`} onClick={this.changeNav.bind(this)} data-id={1}>学习</div>
                    <div className={`bgc W200 H120 H_center Pb10 ${ this.state.id == '2' ? 'f_b1_48':'f_w4_48'}`} onClick={this.changeNav.bind(this)} data-id={2}>生活</div>
                </div>
            </div>
        )
    }
}
