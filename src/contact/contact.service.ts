import { Injectable, UseGuards } from '@nestjs/common';
import { CreateContactDto } from './dto/create.contact.dto';
import { UpdateContactDto } from './dto/update.contact.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ContactService {
  constructor(private readonly prisma: PrismaService) {}

  async createContact(userId: string, data: CreateContactDto) {
    return await this.prisma.address.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        mobileNo: data.mobileNo,
        user: {
          connect: { id: userId },
        },
      },
    });
  }

  async GetContacts(userId: string) {
    return await this.prisma.address.findMany({
      where: { userId: userId },
    });
  }

  async GetContact(userId: string, id: string) {
    return await this.prisma.address.findUnique({
      where: {
        userId: userId,
        id: id,
      },
    });
  }



async updateContact(userId: string, id: string, data: UpdateContactDto) {
    const exsistingContact = await this.prisma.address.findFirst({
      where: {
        id: id,
        userId: userId,
      },
    });

  if (!exsistingContact) {
      throw new Error('Todo not found or not authorized');
    }

    return this.prisma.address.update({
      where: { id },
      data: data,
    });
  }


async deleteContact(userId: string, id: string) {
    const exsistingContact = await this.prisma.address.findFirst({
      where: {
        id: id,
        userId: userId,
      },
    });

  if (!exsistingContact) {
      throw new Error('Todo not found or not authorized');
    }

    return this.prisma.address.delete({
      where: {
        id: id,
        userId: userId,
      },
    });
  }


}
