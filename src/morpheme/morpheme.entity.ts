import { Field, ObjectType, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne
} from 'typeorm';
import {Word} from '../word/word.entity';

@ObjectType()
@Entity()
export class Morpheme {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field({ nullable: false })
  @Column({ default: '' })
  prefix: string;

  @Field({ nullable: false })
  @Column({ default: '' })
  root: string;

  @Field({ nullable: false })
  @Column({ default: '' })
  suffix: string;

  @Field({ nullable: false })
  @CreateDateColumn({ nullable: true,name:'create_at' })
  createAt: Date;

  @Field({ nullable: false })
  @UpdateDateColumn({ nullable: true, name: 'update_at' })
  updateAt: Date;

  // 使用cascade允许在保存Morpheme时，word自动保存
  @Field(() => Word,{ nullable: true })
	@ManyToOne(type=>Word, word => word.morphemes, {cascade: true})
	word: Word;
  
}
