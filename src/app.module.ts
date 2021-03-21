import { Module } from '@nestjs/common';
import { ConfigModule, GqlModule, TypeOrmModule } from 'src/modules';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { WordModule } from './word/word.module';
import { MorphemeModule } from './morpheme/morpheme.module';
import { SyllableModule } from './syllable/syllable.module';
import { PhonemeModule } from './phoneme/phoneme.module';

@Module({
  imports: [
    ConfigModule,
    GqlModule,
    TypeOrmModule,
    UserModule,
    AuthModule,
    WordModule,
    MorphemeModule,
    SyllableModule,
    PhonemeModule,
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {
  
}
