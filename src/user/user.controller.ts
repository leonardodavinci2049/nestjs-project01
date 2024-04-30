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
import { UserService } from './user.service';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserNameEmailDto } from './dto/update-name-email';
import { ParamId } from 'src/core/decorators/param-id.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() data: CreateUserDto) {
    // console.log({ email, password });
    return this.userService.create(data);
  }

  @Get()
  findAll() {
    // return this.usersService.findAll();
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@ParamId() id: number) {
    return this.userService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Body() data: UpdateUserNameEmailDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.userService.update(id, data);
  }

  @Patch('/partial/:id')
  async updatePartial(
    @Body() data: UpdateUserNameEmailDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.userService.updatePartial(id, data);
  }

  /*
  @Patch(':id')
  updatePatch(
    @Body()
    { name, email, password }: UpdatePathUserDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    //return this.userService.update(+id, updateUserDto);
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
    return this.userService.remove(+id);
  }
}
