import { Command } from 'commander';
import { componentModule } from './component/component.module';
import { spaceModule } from './space/space.module';

const appModule = (program: Command) => {
  const modules = [componentModule, spaceModule];

  modules.forEach(module => {
    module(program);
  });
};

export default appModule;
