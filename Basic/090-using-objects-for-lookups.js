// 設置
function phoneticLookup(val) {

  let lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  }
  let result = lookup[val];
  // 只修改這一行上面的代碼
  return result;
}

phoneticLookup("charlie");