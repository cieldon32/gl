import { Field, ObjectType, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';
import {Morpheme} from '../morpheme/morpheme.entity';
import {Syllable} from '../syllable/syllable.entity';

@ObjectType()
@Entity()
export class Word {
  // @PrimaryColumn 主列
  @Field(type => ID)
  @PrimaryGeneratedColumn() // 自动生成列
  id: string;

  @Field({ nullable: false })
  @Column({ default: '' })
  spelling: string;

  @OneToMany(type => Morpheme , morpheme=> morpheme.word)
  morphemes: Morpheme[];

  // 一对多的关系中可以省略JoinColumn
  @OneToMany(type => Syllable , syllables=> syllables.word)
  syllables: Syllable[];
  
  @Field({ nullable: false })
  @CreateDateColumn({ nullable: true,name:'create_at' })
  createAt: Date;

  @Field({ nullable: false })
  @UpdateDateColumn({ nullable: true, name: 'update_at' })
  updateAt: Date;
  
}
