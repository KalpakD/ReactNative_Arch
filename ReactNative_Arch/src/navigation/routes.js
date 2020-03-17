import React, {Component, Fragment} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {Transition} from 'react-native-reanimated';
import {Icon} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import Splash from '../container/Splash';
import SignIn from '../container/signIn/SignIn';
import SignUp from '../container/signUp/SignUp';
import Home from '../container/Dashboard/Home';

import {Theme} from '../theme';
import Events from '../container/events/Events';
import Services from '../container/services/Services';
import Account from '../container/account/Account';
import More from '../container/more/More';
const BottomNavigation = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name={focused ? 'home' : 'home-outline'}
            type="material-community"
            color={tintColor}
            // size={hp(10)}
          />
        ),
      },
      gesturesEnabled: false,
    },

    Events: {
      screen: Events,
      navigationOptions: {
        tabBarLabel: 'Events',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name={focused ? 'calendar-clock' : 'calendar-blank-outline'}
            type="material-community"
            color={tintColor}
            // size={hp(10)}
          />
        ),
      },
      gesturesEnabled: false,
    },
    Services: {
      screen: Services,
      navigationOptions: {
        tabBarLabel: 'Services',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name={focused ? 'toolbox' : 'toolbox-outline'}
            type="material-community"
            color={tintColor}
            // size={hp(10)}
          />
        ),
      },
      gesturesEnabled: false,
    },
    // Account: {
    //   screen: Account,
    //   navigationOptions: {
    //     tabBarLabel: 'Profile',
    //     tabBarIcon: ({tintColor, focused}) => (
    //       <Icon
    //         name={focused ? 'account-circle' : 'account-circle-outline'}
    //         type="material-community"
    //         color={tintColor}
    //         // size={hp(10)}
    //       />
    //     ),
    //   },
    //   gesturesEnabled: false,
    // },
    More: {
      screen: More,
      navigationOptions: {
        tabBarLabel: 'More',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name={
              focused
                ? 'dots-horizontal-circle'
                : 'dots-horizontal-circle-outline'
            }
            type="material-community"
            color={tintColor}
            // size={hp(10)}
          />
        ),
      },
      gesturesEnabled: false,
    },
  },
  {
    initialRouteName: 'More',
    activeColor: Theme.primaryColor,
    inactiveColor: Theme.inactive_color,
    activeTintColor: Theme.primaryColor,
    inactiveTintColor: Theme.primaryColor,
    barStyle: {
      backgroundColor: Theme.bgColor,
      elevation: 4,
      paddingBottom: hp(1),
    },
    shifting: false,
    // labeled: true,
    // keyboardHidesNavigationBar: false,
  },
);
const Dashboard = createStackNavigator(
  {
    BottomNavigation: {screen: BottomNavigation},
    Account: Account,
  },
  {
    initialRouteName: 'BottomNavigation',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);
// const Dashboard = createStackNavigator({
//   Home: {
//     screen: Home,
//   },
// });
const Sign = createStackNavigator(
  {
    SignIn: SignIn,
    SignUp: SignUp,
  },
  {
    initialRouteName: 'SignIn',
    headerMode: 'none',
    cardStyle: {
      opacity: 1,
    },
    transitionConfig: () => ({
      screenInterpolator: sceneProps => {
        const {layout, position, scene} = sceneProps;
        const {index} = scene;

        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [layout.initWidth, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
          outputRange: [0, 1, 1, 0.3, 0],
        });

        return {opacity, transform: [{translateX}]};
      },
    }),
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);
const AppAuth = createAnimatedSwitchNavigator(
  {
    Splash: Splash,
    Sign: Sign,
    Dashboard: Dashboard,
  },
  {
    // The previous screen will slide to the bottom while the next screen will fade in

    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-left"
          durationMs={400}
          interpolation="easeIn"
        />
        <Transition.In type="slide-right" durationMs={400} />
      </Transition.Together>
    ),
  },
);
const AppContainer = createAppContainer(AppAuth);

export default class Routes extends Component {
  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <StatusBar
          hidden={false}
          backgroundColor={Theme.primaryColor}
          barStyle="light-content"
        />
        <AppContainer />
      </Fragment>
    );
  }
}
