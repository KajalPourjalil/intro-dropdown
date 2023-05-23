const dropdownTrigger = document.getElementById('dp1');
const dropdownMenu = document.getElementById('dpm1');

dropdownTrigger.addEventListener('mouseover', () => {
    dropdownMenu.style.display = 'block'
});

dropdownTrigger.addEventListener('mouseleave', () => {
    dropdownMenu.style.display ='none';
});

const dpt = document.getElementById('dp2');
const ddm = document.getElementById('dpm2');

dpt.addEventListener('mouseover', () => {
    dpt.style.display = 'block';
});

ddm.addEventListener('mouseleave', () => {
    ddm.style.display = 'none';
});