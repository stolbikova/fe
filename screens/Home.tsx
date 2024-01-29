import { View, Button } from 'react-native';
import { useEffect } from 'react';
import {
  addNotificationReceivedListener,
  addNotificationResponseReceivedListener,
  removeNotificationSubscription,
} from 'expo-notifications';

import { registerForPushNotificationsAsync } from '../utils/notifications';

import * as S from './Home.styles';

export default function Home({ navigation }: any) {
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => console.log(token));

    // This listener is fired whenever a notification is received while the app is foregrounded
    const foregroundSubscription = addNotificationReceivedListener(
      (notification) => {
        console.log('Notification Received:', notification);
      }
    );

    // This listener is fired whenever a user taps on or interacts with a notification
    const responseSubscription = addNotificationResponseReceivedListener(
      (response) => {
        console.log('Notification Response:', response);
      }
    );

    return () => {
      removeNotificationSubscription(foregroundSubscription);
      removeNotificationSubscription(responseSubscription);
    };
  }, []);

  return (
    <S.Container>
      <Button title="Go to Form" onPress={() => navigation.navigate('Form')} />
      <Button title="Go to Map" onPress={() => navigation.navigate('Map')} />
    </S.Container>
  );
}
