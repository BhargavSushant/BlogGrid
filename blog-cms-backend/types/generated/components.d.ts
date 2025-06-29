import type { Schema, Struct } from '@strapi/strapi';

export interface DemoDemo extends Struct.ComponentSchema {
  collectionName: 'components_demo_demos';
  info: {
    displayName: 'demo';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'demo.demo': DemoDemo;
    }
  }
}
