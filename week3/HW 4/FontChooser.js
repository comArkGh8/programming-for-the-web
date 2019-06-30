class FontChooser extends React.Component {

    setMinMax(props){
      var result = [];
      var propMin = parseInt(props.min);
      var propMax = parseInt(props.max);
      if (propMin <= 0){
        propMin = 1;
      }
      if (propMin >= propMax){
        propMin = Math.max(propMin, propMax);
        propMax = Math.max(propMin, propMax);
      }
      result.push(propMin.toString());
      result.push(propMax.toString());

      return result;
    }

    setSize(props){
      var propMin = parseInt(this.setMinMax(props)[0]);
      var propMax = parseInt(this.setMinMax(props)[1]);
      var propSize = parseInt(props.size);
      if (propSize <= propMin){
        propSize = propMin;
      }
      if (propSize >= propMax){
        propSize = propMax;
      }

      return propSize.toString();
    }

    constructor(props) {
	     super(props);

       this.state = { hidden : 'true'};
       this.state = { textColor : 'black'};
       this.state = { boldCheck : this.props.bold};
       this.state = { minSet : this.setMinMax(props)[0]};
       this.state = { maxSet : this.setMinMax(props)[1]};
       this.state = { sizeVar : this.setSize(props)};

    }

    changeColor(s){
      var minSize = parseInt(this.state.minSet);
      var maxSize = parseInt(this.state.maxSet);
      if (s<= minSize || s>= maxSize){
        return 'red';
      }
      return 'black';
    }

    handleClick() {
      this.setState( { hidden : (this.state.hidden == 'true' ? 'false' : 'true') } );
    }

    handleDoubleClick() {
      this.setState( { sizeVar : this.setSize(this.props) } );
      this.setState( { textColor : 'black'});
    }

    handleCheck() {
      this.setState( { boldCheck : (this.state.boldCheck == 'true' ? 'false' : 'true') } );
    }

    handleDecrease() {
      var currentSize = parseInt(this.state.sizeVar);
      var newSize = currentSize - 1;
      var minSize = parseInt(this.state.minSet);
      newSize = Math.max(minSize,newSize);
      var newColor = this.changeColor(newSize);
      this.setState( {textColor : newColor} );
      this.setState( { sizeVar : newSize } );
    }

    handleIncrease() {
      var currentSize = parseInt(this.state.sizeVar);
      var newSize = currentSize + 1;
      var maxSize = parseInt(this.state.maxSet);
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
