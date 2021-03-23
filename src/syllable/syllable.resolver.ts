import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import {SyllableService} from './syllable.service';
import {Syllable} from './syllable.entity';
import {SyllableInput} from './syllable.input';

@Resolver('syllable')
export class SyllableResolver {
  constructor(
    // 将provider通过类构造函数注入
    private readonly syllableService: SyllableService,
  ) {}

  @Query(() => Syllable)
  public async findWordById(@Args('id') id: string,): Promise<Syllable> {
    return this.syllableService.getOneById(id);
  }

  @Query(() => [Syllable])
  public getAllSyllables(): Promise<Syllable[]> {
    return this.syllableService.getAll();
  }

  @Mutation(() => Syllable)
  public addMorpheme(
    @Args('syllableInput') input: SyllableInput,
  ): Promise<Syllable> {
    return this.syllableService.createSyllable(input);
  }

  @Mutation(() => Syllable)
  public updateSyllable(
    @Args('id') id: string,
    @Args('syllableInput') input: SyllableInput,
  ): Promise<Syllable> {
    return this.syllableService.updateSyllable(id, input);
  }
}
