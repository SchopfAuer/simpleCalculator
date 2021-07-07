import React from 'react';
import { useRef } from 'react';

import {
  Text,
  View,
  ScrollView
} from 'react-native';

import { styles } from './styles';

type Props = {
  value: string;
}

export function Display({value}:Props){
  const scrollViewRef = useRef(null);
  return (
    <View 
      style={styles.display}
    >
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        onContentSizeChange={() => {
          return scrollViewRef.current.scrollToEnd({ animated: true });
        }}
      >
        <Text
          style={styles.displayValue}
          numberOfLines={1}
        >
          {value}
        </Text>
      </ScrollView>
    </View>
  );
}