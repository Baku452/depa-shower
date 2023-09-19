import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuestModule } from './guest/guest.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GiftsModule } from './gifts/gifts.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GuestModule,
    GiftsModule,
    MongooseModule.forRoot(process.env.DATABASE_URI || ''),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
