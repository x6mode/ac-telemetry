import {
  ConfigurableModuleBuilder,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';

import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

import { client } from './assetto-corsa.client';

import { TGeneralInfo } from 'src/shared/types/telemetry';

import { EEvents } from 'ac-remote-telemetry-client';

@WebSocketGateway({
  cors: true,
  port: 3001,
})
export class TelemetryGateway implements OnModuleInit, OnModuleDestroy {
  private logName = TelemetryGateway.name;

  private generalInfo: TGeneralInfo | undefined;

  onModuleInit() {
    try {
      client.on(EEvents.HANDSHAKER_RESPONSE, (data) => console.log(data));

      client.start();
      client.handshake();
      console.log('aaaa1');
    } catch (e) {
      console.log('aaaa2');
    }

    Logger.log('Application websocket server started', this.logName);
  }

  onModuleDestroy() {
    throw new Error('Method not implemented.');
  }
}
