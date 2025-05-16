
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';  // Import Passport's AuthGuard

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  // 'jwt' is the name of the strategy we defined (JwtStrategy)
}
