import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

// Set IventTable
@Schema()
export class Event extends Document {
    // イベント名を保持する必須フィールドのみを持つ
    @Prop({ required: true })
    name: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);