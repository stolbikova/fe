import styled from 'styled-components/native';
import {
  colors,
  fontSize,
  fontWeight,
  radiuses,
  spacing,
} from '../constants.styles';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: ${spacing.small};
`;

export const Text = styled.Text`
  font-size: ${fontSize.large};
  font-weight: ${fontWeight.medium};
`;
