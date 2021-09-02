var mythical = ['dragon', 'slayer', 'magic', 'wizard of oz', 'ned start'];

function sortComparator(a, b) {
  return a.length - b.length;
}

console.log(mythical.sort(sortComparator));

var mythical = ['dragon', 'slayer', 'magic', 'wizard of oz', 'ned start'];

function sortComparator(a, b) {
  return a.indexOf('a') - b.indexOf('a');
}

console.log(mythical.sort(sortComparator));

