import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import configuration from './config/configuration';
import { LoggerMiddleware } from './middleware';
import { InfoModule } from './models/info/info.module';
import { UserModule } from './models/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    UserModule,
    InfoModule,
  ],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(AppController);
  }
}
