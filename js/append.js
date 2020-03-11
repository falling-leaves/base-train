// this will control the appending of the sel-pane buttons based on a json course file.
// ^^ for now use a variable in a separate JS file

// parse the json
// the object is in 'courses'
const sel_pane = document.querySelector('#sel-pane');

for(let i = 0; i < courses.length; i++) {
    let sp = document.createElement('button');
    sp.id = 'btn-' + i.toString();
    sp.className = 'btn';
    sp.textContent = courses[i].title;
    sp.title = courses[i].flav;

    sel_pane.appendChild(sp);
}
