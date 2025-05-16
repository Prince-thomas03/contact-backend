import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: '123456', // use ConfigService in production
    });
  }

  async validate(payload: any) {
    console.log("PAYLOAD",payload);
    
return {
  userId: payload.id,
  mobileNo: payload.username,
};

  }
}
