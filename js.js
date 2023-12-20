let counter=document.getElementById('count')
let savve=document.getElementById('save')

let p_count = 0 
let s_count = ""

function increment()
{ 
    p_count++
    counter.innerText = p_count
}
function decrement()
{
    if(p_count<=0)
    {
    p_count = 0
    counter.innerText = p_count
    }
    else{
    p_count--
    counter.innerText = p_count
    }
}
function reset()
{
    p_count = 0
    counter.innerText = 0
}
function save()
{
    
    s_count+=p_count+ ","
    savve.innerText = s_count
}





