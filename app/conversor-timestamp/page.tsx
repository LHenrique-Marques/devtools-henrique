import { Metadata } from 'next';
import ConversorTimestampClient from './conversor-timestamp-client';

export const metadata: Metadata = {
  title: 'Conversor Timestamp | DevTools',
  description: 'Converta entre Timestamp UNIX e Data legível de forma rápida e fácil.',
};

export default function Page() {
  return <ConversorTimestampClient />;
}
