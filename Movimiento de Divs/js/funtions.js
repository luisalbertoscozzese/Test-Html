$(document).ready(function() {
  $(".miDiv").draggable({
    grid: [100, 100],
    snap: ".snap",
    snapMode: "inner",
    containment: ".contenedor",
    stop: function() {
      var pos = $(this).position();
      var row = Math.floor((pos.top + 50) / 100) + 1;
      var col = Math.floor((pos.left + 50) / 100) + 1;
      var snap = $(".snap[data-row='" + row + "'][data-col='" + col + "']");
      if (snap.length) {
        $(this).animate({
          top: snap.position().top,
          left: snap.position().left
        }, 200);
      }
    }
  });
});