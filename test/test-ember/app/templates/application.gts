import IconAccessible from '@tabler/icons-ember/icons/IconAccessible';
import {
  IconAd,
  IconAdFilled,
  IconAdOff,
  IconCodeAsterix,
  dynamicImports,
} from '@tabler/icons-ember';

const dynamicImportName = dynamicImports.ad.name || 'anonymous';

<template>
  <main class="icons-smoke" data-dynamic-import={{dynamicImportName}}>
    <IconAd @size={{48}} @stroke={{1}} data-test-icon="ad" />
    <IconAdOff @size={{48}} @stroke={{1.5}} @title="Advertisement off" data-test-icon="ad-off" />
    <IconAdFilled @size={{48}} @color="#2563eb" data-test-icon="ad-filled" />
    <IconAccessible width="48" height="48" stroke="#16a34a" stroke-width="1.5" data-test-icon="direct">
      <desc>Direct subpath import</desc>
    </IconAccessible>
    <IconCodeAsterix @size={{48}} @color="#dc2626" data-test-icon="alias" />
  </main>
</template>
