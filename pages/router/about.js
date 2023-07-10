import { useEffect } from 'react';
import CloudWatchLogger from '../service/cloudWatchLogger';

export default function About() {
  const logger = new CloudWatchLogger();

  useEffect(() => {
    const message = 'About page loaded';
    logger.logMessage(message);
  }, []);

  return <h2>About</h2>;
}
