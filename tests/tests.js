var assert = chai.assert;

  suite('CSV', function() {
    test('4,5\n4,5,6 = error', function() {
      var texto = "4,5" +
                  "4,5,6";
      original.value = var;
      calculate();
      var texto2 = "<p>\n<table class=\"center\" id=\"result\">" +
                  "<tr>" +
                  "<td>" +
                  "4" +
                  "</td>" +
                  "<td>" +
                  "5" +
                  "</td>" +
                  "</tr>" +
                  "<tr class=\"error\">" +
                  "<td>" +
                  "4" +
                  "</td>" +
                  "<td>" +
                  "5" +
                  "</td>" +
                  "<td>" +
                  "6" +
                  "</td>" +
                  "</tr>" +
                  "</table>";
      assert.deepEquals(finaltable.innerHTML, texto2);
    });
  });
