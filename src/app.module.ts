import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataController } from './data/data.controller';
import * as cors from 'cors'; // Importa el middleware cors

@Module({
  imports: [],
  controllers: [AppController, DataController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Aplica el middleware cors para todas las rutas
    consumer.apply(cors()).forRoutes('*');
  }
}
