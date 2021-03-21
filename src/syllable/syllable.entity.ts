import { Field, ObjectType, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany
} from 'typeorm';
import {Word} from '../word/word.entity';
import {Phoneme} from '../phoneme/phoneme.entity';

@ObjectType()
@Entity()
export class Syllable {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field({ nullable: false })
  @Column({ default: '' })
  onset: string;

  @Field({ nullable: false })
  @Column({ default: '' })
  rhyme: string;

  @OneToMany(type => Phoneme , phonemes=> phonemes.syllable)
  phonemes: Phoneme[]

  @Field({ nullable: false })
  @CreateDateColumn({ nullable: true,name:'create_at' })
  createAt: Date;

  @Field({ nullable: false })
  @UpdateDateColumn({ nullable: true, name: 'update_at' })
  updateAt: Date;

  @Field(() => Word,{ nullable: true })
	@ManyToOne(type=>Word, word => word.syllables)
	word: Word;
  
}
