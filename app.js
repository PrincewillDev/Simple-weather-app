let selectEl = document.getElementById('select');
const noticeEl = document.getElementById('notice-text');

selectEl.addEventListener('change' , function() {
    const choice = selectEl.value

    switch (choice) {
        case 'select':
            noticeEl.textContent = '" Select a weather "  '
            break;
        case 'rainy':
            noticeEl.textContent = ' " Its going to rain heavily from 8AM " '
            break;
        case 'sunny' : 
        noticeEl.textContent = ' " Today will get up to 90\u00B0 " '
            break;   
        case 'wind': 
        noticeEl.textContent = ' " The wind will be high today " '
        break;

        case 'winter': 
        noticeEl.textContent = ' " Today will rain ice " '
        break;

        default:
            ''
            
    }
});