require("dotenv").config();

const Typesense = require("typesense");

module.exports = (async () => {
  const TYPESENSE_CONFIG = {
    nodes: [
      {
        host: process.env.TYPESENSE_HOST,
        port: process.env.TYPESENSE_PORT,
        protocol: process.env.TYPESENSE_PROTOCOL,
      },
    ],
    apiKey: process.env.TYPESENSE_ADMIN_API_KEY,
  };

  console.log("Config: ", TYPESENSE_CONFIG);

  const typesense = new Typesense.Client(TYPESENSE_CONFIG);

  const schema = {
    name: "scripts",
    num_documents: 0,
    fields: [
      {
        name: "authorID",
        type: "string",
        facet: false,
      },
      {
        name: "authorName",
        type: "string",
        facet: false,
      },
      {
        name: "genre",
        type: "string[]",
        facet: true,
      },
      {
        name: "logline",
        type: "string",
        facet: false,
      },
      {
        name: "scriptLink",
        type: "string",
        facet: false,
      },
      {
        name: "tags",
        type: "string[]",
        facet: true,
      },
      {
        name: "title",
        type: "string",
        facet: false,
      },
      {
        name: "writerExperience",
        type: "float",
        facet: false,
      },
    ],
    default_sorting_field: "writerExperience",
  };

  try {
    const collection = await typesense.collections("scripts").retrieve();
    console.log("Found existing collection of movies");
    console.log(JSON.stringify(collection, null, 2));
  } catch (err) {
    console.error(err);
  }

  console.log(JSON.stringify(schema, null, 2));

  try {
    await typesense.collections().create(schema);
  } catch (err) {
    //console.error(err);
  }
  
  try {
    const returnData = await typesense
      .collections("scripts")
      .documents();

    console.log("Return data: ", returnData);
  } catch (err) {
    console.error(err);
  }

    let search = {
        'q' : '12 Angry Men',
        'query_by': 'title',
    }

    typesense.collections('scripts')
    .documents()
    .search(search)
    .then(function (searchResults) {
        console.log(searchResults)
    })

})();
