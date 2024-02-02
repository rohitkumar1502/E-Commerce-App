import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 50,
  },
  signUpText: {
    fontSize: 34,
    fontWeight: '700',
    marginTop: 18,
    marginBottom: 50,
  },
  InputContainer: {
    height: 64,
    width: 343,
    borderRadius: 5,
    backgroundColor: '#FBF2F2',
    marginBottom: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconssty: {
    paddingHorizontal: 8,
  },
  arrowIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  forgetPassContainer: {
    alignItems: 'flex-end',
    paddingVertical: 16,
  },
  RegButt: {
    height: 48,
    width: 343,
    borderRadius: 20,
    backgroundColor: '#DB3022',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
  },
  regText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
