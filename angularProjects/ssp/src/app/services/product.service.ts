import { Injectable, ValueProvider } from '@angular/core';

@Injectable()
export class AppConfig {
  apiUrl: string = 'https://api.example.com';
}

export const AppConfigProvider: ValueProvider = {
  provide: AppConfig,
  useValue: new AppConfig()
};