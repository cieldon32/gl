import { Field, ObjectType, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne
} from 'typeorm';
import {Syllable} from '../syllable/syllable.entity';

@ObjectType()
@Entity()
export class Phoneme {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field({ nullable: false })
  @Column({ default: '' })
  symbol: string;

  @Field({ nullable: false })
  @Column({ default: '' })
  grapheme: string;

  @Field({ nullable: false })
  @CreateDateColumn({ nullable: true,name:'create_at' })
  createAt: Date;

  @Field({ nullable: false })
  @UpdateDateColumn({ nullable: true, name: 'update_at' })
  updateAt: Date;

  @Field(() => Syllable,{ nullable: true })
	@ManyToOne(type=>Syllable, syllable => syllable.phonemes)
  syllable: Syllable;
  
  
  
}
