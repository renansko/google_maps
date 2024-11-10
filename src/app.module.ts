import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutesModule } from './routes/routes.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MapsModule } from './maps/maps.module';
import { PlacesService } from './maps/places/places.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RoutesModule,
    PrismaModule,
    MapsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PlacesService, ConfigService],
})
export class AppModule {}
