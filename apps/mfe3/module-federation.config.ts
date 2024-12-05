import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'mfe3',
  exposes: {
    './BookingModule': 'apps/mfe3/src/app/booking/booking.module.ts',
  },
};
export default config;
