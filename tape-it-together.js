var test = require("tape");
var fancify = require(process.argv[2]);

test("fancify", function(t) {
  t.equal(fancify("Lol"), "~*~Lol~*~", "Wraps a string in ~*~");
  t.equal(fancify("Lol", true), "~*~LOL~*~", "Optionally makes it allcaps");
  t.equal(
    fancify("Lol", false, "%"),
    "~%~Lol~%~",
    "Optionally allows to set the character"
  );
  t.end();
});
