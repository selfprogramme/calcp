function display(value)
{
document.getElementById('textarea').value+=value
} 
function calc()
{
var value=document.getElementById('textarea').value
var answer=eval(value)
document.getElementById('textarea').value=answer
}
function clr()
{
document.getElementById('textarea').value=''
}