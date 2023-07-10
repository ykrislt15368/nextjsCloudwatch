import { useRouter } from 'next/router';
import CloudWatchLogger from './service/cloudWatchLogger';

export default function Home() {
  const router = useRouter();
  const logger = new CloudWatchLogger();

  const handleClick = (message) => {
    logger.logMessage(message);
    router.push('/router/' + message.toLowerCase());
  };

  return (
    <div>
      <h2>Home</h2>
      <p onClick={() => handleClick('Swagat')}>Swagat</p>
      <p onClick={() => handleClick('About')}>About</p>
      <p onClick={() => handleClick('Users')}>Users</p>
      <p onClick={() => handleClick('Welcome')}>Welcome</p>
    </div>
  );
}









