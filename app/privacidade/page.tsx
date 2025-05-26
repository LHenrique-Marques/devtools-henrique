import Link from 'next/link';
import PrivacidadeContent from './client';

export const metadata = {
  title: 'Política de Privacidade | DevTools',
  description: 'Saiba como coletamos, usamos e protegemos suas informações no DevTools.',
};

export default function PrivacidadePage() {
  return (
        <PrivacidadeContent />
  );
}
