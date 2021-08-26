// () 捕获分组
{
  const str = "3b7d8fcb99847da1cbfa8adaf25df22eaeb76f21";
  console.log("()");
  const reg = /(\d)(\s)/g;
  const res = str.match(reg);
  console.log(res);
}

// ?: 非捕获分组
{
  const str = "3b7d8fcb99847da1cbfa8adaf25df22eaeb76f21";
  console.log("?:");
  const reg = /(?:\d{2,})/;
  const res = str.match(reg);
  console.log(res);
}

// ?= 正向肯定查询
{
  const str = "undefined";
  console.log("?=");
  const reg = /(?:de)/;
  const res = str.match(reg);
  console.log(res);
}

// ?! 正向否定查询
{
  const str = "undefined";
  console.log("?!");
  const reg1 = /undefine(?!s)/;
  const res1 = str.match(reg1);

  const reg2 = /undefine(?!d)/;
  const res2 = str.match(reg2);
  console.log(res1, res2);
}

// ?<= 反向肯定查询
{
  const str = "undefined";
  console.log("?<=");
  const reg1 = /(?<=uu)defined/;
  const res1 = str.match(reg1);

  const reg2 = /(?<=un)defined/;
  const res2 = str.match(reg2);
  console.log(res1, res2);
}

// ?<! 反向否定查询
{
  const str = "undefined";
  console.log("?<!");
  const reg1 = /(?<!uu)defined/;
  const res1 = str.match(reg1);

  const reg2 = /(?<!un)defined/;
  const res2 = str.match(reg2);
  console.log(res1, res2);
}
