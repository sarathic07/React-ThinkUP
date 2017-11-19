
class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: "",
            buttonText: "sayHai",
            resondedValue: ""
        }
    }
    
    sayGreeting(){
        this.setState({
            message: this.state.message == "hai" ? "bye" : "hai",
            buttonText: this.state.buttonText == "sayHai" ? "sayBye" : "sayHai"
        })
    }
    AppResponded (childMsg) {
        this.setState({
            resondedValue: childMsg,
        })
    }
    render(){
        return(
            <div>
                <div ref={"parentDiv"} style={{height: "9%", border: "1px solid #000"}}>
                    {"Parent Section"}
                    {this.state.resondedValue}
                    <button onClick={this.sayGreeting.bind(this)}>{this.state.buttonText}</button>
                </div>
                <div style={{height: "88%", border: "1px solid #000"}}>
                    <Myself message1={this.state.resondedValue} AppResponded={this.AppResponded.bind(this)}/>
                    <Brother message1={this.state.resondedValue} AppResponded1={this.AppResponded.bind(this)}/>
                    <Sister message1={this.state.resondedValue} />
                </div>
            </div>
        )
    }
}

class Myself extends React.Component {
    constructor(props){
        super(props)
        console.log(this)
    }
    callParent() {
        this.props.AppResponded("called Myself");
    }
    render(){
        return(
            <div style={{height: "49%", width: "49%", border: "1px solid #000", display: " inline-block"}}>
                {"myself"}
                {this.props.message1}
                <button onClick={this.callParent.bind(this)}>callParent</button>
                <Child message2 = {this.props.message1}/>
            </div>
        )
    }
}

class Brother extends React.Component {
    constructor(){
        super()
    }
        callBrother() {
            this.props.AppResponded1("hiiiii")
        }

    render(){
        return(
            <div style={{height: "49%", width: "49%", border: "1px solid #000", display: " inline-block"}}>
                {"Brother"}
                <button onClick = {this.callBrother.bind(this)}> buttton2222 </button>
                {this.props.message1}
            </div>
        )
    }
}

class Sister extends React.Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div style={{height: "49%", width: "49%", border: "1px solid #000", display: " inline-block"}}>
                {"Sister"}
                {this.props.message1}
            </div>
        )
    }
}

class Child extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={{height: "49%", width: "49%", border: "1px solid #000"}}>
                {"Child"}
                {this.props.message2}
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
)