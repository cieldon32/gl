import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Equal } from 'typeorm';
import {Syllable} from './syllable.entity';
import {SyllableInput} from './syllable.input';
@Injectable()
export class SyllableService {
  constructor(
    @InjectRepository(Syllable)
    private readonly syllableRepository: Repository<Syllable>
  ) {}

  public async createSyllable(
    inputs: SyllableInput[],
  ): Promise<Syllable[]> {
    let syllables: Syllable[] = [];
    inputs.map((item: SyllableInput) => {
      let syllable = new Syllable();
      syllable = {
        ...syllable,
        ...item,
      }
      syllables.push(syllable);
      this.syllableRepository.save(syllable);
    });
    return syllables; 
  }

  public async updateSyllable(
    id: string,
    input: SyllableInput,
  ): Promise<Syllable> {
    let syllable = await this.getOneById(id);
    syllable = {
      ...syllable,
      ...input
    }
    return await this.syllableRepository.save(syllable);
  }

  public async getOneById(id: string): Promise<Syllable> {
    const syllable = await this.syllableRepository.findOne(id);
    if (!syllable) {
      throw new NotFoundException('This word does not exist');
    }

    return syllable;
  }

  public async getAll(): Promise<Syllable[]> {
    return await this.syllableRepository.find({});
  }
}
