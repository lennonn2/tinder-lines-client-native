import { StyleSheet } from 'react-native';

const message = {
  maxWidth: '80%'
}

const fromMe = {
  position: 'relative',
  paddingTop: 5,
  paddingBottom: 5,
  paddingLeft: 20,
  paddingRight: 20,
  backgroundColor: '#0b93f6',
  borderRadius: 23,
  alignSelf: 'flex-end',
  width: '80%',
}

const fromMeBefore = {
  position: 'absolute',
  zIndex: -1,
  bottom: -2,
  right: -7,
  height: 20,
  borderRightColor: '#0b93f6',
  borderRightWidth: 20,
  borderBottomLeftRadius: 15,
  transform: [
    {translateX: 0},
    {translateY: -2}
  ],
}

const fromMeAfter = {
  position: 'absolute',
  zIndex: 1,
  bottom: -2,
  right: -56,
  width: 26,
  height: 20,
  backgroundColor: 'white',
  borderBottomLeftRadius: 10,
  transform: [
    {translateX: -30},
    {translateY: -2}
  ]
}

const fromMeText = {
  color: '#FFFFFF'
}

const fromThem = {
  position: 'relative',
  paddingTop: 5,
  paddingBottom: 5,
  paddingLeft: 20,
  paddingRight: 20,
  backgroundColor: '#e5e5ea',
  borderRadius: 25,
  alignSelf: 'flex-start',
  width: '80%',
}

const fromThemBefore = {
  position: 'absolute',
  zIndex: 2,
  bottom: -2,
  left: -7,
  height: 20,
  borderLeftWidth: 20,
  borderLeftColor: '#e5e5ea',
  borderBottomRightRadius: 15,
  transform: [
    {translateX: 0},
    {translateY: -2}
  ],
}

const fromThemAfter = {
  position: 'absolute',
  zIndex: 3,
  bottom: -2,
  left: 4,
  width: 26,
  height: 20,
  backgroundColor: 'white',
  borderBottomRightRadius: 10,
  transform: [
    {translateX: -30},
    {translateY: -2}
  ]
}

const fromThemText = {
  color: '#000000'
}

export default StyleSheet.create({
  message,
  fromMe,
  fromMeBefore,
  fromMeAfter,
  fromMeText,
  fromThem,
  fromThemBefore,
  fromThemAfter,
  fromThemText
})
