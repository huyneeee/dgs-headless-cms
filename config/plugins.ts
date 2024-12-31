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

  ckeditor: {
    enabled: true,
    config: {
      editor: {
        toolbar: [
          "heading",
          "|",
          "bold",
          "italic",
          "link",
          "bulletedList",
          "numberedList",
          "|",
          "fontFamily",
          "fontSize",
          "fontColor",
          "fontBackgroundColor",
          "|",
          "undo",
          "redo",
        ],
        contentCss: [
          "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Titan+One&family=Tomorrow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        ],
        fontFamily: {
          options: [
            "default",
            "Montserrat, Arial, sans-serif",
            "Ubuntu, Arial, sans-serif",
            "Ubuntu Mono, Courier New, monospace",
          ],
        },
      },
    },
  },
});
