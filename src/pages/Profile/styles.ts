import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1 0;
  justify-content: center;
  position: relative;

  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  margin: 24px 0;

  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  color: #f4ede8;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const UserAvatar = styled.Image`
  width: 168px;
  height: 168px;
  border-radius: 98px;
  align-self: center;
`;
