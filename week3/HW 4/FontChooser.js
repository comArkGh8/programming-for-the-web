class FontChooser extends React.Component {

    getMin(){
      var minSize = parseInt(this.props.min);
      if (minSize <= 0){
        return '1';
      }
      return this.props.min;
    }

    minBiggerMax(){
      var minSize = parseInt(this.getMin());
      var maxSize = parseInt(this.props.max);
      if (minSize >= maxSize){
        return true;
      }
      return false;
    }

    getMax(){
      if (this.minBiggerMax()){
        return minSize.toString();
      }
      return this.props.max;
    }

    getStartSize(){
      var minSize = parseInt(this.getMin());
      var startSize = parseInt(this.props.size);
      if (startSize <= minSize){
        return this.getMin();
      }
      return this.props.size;

    }

    constructor(props) {

	     super(props);
       this.state = { hidden : 'true'};
       this.state = { textColor : 'black'};
       this.state = { boldCheck : this.props.bold};
       this.state = { sizeVar : this.getStartSize()};

    }

    changeColor(s){
      var minSize = parseInt(this.getMin());
      var maxSize = parseInt(this.getMax());
      if (s<= minSize || s>= maxSize){
        return 'red';
      }
      return 'black';
    }

    handleClick() {
      this.setState( { hidden : (this.state.hidden == 'true' ? 'false' : 'true') } );
    }

    handleDoubleClick() {
      this.setState( { sizeVar : this.getStartSize() } );
      this.setState( { textColor : 'black'});
    }

    handleCheck() {
      this.setState( { boldCheck : (this.state.boldCheck == 'true' ? 'false' : 'true') } );
    }

    handleDecrease() {
      var currentSize = parseInt(this.state.sizeVar);
      var newSize = currentSize - 1;
      var minSize = parseInt(this.getMin());
      newSize = Math.max(minSize,newSize);
      var newColor = this.changeColor(newSize);
      this.setState( {textColor : newColor} );
      this.setState( { sizeVar : newSize } );
    }

    handleIncrease() {
      var currentSize = parseInt(this.state.sizeVar);
      var newSize = currentSize + 1;
      var maxSize = parseInt(this.getMax());
      newSize = Math.min(maxSize,newSize);
      var newColor = this.changeColor(newSize);
      this.setState( {textColor : newColor} );
      this.setState( { sizeVar : newSize } );
    }



    render() {
      var isBold = (this.state.boldCheck == 'true');
      var bold = isBold ? 'bold' : 'normal';
      var size = this.state.sizeVar;
      var color = this.state.textColor;
      const style = (this.state.hidden == 'true')? {display: 'none'} : {};

      return(
    	       <div>

      	       <input type="checkbox" id="boldCheckbox" style={style}
                      onChange={this.handleCheck.bind(this)}/>

               <button id="decreaseButton" style={style}
                      onClick={this.handleDecrease.bind(this)}>
                        -
               </button>

               <span id="fontSizeSpan" style={style} onDoubleClick={this.handleDoubleClick.bind(this)}>
                  {this.state.sizeVar}
               </span>

               <button id="increaseButton" style={style}
                      onClick={this.handleIncrease.bind(this)}>
                        +
               </button>

               <span id="textSpan" style={{color: color, fontSize:size, fontWeight:bold}} onClick={this.handleClick.bind(this)}>
                  {this.props.text}
               </span>



    	       </div>
    	);
    }
}
