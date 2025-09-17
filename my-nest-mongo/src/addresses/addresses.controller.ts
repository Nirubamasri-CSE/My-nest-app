// addresses.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AddressesService } from './addresses.service';

@Controller('address') // prefix URL
export class AddressesController {
  constructor(private readonly addressService: AddressesService) {}

  // ✅ Create a new address
  @Post('createAddress')
  createAddress(@Body() createAddressDto: any) {
    return this.addressService.create(createAddressDto);
  }

  // ✅ Get all addresses
  @Get('getAllAddresses')
  getAllAddresses() {
    return this.addressService.findAll();
  }

  // ✅ Get address by ID
  @Get('getAddressById/:id')
  getAddressById(@Param('id') id: string) {
    return this.addressService.findOne(id);
  }

  // ✅ Update address by ID
  @Put('updateAddress/:id')
  updateAddress(@Param('id') id: string, @Body() updateAddressDto: any) {
    return this.addressService.update(id, updateAddressDto);
  }

  // ✅ Delete address by ID
  @Delete('deleteAddress/:id')
  deleteAddress(@Param('id') id: string) {
    return this.addressService.remove(id);
  }

  // ✅ Wildcard route: capture anything else after /address/
  @Get('*path')
  getDynamic(@Param('path') path: string) {
    return path || 'No extra path provided';
  }
}
