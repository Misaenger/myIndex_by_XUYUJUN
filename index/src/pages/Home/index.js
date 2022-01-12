import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Point extends Component {
    render() {
        return (
            <div>
                <Link to="/Work">工作</Link>
                <Link to="/Enjoy">娱乐</Link>
                <Link to="/Point">三观</Link>
            </div>
        )
    }
}