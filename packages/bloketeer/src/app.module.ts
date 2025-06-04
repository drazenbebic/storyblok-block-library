import { Command } from 'commander';
import { componentModule } from './component/component.module';

const appModule = (program: Command) => {
  const modules = [componentModule];

  modules.forEach(module => {
    module(program);
  });
};

export default appModule;
