import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/nested">nested(嵌套路由)</Link>
          </li>
        </ul>

        <hr />
        {/* 子页面 */}
        {/* 所有子组件 */}
        {this.props.children}
      </div>
    );
  }
}
