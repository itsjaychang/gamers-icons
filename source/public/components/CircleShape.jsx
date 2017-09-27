import React from 'react';

// Radius, X/Y coord
export default class CircleShape extends React.Component {
  render() {
    const radius = this.props.size / 2;
    const width = radius / 15;

    const position = {
      top: this.props.y,
      left: this.props.x,
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
    }

    return (
      <div style={position}>
        <svg width={this.props.size} height={this.props.size}>
          <circle cx="50%" cy="50%" r={radius - width} strokeWidth={width*2} stroke={this.props.color} fill="transparent" />
        </svg>
      </div>
    );
  }
}

CircleShape.defaultProps = {
  size: '60',
  color: '#AE84FC',
  x: '50%',
  y: '50%',
}
