// Shared vitest setup for the framework packages: jest-dom matchers and
// pretty-printed HTML in snapshots.
import { expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import htmlSerializer from 'jest-serializer-html';

expect.addSnapshotSerializer(htmlSerializer);
