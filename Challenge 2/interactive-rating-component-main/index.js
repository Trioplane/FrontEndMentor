const qS = (args) => {
    return document.querySelector(args)
}

const isSelected = (arg) => {
    if (arg.classList.contains('active')) {
        return true
    }
}

const rating_section = qS('#rating-state')
const rating_numbers = [qS('#rating-1'), qS('#rating-2'), qS('#rating-3'), qS('#rating-4'), qS('#rating-5')]
const rating_submit = qS('#rating-submit')

const thanks_section = qS('#thanks-state')
const thanks_rating = qS('#thanks-rating')

let selected
let rating

rating_numbers.forEach(item => {
    item.addEventListener('click', () => {
        if (!isSelected(item)) {
            rating = rating_numbers.indexOf(item) + 1
            selected ? selected.classList.remove('active') : selected
            item.classList.add('active')
            selected = item
            selected ? selected = item : selected
            console.log('test')
        }
    })
})

rating_submit.addEventListener('click', () => {
    if (selected) {
        rating_section.classList.add('hide')
        thanks_section.classList.remove('hide')
        thanks_rating.textContent = `You selected ${rating} out of 5`
    } else {
        rating_submit.textContent = 'Please select a rating.'
        setTimeout(() => {
            rating_submit.textContent = 'Submit'
        }, 1500)
    }
})