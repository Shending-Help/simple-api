import { sign } from 'jsonwebtoken';

class RefreshToken {
  id: number;
  userId: number;
  token: string;

  sign() {
    return sign({ id: this.id }, process.env.JWT_REFRESH_TOKEN_SECRET, {
      expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRATION,
    });
  }
}
