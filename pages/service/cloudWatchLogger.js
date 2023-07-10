import AWS from 'aws-sdk';

// Configure AWS credentials and region
AWS.config.update({
    accessKeyId: 'njn',
    secretAccessKey: 'njn',
  region: 'us-east-1', // Replace with your desired AWS region
});

// Create a CloudWatchLogs client
const cloudwatch = new AWS.CloudWatchLogs();

class CloudWatchLogger {
  async logMessage(message, stackTrace) {
    const logGroupName = 'my-app-logs'; 
    const logStreamName = 'my-app-logs-stream'; 
    if (stackTrace) {
      message += `\nStack Trace:\n${stackTrace}`;
    }

    const params = {
      logGroupName,
      logStreamName,
      logEvents: [
        {
          message,
          timestamp: new Date().getTime(),
      //     eventId: '12345', // Custom event ID
      // tags: {
      //   environment: 'production',
      //   service: 'my-app',
      // },
        },
      ],
    };

    try {
      await cloudwatch.putLogEvents(params).promise();
      console.log('Msg logged to CloudWatch:', message);
    } catch (error) {
      console.error('Fld to log message to CloudWatch:', error);
    }
  }
}

export default CloudWatchLogger;
