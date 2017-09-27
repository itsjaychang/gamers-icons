import React from 'react';
import 'Styles/splashpage.less';

import Circle from 'Components/CircleShape.jsx';
import Square from 'Components/SquareShape.jsx';
import Triangle from 'Components/TriangleShape.jsx';
import Plus from 'Components/PlusShape.jsx';

const iconSize = 65;

export default class SplashPage2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: iconSize,
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let scroll = event.srcElement.body.scrollTop;
    let maxScroll = document.querySelector('#splashpage_').offsetHeight;
    if (scroll < maxScroll) {
      this.setState({
        size: iconSize + 2 * iconSize * (scroll / maxScroll),
      });
    }
  }

  render() {
    return (
      <div id="splashpage_" onClick={this.scrollToNav}>
        <div className="splash sticky_aligner">
          <div className="sticky_content">
            <Plus x="20%" size={this.state.size} />
            <Circle x="40%" size={this.state.size} />
            <Triangle x="60%" size={this.state.size} />
            <Square x="80%" size={this.state.size} />
          </div>
        </div>
      </div>
    );
  }
}
