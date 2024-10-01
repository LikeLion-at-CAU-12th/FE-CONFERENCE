import React, { Component } from "react";

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      prevCount: 0
    };
  }

  // getDerivedStateFromProps : props가 변경될 때 상태를 업데이트
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps : 새로운 props 전달");
    return null
  }

  // shouldComponentUpdate : 컴포넌트 변화 있을 때 업데이트 여부 결정
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: 컴포넌트 변화 존재");
    if (nextState.count <= 10) {
      console.log("리렌더링 because return true");
      return true;
    }
    console.log("리렌더링 x because return false");
    return false;
  }

  // componentWillUnmount: 컴포넌트가 DOM에서 제거될 때 호출
  componentWillUnmount() {
    console.log("componentWillUnmount: 컴포넌트가 DOM에서 제거되었습니다.");
  }

  increaseCount = () => {
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log("현재 count 값:", this.state.count);
      }
    );
  };

  render() {
    console.log("render : 컴포넌트 렌더링");
    return (
      <div>
        <h1>React LifeStyle with ClassComponent</h1>
        <p>현재 카운트: {this.state.count}</p>
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}

export default ClassComponent;