var getId = (function () {
  var incrementingId = 0;
  return function(element) {
    if (!element.id) {
      element.id = "id_" + incrementingId++;
      // Possibly add a check if this ID really is unique
    }
    return element.id;
  };
}());
