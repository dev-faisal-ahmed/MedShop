'use client';

import { loginAction } from '@/app/_utils/actions';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

// validation schema
const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is requited' })
    .email({ message: 'Invalid Email' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

type TLoginSchema = z.infer<typeof loginSchema>;

export const useLogin = () => {
  // states
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // others
  const router = useRouter();

  // form
  const form = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onLogin = form.handleSubmit(async (data) => {
    try {
      setError('');
      setIsLoading(true);

      const { email, password } = data;
      const response = await loginAction({ email, password });
      if (!response?.ok) throw new Error(response?.message);

      toast.success(response?.message);
      router.push('/');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  });

  return { states: { isLoading, error }, handlers: { onLogin }, form };
};
