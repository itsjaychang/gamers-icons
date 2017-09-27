import React from 'react';

// Size, X/Y Coord
export default class SquareShape extends React.Component {
  render() {
    const width = this.props.size / 15;

    const position = {
      top: this.props.y,
      left: this.props.x,
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
    }

    return (
      <div style={position}>
        <svg width={this.props.size} height={this.props.size} className={this.props.spin}>
          <rect x={width / 2} y = {width / 2} width={this.props.size - width} height={this.props.size - width} strokeWidth={width} stroke={this.props.color} fill="transparent" />
        </svg>
      </div>
    );
  }
}

SquareShape.defaultProps = {
  size: '60',
  color: '#F5D023',
  spin: 'right-spin',
  y: '50%',
  x: '50%',
}
