import { Controller, Get, Post, Body } from '@nestjs/common';
import { AddressesService } from './addresses.service';

@Controller('address')
export class AddressesController {
  constructor(private readonly addressService: AddressesService) {}

  @Post()
  create(@Body() createAddressDto: any) {
    return this.addressService.create(createAddressDto);
  }

  @Get()
  findAll() {
    return this.addressService.findAll();
  }
}
