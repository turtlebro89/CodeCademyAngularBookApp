app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'My Mock Bookstore';
  $scope.promo = 'Created By: Levi Nerby';
  $scope.products = [{name: 'The Book of Trees',
                       price: 19,
                       pubdate: new Date('2014', '03', '08'),
                       cover: 'img/the-book-of-trees.jpg',
                       likes: 0,
                     	 dislikes: 0
                     },
                      {name: 'Program or be Programmed',
                        price: 8,
                        pubdate: new Date('2013', '08', '01'),
                        cover: 'img/program-or-be-programmed.jpg',
                        likes: 0,
                        dislikes: 0
                      },
                      {name: 'Elantris',
                       	price: 16,
                       	pubdate: new Date('2005', '05', '01'),
                       	cover: 'img/elantris.jpg',
                        likes: 0,
                        dislikes: 0
                      },
                      {name: 'My Side of the Mountain',
                        price: 12,
                        pubdate: new Date('1959'),
                        cover: 'img/my-side-of-the-mountain.jpg',
                        likes: 0,
                        dislikes: 0
                      }];
  $scope.plusOne = function(index) {
  										$scope.products[index].likes += 1;
										};
  $scope.minusOne = function(index) {
    									$scope.products[index].dislikes += 1;
  									};

}]);