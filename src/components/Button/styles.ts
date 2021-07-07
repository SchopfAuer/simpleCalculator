import { StyleSheet, Dimensions } from 'react-native';

export const personalization = {
  width: {
    regular: (Dimensions.get('window').width / 4),
    double: (Dimensions.get('window').width / 4) * 2,
    triple: (Dimensions.get('window').width / 4) * 3,
  },
  colors: {
    numbers: '#f0f0f0',
    operatorButton: '#fa8231'
  },
  fontColors: {
    numbers: '#000',
    operators: '#fff'
  }
}

export const styles = StyleSheet.create({
  button: {
    height: Dimensions.get('window').width / 4,
    padding: 20,
    fontSize: 40,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
    textAlignVertical: 'center',
  },
});