import React, {Component, Fragment} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {Theme, Styles, Dimens, Strings} from '../../theme';
import KToolbar from '../../components/KToolbar';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

class Events extends Component {
  render() {
    return (
      <Fragment>
        <StatusBar
          hidden={false}
          backgroundColor={Theme.primaryColor}
          barStyle="light-content"
        />
        <KToolbar title={Strings.EVENTS} />
      </Fragment>
    );
  }
}

export default Events;
