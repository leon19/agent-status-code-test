import express from 'express';

const app = express();

await new Promise<void>((resolve, reject) => {
  app.listen(3000, err => {
    if (err) {
      return reject(err);
    }

    return resolve();
  });
});

// biome-ignore lint/suspicious/noConsole: bootstrap message
console.log('Express server is running on port 3000');
