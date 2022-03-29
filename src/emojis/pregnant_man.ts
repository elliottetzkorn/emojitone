import { SkinTones } from '../types'

export function pregnant_man(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🫃🏿'
        case 'medium-dark':
            return'🫃🏾'
        case 'medium':
            return'🫃🏽'
        case 'medium-light':
            return'🫃🏼'
        case 'light':
            return'🫃🏻'
        default:
            return'🫃'
    }
}