document.getElementById("aside").addEventListener("click", function(){
    var filterContent = document.getElementById("filter-content");
    var textFilterHead = document.getElementById('six-headline');
    var clickInFilter = document.getElementById('clickInFilter');
    filterContent.classList.toggle("filter-content");
    textFilterHead.classList.toggle("hide");
    clickInFilter.classList.toggle("hide");
});

clickInFilter.addEventListener("click", function(){
    var filterList = document.getElementById('content-filter-list');
    var filterListInside = document.getElementById('content-inside-filter-list');
    filterList.classList.toggle("content-filter-list");
    filterListInside.classList.toggle("hide");
});


document.getElementById("1").addEventListener("click", function(){
  var filterBlockButton = document.getElementById("content-inside-filter-list");
  filterBlockButton.classList.toggle("content-inside-filter-list");
});
