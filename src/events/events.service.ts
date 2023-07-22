import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EventsService {
    constructor(
        @InjectModel(Event.name)
        private eventModel: Model<Event>,
    ){}

    async create(name: string): Promise<Event> {
        const createdEvent = new this.eventModel({ name: name });
        return createdEvent.save();
    }

    async readOne(id: string): Promise<Event>{
        return this.eventModel.findById(id).exec();
    }

    async readAll(): Promise<Event[]> {
        return this.eventModel.find().exec();
    }

    async update(id: string, name: string): Promise<Event> {
        // データ更新時に、更新後のデータを返却するためのオプションとして { new: true } を指定する
        // { new: true } を指定しないと更新前のデータが返却されるようになる
        return this.eventModel.findByIdAndUpdate(
            id, { name: name }, { new: true }
        ).exec();
    }

    async delete(id: string): Promise<Event> {
        return this.eventModel.findByIdAndDelete(id).exec();
    }
}
