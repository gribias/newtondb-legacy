import { Collection } from "../collection/collection";
import { wizards } from "../test-data";
import { CollectionDatabase } from "./collection-database";
import { DictionaryDatabase } from "./dictionary-database";
import init from "./init";

it("instantiates a collection db", () => {
  const db = init(wizards);
  expect(db).toBeInstanceOf(CollectionDatabase);
  expect(db.$).toBeInstanceOf(Collection);
});

it("instantiates a dictionary db", () => {
  const db = init({ wizards });
  expect(db).toBeInstanceOf(DictionaryDatabase);
  expect(db.$.wizards).toBeInstanceOf(Collection);
});