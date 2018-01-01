const ipt = document.getElementById('ipt');
const btn = document.getElementById('btn');
const def = document.getElementById('def');
function setup(){

  
  let url1 = "http://api.wordnik.com/v4/word.json/";
  let  word = ipt.value;
  let url2 = "/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

  if(word) loadJSON(url1+word+url2, go);
}

function go(data){
  print(data[0].text)
  def.innerText=data[0].text;
}

btn.addEventListener('click', setup);