declare module 'ac-remote-telemetry-client' {
  export default class ACRemoteTelemetryClient {
    on(event: TEvents, cb?: (data: any) => void): void;

    start(): void;
    handshake(): void;

    subscribeUpdate(): void;
    subscribeSpot(): void;
  }

  export type TEvents = 'RT_LAP' | 'RT_CAR_INFO' | 'HANDSHAKER_RESPONSE';
}
