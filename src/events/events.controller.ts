import { Param, Controller, Get, Post, Patch, Body, Delete } from '@nestjs/common';
import { EventsService } from './events.service';
import { Event } from './events.schema';
import { 
    CreateRequest,
    UpdateRequest
} from './events.dto'

@Controller('events')
export class EventsController {
     // コンストラクターインジェクションで EventsService を生成して EventsController で利用する
    constructor(private readonly eventsService: EventsService) {}

    @Post()
    async create(@Body() request: CreateRequest): Promise<Event> {
        return this.eventsService.create(request.name)
    }

    @Get(':id')
    async readOne(@Param('id') id: string): Promise<Event> {
        return this.eventsService.readOne(id)
    }

    @Get()
    async readAll(): Promise<Event> {
        return this.eventsService.readAll()
    }

    // PATCH events/:id へアクセス時に呼び出される関数
    @Patch(':id')
    async update(@Param('id') id: string, @Body() request: UpdateRequest): Promise<Event> {
        return this.eventsService.update(id, request.name)
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Event> {
        return this.eventsService.delete(id)
    }
}
