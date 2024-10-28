import React from 'react'
import {
    View,
    Button,
    TextInput,
    Alert,
    Image,
    StyleSheet,
    Text
  } from "react-native";
import styled from 'styled-components';

const MainContainer = styled(View)`
  flex: 1;
  align-items:center;
  justifyConten:center;
  background-color:#F5FCFF;
`

export default function Register() {
  return (
    <MainContainer>
        <Text>Register page</Text>
    </MainContainer>
  )
}
