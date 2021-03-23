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

  public async createWord(
    input: WordInput,
  ): Promise<Word> {
    const word = new Word();
    word.spelling = input.spelling;
    return await this.wordRepository.save(word);
  }

  public async updateWord(
    id: string,
    input: WordInput,
  ): Promise<Word> {
    let word = await this.getOneById(id);
    word = {
      ...word,
      ...input
    }
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
