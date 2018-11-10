import React, {Component} from 'react';
import drum0 from "./audio/drum0.mp3";
import drum1 from "./audio/drum1.mp3";
import drum2 from "./audio/drum2.mp3";
import drum3 from "./audio/drum3.mp3";
import drum4 from "./audio/drum4.mp3";
import drum5 from "./audio/drum5.mp3";
import drum6 from "./audio/drum6.mp3";
import drum7 from "./audio/drum7.mp3";
import drum8 from "./audio/drum8.mp3";

const letters = 'QWEASDZXC'.split('');

const items = [
  {
    index: 0,
    drum: drum0,
    description: "Drum Zero"
  },
  {
    index: 1,
    drum: drum1,
    description: "Drum One"
  },
  {
    index: 2,
    drum: drum2,
    description: "Drum Two"
  },
  {
    index: 3,
    drum: drum3,
    description: "Drum Three"
  },
  {
    index: 4,
    drum: drum4,
    description: "Drum Four"
  },
  {
    index: 5,
    drum: drum5,
    description: "Drum Five"
  },
  {
    index: 6,
    drum: drum6,
    description: "Drum Six"
  },
  {
    index: 7,
    drum: drum7,
    description: "Drum Seven"
  },
  {
    index: 8,
    drum: drum8,
    description: "Drum Eight"
  }
]

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }
  play(){
    document.getElementById(letters[this.props.index]).play();
    document.getElementById("display").innerHTML = items[this.props.index].description;
  }
  render() {
    let letter = letters[this.props.index];
    let drum = items[this.props.index].drum;
    return (
      <div className="drum-pad" onClick={this.play}>
        <span>{letter}</span>
        <audio id={letter}>
          <source src={drum}/>
        </audio>
      </div>
    );
  }
}

export default DrumPad;
export {items, letters};
