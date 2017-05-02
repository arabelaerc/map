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
    var filterListInside1 = document.getElementById('content-inside-filter-list-1');
    var filterListInside2 = document.getElementById('content-inside-filter-list-2');
    filterList.classList.toggle("content-filter-list");
    filterListInside1.classList.toggle("hide");
    filterListInside2.classList.toggle("hide");
});


document.getElementById("1").addEventListener("click", function(){
  var filterBlockButton1 = document.getElementById("content-inside-filter-list-1");
  filterBlockButton1.classList.toggle("content-inside-filter-list");
});
document.getElementById("2").addEventListener("click", function(){
  var filterBlockButton2 = document.getElementById("content-inside-filter-list-2");
  filterBlockButton2.classList.toggle("content-inside-filter-list");
});
