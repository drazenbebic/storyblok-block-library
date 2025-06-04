#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import figlet from 'figlet';
import appModule from './app.module';
import { argv } from 'process';
import dotenv from 'dotenv';
import path from 'path';
import pj from '../package.json';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const program = new Command();

program
  .name('bloketeer')
  .version(pj.version)
  .description(
    'Automatically create Storyblok Bloks for your new headless CMS project!',
  )
  .action(() => {
    console.log(chalk.bgMagenta(figlet.textSync('BLOKETEER')));
    program.outputHelp();
  });

appModule(program);

program.parse(argv);
