import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default class Chart extends Component {
  render() {
    return <Sparklines height={120}
                       width={180}
                       data={this.props.data}>
      <SparklinesLine color={this.props.color} />
    </Sparklines>
  }
}
