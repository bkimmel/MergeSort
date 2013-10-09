function merge(a, b) {
   var ret = [];
   while (a.length && b.length)
   {
     ret.push((a[0] < b[0] ? a.shift() : b.shift()));
   }
  return ret.concat((a.length ? a : b));
}


function mergesort(arr) {
  if (arr.length <= 1)
  {
   return arr; 
  }
  else
  {
    var part = Math.floor(arr.length / 2);
    return merge(mergesort(arr.slice(part)), mergesort(arr.slice(0, part)));
  }
}