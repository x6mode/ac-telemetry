import {
  ConfigurableModuleBuilder,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';

import { WebSocketGateway } from '@nestjs/websockets';

import { client } from './assetto-corsa.client';

import { TGeneralInfo } from 'src/shared/types/telemetry';

@WebSocketGateway({
  cors: true,
  port: 3001,
})
export class TelemetryGateway implements OnModuleInit, OnModuleDestroy {
  private logName = TelemetryGateway.name;

  private generalInfo: TGeneralInfo | undefined;

  onModuleInit() {
    try {
      client.on('HANDSHAKER_RESPONSE', (data) => console.log(data));
      client.on('RT_CAR_INFO', (data) => console.log(data));
      client.on('RT_LAP', (data) => console.log(data));

      client.start();
      client.handshake();
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
