import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import {PhonemeService} from './phoneme.service';
import {Phoneme} from './phoneme.entity';
import {PhonemeInput} from './phoneme.input';

@Resolver('phoneme')
export class PhonemeResolver {
  constructor(
    // 将provider通过类构造函数注入
    private readonly phonemeService: PhonemeService,
  ) {}

  @Query(() => Phoneme)
  public async findWordById(@Args('id') id: string,): Promise<Phoneme> {
    return this.phonemeService.getOneById(id);
  }

  @Query(() => [Phoneme])
  public getAllPhonemes(): Promise<Phoneme[]> {
    return this.phonemeService.getAll();
  }

  @Mutation(() => Phoneme)
  public addMorpheme(
    @Args('phonemeInput') input: PhonemeInput,
  ): Promise<Phoneme> {
    return this.phonemeService.createPhoneme(input);
  }

  @Mutation(() => Phoneme)
  public updateWord(
    @Args('id') id: string,
    @Args('phonemeInput') input: PhonemeInput,
  ): Promise<Phoneme> {
    return this.phonemeService.updatePhoneme(id, input);
  }
}
