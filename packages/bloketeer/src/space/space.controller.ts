import StoryblokService from '../storyblok.service';
import chalk from 'chalk';

export class SpaceController {
  private readonly storyblokService: StoryblokService;

  constructor() {
    this.storyblokService = new StoryblokService();
  }

  public create = async () => {
    console.log(chalk.cyan('🔹 Space created successfully.'));
  };
}
