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
    fields: [
      {
        name: "authorID",
        type: "string"
      },
      {
        name: "authorName",
        type: "string"
      },
      {
        name: "genre",
        type: "string[]"
      },
      {
        name: "link",
        type: "string"
      },
      {
        name: "logline",
        type: "string"
      },
      {
        name: "tags",
        type: "string[]"
      },
      {
        name: "title",
        type: "string"
      },
      {
        name: "writerExperience",
        type: "int32"
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
    //await typesense.collections("scripts").delete();
    //await typesense.collections().create(schema);
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
        'q' : '',
        'query_by': 'title',
    }

    typesense.collections('scripts')
    .documents()
    .search(search)
    .then(function (searchResults) {
        console.log(searchResults)
        //console.log(searchResults.hits[0].document)
    })

})();
