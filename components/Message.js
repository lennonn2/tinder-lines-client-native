import React from 'react';
import { Text, View } from 'react-native';

// import CopyBtn from './CopyBtn.jsx';
import style from './Message.style.js';

export default ({id, isReply, children}) => {
  const messageClass = isReply ? style.fromThem : style.fromMe;
  const before = isReply ? style.fromThemBefore : style.fromMeBefore;
  const after = isReply ? style.fromThemAfter : style.fromMeAfter;
  const textColor = isReply ? style.fromThemText : style.fromMeText;
  // const copyBtn = isReply ? null : <CopyBtn id={id} copyText={children}/>;
  return (
    <View style={messageClass}>
      <View style={before}></View>
      <Text style={textColor}>{children}</Text>
      <View style={after}></View>
      {/* {copyBtn} */}
    </View>

  )
}