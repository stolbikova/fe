const ws = new WebSocket('ws://192.168.2.7:8060/chat');
  ws.onopen = () => {
    console.log('Connected to the server');
  };

  ws.onmessage = (e) => {
    setMessages((prevMessages) => [...prevMessages, e.data]);
  };

  ws.onerror = (e) => {
    console.log(e);
  };

  ws.onclose = (e) => {
    console.log(e)
  }