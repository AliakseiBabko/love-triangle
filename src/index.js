/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var a, b, c;
  var NInTriangles = 0;
  l = preferences.length;
  for (i = 0; i < l; i++) {
    if ((l >= preferences[i]) && (preferences[i] > 0)) {
      a = preferences[i];
      if ((l >= preferences[a-1]) && (preferences[a-1] > 0)) {
        b = preferences[a-1];
        if ((l >= preferences[b-1]) && (preferences[b-1] > 0)) {
        c = preferences[b-1];
        if ((i+1)==c) {
          NInTriangles++;
        }
      }
      }
      }
    }
    return Math.floor(NInTriangles/3);
  };
