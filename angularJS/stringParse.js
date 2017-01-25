/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-25 12:41:30
* @Last Modified by:   noor
* @Last Modified time: 2017-01-25 13:02:23
*/

myApp.factory('$stringParse',function(){
	return {
		breakCamelCase: function(inputString){
			if(!inputString){
				return inputString;
			}

			var outputString = '';
			for(var i=0; i<inputString.length; i++){
				if(i>0 && inputString[i].toUpperCase() == inputString[i]){
					outputString += " ";
				}
				outputString += inputString[i];
			}
			return outputString;
		}
	};
});
