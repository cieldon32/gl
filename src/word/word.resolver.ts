import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import {WordService} from './word.service';
import {Word} from './word.entity';
import {WordInput} from './word.input';

@Resolver('word')
export class WordResolver {
  constructor(
    // 将provider通过类构造函数注入
    private readonly wordService: WordService,
  ) {}

  @Query(() => Word)
  public async findWordById(@Args('id') id: string,): Promise<Word> {
    return this.wordService.getOneById(id);
  }

  @Query(() => [Word])
  public getAllWords(): Promise<Word[]> {
    return this.wordService.getAll();
  }

  @Mutation(() => Word)
  public addWord(
    @Args('wordInput') input: WordInput,
  ): Promise<Word> {
    return this.wordService.createWord(input);
  }

  @Mutation(() => Word)
  public updateWord(
    @Args('id') id: string,
    @Args('wordInput') input: WordInput,
  ): Promise<Word> {
    return this.wordService.updateWord(id, input);
  }
}
