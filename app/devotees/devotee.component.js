angular.module('devoteeList')
	.component('devoteeList',{
		templateUrl: 'devotees/devotee.template.html',
        controller: function PhoneListController(){
        	this.devotees = [
        		{
          			name: 'Manibhai',
          			snippet: 'Fast just got faster with Nexus S.'
        		}, 
        		{
          			name: 'Parmath',
          			snippet: 'The Next, Next Generation tablet.'
        		}, 
        		{
         		 	name: 'Tarak',
          			snippet: 'The Next, Next Generation tablet.'
        		}
      ];
        }
	})