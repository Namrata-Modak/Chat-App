import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import LoginForm from './components/LoginForm';
import './App.css';

const projectID='feeba494-9808-4beb-ac44-3ba15a6cee23'
const App = () => {

    if (!localStorage.getItem('username')) return <LoginForm />;

  

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
     renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;