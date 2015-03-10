var assert = chai.assert;

  suite('CSV', function() {
    setup(function(){
      if (typeof __html__ !== 'undefined') {
        document.body.innerHTML = __html__["tests/testsk.html"];
        original = document.getElementById("original");
        finaltable = document.getElementById("finaltable");
      }
    });
    test('4,5\n4,5,6 = con error', function() {
      var texto = "4,5" + "\n" +
                  "4,5,6";
      original.value = texto;
      calculate();
      var texto2 =  '<p>\n</p><table class="center" id="result">\n<tbody><tr>'+
                    '                <td>4</td>'+
                    '                                           <td>5</td>'+
                    '                           </tr>\n<tr class="error">'+
                    '                <td>4</td>'+
                    '                                           <td>5</td>'+
                    '                                           <td>6</td>'+
                    '                           </tr>\n</tbody></table>';
      assert.deepEqual(finaltable.innerHTML, texto2);
    });
    test('4,5\n4,5 = sin error', function() {
      var texto = "4,5" + "\n" +
                  "4,5";
      original.value = texto;
      calculate();
      var texto2 =  '<p>\n</p><table class="center" id="result">\n<tbody><tr>'+
                    '                <td>4</td>'+
                    '                                           <td>5</td>'+
                    '                           </tr>\n<tr>'+
                    '                <td>4</td>'+
                    '                                           <td>5</td>'+
                    '                           </tr>\n</tbody></table>';
      assert.deepEqual(finaltable.innerHTML, texto2);
    });
  });
