var elements = document.getElementsByTagName('*');
var replacements = [
    {original:'COVID-19', replace:'Zombie'},
    {original:'COVID 19', replace:'Zombie'},
    {original:'Covid-19', replace:'Zombie'},
    {original:'Covid 19', replace:'Zombie'},
    {original:'covid-19', replace:'zombie'},
    {original:'covid 19', replace:'zombie'},
    
    {original:'SARS-CoV-2', replace:'Zombie'},
    {original:'SARS-COV-2', replace:'Zombie'},
    {original:'sars-cov-2', replace:'Zombie'},
    {original:'Sars-Cov-2', replace:'Zombie'},
    
    {original:'COVID', replace:'ZOMBIE'},
    {original:'Covid', replace:'Zombie'},
    {original:'covid', replace:'zombie'},
    
    {original:'THE CORONA VIRUS', replace:'ZOMBIES'},
    {original:'THE CORONAVIRUS',  replace:'ZOMBIES'},
    {original:'The Corona Virus', replace:'Zombies'},
    {original:'The Corona virus', replace:'Zombies'},
    {original:'The corona virus', replace:'Zombies'},
    {original:'the Corona Virus', replace:'zombies'},
    {original:'the Corona virus', replace:'zombies'},
    {original:'the corona virus', replace:'zombies'},
    {original:'The Coronavirus',  replace:'Zombies'},
    {original:'the corona virus', replace:'zombies'},
    {original:'the coronavirus',  replace:'zombies'},
    {original:'the Coronavirus',  replace:'zombies'},
    
    {original:'CORONA VIRUS', replace:'ZOMBIE'},
    {original:'CORONAVIRUS',  replace:'ZOMBIE'},
    {original:'Corona Virus', replace:'Zombie'},
    {original:'Coronavirus',  replace:'Zombie'},
    {original:'corona virus', replace:'zombie'},
    {original:'coronavirus',  replace:'zombie'},
    
    {original:'CORONA',       replace:'ZOMBIE'},
    {original:'Corona',       replace:'Zombie'},
    {original:'corona',       replace:'zombie'},
    
    {original:'THE VIRUS',    replace:'ZOMBIES'},
    {original:'The Virus',    replace:'Zombies'},
    {original:'The virus',    replace:'Zombies'},
    {original:'the Virus',    replace:'Zombies'},
    {original:'the virus',    replace:'zombies'},
    
    {original:'VIRUS',        replace:'ZOMBIE'},
    {original:'Virus',        replace:'Zombie'},
    {original:'virus',        replace:'zombie'}
    ]

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        
        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text;
            for (var k = 0; k < replacements.length; k++) {
                replacedText = replacedText.replace(replacements[k].original, replacements[k].replace);
            }
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}