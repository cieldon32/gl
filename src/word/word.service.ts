import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Equal } from 'typeorm';
import { Word } from './word.entity';
import { WordInput } from './word.input';

@Injectable()
export class WordService {
  constructor(
    @InjectRepository(Word)
    private readonly wordRepository: Repository<Word>
  ) {}

  public async createPatient(
    input: WordInput,
  ): Promise<Word> {
    const word = new Word();
    word.spelling = input.spelling;
    return await this.wordRepository.save(word);
  }

  public async getOneById(id: string): Promise<Word> {
    const word = await this.wordRepository.findOne(id);
    if (!word) {
      throw new NotFoundException('This word does not exist');
    }

    return word;
  }

  public async getAll(): Promise<Word[]> {
    return await this.wordRepository.find({});
  }
}
