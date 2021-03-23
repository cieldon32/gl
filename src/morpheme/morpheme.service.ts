import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Equal } from 'typeorm';
import {Morpheme} from './morpheme.entity';
import {MorphemeInput} from './morpheme.input';

@Injectable()
export class MorphemeService {
  constructor(
    @InjectRepository(Morpheme)
    private readonly morphemeRepository: Repository<Morpheme>
  ) {}

  public async createMorpheme(
    inputs: MorphemeInput[],
  ): Promise<Morpheme[]> {
    let morphemes: Morpheme[] = [];
    inputs.map((item: MorphemeInput) => {
      let morpheme = new Morpheme();
      morpheme = {
        ...morpheme,
        ...item,
      }
      morphemes.push(morpheme);
      this.morphemeRepository.save(morpheme);
    })
    return morphemes; 
  }

  public async updateMorpheme(
    id: string,
    input: MorphemeInput,
  ): Promise<Morpheme> {
    let morpheme = await this.getOneById(id);
    morpheme = {
      ...morpheme,
      ...input
    }
    return await this.morphemeRepository.save(morpheme);
  }

  public async getOneById(id: string): Promise<Morpheme> {
    const morpheme = await this.morphemeRepository.findOne(id);
    if (!morpheme) {
      throw new NotFoundException('This word does not exist');
    }

    return morpheme;
  }

  public async getAll(): Promise<Morpheme[]> {
    return await this.morphemeRepository.find({});
  }
}
