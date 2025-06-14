import { Command } from 'commander';
import { SpaceController } from './space.controller';

export const spaceModule = (program: Command) => {
  const controller = new SpaceController();
  const component = program
    .command('space')
    .description('CRUD for Storyblok Spaces (Management API)')
    .action(() => component.outputHelp());

  component
    .command('create <name>')
    .description('Creates a Storyblok space.')
    .action(controller.create.bind(controller));
};
