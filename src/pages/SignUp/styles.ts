import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1 0;
  align-items: center;
  justify-content: center;

  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  margin: 64px 0 24px;

  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  color: #f4ede8;
`;

export const BackToSingIn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;

  padding: 16px 0 ${16 + getBottomSpace()}px;
  background-color: #312e38;
  border-color: #232129;
  border-top-width: 1px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BackToSingInText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;
