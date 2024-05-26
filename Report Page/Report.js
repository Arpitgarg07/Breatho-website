function sliceSize(dataNum, dataTotal, percentage) {
    return (dataNum / dataTotal) * (360 * percentage / 100);
  }
  
  function addSlice(id, sliceSize, pieElement, offset, sliceID, color) {
    $(pieElement).append("<div class='slice "+ sliceID + "'><span></span></div>");
    var offset = offset - 1;
    var sizeRotation = -179 + sliceSize;
  
    $(id + " ." + sliceID).css({
      "transform": "rotate(" + offset + "deg) translate3d(0,0,0)"
    });
  
    $(id + " ." + sliceID + " span").css({
      "transform"       : "rotate(" + sizeRotation + "deg) translate3d(0,0,0)",
      "background-color": color
    });
  }
  
  function iterateSlices(id, sliceSize, pieElement, offset, dataCount, sliceCount, color) {
    var
      maxSize = 179,
      sliceID = "s" + dataCount + "-" + sliceCount;
  
    if( sliceSize <= maxSize ) {
      addSlice(id, sliceSize, pieElement, offset, sliceID, color);
    } else {
      addSlice(id, maxSize, pieElement, offset, sliceID, color);
      iterateSlices(id, sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
    }
  }
  
  function createPie(id, additivePercentage) {
    var
      additiveSize = sliceSize(1, 1, additivePercentage),
      multiplicativeSize = 360 - additiveSize,
      pieElement    = id + " .pie-chart__pie",
      dataElement   = id + " .pie-chart__legend",
      color         = [
        "#55833D",
        "#B7D9A4"
      ];
  
    color = shuffle(color);
  
    iterateSlices(id, additiveSize, pieElement, 0, 0, 0, color[0]);
    iterateSlices(id, multiplicativeSize, pieElement, additiveSize, 1, 0, color[1]);
  
    $(dataElement + " #additivePercentage").text(additivePercentage);
    $(dataElement + " #multiplicativePercentage").text(100 - additivePercentage);
  }
  
  function shuffle(a) {
      var j, x, i;
      for (i = a.length; i; i--) {
          j = Math.floor(Math.random() * i);
          x = a[i - 1];
          a[i - 1] = a[j];
          a[j] = x;
      }
      return a;
  }
  d=document.getElementById("answer5").value;
  function createPieCharts() {
    createPie('.pieID--sustainability', d); // You can change the percentage of additive here
  }
  
  createPieCharts();
  




  $(document).ready(function() {
    var labels = ["TreeXL", "TreeL", "TreeM", "TreeS", "PlantL", "PlantM", "Grass"];
    var values = [500, 1000, 600, 50, 70, 750, 300];
  
    var max = Math.max(...values);
  
    // Create bars dynamically
    for (var i = 0; i < labels.length; i++) {
      var barHeight = (100 * values[i] / max).toFixed(2) + '%';
      var barWidth = ((100 / labels.length - 1) * 0.5).toFixed(2) + '%'; // Decrease width to half
      var barHtml = `
        <div class="bar" data-h="${values[i]}" style="height: ${barHeight}; width: ${barWidth};">
          ${values[i]} <p>${labels[i]}</p>
        </div>`;
      $('.graph').append(barHtml);
    }
  });
  