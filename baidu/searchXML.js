//not all pass.only 17%
function search(xml,mode) {
  // while(xml.match(/<\w*>/))
  var mode_str = mode.match(/<\w*>/)[0]
  console.log(xml.match(/<\w*>/g).reduce(function(pre,cur,curIndex,array) {
    if (cur == mode_str) {
      pre++;
    }
    return pre;
  },0))
  console.log(xml.match(/<\w*>/g).reduce(function(pre,cur,curIndex,array) {
    if (cur == mode_str) {
      pre.push(curIndex+1);
    }
    return pre;
  },[]).join(' '))
}

search(`<recipe>
      <recipename>Ice Cream Sundae</recipename>
      <ingredlist>
           <listitem>
                 <quantity>3</quantity>
                 <itemdescription>chocolate syrup or chocolate fudge</itemdescription>
           </listitem>
           <listitem>
                 <quantity>1</quantity>
                 <itemdescription>nuts</itemdescription>
           </listitem>
           <listitem>
                 <quantity>1</quantity>
                 <itemdescription>cherry</itemdescription>
           </listitem>
      </ingredlist>
      <preptime>5 minutes</preptime>
</recipe>`,`<listitem><quantity></quantity></listitem>`)