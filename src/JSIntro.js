
exports.Sum = function(num1, num2)
{
return num1+num2;
}


exports.SumOfArray = function(arrayOfNums)
{
var result=0;
var n;
for(n=0;n<arrayOfNums.length;n++)
{
	result=result+arrayOfNums[n];
}
return result;
}


// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums)
{
	var sum=0;
	var n1,n2;
	for(n1=0;n1<arrayOfNums.length;n1++)
	{
		for(n2=n1+1;n2<arrayOfNums.length;n2++)
		{
			if(arrayOfNums[n1]==arrayOfNums[n2])
				arrayOfNums[n2]=0;
		}
	}
	for(n1=0;n1<arrayOfNums.length;n1++)
	{
		sum=sum+arrayOfNums[n1];
	}
	return sum;
}


exports.ReverseString = function(str)
{
var reversestring="";
var l=str.length-1;
while(l>=0)
{
	reversestring=reversestring+str[l];
	l=l-1;
}
return reversestring;
}

exports.ReverseArrayOfStrings = function(arrayOfStrings)
{
	var index=0;
	var str;
	var l=arrayOfStrings.length-1;
	while(index<=l)
	{
		str=arrayOfStrings[index];
		arrayOfStrings[index]=""
		for(item=str.length-1;item>=0;item--)
		{
			arrayOfStrings[index]=arrayOfStrings[index]+str[item];
		}
		index=index+1;
	}
	return arrayOfStrings;
}