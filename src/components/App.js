import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';

import React from "react";

const App = ({ number, day, title, plus, minus, asyncMinus }) => (
  <div>
    <Text>
      {title} {number} {day}
    </Text>
    <Button
      onClick={() => {
        plus(100);
      }}
    >
      10
    </Button>
    <Button
      onClick={() => {
        minus(10);
      }}
    >
      -10
    </Button>
    <Button
      onClick={() => {
        asyncMinus(10);
      }}
    >
      async -10
    </Button>
  </div>
);

export default App;