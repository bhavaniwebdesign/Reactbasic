class Emplist extends React.Component
{
constructor(props)
{
super(props)
this.state={emp:[
{name:"bhavani"},{name:"nitya"}
]}

this.handleDelete=this.handleDelete.bind(this);

}

handleDelete(e,index)
{
 e.preventDefault();
this.setState({emp :[...this.state.emp.slice(0,index),...this.state.emp.slice(index+1)]})

}
render()
{
return(
<ul>
{this.state.emp.map((emplist,i) => <li><a href="#"  onClick={(e)=> 

this.handleDelete(e,i)}>{emplist.name}</a></li>)
}
</ul>
)}
}

ReactDOM.render(
  <Emplist/>,
  mountNode
);