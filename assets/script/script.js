$(document).ready(function() {
    var currentDay = $('#currentday');
  
   
  
    $(".saveBtn").click(function() {
      var key = $(this).parent().attr('id');
      var value = $(this).siblings('info').val();
      if(value === "") {
         alert("No data to save.")
      } else {
        localStorage.setItem(key, value);
      }
    })
  
   
  
    $(".deleteBtn").click(function() {
      var key = $(this).parent().attr('id');
      $(this).siblings('.info').val("");
      localStorage.setItem(key, "");
    })
  
   
  
    $(".clear").click(function() {
      var sure = confirm("Are you sure you want to delete all the data?");
      if(sure) {
        localStorage.clear()
        loadData();
      }
    }) 
  
   
  
    function loadData() {
      var array = [9, 10, 11, 12, 1, 2, 3, 4, 5]
      for(var i = 0; i < array.length; i++) {
        $("#time-" + array[i] + " .info").val(localStorage.getItem('time-' + array[i]));
      }
    }
  
   
  
    loadData() {
      var currentHour = moment().format("H");
      var arr = [9, 10, 11, 12, 13, 14, 15, 16, 17];
      var time
      for(var i = 0; i < arr.length; i++) {
        time = arr[i]
        if(arr[i] > 12) {
          time = arr[i] - 12
        }
  
   
  
        if (currentHour < arr[i]) {
          $('#time-' + time + ' .info').addClass('future');
        } else if (currentHour > arr[i]) {
          $('#time-' + time + ' .info').removeClass('future');
          $('#time-' + time + ' .info').addClass('past');
        } else if(currentHour == arr[i]) {
          $('#time-' + time + ' .info').addClass('present');
        }
      }
)};