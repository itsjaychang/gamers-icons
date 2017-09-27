import React from 'react';

export default class TriangleShape extends React.Component {
  render() {
    const width = this.props.size / 15;
    const height = (this.props.size / 2) * Math.tan(Math.PI / 3);
    // This is to rotate evenly for an equilateral triangle
    const containerHeight =  (height - (this.props.size / 2) * Math.tan(Math.PI / 6)) * 2;

    console.log((this.props.size / 2) * Math.tan(Math.PI / 6));
    const coordinates = `
      ${width} ${height - width},
      ${this.props.size - width} ${height - width},
      ${this.props.size / 2} ${width}
    `;

    const position = {
      top: this.props.y,
      left: this.props.x,
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
    }

    return (
      <div style={position} >
        <svg width={this.props.size} height={containerHeight} className={this.props.spin}>
          <polygon points={coordinates} strokeWidth={width} stroke={this.props.color} fill="transparent" />
        </svg>
      </div>
    );
  }
}

TriangleShape.defaultProps = {
  size: '60',
  color: '#63B1F7',
  spin: 'right-spin',
  x: '50%',
  y: '50%',
}
