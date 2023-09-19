import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Guest } from './schema/guest.schema';

@Injectable()
export class GuestService {
  constructor(@InjectModel(Guest.name) private guestModel: Model<Guest>) {}

  async create(createGuestDto: CreateGuestDto) {
    try {
      const createdGift = new this.guestModel({
        ...createGuestDto,
      });
      return createdGift.save();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    return this.guestModel.find().exec();
  }

  async findOne(id: string) {
    try {
      return this.guestModel.findById(id).exec();
    } catch (error) {
      throw new HttpException(
        'Cannot find guest with id ' + id,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async update(id: string, updateGuestDto: UpdateGuestDto) {
    try {
      return this.guestModel.findByIdAndUpdate(id, updateGuestDto).exec();
    } catch (error) {
      throw new HttpException(
        'Cannot find guest with id ' + id,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async remove(id: number) {
    try {
      return this.guestModel.findByIdAndRemove(id).exec();
    } catch (error) {
      throw new HttpException(
        'Cannot delete gift with id ' + id,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
