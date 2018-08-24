import React from 'react';
import { connect } from 'react-redux';
import { Button, View } from 'react-native';

import Logo from './icon-svg';
import { updateMessage } from '../actions';

// import './Button.css';

const GenerateButton = ({ updateMessage, categories }) => {
  const update = () => setTimeout(updateMessage, 300);
  return (
    <View className='buttonContainer'>
      <Button
        title="Generate"
        className='button'
        onPress={update}
        color="#FF655B"
      >
        <Logo />
      </Button>
    </View>
  );
}

export default connect(null, {updateMessage})(GenerateButton);