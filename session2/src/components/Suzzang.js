import React from "react";

class Suzzang extends React.Component {
   state = {
      count: 0
      };
      
      // 라이프사이클 메서드 1
      shouldComponentUpdate(nextProps, nextState) {
         // count가 짝수일 때만 리렌더링을 허용
         return nextState.count % 2 === 0;
      }
   
      
      increment = () => {
         this.setState({ count: this.state.count + 1 });
      }
   
      // 라이프사이클 메서드 2
      render() {
         console.log("렌더링 발생!");
         console.log(this.state.count);

         //10이 되면 unmount
         if (this.state.count === 10) {
         return null;
         }



         return (
         <div>
            <p>Count: {this.state.count}</p>
            <button onClick={this.increment}>Increment</button>
         </div>
         );
      }
}

export default Suzzang;

