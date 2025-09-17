import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Address, AddressDocument } from './schemas/address.schema';

@Injectable()
export class AddressesService {
  constructor(@InjectModel(Address.name) private addressModel: Model<AddressDocument>) {}

  async create(createAddressDto: any): Promise<Address> {
    const createdAddress = new this.addressModel(createAddressDto);
    return createdAddress.save();
  }

  async findAll(): Promise<Address[]> {
    return this.addressModel.find().exec();
  }
}
