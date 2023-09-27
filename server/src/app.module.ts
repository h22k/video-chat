// config file
import configuration from './config/configuration'
// packages
import { Module } from '@nestjs/common'
import { UsersModule } from './modules/users/users.module'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TypeOrmConfigService } from './database/TypeOrmConfigService'
import { GraphqlModule } from './modules/graphql/graphql.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    GraphqlModule,
    UsersModule,
    GraphqlModule,
  ],
})
export class AppModule {}
