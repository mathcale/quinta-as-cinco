import React, { Component } from 'react';
import { BlockQuote, Cite, Deck, Heading, Image, List, ListItem, Notes, Quote, Slide, Text, Layout, Fit, Fill } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import '../assets/css/styles.css';
require('normalize.css');

const images = {
  reactLogo: require('../assets/img/react.svg'),
  eu: require('../assets/img/eu.jpg'),
  think: require('../assets/img/think.gif')
};

const theme = createTheme(
  {
    primary: '#282c34',
    secondary: '#ffffff'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide', 'fade']} transitionDuration={500} theme={theme}>
        <Slide transition={['slide', 'fade']} bgColor="primary">
          <Image src={images.reactLogo} className="is-react-logo" />

          <Heading size={1} caps lineHeight={1} textColor="tertiary">React para Todos!</Heading>
        </Slide>

        <Slide transition={['slide', 'fade']} bgColor="primary">
          <Image src={images.eu} width={300} className="is-avatar" />
          <Text textColor="tertiary" style={{ marginTop: '25px', fontSize: '28px' }}><i>Olá, me chamo</i></Text>
          <Heading size={4} textColor="tertiary">Matheus Calegaro</Heading>
          <Text textColor="tertiary">Dev @ Hit</Text>
        </Slide>

        <Slide transition={['slide', 'fade']} bgColor="primary">
          {/* <Image src={images.think} width={80} /> */}
          <Heading size={1} lineHeight={1.5} textColor="secondary">WTF é React?</Heading>
          <Text textColor="secondary">Biblioteca para construção de interfaces baseadas em <strong>Componentes</strong></Text>
        </Slide>

        <Slide transition={['slide', 'fade']}>
          {/*  */}
        </Slide>
      </Deck>
    );
  }
}
