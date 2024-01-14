"use server";

import { glob } from 'glob';
import { basename } from 'path';
import { readFileSync, existsSync } from 'fs';
import fm from 'front-matter';
import { IconSvgsType, IconType } from '@/types';

export async function getAllIcons() {
  const icons = await glob('../src/outline/*.svg');

  return icons
    .map((icon) => {
      const content = fm(readFileSync(icon, 'utf8')),
        slug = basename(icon, '.svg');

      let svgs: IconSvgsType = {
        outline: content.body,
      };

      const iconSolid = icon.replace('outline', 'solid');
      if (existsSync(iconSolid)) {
        const content = fm(readFileSync(iconSolid, 'utf8'));
        svgs.solid = content.body;
      }

      return {
        slug,
        svgs,
        data: content.attributes,
      } as IconType;
    })
    .sort((a, b) => a.slug.localeCompare(b.slug));
}
