angular.module('devotees')
	.component('devotees',{
		templateUrl: 'devotees/devotees.template.html',
        controller: function PhoneListController(){
        	this.devotees = [
        		{
					id:1,
          			name: 'Manibhai',
          			snippet: 'Fast just got faster with Nexus S.'
        		}, 
        		{
					id:2,
          			name: 'Parmath',
          			snippet: 'The Next, Next Generation tablet.'
        		}, 
        		{
					id:3,
         		 	name: 'Tarak',
          			snippet: 'The Next, Next Generation tablet.'
        		}
      ];
        }
	});