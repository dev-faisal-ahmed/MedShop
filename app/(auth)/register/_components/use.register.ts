'use client';

import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { uploadImage, setVerificationToken } from '@/app/_utils/helpers';
import { registerAction } from '@/app/_utils/actions';

const registerSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().min(1).email({ message: 'Invalid Email' }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, { message: 'Minimum Length of password is 6' })
    .refine(
      (value) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
        return passwordRegex.test(value);
      },
      {
        message:
          'Password must contains at least one uppercase, one lowercase, and one number',
      },
    ),
});

type TRegisterSchema = z.infer<typeof registerSchema>;

export const useRegister = () => {
  const router = useRouter();
  const [images, setImage] = useState<File[] | null>(null);
  const [page, setPage] = useState(1);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);
  const form = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onRegister = form.handleSubmit(async (formData) => {
    try {
      // clearing error
      setError('');
      setLoading(true);
      if (!images) throw new Error('Please select your image');

      // uploading images
      const imageForm = new FormData();
      imageForm.append('image', images[0]);
      const imageData = await uploadImage(imageForm);
      if (imageData.error) throw new Error(imageData.error);

      const { name, email, password } = formData;

      const response = await registerAction({
        name: name.trim(),
        email,
        password,
        image: imageData.success,
      });

      if (!response?.ok) throw new Error(response?.message);
      setVerificationToken(response?.data?.verificationToken);
      toast.success(response?.message);
      router.push('/verification');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  });

  return {
    states: { images, page, error, loading },
    handlers: { setImage, setPage, onRegister },
    form,
  };
};
