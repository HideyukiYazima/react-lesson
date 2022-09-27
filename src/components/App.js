import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'にんじゃわんこ'};
    {/*
    this.state = {count: 0};
    */}


  }

  handleClick(name) {
    this.setState({name: name});
    
  }
 
  {/*
  handleClick() {
  this.setState({count: this.state.count + 1});
  }
  */}

  render() {
    const name = 'にんじゃわんこ';
    const imgUrl = 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/ninjawanko.png';

    return (
      <div>
        <h1>{name}</h1>
        <h1 className='title'>Hello World</h1>
        <p>一緒にReactを学びましょう！</p>

        <img src={imgUrl} />

        <h1>こんにちは、{this.state.name}さん！</h1>
        <button onClick={() => {this.handleClick('ひつじ仙人')}}>ひつじ仙人</button>
        <button onClick={() => {this.handleClick('にんじゃわんこ')}}>にんじゃわんこ</button>

      {/*
      <h1>
        {this.state.count}
      </h1>
      <button onClick={()=>{this.handleClick()}}>
        +
      </button>
      */}

      </div>
    );
  }
}

export default App;
