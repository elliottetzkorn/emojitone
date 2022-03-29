import { SkinToneEmojis, SkinTones } from './types'
import { waving_hand } from './emojis/waving_hand'
import { thumbs_up } from './emojis/thumps_up'

export const emojiTone = (emoji: SkinToneEmojis, tone: SkinTones) => {
  console.log('one')
  switch (emoji) {
    case '👋':
      return waving_hand(tone)
    default:
      return thumbs_up(tone)
  }
}
