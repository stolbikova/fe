import styled from 'styled-components/native';
import {
  colors,
  fontSize,
  fontWeight,
  radiuses,
  spacing,
} from '../constants.styles';

export const SavedPlacesContainer = styled.View`
  margin: ${spacing.large}px 0;
`;

export const SavedPlaceItem = styled.View`
  width: 50px;
  height: 50px;
  background-color: grey;
  margin-right: ${spacing.small}px;
`;

export const SavedPlaceItemsContainer = styled.ScrollView`
  display: flex;
  flex-direction: row;
  margin-right: -${spacing.small}px;
`;
