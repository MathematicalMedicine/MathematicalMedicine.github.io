/* just some really simple history/bookmarkability management */
function properPage() {
    let tab = document.getElementById(location.hash.replace('#', ''));
    tab = tab ? tab : document.getElementById('home');
    tab.checked = true;
}
window.addEventListener('click', event => {
    if (event.target.name == "tabs") {
        window.location.hash = event.target.id;
    }}
);
window.addEventListener('hashchange', properPage);
window.onload = properPage;
