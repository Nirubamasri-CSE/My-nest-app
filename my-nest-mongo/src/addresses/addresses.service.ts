// addresses.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Address, AddressDocument } from './schemas/address.schema';

@Injectable()
export class AddressesService {
  constructor(
    @InjectModel(Address.name) private addressModel: Model<AddressDocument>,
  ) {}

  // ✅ Create new address
  async create(createAddressDto: any): Promise<Address> {
    const createdAddress = new this.addressModel(createAddressDto);
    return createdAddress.save();
  }

  // ✅ Get all addresses
  async findAll(): Promise<Address[]> {
    return this.addressModel.find().exec();
  }

  // ✅ Get one address by ID
  async findOne(id: string): Promise<Address | null> {
    return this.addressModel.findById(id).exec();
  }

  // ✅ Update address by ID
  async update(id: string, updateDto: any): Promise<Address | null> {
    return this.addressModel
      .findByIdAndUpdate(id, updateDto, { new: true })
      .exec();
  }

  // ✅ Delete address by ID
  async remove(id: string): Promise<Address | null> {
    return this.addressModel.findByIdAndDelete(id).exec();
  }
}
