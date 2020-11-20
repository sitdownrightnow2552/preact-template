import { FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Profile: FunctionalComponent = () => {
  const { user = 'me' } = useParams();
  const [time, setTime] = useState<number>(Date.now());
  const [count, setCount] = useState<number>(0);

  // gets called when this route is navigated to
  useEffect(() => {
    const timer = window.setInterval(() => setTime(Date.now()), 1000);

    // gets called just before navigating away from the route
    return () => {
      clearInterval(timer);
    };
  }, []);

  // update the current time
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="p-16 w-full h-full">
      <h1>Profile: {user}</h1>
      <p>This is the user profile for a user named {user}.</p>

      <div>Current time: {new Date(time).toLocaleString()}</div>

      <p>
        <Button onClick={increment}>Click Me</Button>
        Clicked {count} times.
      </p>
    </div>
  );
};

export default Profile;
