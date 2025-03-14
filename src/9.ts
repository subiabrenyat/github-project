import { User } from '../../models';

export const getUsers = async (): Promise<User[]> => {
  try {
    const users = await User.find({}).sort('-createdAt');
    return users;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
