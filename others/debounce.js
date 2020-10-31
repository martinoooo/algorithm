function debounce(func, wait) {
  var timeout;

  return function () {
    var context = this;
    var args = arguments;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(context, args);
    }, wait);
  };
}
