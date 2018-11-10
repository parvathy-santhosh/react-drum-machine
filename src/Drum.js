import React, {Component} from 'react';
import DrumPad, {items, letters} from './DrumPad.js';

class Drum extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleKeyPress(e){
    let pressedKey = String.fromCharCode(e.keyCode);
    if (letters.includes(pressedKey)){
      document.getElementById(pressedKey).play();
      document.getElementById('display').innerHTML = items[letters.indexOf(pressedKey)].description;
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  render() {
    return (
      <div id="drum-pads">
        {[0,1,2,3,4,5,6,7,8].map((x) => { return (<DrumPad index={x} />); })}
      </div>
    );
  }
}

export default Drum;
