import React from 'react';

export default class PlusShape extends React.Component {
  render() {
    const width = this.props.size / 15;

    const coordinates = `
      ${this.props.size/3 + width/2} ${width/2},
      ${2*this.props.size/3 - width/2} ${width/2},
      ${2*this.props.size/3 - width/2} ${this.props.size/3 + width/2},
      ${this.props.size - width/2} ${this.props.size/3 + width/2},
      ${this.props.size - width/2} ${2*this.props.size/3 - width/2},
      ${2*this.props.size/3 - width/2} ${2*this.props.size/3 - width/2},
      ${2*this.props.size/3 - width/2} ${this.props.size - width/2},
      ${this.props.size/3 + width/2} ${this.props.size - width/2},
      ${this.props.size/3 + width/2} ${2*this.props.size/3 - width/2},
      ${width/2} ${2*this.props.size/3 - width/2},
      ${width/2} ${this.props.size/3 + width/2},
      ${this.props.size/3 + width/2} ${this.props.size/3 + width/2}
    `;

    const position = {
      top: this.props.y,
      left: this.props.x,
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
    }

    return (
      <div style={position}>
        <svg width={this.props.size} height={this.props.size} className={this.props.spin}>
          <polygon points={coordinates} strokeWidth={width} stroke={this.props.color} fill="transparent" />
        </svg>
      </div>
    );
  }
}

PlusShape.defaultProps = {
  size: '60',
  color: '#F86CB7',
  spin: 'right-spin',
  x: '50%',
  y: '50%',
}
