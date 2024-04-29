import {
  Controller,
  Post,
  Put,
  Patch,
  Body,
  Delete,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserNameEmailDto } from './dto/update-name-email';
import { ParamId } from 'src/core/decorators/param-id.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() data: CreateUserDto) {
    // console.log({ email, password });
    return this.usersService.create(data);
  }

  @Get()
  findAll() {
    // return this.usersService.findAll();
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@ParamId() id: number) {
    return this.usersService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Body() data: UpdateUserNameEmailDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.usersService.update(id, data);
  }

  @Patch('/partial/:id')
  async updatePartial(
    @Body() data: UpdateUserNameEmailDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.usersService.updatePartial(id, data);
  }

  /*
  @Patch(':id')
  updatePatch(
    @Body()
    { name, email, password }: UpdatePathUserDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    //return this.usersService.update(+id, updateUserDto);
    return {
      method: 'Patch',
      name,
      email,
      password,
      id,
    };
  }
  */
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(+id);
  }
}
