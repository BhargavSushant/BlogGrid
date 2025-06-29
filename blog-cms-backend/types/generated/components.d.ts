import type { Schema, Struct } from '@strapi/strapi';

export interface CommonBacklink extends Struct.ComponentSchema {
  collectionName: 'components_common_backlinks';
  info: {
    displayName: 'Backlink';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface CommonExternallink extends Struct.ComponentSchema {
  collectionName: 'components_common_externallinks';
  info: {
    displayName: 'External Link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface CommonTag extends Struct.ComponentSchema {
  collectionName: 'components_common_tags';
  info: {
    displayName: 'Tag';
  };
  attributes: {
    name: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.backlink': CommonBacklink;
      'common.externallink': CommonExternallink;
      'common.tag': CommonTag;
    }
  }
}
