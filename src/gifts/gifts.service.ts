import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateGiftDto } from './dto/create-gift.dto';
import { UpdateGiftDto } from './dto/update-gift.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Gift } from './schema/gift.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class GiftsService {
  constructor(@InjectModel(Gift.name) private giftModel: Model<Gift>) {}

  async create(createGiftDto: CreateGiftDto): Promise<Gift> {
    if (!createGiftDto.owner) {
      throw new HttpException('Owner is required', HttpStatus.NOT_FOUND);
    }

    try {
      const createdGift = new this.giftModel({
        ...createGiftDto,
        owner: new Types.ObjectId(createGiftDto.owner),
      });
      return createdGift.save();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<Gift[]> {
    return this.giftModel.find().exec();
  }

  async findOne(id: string) {
    try {
      return this.giftModel.findById(id).exec();
    } catch (error) {
      throw new HttpException(
        'Cannot find gift with id ' + id,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async update(id: string, updateGiftDto: UpdateGiftDto) {
    try {
      return this.giftModel.findByIdAndUpdate(id, updateGiftDto).exec();
    } catch (error) {
      throw new HttpException(
        'Cannot find gift with id ' + id,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async remove(id: number) {
    try {
      return this.giftModel.findByIdAndRemove(id).exec();
    } catch (error) {
      throw new HttpException(
        'Cannot find gift with id ' + id,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
