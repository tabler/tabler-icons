import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import htmlSerializer from 'jest-serializer-html';

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers);

// Add HTML serializer for snapshots
expect.addSnapshotSerializer(htmlSerializer);
