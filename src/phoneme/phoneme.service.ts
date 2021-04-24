import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Equal } from 'typeorm';
import {Phoneme} from './phoneme.entity';
import {PhonemeInput} from './phoneme.input';

@Injectable()
export class PhonemeService {
  constructor(
    @InjectRepository(Phoneme)
    private readonly phonemeRepository: Repository<Phoneme>
  ) {}

  public async createPhoneme(
    input: PhonemeInput,
  ): Promise<Phoneme> {
    let phoneme = new Phoneme();
    return await this.phonemeRepository.save(phoneme);; 
  }

  public async updatePhoneme(
    id: string,
    input: PhonemeInput,
  ): Promise<Phoneme> {
    let phoneme = await this.getOneById(id);
    phoneme = {
      ...phoneme,
      ...input
    }
    return await this.phonemeRepository.save(phoneme);
  }

  public async getOneById(id: string): Promise<Phoneme> {
    const phoneme = await this.phonemeRepository.findOne(id);
    if (!phoneme) {
      throw new NotFoundException('This word does not exist');
    }

    return phoneme;
  }

  public async getAll(): Promise<Phoneme[]> {
    return await this.phonemeRepository.find({});
  }
}
