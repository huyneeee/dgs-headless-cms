export default ({ env }) => ({
  seo: {
    enabled: true,
  },
  meilisearch: {
    config: {
      // Your meili host
      host: env("MEILISEARCH_HOST"),
      // Your master key or private key
      apiKey: env("MEILISEARCH_API_KEY"),
      articles: {
        entriesQuery: {
          locale: "all",
        },
      },
    },
  },
});
