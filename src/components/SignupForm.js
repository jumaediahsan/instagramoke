import React,{Component} from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { emailCreated, passwordCreated, siginupUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class SignupForm extends Component {
  onEmailCreate(text){
    this.props.emailCreated(text)
  }

  onPasswordCreate(text) {
    this.props.passwordCreated(text)
  }

  onSignupPress(){
    const { email, password } = this.props;

    this.props.siginupUser({ email, password });
  }
  renderButton(){
    if (this.props.loading){
      return <Spinner size="large" />;
    }
    return(
      <Button onPress={this.onSignupPress.bind(this)}>
        SignUp
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
                    placeholder="email@gmail.com"
                    onChangeText={this.onEmailCreate.bind(this)}
                    value={this.props.email}
                  />
                </CardSection>

                <CardSection>
                  <Input
                    secureTextEntry
                    label="Password"
                    placeholder="Password"
                    onChangeText={this.onPasswordCreate.bind(this)}
                    value={this.props.password}
                  />
                </CardSection>
                <Text style={styles.textStyle}>
                  {this.props.error}
                </Text>

                <CardSection>
                  {this.renderButton()}
                </CardSection>
            <Text style={styles.attentionStyle}>Note:</Text>
            <Text style={styles.attentionStyle}>*password can not be less than 6 digits</Text>
          </Card>
        );
    }
}

const styles={
  instagramStyle: {
    fontSize:35,
    fontFamily: 'monospace'
  },
  textStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color:'red'
  },
  attentionStyle:{
    color:'red',
    alignSelf:'flex-start',
    paddingLeft:5
  }
}

mapStateToProps = ({authup}) => {
  const { email, password, error, loading } = authup;

  return{ email,password, error, loading }
}

export default connect(mapStateToProps, {
  emailCreated, passwordCreated, siginupUser
 })(SignupForm);
