import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Root, Container, Header, Content, Footer, FooterTab, Button, Text, Icon } from 'native-base';
import Cat from './Cat';
import Bat from './Bat';
import Rat from './Rat';

export default class Tab1 extends React.Component {
  constructor(props) {
   super(props)
   this.state = {
     loading: true,
     index: 0, // tab index
   }
  }

  switchScreen(index) {
     this.setState({index: index})
  }

  render() {
    const { index } = this.state;
    let AppComponent = null;

    if (index == 0) {
      AppComponent = Cat
    } else if(index == 1) {
      AppComponent = Bat
    } else if(index == 2) {
      AppComponent = Rat
    }  else {
      AppComponent = Bat
    }


    return (
      <Root>
      <Container>
        <Content>
          <AppComponent />
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical active={index === 0} onPress={() => this.switchScreen(0)}>
              <Icon name="apps" />
              <Text>My Events</Text>
            </Button>
            <Button vertical active={index === 1} onPress={() => this.switchScreen(1)}>
              <Icon name="paper" />
              <Text>Join Events</Text>
            </Button>
            <Button vertical active={index === 2} onPress={() => this.switchScreen(2)}>
              <Icon active name="add" />
              <Text>Create Event</Text>
            </Button>

          </FooterTab>
        </Footer>
      </Container>
    </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});