import React, { Component } from 'react';
import { Deck, Heading, Image, Slide, Text, CodePane, List, ListItem, Code, Layout, Fill } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import '../assets/css/styles.css';
require('normalize.css');

const images = {
  reactLogo: require('../assets/img/react.svg'),
  logoQuintaAsCinco: require('../assets/img/5a-5.png'),
  eu: require('../assets/img/eu.jpg'),
  think: require('../assets/img/think.gif'),
  componentes: require('../assets/img/componentes.jpg'),
  vdom: require('../assets/img/vdom.png'),
  lifecycle: require('../assets/img/lifecycle.png')
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

          <Heading size={3} caps textColor="tertiary">React para Todos!</Heading>

          <Image src={images.logoQuintaAsCinco} width={90} />
        </Slide>

        <Slide transition={['slide', 'fade']} bgColor="primary">
          <Image src={images.eu} width={300} className="is-avatar" />
          <Text textColor="tertiary" style={{ marginTop: '25px', fontSize: '28px' }}><i>Olá, me chamo</i></Text>
          <Heading size={4} textColor="tertiary">Matheus Calegaro</Heading>
          <Text textColor="tertiary">Dev @ Hit</Text>
        </Slide>

        <Slide transition={['slide', 'fade']} bgColor="primary">
          {/* <Image src={images.think} width={80} /> */}
          <Heading size={1} lineHeight={1.5} textColor="secondary">O que é React?</Heading>
          <Text textColor="secondary">Biblioteca para construção de interfaces baseadas em <strong>Componentes</strong></Text>
        </Slide>

        <Slide bgImage={images.componentes} transition={['slide', 'fade']} />

        <Slide transition={['slide', 'fade']}>
          <Heading size={5} lineHeight={1.5} textColor="secondary">Exemplo de um componente</Heading>

          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/code/component.example')}
            margin="20px auto"
            overflow="overflow"
            style={{ fontSize: '21px' }}
          />
        </Slide>

        <Slide transition={['slide', 'fade']}>
          <Heading size={3} textColor="secondary">Conceitos Básicos</Heading>

          <List>
            <ListItem><s>Componente</s></ListItem>
            <ListItem>Virtual DOM</ListItem>
            <ListItem>Props</ListItem>
            <ListItem>State</ListItem>
            <ListItem>Lifecycle Methods</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide', 'fade']} notes="Representação do DOM em um objeto Javascript que computa as diferenças entre o DOM e as mutações dos seus componentes, renderizando apenas o que deve ser atualizado a página">
          <Heading size={3} textColor="secondary">Virtual DOM</Heading>
          <List>
            <ListItem>Representação do DOM real em um objeto JavaScript na memória;</ListItem>
            <ListItem>Computação das diferenças (diff) entre o DOM real e o VDOM;</ListItem>
            <ListItem>Aplicação de <i>patch</i> para atualizar o DOM real conforme o novo <strong>estado</strong> do VDOM.</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide', 'fade']}>
          <Image src={images.vdom} fill />
        </Slide>

        <Slide transition={['slide', 'fade']}>
          <Heading size={3} textColor="secondary">Props</Heading>
          <Text textColor="secondary">Atributos específicos de cada componente</Text>
        </Slide>

        <Slide transition={['slide', 'fade']}>
          <Layout>
            <Fill>
              <CodePane
                lang="jsx"
                source={require('raw-loader!../assets/code/props.example')}
                overflow="overflow"
                style={{ fontSize: '18px', marginRight: '10px' }}
              />
            </Fill>

            <Fill>
              <CodePane
                lang="jsx"
                source={require('raw-loader!../assets/code/app.example')}
                overflow="overflow"
                style={{ fontSize: '18px', marginLeft: '10px' }}
              />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={['slide', 'fade']}>
          <Heading size={3} textColor="secondary">State</Heading>

          <Text textColor="secondary">Lugar onde os dados existem e se <strong><u>transformam</u></strong> ao longo do tempo</Text>
        </Slide>


        <Slide transition={['slide', 'fade']}>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/code/state.example')}
            overflow="overflow"
            style={{ fontSize: '21px' }}
          />
        </Slide>


        <Slide transition={['fade']}>
          <Heading size={3} textColor="secondary">Ciclo de Vida</Heading>
          <Text textColor="secondary">Um componenete "nasce", "cresce" e "morre" (assim como nós!)</Text>
        </Slide>

        <Slide transition={['fade']} bgImage={images.lifecycle} />

        <Slide transition={['slide', 'fade']}>
          <Heading size={4} textColor="secondary">Curti! Mas como faço para começar a escrever meus primeiros componentes? 🤔</Heading>
        </Slide>

        <Slide transition={['slide', 'fade']}>
          <List>
            <ListItem>Node</ListItem>
            <ListItem>npm/yarn</ListItem>
            <ListItem>Estar em dia com o ES6/ESNext</ListItem>
            <ListItem>Create React App (<Code textColor="secondary" style={{ fontSize: '32px' }}>npm i -g create-react-app</Code>) ou codesandbox.io</ListItem>
            <ListItem>Vontade de aprender!</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide', 'fade']}>
          <Heading>Code Time! 👨‍💻</Heading>
        </Slide>

        <Slide transition={['slide', 'fade']}>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/code/obrigado.example')}
            margin="20px auto"
            overflow="overflow"
            style={{ fontSize: '24px' }}
          />
        </Slide>
      </Deck>
    );
  }
}
