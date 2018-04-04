class Reactevents extends React.Component {
constructor(props)
{
super(props);
this.state={type:""}
this.onEvent=this.onEvent.bind(this);
}
onEvent(e)
{
this.setState({type:e.type})
}
  render() {
    return (
      <div>
        Hello {this.props.name}
        <textarea onCopy={this.onEvent} onCut={this.onEvent} onChange={this.onEvent} onBlur={this.onEvent} onFocus={this.onEvent} cols="20" rows="10"/>
        {this.state.type}
      </div>
    );
  }
}

ReactDOM.render(
  <Reactevents  name="Taylor" />,
  mountNode
);