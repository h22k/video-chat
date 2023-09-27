import { Injectable } from '@nestjs/common'
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm'
import { ConfigService } from '@nestjs/config'
import { User } from '../modules/users/entities/user.entity'

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get('database.host'),
      port: this.configService.get('database.port'),
      username: this.configService.get('database.user'),
      password: this.configService.get('database.password'),
      database: this.configService.get('database.database'),
      entities: [User],
      synchronize: true,
      logging: true,
    }
  }
}
