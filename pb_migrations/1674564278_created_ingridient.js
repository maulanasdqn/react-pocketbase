migrate((db) => {
  const collection = new Collection({
    "id": "jbxn4jakgmxw7ok",
    "created": "2023-01-24 12:44:38.890Z",
    "updated": "2023-01-24 12:44:38.890Z",
    "name": "ingridient",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wrpktvho",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": 20,
          "max": 60,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "3xcxgbxz",
        "name": "price",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 10,
          "max": 80,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "pcq6fau4",
        "name": "category_id",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 2,
          "max": 10
        }
      },
      {
        "system": false,
        "id": "n15icuib",
        "name": "weight",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 10,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "2apqcn6g",
        "name": "qty",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jbxn4jakgmxw7ok");

  return dao.deleteCollection(collection);
})
