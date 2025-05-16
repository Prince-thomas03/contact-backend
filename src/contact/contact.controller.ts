import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  Request,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create.contact.dto';
import { UpdateContactDto } from './dto/update.contact.dto';
import { JwtAuthGuard } from '../users/guards/jwt-auth.guard';

@Controller('contact')
export class ContactController {
  constructor(private readonly ContactService: ContactService) {}

  @UseGuards(JwtAuthGuard) // ✅ Make sure you're using your custom guard here
  @Post()
  create(@Request() req, @Body() CreateContactDto: CreateContactDto) {
    console.log('REQUEST', req.user);

    const userId = req.user.userId; // coming from JWT
    return this.ContactService.createContact(userId, CreateContactDto);
  }

  @UseGuards(JwtAuthGuard) // ✅ Make sure you're using your custom guard here
  @Get()
  getContacts(@Request() req) {
    console.log('REQUEST', req.user);

    const userId = req.user.userId; // coming from JWT
    return this.ContactService.GetContacts(userId);
  }

  @UseGuards(JwtAuthGuard) // ✅ Make sure you're using your custom guard here
  @Get(':id')
  getContact(@Request() req, @Param('id') id: string) {
    console.log('REQUEST', req.user);

    const userId = req.user.userId; // coming from JWT
    return this.ContactService.GetContact(userId, id);
  }

  @UseGuards(JwtAuthGuard) // ✅ Make sure you're using your custom guard here
  @Patch(':id')
  editContact(
    @Request() req,
    @Param('id') id: string,
    @Body() UpdateContactDto: UpdateContactDto,
  ) {
    console.log('REQUEST', UpdateContactDto);

    const userId = req.user.userId; // coming from JWT
    return this.ContactService.updateContact(userId, id, UpdateContactDto);
  }

  @UseGuards(JwtAuthGuard) // ✅ Make sure you're using your custom guard here
  @Delete(':id')
  deleteContact(@Request() req, @Param('id') id: string) {
    console.log('REQUEST', UpdateContactDto);

    const userId = req.user.userId; // coming from JWT
    return this.ContactService.deleteContact(userId, id);
  }
}
