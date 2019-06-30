class FontChooser extends React.Component {

    constructor(props) {
	     super(props);
       this.state = { hidden : 'true'};
       this.state = { boldCheck : this.props.bold};
       this.state = {sizeVar : this.props.size};
    }

    handleClick() {
      this.setState( { hidden : (this.state.hidden == 'true' ? 'false' : 'true') } );
    }

    handleCheck() {
      this.setState( { boldCheck : (this.state.boldCheck == 'true' ? 'false' : 'true') } );
    }

    handleDecrease() {
      var currentSize = parseInt(this.state.sizeVar);
      var newSize = currentSize - 1;
      var minSize = parseInt(this.props.min);
      newSize = Math.max(minSize,newSize);
      this.setState( { sizeVar : newSize } );
    }

    handleIncrease() {
      var currentSize = parseInt(this.state.sizeVar);
      var newSize = currentSize + 1;
      var maxSize = parseInt(this.props.max);
      newSize = Math.min(maxSize,newSize);
      this.setState( { sizeVar : newSize } );
    }



    render() {
      var isBold = (this.state.boldCheck == 'true');
      var bold = isBold ? 'bold' : 'normal';
      var size = this.state.sizeVar;
      const style = (this.state.hidden == 'true')? {display: 'none'} : {};

      return(
    	       <div>

      	       <input type="checkbox" id="boldCheckbox" style={style}
                      onChange={this.handleCheck.bind(this)}/>
      	       <button id="decreaseButton" style={style}
                      onClick={this.handleDecrease.bind(this)}>
                        -
               </button>
      	       <span id="fontSizeSpan" style={style}>{this.props.size}</span>
      	       <button id="increaseButton" style={style}
                      onClick={this.handleIncrease.bind(this)}>
                        +
               </button>
               <span id="textSpan" style={{fontSize:size, fontWeight:bold}} onClick={this.handleClick.bind(this)}>
                  {this.props.text}
               </span>
               <li> {this.state.sizeVar} </li>


    	       </div>
    	);
    }
}
