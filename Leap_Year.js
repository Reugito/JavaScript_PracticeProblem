var year = 1900;
if((year % 400 ==0) && (year % 4 == 0) || (year%100!=0)) 
{
    console.log(year,"Is a Leap Year");
}
else 
{
    console.log(year," is a  Not Leap");
}