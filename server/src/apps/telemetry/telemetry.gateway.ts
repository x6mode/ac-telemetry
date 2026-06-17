import { Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';

import { WebSocketGateway } from '@nestjs/websockets';

import { client } from './assetto-corsa.client';

import { TGeneralInfo } from 'src/shared/types/telemetry';
import { RTCarInfoParser } from './test';

@WebSocketGateway({
  cors: true,
  port: 3001,
})
export class TelemetryGateway implements OnModuleInit, OnModuleDestroy {
  private logName = TelemetryGateway.name;

  private generalInfo: TGeneralInfo | undefined;

  onModuleInit() {
    try {
      const rt = new RTCarInfoParser();
      setInterval(() => rt.parse(), 100);
      console.log('aaaa1');
    } catch (e) {
      console.log(e);
    }

    Logger.log('Application websocket server started', this.logName);
  }

  onModuleDestroy() {
    throw new Error('Method not implemented.');
  }
}
