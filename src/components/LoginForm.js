import React,{ Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {

  onEmailChange(text){
    this.props.emailChanged(text);
  }

  onPasswordChange(text){
    this.props.passwordChanged(text);
  }

  onButtonPress(){
    const { email, password } = this.props;

    this.props.loginUser({email, password})
  }
  renderbutton(){
    if(this.props.loading){
      return <Spinner size="large" />;
    }
    return(
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

    render() {
        return (
            <Card>
                <Text style={styles.instagramStyle}>Instagram</Text>
              <CardSection>
                <Input
                  label="Email"
                  placeholder="email@example.com"
                  onChangeText={this.onEmailChange.bind(this)}
                  value={this.props.email}
                />
              </CardSection>

              <CardSection>
                <Input
                  secureTextEntry
                  label="Password"
                  placeholder="password"
                  onChangeText={this.onPasswordChange.bind(this)}
                  value={this.props.password}
                />
              </CardSection>
              <Text style={styles.textError}>{this.props.error}</Text>
              <CardSection>
                {this.renderbutton()}
              </CardSection>


            </Card>
        );
    }
}
const styles ={
  instagramStyle: {
    fontSize:35,
    fontFamily: 'monospace'
  },
  textError:{
    fontSize: 18,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  //*** it is state, the first is " email: state.auth.email ", become like in the bottom, because di singkat mapStateToProps= ({auth})  **//

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
 }) (LoginForm);
