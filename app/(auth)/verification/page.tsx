import { Metadata } from 'next';
import { VerificationForm } from './_components/verification.form';

export const metadata: Metadata = {
  title: 'Verify | MedShop',
};

export default function VerificationPage() {
  return <VerificationForm />;
}
