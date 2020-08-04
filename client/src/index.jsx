/* eslint-disable no-unused-expressions */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
// eslint-disable-next-line import/extensions
import MainCarousel from './components/mainCarousel.jsx';

const axios = require('axios');

const BodyWrapper = styled.div`
  font-family: 'Montserrat', 'Lato', sans-serif;
`;

const HeadingWrapper = styled.h2`
  position: relative;
  margin-left: 14%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homes: [],
      photos: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      hearts: [false, false, false, false, false, false, false, false, false, false, false, false],
      leftButton: false,
      rightButton: true,
      hovered: -1,
      homeId: 0,
    };
    this.onBigClick = this.onBigClick.bind(this);
    this.onLittleClick = this.onLittleClick.bind(this);
    this.onPhotoClick = this.onPhotoClick.bind(this);
    this.onPhotoHover = this.onPhotoHover.bind(this);
    this.onHeartClick = this.onHeartClick.bind(this);
  }

  componentDidMount() {
    axios.get(`/moreHomes/${Math.floor(Math.random() * 100) + 1}`)
      .then((res) => {
        this.setState({
          homes: res.data,
        });
      })
      .catch((err) => console.error(err));
  }

  onLittleClick(e) {
    // splits the return into "direction" and "index"
    const className = e.target.className.split(' ');
    const idx = className[3];
    const value = className[2];
    const {
      photos,
      homes
    } = this.state;
    const length = homes[idx].photos.length - 1;
    if (value === 'right') {
      photos[idx] === length
        ? photos[idx] = 0
        : photos[idx] += 1;
    } else if (value === 'left') {
      photos[idx] === 0
        ? photos[idx] = length
        : photos[idx] -= 1;
    }
    this.setState({
      photos,
    });
  }

  onBigClick(e) {
    const { homes } = this.state;
    let {
      homeId,
      leftButton,
      rightButton
    } = this.state;
    const className = e.target.className.split(' ');
    const value = className[className.length - 1];
    const length = homes.length - 3;

    value === 'bigRight'
      ? homeId = Math.min(length, homeId + 1)
      : homeId = Math.max(0, homeId - 1);

    homeId === 0 ? leftButton = false : leftButton = true;
    homeId === length ? rightButton = false : rightButton = true;

    this.setState({
      homeId,
      leftButton,
      rightButton,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  onPhotoClick() {
    console.log('takes me to that property\'s page');
  }

  onHeartClick(e) {
    const className = e.target.className.split(' ');
    const id = className[className.length - 1];
    const { hearts } = this.state;
    hearts[id] = !hearts[id];
    this.setState({ hearts });
  }

  onPhotoHover(e, bool) {
    bool
      ? this.setState({ hovered: e })
      : this.setState({ hovered: -1 });
  }

  render() {
    const {
      homes,
      photos,
      hearts,
      homeId,
      leftButton,
      rightButton,
      hovered
    } = this.state;

    if (homes.length === 0) return <div />;
    return (
      <BodyWrapper>
        <HeadingWrapper id="title">More homes you may like</HeadingWrapper>
        <MainCarousel
          homes={homes}
          photos={photos}
          hearts={hearts}
          homeId={homeId}
          hovered={hovered}
          leftButton={leftButton}
          rightButton={rightButton}
          bigClickHandler={this.onBigClick}
          photoClickHandler={this.onPhotoClick}
          photoHoverHandler={this.onPhotoHover}
          heartClickHandler={this.onHeartClick}
          littleClickHandler={this.onLittleClick}
        />
      </BodyWrapper>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('MoreHomes'));
