import StoryblokService from '../storyblok.service';
import { accordionSchema } from './blok-schema/accordion.schema';
import { accordionGroupSchema } from './blok-schema/accordionGroup.schema';
import { buttonSchema } from './blok-schema/button.schema';
import { callToActionSchema } from './blok-schema/callToAction.schema';
import { cardSchema } from './blok-schema/card.schema';
import { columnSchema } from './blok-schema/column.schema';
import { columnsSchema } from './blok-schema/columns.schema';
import { flexboxSchema } from './blok-schema/flexbox';
import { headingSchema } from './blok-schema/heading.schema';
import { heroSchema } from './blok-schema/hero.schema';
import { imageSchema } from './blok-schema/image.schema';
import { richTextSchema } from './blok-schema/richText.schema';
import PQueue from 'p-queue';
import chalk from 'chalk';
import { Component } from '../types';

export class ComponentController {
  private readonly storyblokService: StoryblokService;
  private readonly bloks: Record<
    string,
    (opts: { translatable: boolean }) => Component
  >;

  constructor() {
    this.storyblokService = new StoryblokService();
    this.bloks = {
      accordion: accordionSchema,
      accordionGroup: accordionGroupSchema,
      button: buttonSchema,
      callToAction: callToActionSchema,
      card: cardSchema,
      column: columnSchema,
      columns: columnsSchema,
      flexbox: flexboxSchema,
      heading: headingSchema,
      hero: heroSchema,
      image: imageSchema,
      richText: richTextSchema,
    };
  }

  public list = async () => {
    try {
      const response = await this.storyblokService.listComponents();

      if (response.ok) {
        const data = await response.json();
        console.table(
          data.components.map(({ name }: { name: string }) => name),
        );
        console.log(chalk.green(`✅ Bloks fetched successfully`));
      } else {
        console.log(chalk.red(`❌ Blok fetching failed`));
        const data = await response.json();
        console.log(chalk.yellow(`   ↳ Response: ${JSON.stringify(data)}`));
      }
    } catch (err: any) {
      console.log(chalk.magenta(`⚠️ Unexpected error:`));
      console.log(chalk.yellow(`   ↳ ${err.message || err}`));
    }
  };

  public create = async (
    blok: string,
    { translatable }: { translatable: boolean },
  ) => {
    let bloks: string[];

    if (blok) {
      if (!this.bloks[blok]) {
        console.log(
          chalk.red(`❌ Unknown blok name "${blok}". Valid names are: `),
          Object.keys(this.bloks).join(', '),
        );

        return;
      }

      bloks = [blok];
    } else {
      bloks = Object.keys(this.bloks);
    }

    // Throttle to 5 Storyblok requests per second
    const queue = new PQueue({
      interval: 1000,
      intervalCap: 5,
      carryoverConcurrencyCount: true,
    });

    for (const key of bloks) {
      queue.add(async () => {
        try {
          const payload = this.bloks[key]({ translatable });
          const response = await this.storyblokService.createComponent(payload);

          if (response.ok) {
            console.log(chalk.green(`✅ [${key}] Blok created successfully`));
          } else {
            console.log(chalk.red(`❌ [${key}] Blok creation failed`));
            const data = await response.json();
            console.log(chalk.yellow(`   ↳ Response: ${JSON.stringify(data)}`));
          }
        } catch (err: any) {
          console.log(chalk.magenta(`⚠️ [${key}] Unexpected error:`));
          console.log(chalk.yellow(`   ↳ ${err.message || err}`));
        }
      });
    }

    await queue.onIdle();
    console.log(chalk.cyan('🔹 All blok‐creation requests have completed.'));
  };
}
