import { Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../types';
import { radiuses } from '../constants.styles';

import {
  SavedPlacesContainer,
  SavedPlaceItem,
  SavedPlaceItemsContainer,
} from './SavedPlaces.styles';
import * as S from '../screens/Home.styles';

const data = new Array(8).fill({});

function SavedPlace() {
  return <SavedPlaceItem style={styles.item} />;
}

type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: DetailsScreenNavigationProp;
};

export default function SavedPlaces({ navigation }: Props) {
  return (
    <SavedPlacesContainer>
      <S.Text>Saved places</S.Text>
      <SavedPlaceItemsContainer
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {data.map((place, idx) => (
          <SavedPlace key={idx} />
        ))}
      </SavedPlaceItemsContainer>
    </SavedPlacesContainer>
  );
}

const styles = StyleSheet.create({
  item: {
    borderRadius: radiuses.large,
  },
});
