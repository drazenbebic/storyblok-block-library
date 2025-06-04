import StoryblokService from '../storyblok.service';
import chalk from 'chalk';

export class SpaceController {
  private readonly storyblokService: StoryblokService;

  constructor() {
    this.storyblokService = new StoryblokService();
  }

  public create = async (name: string) => {
    try {
      const response = await this.storyblokService.createSpace({
        name,
      });

      if (response.ok) {
        console.log(chalk.green(`✅ [${name}] Space created successfully`));
      } else {
        console.log(chalk.red(`❌ [${name}] Space creation failed`));
        const data = await response.json();
        console.log(chalk.yellow(`   ↳ Response: ${JSON.stringify(data)}`));
      }
    } catch (err: any) {
      console.log(chalk.magenta(`⚠️ [${name}] Unexpected error:`));
      console.log(chalk.yellow(`   ↳ ${err.message || err}`));
    }

    console.log(chalk.cyan('🔹 Space created successfully.'));
  };
}
