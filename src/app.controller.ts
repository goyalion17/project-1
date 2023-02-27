import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

const books = [{ title: 'JS' }, { title: 'NODEJS' }];

class CreateBookDTO {
  @ApiProperty()
  title: string;
}

@Controller('/books')
export class BooksController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getBooks() {
    return books;
  }

  @Post()
  createBook(@Body() body: CreateBookDTO) {
    books.push({ title: body.title });
  }
}
