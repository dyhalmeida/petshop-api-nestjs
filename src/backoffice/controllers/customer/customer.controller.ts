import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('customers')
export class CustomerController {

  @Get()
  get() {
    return {
      message: 'Lista todos os clientes'
    }
  }

  @Post()
  post() {
    return {
      message: 'Cadastra um cliente'
    }
  }

  @Put()
  put() {
    return {
      message: 'Atualiza um cliente'
    }
  }

  @Delete()
  delete() {
    return {
      message: 'Remove um cliente'
    }
  }

}
