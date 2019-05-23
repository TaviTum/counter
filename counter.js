class Button extends React.Component {
  render() {
    return (
      <button className="btn" onClick={this.props.action}>{this.props.text}</button>
    )
  }
}

class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
    this.count = this.count.bind(this);
  }
  
  count() {
    this.setState({counter: this.state.counter + 1});
  }
  
  render() {
    return <Button action={this.count} text={this.state.counter}/>;  
  }
}

class Content extends React.Component {
  render() {
    return (
    	<div>
    	  <ClickCounter />
    	</div>
    )
  }
}


ReactDOM.render(
  <Content />,
  document.getElementById('container')
);
