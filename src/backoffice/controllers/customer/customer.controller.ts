import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Customer } from '../model/customer.model';

@Controller('customers')
export class CustomerController {

  @Get()
  index() {
    return {
      message: 'Lista todos os clientes'
    }
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return {
      message: `Exibe o cliente ${id}`
    }
  }

  @Post()
  post(@Body() body: Customer) {
    return {
      message: 'Cadastra um cliente',
      data: body
    }
  }

  @Put(':id')
  put(@Param('id') id: string, @Body() body: Customer) {
    return {
      message: `Atualiza o cliente ${id}`,
      data: body
    }
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      message: `Remove o cliente ${id}`
    }
  }

}
