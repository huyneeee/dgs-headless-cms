import type { Schema, Struct } from '@strapi/strapi';

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    description: '';
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String & Schema.Attribute.Required;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_sections';
  info: {
    description: '';
    displayName: 'section';
    icon: 'book';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 350;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.media': SharedMedia;
      'shared.open-graph': SharedOpenGraph;
      'shared.rich-text': SharedRichText;
      'shared.section': SharedSection;
      'shared.seo': SharedSeo;
    }
  }
}
