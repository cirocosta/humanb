function humanb (b) {
  'use strict';

  b = parseFloat(b);
  
  var t = 1024.0
   ,  units = ['KiB','MiB','GiB','TiB','PiB']
   ,  u = -1;
  
  if (b < t) return b + ' B';

  while (b >= t)
    b /= t, u++;

  return b.toFixed(1) + ' ' + units[u];
};


module?module.exports=humanb:'';
