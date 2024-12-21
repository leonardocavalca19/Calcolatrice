document.getElementById("AC").addEventListener("click", AC)
document.getElementById("res").addEventListener("click", res)
document.getElementById("eliminaUno").addEventListener("click", eliminaUno)
document.getElementById("sqrt").addEventListener("click", sqrt)
document.getElementById("pow").addEventListener("click", pow)

document.querySelectorAll(".addvalue").forEach(button => {
    button.addEventListener("click", addvalue);
});

function AC()
{
    document.getElementById("number").value = "";
}
function res()
{
    let stringa = document.getElementById("number").value;
    try
    {
        document.getElementById("number").value = eval(stringa);
    }
    catch
    {
        document.getElementById("number").value = "Errore";
    }
}
function addvalue(event)
{
    valore = event.target.innerText;
    document.getElementById("number").value += valore;
    console.log(document.getElementById("number").value);
}
function eliminaUno()
{
    document.getElementById("number").value = document.getElementById("number").value.slice(0, -1);
}
function sqrt()
{
    try
    {
        document.getElementById("number").value = Math.sqrt(eval(document.getElementById("number").value));
    }
    catch
    {
        document.getElementById("number").value = "Errore";
    }
}
function pow()
{    try
    {
        document.getElementById("number").value = Math.pow(eval(document.getElementById("number").value), 2);
    }
    catch
    {
        document.getElementById("number").value = "Errore";
    }
}