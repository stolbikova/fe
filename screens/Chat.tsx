import React, { useEffect, useState, useRef } from 'react';
import { TextInput, Text, Button, View, ScrollView } from 'react-native';
import { WEBSOCKET_CHAT_URL } from '@env';
import io, { Socket } from 'socket.io-client';

import * as S from './Home.styles';

export default function Chat({ navigation }: any) {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputText, setInputText] = useState('');
  const ws = useRef<Socket | null>(null);

  useEffect(() => {
    ws.current = io('ws://192.168.2.7:8060/chat');

    ws.current?.on('connect', () => {
      console.log('Connected to Socket.IO server');
    });

    // Handle disconnection
    ws.current?.on('disconnect', () => {
      console.log('Disconnected from Socket.IO server');
    });

    ws.current?.on('message', () => {
      sendMessage();
    });

    return () => {
      if (ws?.current?.active) {
        ws.current.close();
      }
    };
  }, []);

  console.log('WEBSOCKET_URL', ws?.current?.active);

  const sendMessage = () => {
    if (ws && ws.current?.active && inputText) {
      ws.current?.send(inputText);
      setInputText('');
    }
  };

  return (
    <S.Container>
      <ScrollView>
        {messages.map((message, index) => (
          <Text key={index}>{message}</Text>
        ))}
      </ScrollView>
      <TextInput
        value={inputText}
        onChangeText={setInputText}
        style={{ borderWidth: 1, borderColor: 'gray', marginBottom: 10 }}
      />
      <Button title="Send" onPress={sendMessage} />
    </S.Container>
  );
}
