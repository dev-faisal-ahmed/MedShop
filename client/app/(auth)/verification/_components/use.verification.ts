'use client';

import { z } from 'zod';
import { getVerificationTokenAction } from '@/app/_utils/actions';
import { verifyUserAction } from '@/app/_utils/actions';
import { decodeVerificationToken } from '@/app/_utils/helpers';
import { removeVerificationToken } from '@/app/_utils/helpers';
import { setVerificationToken } from '@/app/_utils/helpers';
import { getRemainingTime } from '@/app/_utils/helpers';
import { getVerificationToken } from '@/app/_utils/helpers';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const verificationSchema = z.object({
  code: z
    .string({ required_error: 'code is required' })
    .length(6, { message: 'Code length is 6 digit' }),
});

type TVerificationSchema = z.infer<typeof verificationSchema>;

export const useVerification = () => {
  // vars
  const verificationData = decodeVerificationToken();

  // states
  const [time, setTime] = useState(getRemainingTime(verificationData?.exp));
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // others
  const router = useRouter();

  // forms
  const verificationForm = useForm<TVerificationSchema>({
    resolver: zodResolver(verificationSchema),
  });

  // side effects
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) return prevTime - 1;
        return prevTime;
      });
    }, 1000);

    if (time === 0) clearInterval(interval);

    return () => {
      clearInterval(interval);
    };
  });

  // handlers
  const onVerification = verificationForm.handleSubmit(async (formData) => {
    try {
      setError('');
      setLoading(true);

      const code = formData.code;
      const verificationToken = getVerificationToken();
      if (!verificationToken) throw new Error('Failed to verify, try again!');

      const response = await verifyUserAction({ code, verificationToken });
      if (!response?.ok) throw new Error(response?.message);
      toast.success(response?.message);

      // removing verification token and redirecting user
      removeVerificationToken();
      router.push('/');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  });

  // resend verification code
  const onResendVerificationCode = async () => {
    try {
      setLoading(true);
      const decodedData = decodeVerificationToken();
      if (!decodedData) throw new Error('No Token Found!');
      const { email } = decodedData;

      if (!email) {
        // if no email found means wrong token has been set by user manually
        removeVerificationToken();
        throw new Error('Please Enter Your Email and get verification code!');
      }

      const response = await getVerificationTokenAction(email);
      if (!response?.ok) throw new Error(response?.message);
      setVerificationToken(response?.data?.verificationToken);
      const decodedTokenData = decodeVerificationToken();
      setTime(getRemainingTime(decodedTokenData?.exp));
    } catch (err: any) {
      console.log(err);
      setError(err?.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    states: { time, error, loading },
    handlers: { onVerification, onResendVerificationCode },
    form: { verificationForm },
  };
};
