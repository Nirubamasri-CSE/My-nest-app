import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { AddressesModule } from './addresses/addresses.module';

@Module({
  imports: [StudentsModule, AddressesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
