$(document).ready(function () {
  (function changeBg() {
    var img_array = [
        "images/background/background_1.jpeg",
        "images/background/background_2.jpeg",
        "images/background/background_3.jpeg",
        "images/background/background_4.jpeg",
        "images/background/background_5.jpeg",
        "images/background/background_6.jpeg",
      ],
      _nxtIndex = 0,
      _curIndex = 0,
      interval = 4000;
    function nextIndex() {
      _nxtIndex = (_nxtIndex + 1) % img_array.length;
      return _nxtIndex;
    }

    function shiftIndexes() {
      _curIndex = _nxtIndex;
      nextIndex();
    }

    function assignBackgrounds() {
      for (var i = 0; i < img_array.length; i++) {
        $(".background-slide" + i).css("backgroundImage", function () {
          return "url(" + img_array[i] + ")";
        });
        if (i == 0) {
          $(".background-slide" + i).css("opacity", 1);
        } else {
          $(".background-slide" + i).css("opacity", 0);
        }
      }
    }

    function startBackgroundOpacityToggle() {
      //console.log("in startBackgroundOpacityToggle. _curIndex = "+_curIndex);
      elem = $(".background-slide" + _curIndex);
      elem.animate(
        {
          opacity: elem.css("opacity") == 0 ? 1 : 0,
        },
        {
          duration: 2000,
          start: finishBackgroundOpacityToggle,
        }
      );
    }

    function finishBackgroundOpacityToggle() {
      //console.log("in finishBackgroundOpacity. _nxtIndex = "+_nxtIndex);
      elem = $(".background-slide" + _nxtIndex);
      elem.animate(
        {
          opacity: elem.css("opacity") == 0 ? 1 : 0,
        },
        {
          duration: 2000,
          complete: runSlider,
        }
      );
    }

    function runSlider() {
      shiftIndexes();
      setTimeout(startBackgroundOpacityToggle, interval);
    }

    assignBackgrounds();
    runSlider();
  })();
});
