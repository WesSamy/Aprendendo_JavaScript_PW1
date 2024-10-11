const menuOptions = [
    { name: 'Google', url: 'https://www.google.com'},
    { name: 'YouTube', url: 'https://www.youtube.com' },
    { name: 'Facebook', url: 'https://www.facebook.com' },
    { name: 'Twitter', url: 'https://www.twitter.com' } 
];

const menuList = document.getElementById('menuList');

menuOptions.forEach(option => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    
button.textContent = option.name;
button.onclick = () => window.location.href = option.url;

li.appendChild(button);
menuList.appendChild(li);
});