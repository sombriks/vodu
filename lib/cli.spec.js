import test from 'ava';

import cli from "./cli.js";

test("should return 'print usage'", async t => {
  t.is("print usage", cli.usage())
})