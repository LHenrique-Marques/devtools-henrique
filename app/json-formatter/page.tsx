import { Metadata } from 'next';
import JsonFormatterClient from './json-formatter-client';

export const metadata: Metadata = {
  title: 'JSON Formatter | DevTools',
  description: 'Formate, valide e organize seu JSON de forma rápida e fácil.',
};

export default function Page() {
  return <JsonFormatterClient />;
}
