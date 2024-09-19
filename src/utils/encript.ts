import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);
export const encrypt = {
  cryptPassword: (password: string) => bcrypt.hashSync(password, salt),

  comparePassword: (password: string, hashPassword: string) =>
    bcrypt.compareSync(password, hashPassword),
};
