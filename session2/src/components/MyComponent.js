import React from 'react'

class MyComponent extends React.Component {
   constructor() {
      super();
      this.state = {
         city: 'Seoul'
      }

      console.log(">>CONSTRUCTOR<<");

   }

   componentDidMount() { // 컴포넌트가 마운트 된 직후 호출되는 함수(원래 내장 함수 기능으로 있음)
      console.log("---COMPONENT DID MOUNT---");
   }

   componentDidUpdate() { // 컴포넌트가 업데이트 된 직후 호출되는 함수(원래 내장 함수 기능으로 있음)
      console.log("---COMPONENT DID UPDATE---");
   }

   render() {
      const {name} = this.props;
      const {city} = this.state;

      console.log(">>RENDER<<");

      return (
         <div>
         <h1>Class Component : {name}, {city}</h1> 
         <button onClick = {() => this.setState({city: 'Dongjak'})}>Change City</button>
         </div>
      )
   }
}

export default MyComponent