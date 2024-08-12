import { Input } from '@/components/shared/form/input';
import { PassWordInput } from '@/components/shared/form/password.input';

export function RegisterForm() {
  return (
    <form className='mt-6 flex flex-col gap-3' action=''>
      <Input label='Name' name='name' placeholder='Input Your Email' />
      <Input
        label='Email'
        name='email'
        type='email'
        placeholder='Input Your Email'
      />
      <PassWordInput label='Password' placeholder='Input Your Password' />
    </form>
  );
}
