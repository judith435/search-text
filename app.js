var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.words = [
    "beer",
    "wine",
    "whiskey",
    "vodka",
    "gin",
    "rum"
  ];
  
  $scope.text = "blah blah beer blah blah blah wine blah blah blah whiskey blah blah blah vodka blah blah blah blah blah gin blah blah blah blah blah rum blah blah blah blah beer blah blah blah blah vodka blah blah blah vodka blah blah blah blah blah blah vodka blah blah blah blah";
  
  $scope.selectedWords = [];

});

app.filter('highlightWord', function() {
    return function(text, selectedWords) {
      if(selectedWords.length>0) {
        
        for (var i = 0; i < selectedWords.length; i++){
          console.log('selectedWords',selectedWords);
          var pattern = new RegExp(selectedWords[i], "g");
          text = text.replace(pattern, '<span class="highlighted">' + selectedWords[i] + '</span>');
        }
        
        
        return text;
      }
      else {
        return text;
      }
    };
});