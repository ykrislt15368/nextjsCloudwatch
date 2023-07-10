import { useEffect } from 'react';
import CloudWatchLogger from '../service/cloudWatchLogger';
export default function Welcome() {
    const logger = new CloudWatchLogger();

    return (
        <h2>
          {(() => {
            try {
              return `Welcome ${getSubject().toUpperCase()}`;
            } catch (error) {
              const errorMessage = `Error occurred in Welcome component: ${error.message}`;
              const errorStackTrace = error.stack;
              logger.logMessage(errorMessage, errorStackTrace);
              return null;
            }
          })()}
        </h2>
      );
}