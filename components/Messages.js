import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import Message from './Message';
// import { increment } from '../utils';

// import styles from './Messages.style.js';

class Messages extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.content.id !== 0 && nextProps.content.id !== this.props.content.id) {
      // increment(nextProps.content.id, 'views');
    }
  }

  render() {
    const { id } = this.props.content;
    return (
      <View className='messagesContainer'>
        {
          this.props.content.lines.map((msg) => {
            return <Message key={msg.index} isReply={msg.isReply} id={id}>{msg.text}</Message>
            // return <Text>{msg.text}</Text>
          })
        }
      </View>
    )
  }
}

const mapStateToProps = (state, { params }) => {
  return {
    content: state.message
  }
}

export default connect(mapStateToProps)(Messages);