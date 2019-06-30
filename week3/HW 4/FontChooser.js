class FontChooser extends React.Component {

    constructor(props) {
	     super(props);
       this.state = { hidden : 'true'};
       this.state = { boldCheck : this.props.bold};
    }

    handleClick() {
      this.setState( { hidden : (this.state.hidden == 'true' ? 'false' : 'true') } );
    }

    handleCheck() {
      this.setState( { boldCheck : (this.state.boldCheck == 'true' ? 'false' : 'true') } );
    }



    render() {
      var isBold = (this.state.boldCheck == 'true');
      var bold = isBold ? 'bold' : 'normal';
      var size = this.props.size;
      const style = (this.state.hidden == 'true')? {display: 'none'} : {};

      return(
    	       <div>

      	       <input type="checkbox" id="boldCheckbox" style={style}
                      onChange={this.handleCheck.bind(this)}/>
      	       <button id="decreaseButton" style={style}>-</button>
      	       <span id="fontSizeSpan" style={style}>{this.props.size}</span>
      	       <button id="increaseButton" style={style}>+</button>
               <span id="textSpan" style={{fontSize:size, fontWeight:bold}} onClick={this.handleClick.bind(this)}>
                  {this.props.text}
               </span>
               <li> {this.state.boldCheck} </li>


    	       </div>
    	);
    }
}
