function humanb (b) {
  'use strict';

  if (b < t) return b + ' B';

  var t = 1024
   ,  units = ['KiB','MiB','GiB','TiB','PiB']
   ,  u = -1;


  while (b >= t)
    b /= t, u++;

  return b.toFixed(1) + ' ' + units[u];
};

module?module.exports=humanb:'';
