import React, { Component } from 'react';

class LifeCycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('constructor');
  }

  // 컴포넌트가 처음 마운트될 때 실행
  componentDidMount() {
    console.log('componentDidMount');
  }

  // 컴포넌트가 업데이트될 때 실행
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (prevState.count !== this.state.count) {
    }
  }

  // 버튼 클릭 시 count 값을 증가
  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log('render 호출');
    return (
      <div>
        <h1>카운트: {this.state.count}</h1>
        <button onClick={this.incrementCount}>카운트 증가</button>
      </div>
    );
  }
}

export default LifeCycleExample;
