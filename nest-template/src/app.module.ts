import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { UserModule } from './models/user/user.module';
import { InfoModule } from './models/info/info.module';
import { AppController } from './app.controller';
import { LoggerMiddleware } from './middleware';

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
