import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.js';

const app = await NestFactory.create(AppModule);

await app.listen(3000);

new Logger().log('NestJS server is running on port 3000', 'Bootstrap');
