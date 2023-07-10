import { useEffect } from 'react';
import CloudWatchLogger from '../service/cloudWatchLogger';

export default function Swagat() {
  const logger = new CloudWatchLogger();

  useEffect(() => {
    const message = 'Swagat page loaded';
    logger.logMessage(message);
  }, []);

  return <h2>Home Swagat</h2>;
}
