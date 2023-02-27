import { Module } from '@nestjs/common';
import { AppController, BooksController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, BooksController],
  providers: [AppService],
})
export class AppModule {}
