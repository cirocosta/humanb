function humanb (b) {
  'use strict';

  var t = 1024
   ,  units = ['KiB','MiB','GiB','TiB','PiB']
   ,  u = -1;

  if (b < t) return b + ' B';

  while (b >= t)
    b /= t, u++;

  return b.toFixed(1) + ' ' + units[u];
};

if (module) module.exports = humanb;
