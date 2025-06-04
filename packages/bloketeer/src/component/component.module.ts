import { Command } from 'commander';
import { ComponentController } from './component.controller';

export const componentModule = (program: Command) => {
  const controller = new ComponentController();
  const component = program
    .command('component')
    .description('CRUD for Storyblok Components (Management API)')
    .action(() => component.outputHelp());

  component
    .command('create [blok]')
    .description(
      'Creates Storyblok components. If [blok] is provided only that blok is created; otherwise all blocks are created.',
    )
    .option(
      '--translatable',
      'When passed, translatable blocks will be enabled',
      false,
    )
    .action(controller.create.bind(controller));
};
