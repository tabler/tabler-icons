/// <reference types="astro/client" />

declare module '*.astro' {
  import type { AstroComponentFactory } from 'astro/runtime/server';
  const Component: AstroComponentFactory;
  export default Component;
}

