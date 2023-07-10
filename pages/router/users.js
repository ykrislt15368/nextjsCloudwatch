import { useEffect } from 'react';
import { useRouter } from 'next/router';
import CloudWatchLogger from '../service/cloudWatchLogger';

export default function Users() {
  const router = useRouter();
  const logger = new CloudWatchLogger();

  const handleUserClick = (userId) => {
    const message = `Clicked on User ${userId}`;
    logger.logMessage(message);
    router.push(`/router/user/${userId}`);
  };

  useEffect(() => {
    const message = 'Users page loaded';
    logger.logMessage(message);
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <p onClick={() => handleUserClick(1)}>User 1</p>
      <p onClick={() => handleUserClick(2)}>User 2</p>
      <p onClick={() => handleUserClick(3)}>User 3</p>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
