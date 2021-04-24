import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Equal } from 'typeorm';
import { Word } from './word.entity';
import { WordInput } from './word.input';
import {MorphemeService} from 'src/morpheme';
import {SyllableService} from 'src/syllable';
@Injectable()
export class WordService {
  constructor(
    @InjectRepository(Word)
    private readonly wordRepository: Repository<Word>,
    @Inject(forwardRef(() => MorphemeService))
    private readonly morphemeService: MorphemeService,
    @Inject(forwardRef(() => SyllableService))
    private readonly syllableService: SyllableService,
  ) {}

  public async createWord(
    input: WordInput,
  ): Promise<Word> {
    const word = new Word();
    word.spelling = input.spelling;
    const morphemes = await this.morphemeService.createMorpheme(input.morphemes);
    word.morphemes = morphemes;
    const syllables = await this.syllableService.createSyllable(input.syllables)
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
