#!/usr/bin/env node

import { generateSources } from '../../.build/svelte-recipe.mjs';
import descriptor from './package.recipe.mjs';

generateSources(descriptor);
