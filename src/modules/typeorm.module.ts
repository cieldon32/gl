// 为了与SQL和NoSQL数据库集成，Nest提供了'@nestjs/typeorm'包。
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from 'nestjs-config';
import { DynamicModule } from '@nestjs/common';

import { Module as ConfigModule } from './config.module';

// 链接数据库
export const Module: DynamicModule = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  // 使用工厂函数处理一部数据
  useFactory: (configService: ConfigService) => configService.get('typeorm'),
  inject: [ConfigService],
});
