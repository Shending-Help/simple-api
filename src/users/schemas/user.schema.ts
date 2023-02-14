/* eslint-disable @typescript-eslint/no-this-alias */
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});
