#!/usr/bin/env node

import { generateSources } from '../../.build/package-recipe.mjs';
import descriptor from './package.recipe.mjs';

generateSources(descriptor);
