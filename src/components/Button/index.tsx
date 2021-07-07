import React, { ReactNode } from 'react';

import {
  TouchableHighlight,
  TouchableHighlightProps,
  Text,
} from 'react-native';

import { styles, personalization } from './styles';

type Props = TouchableHighlightProps & {
  labelText?: string;
  isOperator?: boolean;
  double?: boolean,
  triple?: boolean
}

export function Button({labelText, isOperator, double, triple, ...rest}:Props){
  return (
    <TouchableHighlight
      {...rest}
    >
      <Text style={
        [
          styles.button,
          {
            width: triple ? personalization.width.triple : 
              double ? personalization.width.double :
              personalization.width.regular,
            color: isOperator ? personalization.fontColors.operators :
              personalization.fontColors.numbers,
            backgroundColor: isOperator ? personalization.colors.operatorButton :
              personalization.colors.numbers
          }
        ]
      }
        >
        { labelText }
      </Text>
    </TouchableHighlight>
  );
}