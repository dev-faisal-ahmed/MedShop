'use client';

import {
  decodeVerificationToken,
  removeVerificationToken,
  setVerificationToken,
  getRemainingTime,
} from '@/helpers';
import { z } from 'zod';
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { getVerificationTokenAction } from '@/actions';

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
    console.log(formData);
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
