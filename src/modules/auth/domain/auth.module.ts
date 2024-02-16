import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from '../application/auth.service';
import { LocalStrategy } from '../application/local.strategy';
import { PrismaService } from 'src/infrastructure/db/prisma/prisma.service';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'secretKey', //salvar no env
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, PrismaService],
})
export class AuthModule {}
