import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

const pauseIcon = 'fa fa-pause fa-2x';
const playIcon = 'fa fa-play fa-2x';

const A = styled.a`
    color: #c7c7c7;
    display: inline-block;
    border-radius: 40px;
    box-shadow: 0px 0px 2px #888;
    padding: 0.5em 0.6em;
`;


class AudioManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stream: null,
      playing: false,
      icon: playIcon,
    };
  }

  componentDidMount() {
    this.playStream();
  }

  componentWillUnmount() {
    this.pauseStream();
  }

  playStream() {
    const stream = new Audio(this.props.src);
    stream.load();
    stream.volume = 1;
    stream.play();

    this.setState({
      stream,
      playing: true,
      icon: pauseIcon,
    });
  }

  pauseStream() {
    this.state.stream.pause();
    this.state.stream.src = '';

    this.setState({
      stream: null,
      playing: false,
      icon: playIcon,
    });
  }


  toggleStream() {
    this.state.playing
      ? this.pauseStream()
      : this.playStream();
  }

  render() {
    return (
      <A className={this.state.icon} onClick={this.toggleStream.bind(this, null)} />
    );
  }
}

AudioManager.propTypes = {
  src: PropTypes.string,
};


export default AudioManager;
