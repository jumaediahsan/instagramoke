import React from 'react';
import { Scene, Router, Tabs, Stack } from 'react-native-router-flux';
import HomeScreen from './components/HomeScreen';
import SearchUser from './components/SearchUser';
import UploadScreen from './components/UploadScreen';
import LikeScreen from './components/LikeScreen';
import ProfileScreen from './components/ProfileScreen';
import { HomeIcon, SearchIcon, UploadIcon, LikeIcon, ProfileIcon } from './components/IconNavbar';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import SplashScreen from './components/SplashScreen';

const RouterComponent = () => {
  return (
    <Router>
      <Scene>
          <Scene key='splashscreen'>
            <Scene key='first' component={SplashScreen} hideNavBar={true} />
          </Scene>

          <Scene key='auth'>
            <Scene key='login' component={LoginForm} hideNavBar={true} />
          </Scene>

          <Scene key='signupform'>
            <Scene key='signup' component={SignupForm} hideNavBar={true} />
          </Scene>

          <Scene key='main' hideNavBar={true} >

            <Tabs
              key='tabbar1'
              showLabel={false}
              swipeEnabled={false}
              tabBarPosition='bottom'
              activeBackground="blue"
            >
                <Stack key='homeIcon' icon={HomeIcon} >
                  <Scene
                      key='home'
                      component={HomeScreen}
                      hideNavBar={true}
                  />
                </Stack>

                <Stack key='searchIcon' icon={SearchIcon} >
                  <Scene
                      key='search'
                      component={SearchUser}
                      hideNavBar={true}
                  />
                </Stack>

                <Stack key='uploadIcon' icon={UploadIcon} >
                  <Scene
                      key='upload'
                      component={UploadScreen}
                      hideNavBar={true}
                  />
                </Stack>

                <Stack key='likeIcon' icon={LikeIcon} >
                  <Scene
                      key='like'
                      component={LikeScreen}
                      hideNavBar={true}
                  />
                </Stack>

                <Stack key='profileIcon' icon={ProfileIcon} >
                  <Scene
                      key='profile'
                      component={ProfileScreen}
                      hideNavBar={true}
                  />
                </Stack>

            </Tabs>
        </Scene>

      </Scene>
    </Router>
  );
};
export default RouterComponent;
