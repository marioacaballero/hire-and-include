import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserDTO, UserUpdateDTO } from '../dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public async createOne(@Body() body: UserDTO) {
    return await this.userService.createOne(body);
  }

  @Get()
  public async getAll() {
    return await this.userService.findAll();
  }

  @Get('id/:id')
  public async getOneById(@Param('id') id: string) {
    return await this.userService.findOne(Number(id));
  }

  @Put('id/:id')
  public async editOne(@Param('id') id: string, @Body() body: UserUpdateDTO) {
    return await this.userService.updateOne(Number(id), body);
  }

  @Delete('id/:id')
  public async deleteOne(@Param('id') id: string) {
    return await this.userService.deleteOne(Number(id));
  }
}
