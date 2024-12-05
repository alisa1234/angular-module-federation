import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'mfe2',
  exposes: {
    './FlightModule': 'apps/mfe2/src/app/flights/flights.module.ts',
  },
};
export default config;
