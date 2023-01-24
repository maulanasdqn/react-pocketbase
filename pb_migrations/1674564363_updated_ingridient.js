migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jbxn4jakgmxw7ok")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wrpktvho",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": 1,
      "max": 60,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3xcxgbxz",
    "name": "price",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 80,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pcq6fau4",
    "name": "category_id",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 10
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n15icuib",
    "name": "weight",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 100,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jbxn4jakgmxw7ok")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
