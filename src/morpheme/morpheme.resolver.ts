import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import {MorphemeService} from './morpheme.service';
import {Morpheme} from './morpheme.entity';
import {MorphemeInput} from './morpheme.input';

@Resolver('morpheme')
export class MorphemeResolver {
  constructor(
    // 将provider通过类构造函数注入
    private readonly morphemeService: MorphemeService,
  ) {}

  @Query(() => Morpheme)
  public async findWordById(@Args('id') id: string,): Promise<Morpheme> {
    return this.morphemeService.getOneById(id);
  }

  @Query(() => [Morpheme])
  public getAllMorphemes(): Promise<Morpheme[]> {
    return this.morphemeService.getAll();
  }

  @Mutation(() => Morpheme)
  public addMorpheme(
    @Args('morphemeInput') inputs: MorphemeInput[],
  ): Promise<Morpheme[]> {
    return this.morphemeService.createMorpheme(inputs);
  }

  @Mutation(() => Morpheme)
  public updateWord(
    @Args('id') id: string,
    @Args('morphemeInput') input: MorphemeInput,
  ): Promise<Morpheme> {
    return this.morphemeService.updateMorpheme(id, input);
  }
}
