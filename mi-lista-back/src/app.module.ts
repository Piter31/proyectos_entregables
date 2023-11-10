import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListaModule } from './lista/lista.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type":"mysql",
      "host":"localhost",
      "port":3306,
      "username":"root",
      "password":"123456",
      "database":"lista_prueba",
      "entities":["dist/**/**.entity{.ts,.js}"],
      "synchronize":true
    }),
    ListaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
