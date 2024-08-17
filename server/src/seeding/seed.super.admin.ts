import {
  MONGO_URI,
  SUPER_ADMIN_EMAIL,
  SUPER_ADMIN_NAME,
  SUPER_ADMIN_PASSWORD,
} from '../config';
import mongoose from 'mongoose';
import { User } from '../modules/user/model';
import { encryptPassword } from '../helpers';

const seedSuperAdmin = async () => {
  try {
    await mongoose.connect(MONGO_URI!);
    console.log('Creating Account.....!');

    const hashedPassword = await encryptPassword(SUPER_ADMIN_PASSWORD!);

    const superAdmin = await User.create({
      name: SUPER_ADMIN_NAME,
      email: SUPER_ADMIN_EMAIL,
      image: '',
      isVerified: true,
      password: hashedPassword,
      role: 'SUPER_ADMIN',
    });

    if (!superAdmin) throw new Error('Failed to create super admin');

    console.log('*********** Congratulations ***********');
    console.log('You account has been created!!!');
    console.log('EMAIL :', SUPER_ADMIN_EMAIL);
    console.log('Password :', SUPER_ADMIN_PASSWORD);
    console.log('*********** End ***********');
  } catch (error: any) {
    console.log('*********** Error ***********');
    console.log(error);
    console.log('*********** End ***********');
  } finally {
    await mongoose.disconnect();
  }
};

seedSuperAdmin();
