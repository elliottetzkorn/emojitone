import { SkinToneEmojis, SkinTones } from './types'

export const emojiTone = (emoji: SkinToneEmojis, tone: SkinTones) => {
    switch (emoji) {
        case '👋':
            return waving_hand(tone)
        case '🤚':
            return raised_back_of_hand(tone)
        case '🖐️':
            return hand_with_fingers_splayed(tone)
        case '✋':
            return raised_hand(tone)
        case '🖖':
            return vulcansalute(tone)
        case '🫱':
            return rightwards_hand(tone)
        case '🫲':
            return leftwards_hand(tone)
        case '🫳':
            return palm_downhand(tone)
        case '🫴':
            return palm_up_hand(tone)
        case '👌':
            return ok_hand(tone)
        case '🤌':
            return pinched_fingers(tone)
        case '🤏':
            return pinching_hand(tone)
        case '✌️':
            return victory_hand(tone)
        case '🤞':
            return crossed_fingers(tone)
        case '🫰':
            return hand_with_index_finger_and_thumb_crossed(tone)
        case '🤟':
            return loveyou_gesture(tone)
        case '🤘':
            return signof_the_horns(tone)
        case '🤙':
            return call_me_hand(tone)
        case '👈':
            return backhand_index_pointing_left(tone)
        case '👉':
            return backhand_index_pointing_right(tone)
        case '👆':
            return backhand_index_pointing_up(tone)
        case '🖕':
            return middle_finger(tone)
        case '👇':
            return backhand_index_pointing_down(tone)
        case '☝️':
            return index_pointing_up(tone)
        case '🫵':
            return index_pointing_at_the_viewer(tone)
        case '👍':
            return thumbs_up(tone)
        case '👎':
            return thumbs_down(tone)
        case '✊':
            return raised_fist(tone)
        case '👊':
            return oncoming_fist(tone)
        case '🤛':
            return leftfacing_fist(tone)
        case '🤜':
            return rightfacing_fist(tone)
        case '👏':
            return clapping_hands(tone)
        case '🙌':
            return raising_hands(tone)
        case '🫶':
            return heart_hands(tone)
        case '👐':
            return openhands(tone)
        case '🤲':
            return palms_up_together(tone)
        case '🤝':
            return handshake(tone)
        case '🙏':
            return folded_hands(tone)
        case '✍️':
            return writing_hand(tone)
        case '💅':
            return nail_polish(tone)
        case '🤳':
            return selfie(tone)
        case '💪':
            return flexed_biceps(tone)
        case '🦵':
            return leg(tone)
        case '🦶':
            return foot(tone)
        case '👂':
            return ear(tone)
        case '🦻':
            return ear_with_hearing_aid(tone)
        case '👃':
            return nose(tone)
        case '👶':
            return baby(tone)
        case '🧒':
            return child(tone)
        case '👦':
            return boy(tone)
        case '👧':
            return girl(tone)
        case '🧑':
            return person(tone)
        case '👨':
            return man(tone)
        case '👩':
            return woman(tone)
        case '🧓':
            return older_person(tone)
        case '👴':
            return old_man(tone)
        case '👵':
            return old_woman(tone)
        case '🙍':
            return personfrowning(tone)
        case '🙍‍♂️':
            return manfrowning(tone)
        case '🙍‍♀️':
            return womanfrowning(tone)
        case '🙎':
            return personpouting(tone)
        case '🙎‍♂️':
            return manpouting(tone)
        case '🙎‍♀️':
            return womanpouting(tone)
        case '🙅':
            return persongesturing_no(tone)
        case '🙅‍♂️':
            return mangesturing_no(tone)
        case '🙅‍♀️':
            return womangesturing_no(tone)
        case '🙆':
            return persongesturing_ok(tone)
        case '🙆‍♂️':
            return mangesturing_ok(tone)
        case '🙆‍♀️':
            return womangesturing_ok(tone)
        case '💁':
            return persontipping_hand(tone)
        case '💁‍♂️':
            return mantipping_hand(tone)
        case '💁‍♀️':
            return womantipping_hand(tone)
        case '🙋':
            return personraising_hand(tone)
        case '🙋‍♂️':
            return manraising_hand(tone)
        case '🙋‍♀️':
            return womanraising_hand(tone)
        case '🧏':
            return deaf_person(tone)
        case '🧏‍♂️':
            return deaf_man(tone)
        case '🧏‍♀️':
            return deaf_woman(tone)
        case '🙇':
            return personbowing(tone)
        case '🙇‍♂️':
            return manbowing(tone)
        case '🙇‍♀️':
            return womanbowing(tone)
        case '🤦':
            return personfacepalming(tone)
        case '🤦‍♂️':
            return manfacepalming(tone)
        case '🤦‍♀️':
            return womanfacepalming(tone)
        case '🤷':
            return personshrugging(tone)
        case '🤷‍♂️':
            return manshrugging(tone)
        case '🤷‍♀️':
            return womanshrugging(tone)
        case '🧑‍⚕️':
            return health_worker(tone)
        case '👨‍⚕️':
            return manhealth_worker(tone)
        case '👩‍⚕️':
            return womanhealth_worker(tone)
        case '🧑‍🎓':
            return student(tone)
        case '👨‍🎓':
            return manstudent(tone)
        case '👩‍🎓':
            return womanstudent(tone)
        case '🧑‍🏫':
            return teacher(tone)
        case '👨‍🏫':
            return manteacher(tone)
        case '👩‍🏫':
            return womanteacher(tone)
        case '🧑‍⚖️':
            return judge(tone)
        case '👨‍⚖️':
            return manjudge(tone)
        case '👩‍⚖️':
            return womanjudge(tone)
        case '🧑‍🌾':
            return farmer(tone)
        case '👨‍🌾':
            return manfarmer(tone)
        case '👩‍🌾':
            return womanfarmer(tone)
        case '🧑‍🍳':
            return cook(tone)
        case '👨‍🍳':
            return mancook(tone)
        case '👩‍🍳':
            return womancook(tone)
        case '🧑‍🔧':
            return mechanic(tone)
        case '👨‍🔧':
            return manmechanic(tone)
        case '👩‍🔧':
            return womanmechanic(tone)
        case '🧑‍🏭':
            return factory_worker(tone)
        case '👨‍🏭':
            return manfactory_worker(tone)
        case '👩‍🏭':
            return womanfactory_worker(tone)
        case '🧑‍💼':
            return office_worker(tone)
        case '👨‍💼':
            return manoffice_worker(tone)
        case '👩‍💼':
            return womanoffice_worker(tone)
        case '🧑‍🔬':
            return scientist(tone)
        case '👨‍🔬':
            return manscientist(tone)
        case '👩‍🔬':
            return womanscientist(tone)
        case '🧑‍💻':
            return technologist(tone)
        case '👨‍💻':
            return mantechnologist(tone)
        case '👩‍💻':
            return womantechnologist(tone)
        case '🧑‍🎤':
            return singer(tone)
        case '👨‍🎤':
            return mansinger(tone)
        case '👩‍🎤':
            return womansinger(tone)
        case '🧑‍🎨':
            return artist(tone)
        case '👨‍🎨':
            return manartist(tone)
        case '👩‍🎨':
            return womanartist(tone)
        case '🧑‍✈️':
            return pilot(tone)
        case '👨‍✈️':
            return manpilot(tone)
        case '👩‍✈️':
            return womanpilot(tone)
        case '🧑‍🚀':
            return astronaut(tone)
        case '👨‍🚀':
            return manastronaut(tone)
        case '👩‍🚀':
            return womanastronaut(tone)
        case '🧑‍🚒':
            return firefighter(tone)
        case '👨‍🚒':
            return manfirefighter(tone)
        case '👩‍🚒':
            return womanfirefighter(tone)
        case '👮':
            return police_officer(tone)
        case '👮‍♂️':
            return manpolice_officer(tone)
        case '👮‍♀️':
            return womanpolice_officer(tone)
        case '🕵️':
            return detective(tone)
        case '🕵️‍♂️':
            return mandetective(tone)
        case '🕵️‍♀️':
            return womandetective(tone)
        case '💂':
            return guard(tone)
        case '💂‍♂️':
            return manguard(tone)
        case '💂‍♀️':
            return womanguard(tone)
        case '🥷':
            return ninja(tone)
        case '👷':
            return constructionworker(tone)
        case '👷‍♂️':
            return manconstructionworker(tone)
        case '👷‍♀️':
            return womanconstructionworker(tone)
        case '🫅':
            return personwith_crown(tone)
        case '🤴':
            return prince(tone)
        case '👸':
            return princess(tone)
        case '👳':
            return personwearing_turban(tone)
        case '👳‍♂️':
            return manwearing_turban(tone)
        case '👳‍♀️':
            return womanwearing_turban(tone)
        case '👲':
            return personwith_skullcap(tone)
        case '🧕':
            return womanwith_headscarf(tone)
        case '🤵':
            return personintuxedo(tone)
        case '🤵‍♂️':
            return manintuxedo(tone)
        case '🤵‍♀️':
            return womanintuxedo(tone)
        case '👰':
            return personwith_veil(tone)
        case '👰‍♂️':
            return manwith_veil(tone)
        case '👰‍♀️':
            return womanwith_veil(tone)
        case '🤰':
            return pregnant_woman(tone)
        case '🫃':
            return pregnant_man(tone)
        case '🫄':
            return pregnant_person(tone)
        case '🤱':
            return breastfeeding(tone)
        case '👩‍🍼':
            return womanfeeding_baby(tone)
        case '👨‍🍼':
            return manfeeding_baby(tone)
        case '🧑‍🍼':
            return personfeeding_baby(tone)
        case '👼':
            return baby_angel(tone)
        case '🎅':
            return santa_claus(tone)
        case '🤶':
            return mrs_claus(tone)
        case '🧑‍🎄':
            return mx_claus(tone)
        case '🦸':
            return superhero(tone)
        case '🦸‍♂️':
            return mansuperhero(tone)
        case '🦸‍♀️':
            return womansuperhero(tone)
        case '🦹':
            return supervillain(tone)
        case '🦹‍♂️':
            return mansupervillain(tone)
        case '🦹‍♀️':
            return womansupervillain(tone)
        case '🧙':
            return mage(tone)
        case '🧙‍♂️':
            return manmage(tone)
        case '🧙‍♀️':
            return womanmage(tone)
        case '🧚':
            return fairy(tone)
        case '🧚‍♂️':
            return manfairy(tone)
        case '🧚‍♀️':
            return womanfairy(tone)
        case '🧛':
            return vampire(tone)
        case '🧛‍♂️':
            return manvampire(tone)
        case '🧛‍♀️':
            return womanvampire(tone)
        case '🧜':
            return merperson(tone)
        case '🧜‍♂️':
            return merman(tone)
        case '🧜‍♀️':
            return mermaid(tone)
        case '🧝':
            return elf(tone)
        case '🧝‍♂️':
            return manelf(tone)
        case '🧝‍♀️':
            return womanelf(tone)
        case '💆':
            return persongetting_massage(tone)
        case '💆‍♂️':
            return mangetting_massage(tone)
        case '💆‍♀️':
            return womangetting_massage(tone)
        case '💇':
            return persongetting_haircut(tone)
        case '💇‍♂️':
            return mangetting_haircut(tone)
        case '💇‍♀️':
            return womangetting_haircut(tone)
        case '🚶':
            return personwalking(tone)
        case '🚶‍♂️':
            return manwalking(tone)
        case '🚶‍♀️':
            return womanwalking(tone)
        case '🧍':
            return personstanding(tone)
        case '🧍‍♂️':
            return manstanding(tone)
        case '🧍‍♀️':
            return womanstanding(tone)
        case '🧎':
            return personkneeling(tone)
        case '🧎‍♂️':
            return mankneeling(tone)
        case '🧎‍♀️':
            return womankneeling(tone)
        case '🧑‍🦯':
            return personwith_white_cane(tone)
        case '👨‍🦯':
            return manwith_white_cane(tone)
        case '👩‍🦯':
            return womanwith_white_cane(tone)
        case '🧑‍🦼':
            return personinmotorized_wheelchair(tone)
        case '👨‍🦼':
            return maninmotorized_wheelchair(tone)
        case '👩‍🦼':
            return womaninmotorized_wheelchair(tone)
        case '🧑‍🦽':
            return personinmanual_wheelchair(tone)
        case '👨‍🦽':
            return maninmanual_wheelchair(tone)
        case '👩‍🦽':
            return womaninmanual_wheelchair(tone)
        case '🏃':
            return personrunning(tone)
        case '🏃‍♂️':
            return manrunning(tone)
        case '🏃‍♀️':
            return womanrunning(tone)
        case '💃':
            return womandancing(tone)
        case '🕺':
            return mandancing(tone)
        case '🕴️':
            return personinsuit_levitating(tone)
        case '🧖':
            return personinsteamy_room(tone)
        case '🧖‍♂️':
            return maninsteamy_room(tone)
        case '🧖‍♀️':
            return womaninsteamy_room(tone)
        case '🧗':
            return personclimbing(tone)
        case '🧗‍♂️':
            return manclimbing(tone)
        case '🧗‍♀️':
            return womanclimbing(tone)
        case '🏇':
            return horse_racing(tone)
        case '🏂':
            return snowboarder(tone)
        case '🏌️':
            return persongolfing(tone)
        case '🏌️‍♂️':
            return mangolfing(tone)
        case '🏌️‍♀️':
            return womangolfing(tone)
        case '🏄':
            return personsurfing(tone)
        case '🏄‍♂️':
            return mansurfing(tone)
        case '🏄‍♀️':
            return womansurfing(tone)
        case '🚣':
            return personrowing_boat(tone)
        case '🚣‍♂️':
            return manrowing_boat(tone)
        case '🚣‍♀️':
            return womanrowing_boat(tone)
        case '🏊':
            return personswimming(tone)
        case '🏊‍♂️':
            return manswimming(tone)
        case '🏊‍♀️':
            return womanswimming(tone)
        case '⛹️':
            return personbouncing_ball(tone)
        case '⛹️‍♂️':
            return manbouncing_ball(tone)
        case '⛹️‍♀️':
            return womanbouncing_ball(tone)
        case '🏋️':
            return personlifting_weights(tone)
        case '🏋️‍♂️':
            return manlifting_weights(tone)
        case '🏋️‍♀️':
            return womanlifting_weights(tone)
        case '🚴':
            return personbiking(tone)
        case '🚴‍♂️':
            return manbiking(tone)
        case '🚴‍♀️':
            return womanbiking(tone)
        case '🚵':
            return personmountainbiking(tone)
        case '🚵‍♂️':
            return manmountainbiking(tone)
        case '🚵‍♀️':
            return womanmountainbiking(tone)
        case '🤸':
            return personcartwheeling(tone)
        case '🤸‍♂️':
            return mancartwheeling(tone)
        case '🤸‍♀️':
            return womancartwheeling(tone)
        case '🤽':
            return personplaying_water_polo(tone)
        case '🤽‍♂️':
            return manplaying_water_polo(tone)
        case '🤽‍♀️':
            return womanplaying_water_polo(tone)
        case '🤾':
            return personplaying_handball(tone)
        case '🤾‍♂️':
            return manplaying_handball(tone)
        case '🤾‍♀️':
            return womanplaying_handball(tone)
        case '🤹':
            return personjuggling(tone)
        case '🤹‍♂️':
            return manjuggling(tone)
        case '🤹‍♀️':
            return womanjuggling(tone)
        case '🧘':
            return personinlotus_position(tone)
        case '🧘‍♂️':
            return maninlotus_position(tone)
        case '🧘‍♀️':
            return womaninlotus_position(tone)
        case '🛀':
            return persontaking_bath(tone)
        case '🛌':
            return personinbed(tone)
        case '🧑‍🤝‍🧑':
            return people_holding_hands(tone)
        case '👭':
            return womenholding_hands(tone)
        case '👫':
            return womanand_manholding_hands(tone)
        case '👬':
            return menholding_hands(tone)
        case '💏':
            return kiss(tone)
        case '👩‍❤️‍💋‍👨':
            return kiss_womanman(tone)
        case '👨‍❤️‍💋‍👨':
            return kiss_manman(tone)
        case '👩‍❤️‍💋‍👩':
            return kiss_womanwoman(tone)
        case '💑':
            return couple_with_heart(tone)
        case '👩‍❤️‍👨':
            return couple_with_heart_womanman(tone)
        case '👨‍❤️‍👨':
            return couple_with_heart_manman(tone)
        case '👩‍❤️‍👩':
            return couple_with_heart_womanwoman(tone)
        default:
            return emoji
    }
}

function waving_hand(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👋🏿'
        case 'medium-dark':
            return'👋🏾'
        case 'medium':
            return'👋🏽'
        case 'medium-light':
            return'👋🏼'
        case 'light':
            return'👋🏻'
        default:
            return'👋'
    }
}

function raised_back_of_hand(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤚🏿'
        case 'medium-dark':
            return'🤚🏾'
        case 'medium':
            return'🤚🏽'
        case 'medium-light':
            return'🤚🏼'
        case 'light':
            return'🤚🏻'
        default:
            return'🤚'
    }
}

function hand_with_fingers_splayed(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🖐🏿'
        case 'medium-dark':
            return'🖐🏾'
        case 'medium':
            return'🖐🏽'
        case 'medium-light':
            return'🖐🏼'
        case 'light':
            return'🖐🏻'
        default:
            return'🖐️'
    }
}

function raised_hand(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'✋🏿'
        case 'medium-dark':
            return'✋🏾'
        case 'medium':
            return'✋🏽'
        case 'medium-light':
            return'✋🏼'
        case 'light':
            return'✋🏻'
        default:
            return'✋'
    }
}

function vulcansalute(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🖖🏿'
        case 'medium-dark':
            return'🖖🏾'
        case 'medium':
            return'🖖🏽'
        case 'medium-light':
            return'🖖🏼'
        case 'light':
            return'🖖🏻'
        default:
            return'🖖'
    }
}

function rightwards_hand(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🫱🏿'
        case 'medium-dark':
            return'🫱🏾'
        case 'medium':
            return'🫱🏽'
        case 'medium-light':
            return'🫱🏼'
        case 'light':
            return'🫱🏻'
        default:
            return'🫱'
    }
}

function leftwards_hand(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🫲🏿'
        case 'medium-dark':
            return'🫲🏾'
        case 'medium':
            return'🫲🏽'
        case 'medium-light':
            return'🫲🏼'
        case 'light':
            return'🫲🏻'
        default:
            return'🫲'
    }
}

function palm_downhand(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🫳🏿'
        case 'medium-dark':
            return'🫳🏾'
        case 'medium':
            return'🫳🏽'
        case 'medium-light':
            return'🫳🏼'
        case 'light':
            return'🫳🏻'
        default:
            return'🫳'
    }
}

function palm_up_hand(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🫴🏿'
        case 'medium-dark':
            return'🫴🏾'
        case 'medium':
            return'🫴🏽'
        case 'medium-light':
            return'🫴🏼'
        case 'light':
            return'🫴🏻'
        default:
            return'🫴'
    }
}

function ok_hand(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👌🏿'
        case 'medium-dark':
            return'👌🏾'
        case 'medium':
            return'👌🏽'
        case 'medium-light':
            return'👌🏼'
        case 'light':
            return'👌🏻'
        default:
            return'👌'
    }
}

function pinched_fingers(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤌🏿'
        case 'medium-dark':
            return'🤌🏾'
        case 'medium':
            return'🤌🏽'
        case 'medium-light':
            return'🤌🏼'
        case 'light':
            return'🤌🏻'
        default:
            return'🤌'
    }
}

function pinching_hand(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤏🏿'
        case 'medium-dark':
            return'🤏🏾'
        case 'medium':
            return'🤏🏽'
        case 'medium-light':
            return'🤏🏼'
        case 'light':
            return'🤏🏻'
        default:
            return'🤏'
    }
}

function victory_hand(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'✌🏿'
        case 'medium-dark':
            return'✌🏾'
        case 'medium':
            return'✌🏽'
        case 'medium-light':
            return'✌🏼'
        case 'light':
            return'✌🏻'
        default:
            return'✌️'
    }
}

function crossed_fingers(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤞🏿'
        case 'medium-dark':
            return'🤞🏾'
        case 'medium':
            return'🤞🏽'
        case 'medium-light':
            return'🤞🏼'
        case 'light':
            return'🤞🏻'
        default:
            return'🤞'
    }
}

function hand_with_index_finger_and_thumb_crossed(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🫰🏿'
        case 'medium-dark':
            return'🫰🏾'
        case 'medium':
            return'🫰🏽'
        case 'medium-light':
            return'🫰🏼'
        case 'light':
            return'🫰🏻'
        default:
            return'🫰'
    }
}

function loveyou_gesture(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤟🏿'
        case 'medium-dark':
            return'🤟🏾'
        case 'medium':
            return'🤟🏽'
        case 'medium-light':
            return'🤟🏼'
        case 'light':
            return'🤟🏻'
        default:
            return'🤟'
    }
}

function signof_the_horns(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤘🏿'
        case 'medium-dark':
            return'🤘🏾'
        case 'medium':
            return'🤘🏽'
        case 'medium-light':
            return'🤘🏼'
        case 'light':
            return'🤘🏻'
        default:
            return'🤘'
    }
}

function call_me_hand(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤙🏿'
        case 'medium-dark':
            return'🤙🏾'
        case 'medium':
            return'🤙🏽'
        case 'medium-light':
            return'🤙🏼'
        case 'light':
            return'🤙🏻'
        default:
            return'🤙'
    }
}

function backhand_index_pointing_left(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👈🏿'
        case 'medium-dark':
            return'👈🏾'
        case 'medium':
            return'👈🏽'
        case 'medium-light':
            return'👈🏼'
        case 'light':
            return'👈🏻'
        default:
            return'👈'
    }
}

function backhand_index_pointing_right(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👉🏿'
        case 'medium-dark':
            return'👉🏾'
        case 'medium':
            return'👉🏽'
        case 'medium-light':
            return'👉🏼'
        case 'light':
            return'👉🏻'
        default:
            return'👉'
    }
}

function backhand_index_pointing_up(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👆🏿'
        case 'medium-dark':
            return'👆🏾'
        case 'medium':
            return'👆🏽'
        case 'medium-light':
            return'👆🏼'
        case 'light':
            return'👆🏻'
        default:
            return'👆'
    }
}

function middle_finger(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🖕🏿'
        case 'medium-dark':
            return'🖕🏾'
        case 'medium':
            return'🖕🏽'
        case 'medium-light':
            return'🖕🏼'
        case 'light':
            return'🖕🏻'
        default:
            return'🖕'
    }
}

function backhand_index_pointing_down(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👇🏿'
        case 'medium-dark':
            return'👇🏾'
        case 'medium':
            return'👇🏽'
        case 'medium-light':
            return'👇🏼'
        case 'light':
            return'👇🏻'
        default:
            return'👇'
    }
}

function index_pointing_up(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'☝🏿'
        case 'medium-dark':
            return'☝🏾'
        case 'medium':
            return'☝🏽'
        case 'medium-light':
            return'☝🏼'
        case 'light':
            return'☝🏻'
        default:
            return'☝️'
    }
}

function index_pointing_at_the_viewer(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🫵🏿'
        case 'medium-dark':
            return'🫵🏾'
        case 'medium':
            return'🫵🏽'
        case 'medium-light':
            return'🫵🏼'
        case 'light':
            return'🫵🏻'
        default:
            return'🫵'
    }
}

function thumbs_up(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👍🏿'
        case 'medium-dark':
            return'👍🏾'
        case 'medium':
            return'👍🏽'
        case 'medium-light':
            return'👍🏼'
        case 'light':
            return'👍🏻'
        default:
            return'👍'
    }
}

function thumbs_down(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👎🏿'
        case 'medium-dark':
            return'👎🏾'
        case 'medium':
            return'👎🏽'
        case 'medium-light':
            return'👎🏼'
        case 'light':
            return'👎🏻'
        default:
            return'👎'
    }
}

function raised_fist(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'✊🏿'
        case 'medium-dark':
            return'✊🏾'
        case 'medium':
            return'✊🏽'
        case 'medium-light':
            return'✊🏼'
        case 'light':
            return'✊🏻'
        default:
            return'✊'
    }
}

function oncoming_fist(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👊🏿'
        case 'medium-dark':
            return'👊🏾'
        case 'medium':
            return'👊🏽'
        case 'medium-light':
            return'👊🏼'
        case 'light':
            return'👊🏻'
        default:
            return'👊'
    }
}

function leftfacing_fist(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤛🏿'
        case 'medium-dark':
            return'🤛🏾'
        case 'medium':
            return'🤛🏽'
        case 'medium-light':
            return'🤛🏼'
        case 'light':
            return'🤛🏻'
        default:
            return'🤛'
    }
}

function rightfacing_fist(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤜🏿'
        case 'medium-dark':
            return'🤜🏾'
        case 'medium':
            return'🤜🏽'
        case 'medium-light':
            return'🤜🏼'
        case 'light':
            return'🤜🏻'
        default:
            return'🤜'
    }
}

function clapping_hands(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👏🏿'
        case 'medium-dark':
            return'👏🏾'
        case 'medium':
            return'👏🏽'
        case 'medium-light':
            return'👏🏼'
        case 'light':
            return'👏🏻'
        default:
            return'👏'
    }
}

function raising_hands(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🙌🏿'
        case 'medium-dark':
            return'🙌🏾'
        case 'medium':
            return'🙌🏽'
        case 'medium-light':
            return'🙌🏼'
        case 'light':
            return'🙌🏻'
        default:
            return'🙌'
    }
}

function heart_hands(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🫶🏿'
        case 'medium-dark':
            return'🫶🏾'
        case 'medium':
            return'🫶🏽'
        case 'medium-light':
            return'🫶🏼'
        case 'light':
            return'🫶🏻'
        default:
            return'🫶'
    }
}

function openhands(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👐🏿'
        case 'medium-dark':
            return'👐🏾'
        case 'medium':
            return'👐🏽'
        case 'medium-light':
            return'👐🏼'
        case 'light':
            return'👐🏻'
        default:
            return'👐'
    }
}

function palms_up_together(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤲🏿'
        case 'medium-dark':
            return'🤲🏾'
        case 'medium':
            return'🤲🏽'
        case 'medium-light':
            return'🤲🏼'
        case 'light':
            return'🤲🏻'
        default:
            return'🤲'
    }
}

function handshake(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤝🏿'
        case 'medium-dark':
            return'🤝🏾'
        case 'medium':
            return'🤝🏽'
        case 'medium-light':
            return'🤝🏼'
        case 'light':
            return'🤝🏻'
        default:
            return'🤝'
    }
}

function folded_hands(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🙏🏿'
        case 'medium-dark':
            return'🙏🏾'
        case 'medium':
            return'🙏🏽'
        case 'medium-light':
            return'🙏🏼'
        case 'light':
            return'🙏🏻'
        default:
            return'🙏'
    }
}

function writing_hand(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'✍🏿'
        case 'medium-dark':
            return'✍🏾'
        case 'medium':
            return'✍🏽'
        case 'medium-light':
            return'✍🏼'
        case 'light':
            return'✍🏻'
        default:
            return'✍️'
    }
}

function nail_polish(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'💅🏿'
        case 'medium-dark':
            return'💅🏾'
        case 'medium':
            return'💅🏽'
        case 'medium-light':
            return'💅🏼'
        case 'light':
            return'💅🏻'
        default:
            return'💅'
    }
}

function selfie(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤳🏿'
        case 'medium-dark':
            return'🤳🏾'
        case 'medium':
            return'🤳🏽'
        case 'medium-light':
            return'🤳🏼'
        case 'light':
            return'🤳🏻'
        default:
            return'🤳'
    }
}

function flexed_biceps(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'💪🏿'
        case 'medium-dark':
            return'💪🏾'
        case 'medium':
            return'💪🏽'
        case 'medium-light':
            return'💪🏼'
        case 'light':
            return'💪🏻'
        default:
            return'💪'
    }
}

function leg(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🦵🏿'
        case 'medium-dark':
            return'🦵🏾'
        case 'medium':
            return'🦵🏽'
        case 'medium-light':
            return'🦵🏼'
        case 'light':
            return'🦵🏻'
        default:
            return'🦵'
    }
}

function foot(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🦶🏿'
        case 'medium-dark':
            return'🦶🏾'
        case 'medium':
            return'🦶🏽'
        case 'medium-light':
            return'🦶🏼'
        case 'light':
            return'🦶🏻'
        default:
            return'🦶'
    }
}

function ear(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👂🏿'
        case 'medium-dark':
            return'👂🏾'
        case 'medium':
            return'👂🏽'
        case 'medium-light':
            return'👂🏼'
        case 'light':
            return'👂🏻'
        default:
            return'👂'
    }
}

function ear_with_hearing_aid(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🦻🏿'
        case 'medium-dark':
            return'🦻🏾'
        case 'medium':
            return'🦻🏽'
        case 'medium-light':
            return'🦻🏼'
        case 'light':
            return'🦻🏻'
        default:
            return'🦻'
    }
}

function nose(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👃🏿'
        case 'medium-dark':
            return'👃🏾'
        case 'medium':
            return'👃🏽'
        case 'medium-light':
            return'👃🏼'
        case 'light':
            return'👃🏻'
        default:
            return'👃'
    }
}

function baby(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👶🏿'
        case 'medium-dark':
            return'👶🏾'
        case 'medium':
            return'👶🏽'
        case 'medium-light':
            return'👶🏼'
        case 'light':
            return'👶🏻'
        default:
            return'👶'
    }
}

function child(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧒🏿'
        case 'medium-dark':
            return'🧒🏾'
        case 'medium':
            return'🧒🏽'
        case 'medium-light':
            return'🧒🏼'
        case 'light':
            return'🧒🏻'
        default:
            return'🧒'
    }
}

function boy(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👦🏿'
        case 'medium-dark':
            return'👦🏾'
        case 'medium':
            return'👦🏽'
        case 'medium-light':
            return'👦🏼'
        case 'light':
            return'👦🏻'
        default:
            return'👦'
    }
}

function girl(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👧🏿'
        case 'medium-dark':
            return'👧🏾'
        case 'medium':
            return'👧🏽'
        case 'medium-light':
            return'👧🏼'
        case 'light':
            return'👧🏻'
        default:
            return'👧'
    }
}

function person(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧑🏿‍🦲'
        case 'medium-dark':
            return'🧑🏾‍🦲'
        case 'medium':
            return'🧑🏽‍🦲'
        case 'medium-light':
            return'🧑🏼‍🦲'
        case 'light':
            return'🧑🏻‍🦲'
        default:
            return'🧑'
    }
}

function man(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👱🏿‍♂️'
        case 'medium-dark':
            return'👱🏾‍♂️'
        case 'medium':
            return'👱🏽‍♂️'
        case 'medium-light':
            return'👱🏼‍♂️'
        case 'light':
            return'👱🏻‍♂️'
        default:
            return'👨'
    }
}

function woman(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👱🏿‍♀️'
        case 'medium-dark':
            return'👱🏾‍♀️'
        case 'medium':
            return'👱🏽‍♀️'
        case 'medium-light':
            return'👱🏼‍♀️'
        case 'light':
            return'👱🏻‍♀️'
        default:
            return'👩'
    }
}

function older_person(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧓🏿'
        case 'medium-dark':
            return'🧓🏾'
        case 'medium':
            return'🧓🏽'
        case 'medium-light':
            return'🧓🏼'
        case 'light':
            return'🧓🏻'
        default:
            return'🧓'
    }
}

function old_man(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👴🏿'
        case 'medium-dark':
            return'👴🏾'
        case 'medium':
            return'👴🏽'
        case 'medium-light':
            return'👴🏼'
        case 'light':
            return'👴🏻'
        default:
            return'👴'
    }
}

function old_woman(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👵🏿'
        case 'medium-dark':
            return'👵🏾'
        case 'medium':
            return'👵🏽'
        case 'medium-light':
            return'👵🏼'
        case 'light':
            return'👵🏻'
        default:
            return'👵'
    }
}

function personfrowning(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🙍🏿'
        case 'medium-dark':
            return'🙍🏾'
        case 'medium':
            return'🙍🏽'
        case 'medium-light':
            return'🙍🏼'
        case 'light':
            return'🙍🏻'
        default:
            return'🙍'
    }
}

function manfrowning(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🙍🏿‍♂️'
        case 'medium-dark':
            return'🙍🏾‍♂️'
        case 'medium':
            return'🙍🏽‍♂️'
        case 'medium-light':
            return'🙍🏼‍♂️'
        case 'light':
            return'🙍🏻‍♂️'
        default:
            return'🙍‍♂️'
    }
}

function womanfrowning(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🙍🏿‍♀️'
        case 'medium-dark':
            return'🙍🏾‍♀️'
        case 'medium':
            return'🙍🏽‍♀️'
        case 'medium-light':
            return'🙍🏼‍♀️'
        case 'light':
            return'🙍🏻‍♀️'
        default:
            return'🙍‍♀️'
    }
}

function personpouting(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🙎🏿'
        case 'medium-dark':
            return'🙎🏾'
        case 'medium':
            return'🙎🏽'
        case 'medium-light':
            return'🙎🏼'
        case 'light':
            return'🙎🏻'
        default:
            return'🙎'
    }
}

function manpouting(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🙎🏿‍♂️'
        case 'medium-dark':
            return'🙎🏾‍♂️'
        case 'medium':
            return'🙎🏽‍♂️'
        case 'medium-light':
            return'🙎🏼‍♂️'
        case 'light':
            return'🙎🏻‍♂️'
        default:
            return'🙎‍♂️'
    }
}

function womanpouting(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🙎🏿‍♀️'
        case 'medium-dark':
            return'🙎🏾‍♀️'
        case 'medium':
            return'🙎🏽‍♀️'
        case 'medium-light':
            return'🙎🏼‍♀️'
        case 'light':
            return'🙎🏻‍♀️'
        default:
            return'🙎‍♀️'
    }
}

function persongesturing_no(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🙅🏿'
        case 'medium-dark':
            return'🙅🏾'
        case 'medium':
            return'🙅🏽'
        case 'medium-light':
            return'🙅🏼'
        case 'light':
            return'🙅🏻'
        default:
            return'🙅'
    }
}

function mangesturing_no(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🙅🏿‍♂️'
        case 'medium-dark':
            return'🙅🏾‍♂️'
        case 'medium':
            return'🙅🏽‍♂️'
        case 'medium-light':
            return'🙅🏼‍♂️'
        case 'light':
            return'🙅🏻‍♂️'
        default:
            return'🙅‍♂️'
    }
}

function womangesturing_no(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🙅🏿‍♀️'
        case 'medium-dark':
            return'🙅🏾‍♀️'
        case 'medium':
            return'🙅🏽‍♀️'
        case 'medium-light':
            return'🙅🏼‍♀️'
        case 'light':
            return'🙅🏻‍♀️'
        default:
            return'🙅‍♀️'
    }
}

function persongesturing_ok(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🙆🏿'
        case 'medium-dark':
            return'🙆🏾'
        case 'medium':
            return'🙆🏽'
        case 'medium-light':
            return'🙆🏼'
        case 'light':
            return'🙆🏻'
        default:
            return'🙆'
    }
}

function mangesturing_ok(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🙆🏿‍♂️'
        case 'medium-dark':
            return'🙆🏾‍♂️'
        case 'medium':
            return'🙆🏽‍♂️'
        case 'medium-light':
            return'🙆🏼‍♂️'
        case 'light':
            return'🙆🏻‍♂️'
        default:
            return'🙆‍♂️'
    }
}

function womangesturing_ok(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🙆🏿‍♀️'
        case 'medium-dark':
            return'🙆🏾‍♀️'
        case 'medium':
            return'🙆🏽‍♀️'
        case 'medium-light':
            return'🙆🏼‍♀️'
        case 'light':
            return'🙆🏻‍♀️'
        default:
            return'🙆‍♀️'
    }
}

function persontipping_hand(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'💁🏿'
        case 'medium-dark':
            return'💁🏾'
        case 'medium':
            return'💁🏽'
        case 'medium-light':
            return'💁🏼'
        case 'light':
            return'💁🏻'
        default:
            return'💁'
    }
}

function mantipping_hand(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'💁🏿‍♂️'
        case 'medium-dark':
            return'💁🏾‍♂️'
        case 'medium':
            return'💁🏽‍♂️'
        case 'medium-light':
            return'💁🏼‍♂️'
        case 'light':
            return'💁🏻‍♂️'
        default:
            return'💁‍♂️'
    }
}

function womantipping_hand(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'💁🏿‍♀️'
        case 'medium-dark':
            return'💁🏾‍♀️'
        case 'medium':
            return'💁🏽‍♀️'
        case 'medium-light':
            return'💁🏼‍♀️'
        case 'light':
            return'💁🏻‍♀️'
        default:
            return'💁‍♀️'
    }
}

function personraising_hand(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🙋🏿'
        case 'medium-dark':
            return'🙋🏾'
        case 'medium':
            return'🙋🏽'
        case 'medium-light':
            return'🙋🏼'
        case 'light':
            return'🙋🏻'
        default:
            return'🙋'
    }
}

function manraising_hand(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🙋🏿‍♂️'
        case 'medium-dark':
            return'🙋🏾‍♂️'
        case 'medium':
            return'🙋🏽‍♂️'
        case 'medium-light':
            return'🙋🏼‍♂️'
        case 'light':
            return'🙋🏻‍♂️'
        default:
            return'🙋‍♂️'
    }
}

function womanraising_hand(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🙋🏿‍♀️'
        case 'medium-dark':
            return'🙋🏾‍♀️'
        case 'medium':
            return'🙋🏽‍♀️'
        case 'medium-light':
            return'🙋🏼‍♀️'
        case 'light':
            return'🙋🏻‍♀️'
        default:
            return'🙋‍♀️'
    }
}

function deaf_person(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧏🏿'
        case 'medium-dark':
            return'🧏🏾'
        case 'medium':
            return'🧏🏽'
        case 'medium-light':
            return'🧏🏼'
        case 'light':
            return'🧏🏻'
        default:
            return'🧏'
    }
}

function deaf_man(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧏🏿‍♂️'
        case 'medium-dark':
            return'🧏🏾‍♂️'
        case 'medium':
            return'🧏🏽‍♂️'
        case 'medium-light':
            return'🧏🏼‍♂️'
        case 'light':
            return'🧏🏻‍♂️'
        default:
            return'🧏‍♂️'
    }
}

function deaf_woman(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧏🏿‍♀️'
        case 'medium-dark':
            return'🧏🏾‍♀️'
        case 'medium':
            return'🧏🏽‍♀️'
        case 'medium-light':
            return'🧏🏼‍♀️'
        case 'light':
            return'🧏🏻‍♀️'
        default:
            return'🧏‍♀️'
    }
}

function personbowing(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🙇🏿'
        case 'medium-dark':
            return'🙇🏾'
        case 'medium':
            return'🙇🏽'
        case 'medium-light':
            return'🙇🏼'
        case 'light':
            return'🙇🏻'
        default:
            return'🙇'
    }
}

function manbowing(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🙇🏿‍♂️'
        case 'medium-dark':
            return'🙇🏾‍♂️'
        case 'medium':
            return'🙇🏽‍♂️'
        case 'medium-light':
            return'🙇🏼‍♂️'
        case 'light':
            return'🙇🏻‍♂️'
        default:
            return'🙇‍♂️'
    }
}

function womanbowing(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🙇🏿‍♀️'
        case 'medium-dark':
            return'🙇🏾‍♀️'
        case 'medium':
            return'🙇🏽‍♀️'
        case 'medium-light':
            return'🙇🏼‍♀️'
        case 'light':
            return'🙇🏻‍♀️'
        default:
            return'🙇‍♀️'
    }
}

function personfacepalming(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤦🏿'
        case 'medium-dark':
            return'🤦🏾'
        case 'medium':
            return'🤦🏽'
        case 'medium-light':
            return'🤦🏼'
        case 'light':
            return'🤦🏻'
        default:
            return'🤦'
    }
}

function manfacepalming(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤦🏿‍♂️'
        case 'medium-dark':
            return'🤦🏾‍♂️'
        case 'medium':
            return'🤦🏽‍♂️'
        case 'medium-light':
            return'🤦🏼‍♂️'
        case 'light':
            return'🤦🏻‍♂️'
        default:
            return'🤦‍♂️'
    }
}

function womanfacepalming(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤦🏿‍♀️'
        case 'medium-dark':
            return'🤦🏾‍♀️'
        case 'medium':
            return'🤦🏽‍♀️'
        case 'medium-light':
            return'🤦🏼‍♀️'
        case 'light':
            return'🤦🏻‍♀️'
        default:
            return'🤦‍♀️'
    }
}

function personshrugging(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤷🏿'
        case 'medium-dark':
            return'🤷🏾'
        case 'medium':
            return'🤷🏽'
        case 'medium-light':
            return'🤷🏼'
        case 'light':
            return'🤷🏻'
        default:
            return'🤷'
    }
}

function manshrugging(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤷🏿‍♂️'
        case 'medium-dark':
            return'🤷🏾‍♂️'
        case 'medium':
            return'🤷🏽‍♂️'
        case 'medium-light':
            return'🤷🏼‍♂️'
        case 'light':
            return'🤷🏻‍♂️'
        default:
            return'🤷‍♂️'
    }
}

function womanshrugging(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤷🏿‍♀️'
        case 'medium-dark':
            return'🤷🏾‍♀️'
        case 'medium':
            return'🤷🏽‍♀️'
        case 'medium-light':
            return'🤷🏼‍♀️'
        case 'light':
            return'🤷🏻‍♀️'
        default:
            return'🤷‍♀️'
    }
}

function health_worker(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧑🏿‍⚕️'
        case 'medium-dark':
            return'🧑🏾‍⚕️'
        case 'medium':
            return'🧑🏽‍⚕️'
        case 'medium-light':
            return'🧑🏼‍⚕️'
        case 'light':
            return'🧑🏻‍⚕️'
        default:
            return'🧑‍⚕️'
    }
}

function manhealth_worker(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👨🏿‍⚕️'
        case 'medium-dark':
            return'👨🏾‍⚕️'
        case 'medium':
            return'👨🏽‍⚕️'
        case 'medium-light':
            return'👨🏼‍⚕️'
        case 'light':
            return'👨🏻‍⚕️'
        default:
            return'👨‍⚕️'
    }
}

function womanhealth_worker(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👩🏿‍⚕️'
        case 'medium-dark':
            return'👩🏾‍⚕️'
        case 'medium':
            return'👩🏽‍⚕️'
        case 'medium-light':
            return'👩🏼‍⚕️'
        case 'light':
            return'👩🏻‍⚕️'
        default:
            return'👩‍⚕️'
    }
}

function student(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧑🏿‍🎓'
        case 'medium-dark':
            return'🧑🏾‍🎓'
        case 'medium':
            return'🧑🏽‍🎓'
        case 'medium-light':
            return'🧑🏼‍🎓'
        case 'light':
            return'🧑🏻‍🎓'
        default:
            return'🧑‍🎓'
    }
}

function manstudent(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👨🏿‍🎓'
        case 'medium-dark':
            return'👨🏾‍🎓'
        case 'medium':
            return'👨🏽‍🎓'
        case 'medium-light':
            return'👨🏼‍🎓'
        case 'light':
            return'👨🏻‍🎓'
        default:
            return'👨‍🎓'
    }
}

function womanstudent(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👩🏿‍🎓'
        case 'medium-dark':
            return'👩🏾‍🎓'
        case 'medium':
            return'👩🏽‍🎓'
        case 'medium-light':
            return'👩🏼‍🎓'
        case 'light':
            return'👩🏻‍🎓'
        default:
            return'👩‍🎓'
    }
}

function teacher(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧑🏿‍🏫'
        case 'medium-dark':
            return'🧑🏾‍🏫'
        case 'medium':
            return'🧑🏽‍🏫'
        case 'medium-light':
            return'🧑🏼‍🏫'
        case 'light':
            return'🧑🏻‍🏫'
        default:
            return'🧑‍🏫'
    }
}

function manteacher(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👨🏿‍🏫'
        case 'medium-dark':
            return'👨🏾‍🏫'
        case 'medium':
            return'👨🏽‍🏫'
        case 'medium-light':
            return'👨🏼‍🏫'
        case 'light':
            return'👨🏻‍🏫'
        default:
            return'👨‍🏫'
    }
}

function womanteacher(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👩🏿‍🏫'
        case 'medium-dark':
            return'👩🏾‍🏫'
        case 'medium':
            return'👩🏽‍🏫'
        case 'medium-light':
            return'👩🏼‍🏫'
        case 'light':
            return'👩🏻‍🏫'
        default:
            return'👩‍🏫'
    }
}

function judge(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧑🏿‍⚖️'
        case 'medium-dark':
            return'🧑🏾‍⚖️'
        case 'medium':
            return'🧑🏽‍⚖️'
        case 'medium-light':
            return'🧑🏼‍⚖️'
        case 'light':
            return'🧑🏻‍⚖️'
        default:
            return'🧑‍⚖️'
    }
}

function manjudge(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👨🏿‍⚖️'
        case 'medium-dark':
            return'👨🏾‍⚖️'
        case 'medium':
            return'👨🏽‍⚖️'
        case 'medium-light':
            return'👨🏼‍⚖️'
        case 'light':
            return'👨🏻‍⚖️'
        default:
            return'👨‍⚖️'
    }
}

function womanjudge(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👩🏿‍⚖️'
        case 'medium-dark':
            return'👩🏾‍⚖️'
        case 'medium':
            return'👩🏽‍⚖️'
        case 'medium-light':
            return'👩🏼‍⚖️'
        case 'light':
            return'👩🏻‍⚖️'
        default:
            return'👩‍⚖️'
    }
}

function farmer(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧑🏿‍🌾'
        case 'medium-dark':
            return'🧑🏾‍🌾'
        case 'medium':
            return'🧑🏽‍🌾'
        case 'medium-light':
            return'🧑🏼‍🌾'
        case 'light':
            return'🧑🏻‍🌾'
        default:
            return'🧑‍🌾'
    }
}

function manfarmer(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👨🏿‍🌾'
        case 'medium-dark':
            return'👨🏾‍🌾'
        case 'medium':
            return'👨🏽‍🌾'
        case 'medium-light':
            return'👨🏼‍🌾'
        case 'light':
            return'👨🏻‍🌾'
        default:
            return'👨‍🌾'
    }
}

function womanfarmer(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👩🏿‍🌾'
        case 'medium-dark':
            return'👩🏾‍🌾'
        case 'medium':
            return'👩🏽‍🌾'
        case 'medium-light':
            return'👩🏼‍🌾'
        case 'light':
            return'👩🏻‍🌾'
        default:
            return'👩‍🌾'
    }
}

function cook(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧑🏿‍🍳'
        case 'medium-dark':
            return'🧑🏾‍🍳'
        case 'medium':
            return'🧑🏽‍🍳'
        case 'medium-light':
            return'🧑🏼‍🍳'
        case 'light':
            return'🧑🏻‍🍳'
        default:
            return'🧑‍🍳'
    }
}

function mancook(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👨🏿‍🍳'
        case 'medium-dark':
            return'👨🏾‍🍳'
        case 'medium':
            return'👨🏽‍🍳'
        case 'medium-light':
            return'👨🏼‍🍳'
        case 'light':
            return'👨🏻‍🍳'
        default:
            return'👨‍🍳'
    }
}

function womancook(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👩🏿‍🍳'
        case 'medium-dark':
            return'👩🏾‍🍳'
        case 'medium':
            return'👩🏽‍🍳'
        case 'medium-light':
            return'👩🏼‍🍳'
        case 'light':
            return'👩🏻‍🍳'
        default:
            return'👩‍🍳'
    }
}

function mechanic(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧑🏿‍🔧'
        case 'medium-dark':
            return'🧑🏾‍🔧'
        case 'medium':
            return'🧑🏽‍🔧'
        case 'medium-light':
            return'🧑🏼‍🔧'
        case 'light':
            return'🧑🏻‍🔧'
        default:
            return'🧑‍🔧'
    }
}

function manmechanic(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👨🏿‍🔧'
        case 'medium-dark':
            return'👨🏾‍🔧'
        case 'medium':
            return'👨🏽‍🔧'
        case 'medium-light':
            return'👨🏼‍🔧'
        case 'light':
            return'👨🏻‍🔧'
        default:
            return'👨‍🔧'
    }
}

function womanmechanic(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👩🏿‍🔧'
        case 'medium-dark':
            return'👩🏾‍🔧'
        case 'medium':
            return'👩🏽‍🔧'
        case 'medium-light':
            return'👩🏼‍🔧'
        case 'light':
            return'👩🏻‍🔧'
        default:
            return'👩‍🔧'
    }
}

function factory_worker(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧑🏿‍🏭'
        case 'medium-dark':
            return'🧑🏾‍🏭'
        case 'medium':
            return'🧑🏽‍🏭'
        case 'medium-light':
            return'🧑🏼‍🏭'
        case 'light':
            return'🧑🏻‍🏭'
        default:
            return'🧑‍🏭'
    }
}

function manfactory_worker(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👨🏿‍🏭'
        case 'medium-dark':
            return'👨🏾‍🏭'
        case 'medium':
            return'👨🏽‍🏭'
        case 'medium-light':
            return'👨🏼‍🏭'
        case 'light':
            return'👨🏻‍🏭'
        default:
            return'👨‍🏭'
    }
}

function womanfactory_worker(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👩🏿‍🏭'
        case 'medium-dark':
            return'👩🏾‍🏭'
        case 'medium':
            return'👩🏽‍🏭'
        case 'medium-light':
            return'👩🏼‍🏭'
        case 'light':
            return'👩🏻‍🏭'
        default:
            return'👩‍🏭'
    }
}

function office_worker(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧑🏿‍💼'
        case 'medium-dark':
            return'🧑🏾‍💼'
        case 'medium':
            return'🧑🏽‍💼'
        case 'medium-light':
            return'🧑🏼‍💼'
        case 'light':
            return'🧑🏻‍💼'
        default:
            return'🧑‍💼'
    }
}

function manoffice_worker(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👨🏿‍💼'
        case 'medium-dark':
            return'👨🏾‍💼'
        case 'medium':
            return'👨🏽‍💼'
        case 'medium-light':
            return'👨🏼‍💼'
        case 'light':
            return'👨🏻‍💼'
        default:
            return'👨‍💼'
    }
}

function womanoffice_worker(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👩🏿‍💼'
        case 'medium-dark':
            return'👩🏾‍💼'
        case 'medium':
            return'👩🏽‍💼'
        case 'medium-light':
            return'👩🏼‍💼'
        case 'light':
            return'👩🏻‍💼'
        default:
            return'👩‍💼'
    }
}

function scientist(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧑🏿‍🔬'
        case 'medium-dark':
            return'🧑🏾‍🔬'
        case 'medium':
            return'🧑🏽‍🔬'
        case 'medium-light':
            return'🧑🏼‍🔬'
        case 'light':
            return'🧑🏻‍🔬'
        default:
            return'🧑‍🔬'
    }
}

function manscientist(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👨🏿‍🔬'
        case 'medium-dark':
            return'👨🏾‍🔬'
        case 'medium':
            return'👨🏽‍🔬'
        case 'medium-light':
            return'👨🏼‍🔬'
        case 'light':
            return'👨🏻‍🔬'
        default:
            return'👨‍🔬'
    }
}

function womanscientist(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👩🏿‍🔬'
        case 'medium-dark':
            return'👩🏾‍🔬'
        case 'medium':
            return'👩🏽‍🔬'
        case 'medium-light':
            return'👩🏼‍🔬'
        case 'light':
            return'👩🏻‍🔬'
        default:
            return'👩‍🔬'
    }
}

function technologist(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧑🏿‍💻'
        case 'medium-dark':
            return'🧑🏾‍💻'
        case 'medium':
            return'🧑🏽‍💻'
        case 'medium-light':
            return'🧑🏼‍💻'
        case 'light':
            return'🧑🏻‍💻'
        default:
            return'🧑‍💻'
    }
}

function mantechnologist(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👨🏿‍💻'
        case 'medium-dark':
            return'👨🏾‍💻'
        case 'medium':
            return'👨🏽‍💻'
        case 'medium-light':
            return'👨🏼‍💻'
        case 'light':
            return'👨🏻‍💻'
        default:
            return'👨‍💻'
    }
}

function womantechnologist(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👩🏿‍💻'
        case 'medium-dark':
            return'👩🏾‍💻'
        case 'medium':
            return'👩🏽‍💻'
        case 'medium-light':
            return'👩🏼‍💻'
        case 'light':
            return'👩🏻‍💻'
        default:
            return'👩‍💻'
    }
}

function singer(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧑🏿‍🎤'
        case 'medium-dark':
            return'🧑🏾‍🎤'
        case 'medium':
            return'🧑🏽‍🎤'
        case 'medium-light':
            return'🧑🏼‍🎤'
        case 'light':
            return'🧑🏻‍🎤'
        default:
            return'🧑‍🎤'
    }
}

function mansinger(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👨🏿‍🎤'
        case 'medium-dark':
            return'👨🏾‍🎤'
        case 'medium':
            return'👨🏽‍🎤'
        case 'medium-light':
            return'👨🏼‍🎤'
        case 'light':
            return'👨🏻‍🎤'
        default:
            return'👨‍🎤'
    }
}

function womansinger(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👩🏿‍🎤'
        case 'medium-dark':
            return'👩🏾‍🎤'
        case 'medium':
            return'👩🏽‍🎤'
        case 'medium-light':
            return'👩🏼‍🎤'
        case 'light':
            return'👩🏻‍🎤'
        default:
            return'👩‍🎤'
    }
}

function artist(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧑🏿‍🎨'
        case 'medium-dark':
            return'🧑🏾‍🎨'
        case 'medium':
            return'🧑🏽‍🎨'
        case 'medium-light':
            return'🧑🏼‍🎨'
        case 'light':
            return'🧑🏻‍🎨'
        default:
            return'🧑‍🎨'
    }
}

function manartist(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👨🏿‍🎨'
        case 'medium-dark':
            return'👨🏾‍🎨'
        case 'medium':
            return'👨🏽‍🎨'
        case 'medium-light':
            return'👨🏼‍🎨'
        case 'light':
            return'👨🏻‍🎨'
        default:
            return'👨‍🎨'
    }
}

function womanartist(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👩🏿‍🎨'
        case 'medium-dark':
            return'👩🏾‍🎨'
        case 'medium':
            return'👩🏽‍🎨'
        case 'medium-light':
            return'👩🏼‍🎨'
        case 'light':
            return'👩🏻‍🎨'
        default:
            return'👩‍🎨'
    }
}

function pilot(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧑🏿‍✈️'
        case 'medium-dark':
            return'🧑🏾‍✈️'
        case 'medium':
            return'🧑🏽‍✈️'
        case 'medium-light':
            return'🧑🏼‍✈️'
        case 'light':
            return'🧑🏻‍✈️'
        default:
            return'🧑‍✈️'
    }
}

function manpilot(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👨🏿‍✈️'
        case 'medium-dark':
            return'👨🏾‍✈️'
        case 'medium':
            return'👨🏽‍✈️'
        case 'medium-light':
            return'👨🏼‍✈️'
        case 'light':
            return'👨🏻‍✈️'
        default:
            return'👨‍✈️'
    }
}

function womanpilot(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👩🏿‍✈️'
        case 'medium-dark':
            return'👩🏾‍✈️'
        case 'medium':
            return'👩🏽‍✈️'
        case 'medium-light':
            return'👩🏼‍✈️'
        case 'light':
            return'👩🏻‍✈️'
        default:
            return'👩‍✈️'
    }
}

function astronaut(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧑🏿‍🚀'
        case 'medium-dark':
            return'🧑🏾‍🚀'
        case 'medium':
            return'🧑🏽‍🚀'
        case 'medium-light':
            return'🧑🏼‍🚀'
        case 'light':
            return'🧑🏻‍🚀'
        default:
            return'🧑‍🚀'
    }
}

function manastronaut(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👨🏿‍🚀'
        case 'medium-dark':
            return'👨🏾‍🚀'
        case 'medium':
            return'👨🏽‍🚀'
        case 'medium-light':
            return'👨🏼‍🚀'
        case 'light':
            return'👨🏻‍🚀'
        default:
            return'👨‍🚀'
    }
}

function womanastronaut(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👩🏿‍🚀'
        case 'medium-dark':
            return'👩🏾‍🚀'
        case 'medium':
            return'👩🏽‍🚀'
        case 'medium-light':
            return'👩🏼‍🚀'
        case 'light':
            return'👩🏻‍🚀'
        default:
            return'👩‍🚀'
    }
}

function firefighter(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧑🏿‍🚒'
        case 'medium-dark':
            return'🧑🏾‍🚒'
        case 'medium':
            return'🧑🏽‍🚒'
        case 'medium-light':
            return'🧑🏼‍🚒'
        case 'light':
            return'🧑🏻‍🚒'
        default:
            return'🧑‍🚒'
    }
}

function manfirefighter(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👨🏿‍🚒'
        case 'medium-dark':
            return'👨🏾‍🚒'
        case 'medium':
            return'👨🏽‍🚒'
        case 'medium-light':
            return'👨🏼‍🚒'
        case 'light':
            return'👨🏻‍🚒'
        default:
            return'👨‍🚒'
    }
}

function womanfirefighter(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👩🏿‍🚒'
        case 'medium-dark':
            return'👩🏾‍🚒'
        case 'medium':
            return'👩🏽‍🚒'
        case 'medium-light':
            return'👩🏼‍🚒'
        case 'light':
            return'👩🏻‍🚒'
        default:
            return'👩‍🚒'
    }
}

function police_officer(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👮🏿'
        case 'medium-dark':
            return'👮🏾'
        case 'medium':
            return'👮🏽'
        case 'medium-light':
            return'👮🏼'
        case 'light':
            return'👮🏻'
        default:
            return'👮'
    }
}

function manpolice_officer(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👮🏿‍♂️'
        case 'medium-dark':
            return'👮🏾‍♂️'
        case 'medium':
            return'👮🏽‍♂️'
        case 'medium-light':
            return'👮🏼‍♂️'
        case 'light':
            return'👮🏻‍♂️'
        default:
            return'👮‍♂️'
    }
}

function womanpolice_officer(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👮🏿‍♀️'
        case 'medium-dark':
            return'👮🏾‍♀️'
        case 'medium':
            return'👮🏽‍♀️'
        case 'medium-light':
            return'👮🏼‍♀️'
        case 'light':
            return'👮🏻‍♀️'
        default:
            return'👮‍♀️'
    }
}

function detective(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🕵🏿'
        case 'medium-dark':
            return'🕵🏾'
        case 'medium':
            return'🕵🏽'
        case 'medium-light':
            return'🕵🏼'
        case 'light':
            return'🕵🏻'
        default:
            return'🕵️'
    }
}

function mandetective(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🕵🏿‍♂️'
        case 'medium-dark':
            return'🕵🏾‍♂️'
        case 'medium':
            return'🕵🏽‍♂️'
        case 'medium-light':
            return'🕵🏼‍♂️'
        case 'light':
            return'🕵🏻‍♂️'
        default:
            return'🕵️‍♂️'
    }
}

function womandetective(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🕵🏿‍♀️'
        case 'medium-dark':
            return'🕵🏾‍♀️'
        case 'medium':
            return'🕵🏽‍♀️'
        case 'medium-light':
            return'🕵🏼‍♀️'
        case 'light':
            return'🕵🏻‍♀️'
        default:
            return'🕵️‍♀️'
    }
}

function guard(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'💂🏿'
        case 'medium-dark':
            return'💂🏾'
        case 'medium':
            return'💂🏽'
        case 'medium-light':
            return'💂🏼'
        case 'light':
            return'💂🏻'
        default:
            return'💂'
    }
}

function manguard(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'💂🏿‍♂️'
        case 'medium-dark':
            return'💂🏾‍♂️'
        case 'medium':
            return'💂🏽‍♂️'
        case 'medium-light':
            return'💂🏼‍♂️'
        case 'light':
            return'💂🏻‍♂️'
        default:
            return'💂‍♂️'
    }
}

function womanguard(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'💂🏿‍♀️'
        case 'medium-dark':
            return'💂🏾‍♀️'
        case 'medium':
            return'💂🏽‍♀️'
        case 'medium-light':
            return'💂🏼‍♀️'
        case 'light':
            return'💂🏻‍♀️'
        default:
            return'💂‍♀️'
    }
}

function ninja(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🥷🏿'
        case 'medium-dark':
            return'🥷🏾'
        case 'medium':
            return'🥷🏽'
        case 'medium-light':
            return'🥷🏼'
        case 'light':
            return'🥷🏻'
        default:
            return'🥷'
    }
}

function constructionworker(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👷🏿'
        case 'medium-dark':
            return'👷🏾'
        case 'medium':
            return'👷🏽'
        case 'medium-light':
            return'👷🏼'
        case 'light':
            return'👷🏻'
        default:
            return'👷'
    }
}

function manconstructionworker(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👷🏿‍♂️'
        case 'medium-dark':
            return'👷🏾‍♂️'
        case 'medium':
            return'👷🏽‍♂️'
        case 'medium-light':
            return'👷🏼‍♂️'
        case 'light':
            return'👷🏻‍♂️'
        default:
            return'👷‍♂️'
    }
}

function womanconstructionworker(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👷🏿‍♀️'
        case 'medium-dark':
            return'👷🏾‍♀️'
        case 'medium':
            return'👷🏽‍♀️'
        case 'medium-light':
            return'👷🏼‍♀️'
        case 'light':
            return'👷🏻‍♀️'
        default:
            return'👷‍♀️'
    }
}

function personwith_crown(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🫅🏿'
        case 'medium-dark':
            return'🫅🏾'
        case 'medium':
            return'🫅🏽'
        case 'medium-light':
            return'🫅🏼'
        case 'light':
            return'🫅🏻'
        default:
            return'🫅'
    }
}

function prince(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤴🏿'
        case 'medium-dark':
            return'🤴🏾'
        case 'medium':
            return'🤴🏽'
        case 'medium-light':
            return'🤴🏼'
        case 'light':
            return'🤴🏻'
        default:
            return'🤴'
    }
}

function princess(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👸🏿'
        case 'medium-dark':
            return'👸🏾'
        case 'medium':
            return'👸🏽'
        case 'medium-light':
            return'👸🏼'
        case 'light':
            return'👸🏻'
        default:
            return'👸'
    }
}

function personwearing_turban(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👳🏿'
        case 'medium-dark':
            return'👳🏾'
        case 'medium':
            return'👳🏽'
        case 'medium-light':
            return'👳🏼'
        case 'light':
            return'👳🏻'
        default:
            return'👳'
    }
}

function manwearing_turban(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👳🏿‍♂️'
        case 'medium-dark':
            return'👳🏾‍♂️'
        case 'medium':
            return'👳🏽‍♂️'
        case 'medium-light':
            return'👳🏼‍♂️'
        case 'light':
            return'👳🏻‍♂️'
        default:
            return'👳‍♂️'
    }
}

function womanwearing_turban(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👳🏿‍♀️'
        case 'medium-dark':
            return'👳🏾‍♀️'
        case 'medium':
            return'👳🏽‍♀️'
        case 'medium-light':
            return'👳🏼‍♀️'
        case 'light':
            return'👳🏻‍♀️'
        default:
            return'👳‍♀️'
    }
}

function personwith_skullcap(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👲🏿'
        case 'medium-dark':
            return'👲🏾'
        case 'medium':
            return'👲🏽'
        case 'medium-light':
            return'👲🏼'
        case 'light':
            return'👲🏻'
        default:
            return'👲'
    }
}

function womanwith_headscarf(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧕🏿'
        case 'medium-dark':
            return'🧕🏾'
        case 'medium':
            return'🧕🏽'
        case 'medium-light':
            return'🧕🏼'
        case 'light':
            return'🧕🏻'
        default:
            return'🧕'
    }
}

function personintuxedo(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤵🏿'
        case 'medium-dark':
            return'🤵🏾'
        case 'medium':
            return'🤵🏽'
        case 'medium-light':
            return'🤵🏼'
        case 'light':
            return'🤵🏻'
        default:
            return'🤵'
    }
}

function manintuxedo(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤵🏿‍♂️'
        case 'medium-dark':
            return'🤵🏾‍♂️'
        case 'medium':
            return'🤵🏽‍♂️'
        case 'medium-light':
            return'🤵🏼‍♂️'
        case 'light':
            return'🤵🏻‍♂️'
        default:
            return'🤵‍♂️'
    }
}

function womanintuxedo(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤵🏿‍♀️'
        case 'medium-dark':
            return'🤵🏾‍♀️'
        case 'medium':
            return'🤵🏽‍♀️'
        case 'medium-light':
            return'🤵🏼‍♀️'
        case 'light':
            return'🤵🏻‍♀️'
        default:
            return'🤵‍♀️'
    }
}

function personwith_veil(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👰🏿'
        case 'medium-dark':
            return'👰🏾'
        case 'medium':
            return'👰🏽'
        case 'medium-light':
            return'👰🏼'
        case 'light':
            return'👰🏻'
        default:
            return'👰'
    }
}

function manwith_veil(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👰🏿‍♂️'
        case 'medium-dark':
            return'👰🏾‍♂️'
        case 'medium':
            return'👰🏽‍♂️'
        case 'medium-light':
            return'👰🏼‍♂️'
        case 'light':
            return'👰🏻‍♂️'
        default:
            return'👰‍♂️'
    }
}

function womanwith_veil(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👰🏿‍♀️'
        case 'medium-dark':
            return'👰🏾‍♀️'
        case 'medium':
            return'👰🏽‍♀️'
        case 'medium-light':
            return'👰🏼‍♀️'
        case 'light':
            return'👰🏻‍♀️'
        default:
            return'👰‍♀️'
    }
}

function pregnant_woman(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤰🏿'
        case 'medium-dark':
            return'🤰🏾'
        case 'medium':
            return'🤰🏽'
        case 'medium-light':
            return'🤰🏼'
        case 'light':
            return'🤰🏻'
        default:
            return'🤰'
    }
}

function pregnant_man(tone: SkinTones) {
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

function pregnant_person(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🫄🏿'
        case 'medium-dark':
            return'🫄🏾'
        case 'medium':
            return'🫄🏽'
        case 'medium-light':
            return'🫄🏼'
        case 'light':
            return'🫄🏻'
        default:
            return'🫄'
    }
}

function breastfeeding(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤱🏿'
        case 'medium-dark':
            return'🤱🏾'
        case 'medium':
            return'🤱🏽'
        case 'medium-light':
            return'🤱🏼'
        case 'light':
            return'🤱🏻'
        default:
            return'🤱'
    }
}

function womanfeeding_baby(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👩🏿‍🍼'
        case 'medium-dark':
            return'👩🏾‍🍼'
        case 'medium':
            return'👩🏽‍🍼'
        case 'medium-light':
            return'👩🏼‍🍼'
        case 'light':
            return'👩🏻‍🍼'
        default:
            return'👩‍🍼'
    }
}

function manfeeding_baby(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👨🏿‍🍼'
        case 'medium-dark':
            return'👨🏾‍🍼'
        case 'medium':
            return'👨🏽‍🍼'
        case 'medium-light':
            return'👨🏼‍🍼'
        case 'light':
            return'👨🏻‍🍼'
        default:
            return'👨‍🍼'
    }
}

function personfeeding_baby(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧑🏿‍🍼'
        case 'medium-dark':
            return'🧑🏾‍🍼'
        case 'medium':
            return'🧑🏽‍🍼'
        case 'medium-light':
            return'🧑🏼‍🍼'
        case 'light':
            return'🧑🏻‍🍼'
        default:
            return'🧑‍🍼'
    }
}

function baby_angel(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👼🏿'
        case 'medium-dark':
            return'👼🏾'
        case 'medium':
            return'👼🏽'
        case 'medium-light':
            return'👼🏼'
        case 'light':
            return'👼🏻'
        default:
            return'👼'
    }
}

function santa_claus(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🎅🏿'
        case 'medium-dark':
            return'🎅🏾'
        case 'medium':
            return'🎅🏽'
        case 'medium-light':
            return'🎅🏼'
        case 'light':
            return'🎅🏻'
        default:
            return'🎅'
    }
}

function mrs_claus(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤶🏿'
        case 'medium-dark':
            return'🤶🏾'
        case 'medium':
            return'🤶🏽'
        case 'medium-light':
            return'🤶🏼'
        case 'light':
            return'🤶🏻'
        default:
            return'🤶'
    }
}

function mx_claus(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧑🏿‍🎄'
        case 'medium-dark':
            return'🧑🏾‍🎄'
        case 'medium':
            return'🧑🏽‍🎄'
        case 'medium-light':
            return'🧑🏼‍🎄'
        case 'light':
            return'🧑🏻‍🎄'
        default:
            return'🧑‍🎄'
    }
}

function superhero(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🦸🏿'
        case 'medium-dark':
            return'🦸🏾'
        case 'medium':
            return'🦸🏽'
        case 'medium-light':
            return'🦸🏼'
        case 'light':
            return'🦸🏻'
        default:
            return'🦸'
    }
}

function mansuperhero(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🦸🏿‍♂️'
        case 'medium-dark':
            return'🦸🏾‍♂️'
        case 'medium':
            return'🦸🏽‍♂️'
        case 'medium-light':
            return'🦸🏼‍♂️'
        case 'light':
            return'🦸🏻‍♂️'
        default:
            return'🦸‍♂️'
    }
}

function womansuperhero(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🦸🏿‍♀️'
        case 'medium-dark':
            return'🦸🏾‍♀️'
        case 'medium':
            return'🦸🏽‍♀️'
        case 'medium-light':
            return'🦸🏼‍♀️'
        case 'light':
            return'🦸🏻‍♀️'
        default:
            return'🦸‍♀️'
    }
}

function supervillain(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🦹🏿'
        case 'medium-dark':
            return'🦹🏾'
        case 'medium':
            return'🦹🏽'
        case 'medium-light':
            return'🦹🏼'
        case 'light':
            return'🦹🏻'
        default:
            return'🦹'
    }
}

function mansupervillain(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🦹🏿‍♂️'
        case 'medium-dark':
            return'🦹🏾‍♂️'
        case 'medium':
            return'🦹🏽‍♂️'
        case 'medium-light':
            return'🦹🏼‍♂️'
        case 'light':
            return'🦹🏻‍♂️'
        default:
            return'🦹‍♂️'
    }
}

function womansupervillain(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🦹🏿‍♀️'
        case 'medium-dark':
            return'🦹🏾‍♀️'
        case 'medium':
            return'🦹🏽‍♀️'
        case 'medium-light':
            return'🦹🏼‍♀️'
        case 'light':
            return'🦹🏻‍♀️'
        default:
            return'🦹‍♀️'
    }
}

function mage(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧙🏿'
        case 'medium-dark':
            return'🧙🏾'
        case 'medium':
            return'🧙🏽'
        case 'medium-light':
            return'🧙🏼'
        case 'light':
            return'🧙🏻'
        default:
            return'🧙'
    }
}

function manmage(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧙🏿‍♂️'
        case 'medium-dark':
            return'🧙🏾‍♂️'
        case 'medium':
            return'🧙🏽‍♂️'
        case 'medium-light':
            return'🧙🏼‍♂️'
        case 'light':
            return'🧙🏻‍♂️'
        default:
            return'🧙‍♂️'
    }
}

function womanmage(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧙🏿‍♀️'
        case 'medium-dark':
            return'🧙🏾‍♀️'
        case 'medium':
            return'🧙🏽‍♀️'
        case 'medium-light':
            return'🧙🏼‍♀️'
        case 'light':
            return'🧙🏻‍♀️'
        default:
            return'🧙‍♀️'
    }
}

function fairy(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧚🏿'
        case 'medium-dark':
            return'🧚🏾'
        case 'medium':
            return'🧚🏽'
        case 'medium-light':
            return'🧚🏼'
        case 'light':
            return'🧚🏻'
        default:
            return'🧚'
    }
}

function manfairy(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧚🏿‍♂️'
        case 'medium-dark':
            return'🧚🏾‍♂️'
        case 'medium':
            return'🧚🏽‍♂️'
        case 'medium-light':
            return'🧚🏼‍♂️'
        case 'light':
            return'🧚🏻‍♂️'
        default:
            return'🧚‍♂️'
    }
}

function womanfairy(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧚🏿‍♀️'
        case 'medium-dark':
            return'🧚🏾‍♀️'
        case 'medium':
            return'🧚🏽‍♀️'
        case 'medium-light':
            return'🧚🏼‍♀️'
        case 'light':
            return'🧚🏻‍♀️'
        default:
            return'🧚‍♀️'
    }
}

function vampire(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧛🏿'
        case 'medium-dark':
            return'🧛🏾'
        case 'medium':
            return'🧛🏽'
        case 'medium-light':
            return'🧛🏼'
        case 'light':
            return'🧛🏻'
        default:
            return'🧛'
    }
}

function manvampire(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧛🏿‍♂️'
        case 'medium-dark':
            return'🧛🏾‍♂️'
        case 'medium':
            return'🧛🏽‍♂️'
        case 'medium-light':
            return'🧛🏼‍♂️'
        case 'light':
            return'🧛🏻‍♂️'
        default:
            return'🧛‍♂️'
    }
}

function womanvampire(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧛🏿‍♀️'
        case 'medium-dark':
            return'🧛🏾‍♀️'
        case 'medium':
            return'🧛🏽‍♀️'
        case 'medium-light':
            return'🧛🏼‍♀️'
        case 'light':
            return'🧛🏻‍♀️'
        default:
            return'🧛‍♀️'
    }
}

function merperson(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧜🏿'
        case 'medium-dark':
            return'🧜🏾'
        case 'medium':
            return'🧜🏽'
        case 'medium-light':
            return'🧜🏼'
        case 'light':
            return'🧜🏻'
        default:
            return'🧜'
    }
}

function merman(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧜🏿‍♂️'
        case 'medium-dark':
            return'🧜🏾‍♂️'
        case 'medium':
            return'🧜🏽‍♂️'
        case 'medium-light':
            return'🧜🏼‍♂️'
        case 'light':
            return'🧜🏻‍♂️'
        default:
            return'🧜‍♂️'
    }
}

function mermaid(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧜🏿‍♀️'
        case 'medium-dark':
            return'🧜🏾‍♀️'
        case 'medium':
            return'🧜🏽‍♀️'
        case 'medium-light':
            return'🧜🏼‍♀️'
        case 'light':
            return'🧜🏻‍♀️'
        default:
            return'🧜‍♀️'
    }
}

function elf(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧝🏿'
        case 'medium-dark':
            return'🧝🏾'
        case 'medium':
            return'🧝🏽'
        case 'medium-light':
            return'🧝🏼'
        case 'light':
            return'🧝🏻'
        default:
            return'🧝'
    }
}

function manelf(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧝🏿‍♂️'
        case 'medium-dark':
            return'🧝🏾‍♂️'
        case 'medium':
            return'🧝🏽‍♂️'
        case 'medium-light':
            return'🧝🏼‍♂️'
        case 'light':
            return'🧝🏻‍♂️'
        default:
            return'🧝‍♂️'
    }
}

function womanelf(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧝🏿‍♀️'
        case 'medium-dark':
            return'🧝🏾‍♀️'
        case 'medium':
            return'🧝🏽‍♀️'
        case 'medium-light':
            return'🧝🏼‍♀️'
        case 'light':
            return'🧝🏻‍♀️'
        default:
            return'🧝‍♀️'
    }
}

function persongetting_massage(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'💆🏿'
        case 'medium-dark':
            return'💆🏾'
        case 'medium':
            return'💆🏽'
        case 'medium-light':
            return'💆🏼'
        case 'light':
            return'💆🏻'
        default:
            return'💆'
    }
}

function mangetting_massage(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'💆🏿‍♂️'
        case 'medium-dark':
            return'💆🏾‍♂️'
        case 'medium':
            return'💆🏽‍♂️'
        case 'medium-light':
            return'💆🏼‍♂️'
        case 'light':
            return'💆🏻‍♂️'
        default:
            return'💆‍♂️'
    }
}

function womangetting_massage(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'💆🏿‍♀️'
        case 'medium-dark':
            return'💆🏾‍♀️'
        case 'medium':
            return'💆🏽‍♀️'
        case 'medium-light':
            return'💆🏼‍♀️'
        case 'light':
            return'💆🏻‍♀️'
        default:
            return'💆‍♀️'
    }
}

function persongetting_haircut(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'💇🏿'
        case 'medium-dark':
            return'💇🏾'
        case 'medium':
            return'💇🏽'
        case 'medium-light':
            return'💇🏼'
        case 'light':
            return'💇🏻'
        default:
            return'💇'
    }
}

function mangetting_haircut(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'💇🏿‍♂️'
        case 'medium-dark':
            return'💇🏾‍♂️'
        case 'medium':
            return'💇🏽‍♂️'
        case 'medium-light':
            return'💇🏼‍♂️'
        case 'light':
            return'💇🏻‍♂️'
        default:
            return'💇‍♂️'
    }
}

function womangetting_haircut(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'💇🏿‍♀️'
        case 'medium-dark':
            return'💇🏾‍♀️'
        case 'medium':
            return'💇🏽‍♀️'
        case 'medium-light':
            return'💇🏼‍♀️'
        case 'light':
            return'💇🏻‍♀️'
        default:
            return'💇‍♀️'
    }
}

function personwalking(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🚶🏿'
        case 'medium-dark':
            return'🚶🏾'
        case 'medium':
            return'🚶🏽'
        case 'medium-light':
            return'🚶🏼'
        case 'light':
            return'🚶🏻'
        default:
            return'🚶'
    }
}

function manwalking(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🚶🏿‍♂️'
        case 'medium-dark':
            return'🚶🏾‍♂️'
        case 'medium':
            return'🚶🏽‍♂️'
        case 'medium-light':
            return'🚶🏼‍♂️'
        case 'light':
            return'🚶🏻‍♂️'
        default:
            return'🚶‍♂️'
    }
}

function womanwalking(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🚶🏿‍♀️'
        case 'medium-dark':
            return'🚶🏾‍♀️'
        case 'medium':
            return'🚶🏽‍♀️'
        case 'medium-light':
            return'🚶🏼‍♀️'
        case 'light':
            return'🚶🏻‍♀️'
        default:
            return'🚶‍♀️'
    }
}

function personstanding(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧍🏿'
        case 'medium-dark':
            return'🧍🏾'
        case 'medium':
            return'🧍🏽'
        case 'medium-light':
            return'🧍🏼'
        case 'light':
            return'🧍🏻'
        default:
            return'🧍'
    }
}

function manstanding(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧍🏿‍♂️'
        case 'medium-dark':
            return'🧍🏾‍♂️'
        case 'medium':
            return'🧍🏽‍♂️'
        case 'medium-light':
            return'🧍🏼‍♂️'
        case 'light':
            return'🧍🏻‍♂️'
        default:
            return'🧍‍♂️'
    }
}

function womanstanding(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧍🏿‍♀️'
        case 'medium-dark':
            return'🧍🏾‍♀️'
        case 'medium':
            return'🧍🏽‍♀️'
        case 'medium-light':
            return'🧍🏼‍♀️'
        case 'light':
            return'🧍🏻‍♀️'
        default:
            return'🧍‍♀️'
    }
}

function personkneeling(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧎🏿'
        case 'medium-dark':
            return'🧎🏾'
        case 'medium':
            return'🧎🏽'
        case 'medium-light':
            return'🧎🏼'
        case 'light':
            return'🧎🏻'
        default:
            return'🧎'
    }
}

function mankneeling(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧎🏿‍♂️'
        case 'medium-dark':
            return'🧎🏾‍♂️'
        case 'medium':
            return'🧎🏽‍♂️'
        case 'medium-light':
            return'🧎🏼‍♂️'
        case 'light':
            return'🧎🏻‍♂️'
        default:
            return'🧎‍♂️'
    }
}

function womankneeling(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧎🏿‍♀️'
        case 'medium-dark':
            return'🧎🏾‍♀️'
        case 'medium':
            return'🧎🏽‍♀️'
        case 'medium-light':
            return'🧎🏼‍♀️'
        case 'light':
            return'🧎🏻‍♀️'
        default:
            return'🧎‍♀️'
    }
}

function personwith_white_cane(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧑🏿‍🦯'
        case 'medium-dark':
            return'🧑🏾‍🦯'
        case 'medium':
            return'🧑🏽‍🦯'
        case 'medium-light':
            return'🧑🏼‍🦯'
        case 'light':
            return'🧑🏻‍🦯'
        default:
            return'🧑‍🦯'
    }
}

function manwith_white_cane(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👨🏿‍🦯'
        case 'medium-dark':
            return'👨🏾‍🦯'
        case 'medium':
            return'👨🏽‍🦯'
        case 'medium-light':
            return'👨🏼‍🦯'
        case 'light':
            return'👨🏻‍🦯'
        default:
            return'👨‍🦯'
    }
}

function womanwith_white_cane(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👩🏿‍🦯'
        case 'medium-dark':
            return'👩🏾‍🦯'
        case 'medium':
            return'👩🏽‍🦯'
        case 'medium-light':
            return'👩🏼‍🦯'
        case 'light':
            return'👩🏻‍🦯'
        default:
            return'👩‍🦯'
    }
}

function personinmotorized_wheelchair(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧑🏿‍🦼'
        case 'medium-dark':
            return'🧑🏾‍🦼'
        case 'medium':
            return'🧑🏽‍🦼'
        case 'medium-light':
            return'🧑🏼‍🦼'
        case 'light':
            return'🧑🏻‍🦼'
        default:
            return'🧑‍🦼'
    }
}

function maninmotorized_wheelchair(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👨🏿‍🦼'
        case 'medium-dark':
            return'👨🏾‍🦼'
        case 'medium':
            return'👨🏽‍🦼'
        case 'medium-light':
            return'👨🏼‍🦼'
        case 'light':
            return'👨🏻‍🦼'
        default:
            return'👨‍🦼'
    }
}

function womaninmotorized_wheelchair(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👩🏿‍🦼'
        case 'medium-dark':
            return'👩🏾‍🦼'
        case 'medium':
            return'👩🏽‍🦼'
        case 'medium-light':
            return'👩🏼‍🦼'
        case 'light':
            return'👩🏻‍🦼'
        default:
            return'👩‍🦼'
    }
}

function personinmanual_wheelchair(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧑🏿‍🦽'
        case 'medium-dark':
            return'🧑🏾‍🦽'
        case 'medium':
            return'🧑🏽‍🦽'
        case 'medium-light':
            return'🧑🏼‍🦽'
        case 'light':
            return'🧑🏻‍🦽'
        default:
            return'🧑‍🦽'
    }
}

function maninmanual_wheelchair(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👨🏿‍🦽'
        case 'medium-dark':
            return'👨🏾‍🦽'
        case 'medium':
            return'👨🏽‍🦽'
        case 'medium-light':
            return'👨🏼‍🦽'
        case 'light':
            return'👨🏻‍🦽'
        default:
            return'👨‍🦽'
    }
}

function womaninmanual_wheelchair(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👩🏿‍🦽'
        case 'medium-dark':
            return'👩🏾‍🦽'
        case 'medium':
            return'👩🏽‍🦽'
        case 'medium-light':
            return'👩🏼‍🦽'
        case 'light':
            return'👩🏻‍🦽'
        default:
            return'👩‍🦽'
    }
}

function personrunning(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🏃🏿'
        case 'medium-dark':
            return'🏃🏾'
        case 'medium':
            return'🏃🏽'
        case 'medium-light':
            return'🏃🏼'
        case 'light':
            return'🏃🏻'
        default:
            return'🏃'
    }
}

function manrunning(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🏃🏿‍♂️'
        case 'medium-dark':
            return'🏃🏾‍♂️'
        case 'medium':
            return'🏃🏽‍♂️'
        case 'medium-light':
            return'🏃🏼‍♂️'
        case 'light':
            return'🏃🏻‍♂️'
        default:
            return'🏃‍♂️'
    }
}

function womanrunning(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🏃🏿‍♀️'
        case 'medium-dark':
            return'🏃🏾‍♀️'
        case 'medium':
            return'🏃🏽‍♀️'
        case 'medium-light':
            return'🏃🏼‍♀️'
        case 'light':
            return'🏃🏻‍♀️'
        default:
            return'🏃‍♀️'
    }
}

function womandancing(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'💃🏿'
        case 'medium-dark':
            return'💃🏾'
        case 'medium':
            return'💃🏽'
        case 'medium-light':
            return'💃🏼'
        case 'light':
            return'💃🏻'
        default:
            return'💃'
    }
}

function mandancing(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🕺🏿'
        case 'medium-dark':
            return'🕺🏾'
        case 'medium':
            return'🕺🏽'
        case 'medium-light':
            return'🕺🏼'
        case 'light':
            return'🕺🏻'
        default:
            return'🕺'
    }
}

function personinsuit_levitating(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🕴🏿'
        case 'medium-dark':
            return'🕴🏾'
        case 'medium':
            return'🕴🏽'
        case 'medium-light':
            return'🕴🏼'
        case 'light':
            return'🕴🏻'
        default:
            return'🕴️'
    }
}

function personinsteamy_room(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧖🏿'
        case 'medium-dark':
            return'🧖🏾'
        case 'medium':
            return'🧖🏽'
        case 'medium-light':
            return'🧖🏼'
        case 'light':
            return'🧖🏻'
        default:
            return'🧖'
    }
}

function maninsteamy_room(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧖🏿‍♂️'
        case 'medium-dark':
            return'🧖🏾‍♂️'
        case 'medium':
            return'🧖🏽‍♂️'
        case 'medium-light':
            return'🧖🏼‍♂️'
        case 'light':
            return'🧖🏻‍♂️'
        default:
            return'🧖‍♂️'
    }
}

function womaninsteamy_room(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧖🏿‍♀️'
        case 'medium-dark':
            return'🧖🏾‍♀️'
        case 'medium':
            return'🧖🏽‍♀️'
        case 'medium-light':
            return'🧖🏼‍♀️'
        case 'light':
            return'🧖🏻‍♀️'
        default:
            return'🧖‍♀️'
    }
}

function personclimbing(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧗🏿'
        case 'medium-dark':
            return'🧗🏾'
        case 'medium':
            return'🧗🏽'
        case 'medium-light':
            return'🧗🏼'
        case 'light':
            return'🧗🏻'
        default:
            return'🧗'
    }
}

function manclimbing(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧗🏿‍♂️'
        case 'medium-dark':
            return'🧗🏾‍♂️'
        case 'medium':
            return'🧗🏽‍♂️'
        case 'medium-light':
            return'🧗🏼‍♂️'
        case 'light':
            return'🧗🏻‍♂️'
        default:
            return'🧗‍♂️'
    }
}

function womanclimbing(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧗🏿‍♀️'
        case 'medium-dark':
            return'🧗🏾‍♀️'
        case 'medium':
            return'🧗🏽‍♀️'
        case 'medium-light':
            return'🧗🏼‍♀️'
        case 'light':
            return'🧗🏻‍♀️'
        default:
            return'🧗‍♀️'
    }
}

function horse_racing(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🏇🏿'
        case 'medium-dark':
            return'🏇🏾'
        case 'medium':
            return'🏇🏽'
        case 'medium-light':
            return'🏇🏼'
        case 'light':
            return'🏇🏻'
        default:
            return'🏇'
    }
}

function snowboarder(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🏂🏿'
        case 'medium-dark':
            return'🏂🏾'
        case 'medium':
            return'🏂🏽'
        case 'medium-light':
            return'🏂🏼'
        case 'light':
            return'🏂🏻'
        default:
            return'🏂'
    }
}

function persongolfing(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🏌🏿'
        case 'medium-dark':
            return'🏌🏾'
        case 'medium':
            return'🏌🏽'
        case 'medium-light':
            return'🏌🏼'
        case 'light':
            return'🏌🏻'
        default:
            return'🏌️'
    }
}

function mangolfing(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🏌🏿‍♂️'
        case 'medium-dark':
            return'🏌🏾‍♂️'
        case 'medium':
            return'🏌🏽‍♂️'
        case 'medium-light':
            return'🏌🏼‍♂️'
        case 'light':
            return'🏌🏻‍♂️'
        default:
            return'🏌️‍♂️'
    }
}

function womangolfing(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🏌🏿‍♀️'
        case 'medium-dark':
            return'🏌🏾‍♀️'
        case 'medium':
            return'🏌🏽‍♀️'
        case 'medium-light':
            return'🏌🏼‍♀️'
        case 'light':
            return'🏌🏻‍♀️'
        default:
            return'🏌️‍♀️'
    }
}

function personsurfing(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🏄🏿'
        case 'medium-dark':
            return'🏄🏾'
        case 'medium':
            return'🏄🏽'
        case 'medium-light':
            return'🏄🏼'
        case 'light':
            return'🏄🏻'
        default:
            return'🏄'
    }
}

function mansurfing(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🏄🏿‍♂️'
        case 'medium-dark':
            return'🏄🏾‍♂️'
        case 'medium':
            return'🏄🏽‍♂️'
        case 'medium-light':
            return'🏄🏼‍♂️'
        case 'light':
            return'🏄🏻‍♂️'
        default:
            return'🏄‍♂️'
    }
}

function womansurfing(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🏄🏿‍♀️'
        case 'medium-dark':
            return'🏄🏾‍♀️'
        case 'medium':
            return'🏄🏽‍♀️'
        case 'medium-light':
            return'🏄🏼‍♀️'
        case 'light':
            return'🏄🏻‍♀️'
        default:
            return'🏄‍♀️'
    }
}

function personrowing_boat(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🚣🏿'
        case 'medium-dark':
            return'🚣🏾'
        case 'medium':
            return'🚣🏽'
        case 'medium-light':
            return'🚣🏼'
        case 'light':
            return'🚣🏻'
        default:
            return'🚣'
    }
}

function manrowing_boat(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🚣🏿‍♂️'
        case 'medium-dark':
            return'🚣🏾‍♂️'
        case 'medium':
            return'🚣🏽‍♂️'
        case 'medium-light':
            return'🚣🏼‍♂️'
        case 'light':
            return'🚣🏻‍♂️'
        default:
            return'🚣‍♂️'
    }
}

function womanrowing_boat(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🚣🏿‍♀️'
        case 'medium-dark':
            return'🚣🏾‍♀️'
        case 'medium':
            return'🚣🏽‍♀️'
        case 'medium-light':
            return'🚣🏼‍♀️'
        case 'light':
            return'🚣🏻‍♀️'
        default:
            return'🚣‍♀️'
    }
}

function personswimming(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🏊🏿'
        case 'medium-dark':
            return'🏊🏾'
        case 'medium':
            return'🏊🏽'
        case 'medium-light':
            return'🏊🏼'
        case 'light':
            return'🏊🏻'
        default:
            return'🏊'
    }
}

function manswimming(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🏊🏿‍♂️'
        case 'medium-dark':
            return'🏊🏾‍♂️'
        case 'medium':
            return'🏊🏽‍♂️'
        case 'medium-light':
            return'🏊🏼‍♂️'
        case 'light':
            return'🏊🏻‍♂️'
        default:
            return'🏊‍♂️'
    }
}

function womanswimming(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🏊🏿‍♀️'
        case 'medium-dark':
            return'🏊🏾‍♀️'
        case 'medium':
            return'🏊🏽‍♀️'
        case 'medium-light':
            return'🏊🏼‍♀️'
        case 'light':
            return'🏊🏻‍♀️'
        default:
            return'🏊‍♀️'
    }
}

function personbouncing_ball(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'⛹🏿'
        case 'medium-dark':
            return'⛹🏾'
        case 'medium':
            return'⛹🏽'
        case 'medium-light':
            return'⛹🏼'
        case 'light':
            return'⛹🏻'
        default:
            return'⛹️'
    }
}

function manbouncing_ball(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'⛹🏿‍♂️'
        case 'medium-dark':
            return'⛹🏾‍♂️'
        case 'medium':
            return'⛹🏽‍♂️'
        case 'medium-light':
            return'⛹🏼‍♂️'
        case 'light':
            return'⛹🏻‍♂️'
        default:
            return'⛹️‍♂️'
    }
}

function womanbouncing_ball(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'⛹🏿‍♀️'
        case 'medium-dark':
            return'⛹🏾‍♀️'
        case 'medium':
            return'⛹🏽‍♀️'
        case 'medium-light':
            return'⛹🏼‍♀️'
        case 'light':
            return'⛹🏻‍♀️'
        default:
            return'⛹️‍♀️'
    }
}

function personlifting_weights(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🏋🏿'
        case 'medium-dark':
            return'🏋🏾'
        case 'medium':
            return'🏋🏽'
        case 'medium-light':
            return'🏋🏼'
        case 'light':
            return'🏋🏻'
        default:
            return'🏋️'
    }
}

function manlifting_weights(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🏋🏿‍♂️'
        case 'medium-dark':
            return'🏋🏾‍♂️'
        case 'medium':
            return'🏋🏽‍♂️'
        case 'medium-light':
            return'🏋🏼‍♂️'
        case 'light':
            return'🏋🏻‍♂️'
        default:
            return'🏋️‍♂️'
    }
}

function womanlifting_weights(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🏋🏿‍♀️'
        case 'medium-dark':
            return'🏋🏾‍♀️'
        case 'medium':
            return'🏋🏽‍♀️'
        case 'medium-light':
            return'🏋🏼‍♀️'
        case 'light':
            return'🏋🏻‍♀️'
        default:
            return'🏋️‍♀️'
    }
}

function personbiking(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🚴🏿'
        case 'medium-dark':
            return'🚴🏾'
        case 'medium':
            return'🚴🏽'
        case 'medium-light':
            return'🚴🏼'
        case 'light':
            return'🚴🏻'
        default:
            return'🚴'
    }
}

function manbiking(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🚴🏿‍♂️'
        case 'medium-dark':
            return'🚴🏾‍♂️'
        case 'medium':
            return'🚴🏽‍♂️'
        case 'medium-light':
            return'🚴🏼‍♂️'
        case 'light':
            return'🚴🏻‍♂️'
        default:
            return'🚴‍♂️'
    }
}

function womanbiking(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🚴🏿‍♀️'
        case 'medium-dark':
            return'🚴🏾‍♀️'
        case 'medium':
            return'🚴🏽‍♀️'
        case 'medium-light':
            return'🚴🏼‍♀️'
        case 'light':
            return'🚴🏻‍♀️'
        default:
            return'🚴‍♀️'
    }
}

function personmountainbiking(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🚵🏿'
        case 'medium-dark':
            return'🚵🏾'
        case 'medium':
            return'🚵🏽'
        case 'medium-light':
            return'🚵🏼'
        case 'light':
            return'🚵🏻'
        default:
            return'🚵'
    }
}

function manmountainbiking(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🚵🏿‍♂️'
        case 'medium-dark':
            return'🚵🏾‍♂️'
        case 'medium':
            return'🚵🏽‍♂️'
        case 'medium-light':
            return'🚵🏼‍♂️'
        case 'light':
            return'🚵🏻‍♂️'
        default:
            return'🚵‍♂️'
    }
}

function womanmountainbiking(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🚵🏿‍♀️'
        case 'medium-dark':
            return'🚵🏾‍♀️'
        case 'medium':
            return'🚵🏽‍♀️'
        case 'medium-light':
            return'🚵🏼‍♀️'
        case 'light':
            return'🚵🏻‍♀️'
        default:
            return'🚵‍♀️'
    }
}

function personcartwheeling(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤸🏿'
        case 'medium-dark':
            return'🤸🏾'
        case 'medium':
            return'🤸🏽'
        case 'medium-light':
            return'🤸🏼'
        case 'light':
            return'🤸🏻'
        default:
            return'🤸'
    }
}

function mancartwheeling(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤸🏿‍♂️'
        case 'medium-dark':
            return'🤸🏾‍♂️'
        case 'medium':
            return'🤸🏽‍♂️'
        case 'medium-light':
            return'🤸🏼‍♂️'
        case 'light':
            return'🤸🏻‍♂️'
        default:
            return'🤸‍♂️'
    }
}

function womancartwheeling(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤸🏿‍♀️'
        case 'medium-dark':
            return'🤸🏾‍♀️'
        case 'medium':
            return'🤸🏽‍♀️'
        case 'medium-light':
            return'🤸🏼‍♀️'
        case 'light':
            return'🤸🏻‍♀️'
        default:
            return'🤸‍♀️'
    }
}

function personplaying_water_polo(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤽🏿'
        case 'medium-dark':
            return'🤽🏾'
        case 'medium':
            return'🤽🏽'
        case 'medium-light':
            return'🤽🏼'
        case 'light':
            return'🤽🏻'
        default:
            return'🤽'
    }
}

function manplaying_water_polo(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤽🏿‍♂️'
        case 'medium-dark':
            return'🤽🏾‍♂️'
        case 'medium':
            return'🤽🏽‍♂️'
        case 'medium-light':
            return'🤽🏼‍♂️'
        case 'light':
            return'🤽🏻‍♂️'
        default:
            return'🤽‍♂️'
    }
}

function womanplaying_water_polo(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤽🏿‍♀️'
        case 'medium-dark':
            return'🤽🏾‍♀️'
        case 'medium':
            return'🤽🏽‍♀️'
        case 'medium-light':
            return'🤽🏼‍♀️'
        case 'light':
            return'🤽🏻‍♀️'
        default:
            return'🤽‍♀️'
    }
}

function personplaying_handball(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤾🏿'
        case 'medium-dark':
            return'🤾🏾'
        case 'medium':
            return'🤾🏽'
        case 'medium-light':
            return'🤾🏼'
        case 'light':
            return'🤾🏻'
        default:
            return'🤾'
    }
}

function manplaying_handball(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤾🏿‍♂️'
        case 'medium-dark':
            return'🤾🏾‍♂️'
        case 'medium':
            return'🤾🏽‍♂️'
        case 'medium-light':
            return'🤾🏼‍♂️'
        case 'light':
            return'🤾🏻‍♂️'
        default:
            return'🤾‍♂️'
    }
}

function womanplaying_handball(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤾🏿‍♀️'
        case 'medium-dark':
            return'🤾🏾‍♀️'
        case 'medium':
            return'🤾🏽‍♀️'
        case 'medium-light':
            return'🤾🏼‍♀️'
        case 'light':
            return'🤾🏻‍♀️'
        default:
            return'🤾‍♀️'
    }
}

function personjuggling(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤹🏿'
        case 'medium-dark':
            return'🤹🏾'
        case 'medium':
            return'🤹🏽'
        case 'medium-light':
            return'🤹🏼'
        case 'light':
            return'🤹🏻'
        default:
            return'🤹'
    }
}

function manjuggling(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤹🏿‍♂️'
        case 'medium-dark':
            return'🤹🏾‍♂️'
        case 'medium':
            return'🤹🏽‍♂️'
        case 'medium-light':
            return'🤹🏼‍♂️'
        case 'light':
            return'🤹🏻‍♂️'
        default:
            return'🤹‍♂️'
    }
}

function womanjuggling(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🤹🏿‍♀️'
        case 'medium-dark':
            return'🤹🏾‍♀️'
        case 'medium':
            return'🤹🏽‍♀️'
        case 'medium-light':
            return'🤹🏼‍♀️'
        case 'light':
            return'🤹🏻‍♀️'
        default:
            return'🤹‍♀️'
    }
}

function personinlotus_position(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧘🏿'
        case 'medium-dark':
            return'🧘🏾'
        case 'medium':
            return'🧘🏽'
        case 'medium-light':
            return'🧘🏼'
        case 'light':
            return'🧘🏻'
        default:
            return'🧘'
    }
}

function maninlotus_position(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧘🏿‍♂️'
        case 'medium-dark':
            return'🧘🏾‍♂️'
        case 'medium':
            return'🧘🏽‍♂️'
        case 'medium-light':
            return'🧘🏼‍♂️'
        case 'light':
            return'🧘🏻‍♂️'
        default:
            return'🧘‍♂️'
    }
}

function womaninlotus_position(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧘🏿‍♀️'
        case 'medium-dark':
            return'🧘🏾‍♀️'
        case 'medium':
            return'🧘🏽‍♀️'
        case 'medium-light':
            return'🧘🏼‍♀️'
        case 'light':
            return'🧘🏻‍♀️'
        default:
            return'🧘‍♀️'
    }
}

function persontaking_bath(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🛀🏿'
        case 'medium-dark':
            return'🛀🏾'
        case 'medium':
            return'🛀🏽'
        case 'medium-light':
            return'🛀🏼'
        case 'light':
            return'🛀🏻'
        default:
            return'🛀'
    }
}

function personinbed(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🛌🏿'
        case 'medium-dark':
            return'🛌🏾'
        case 'medium':
            return'🛌🏽'
        case 'medium-light':
            return'🛌🏼'
        case 'light':
            return'🛌🏻'
        default:
            return'🛌'
    }
}

function people_holding_hands(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'🧑🏿‍🤝‍🧑🏿'
        case 'medium-dark':
            return'🧑🏾‍🤝‍🧑🏾'
        case 'medium':
            return'🧑🏽‍🤝‍🧑🏽'
        case 'medium-light':
            return'🧑🏼‍🤝‍🧑🏼'
        case 'light':
            return'🧑🏻‍🤝‍🧑🏻'
        default:
            return'🧑‍🤝‍🧑'
    }
}

function womenholding_hands(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👭🏿'
        case 'medium-dark':
            return'👭🏾'
        case 'medium':
            return'👭🏽'
        case 'medium-light':
            return'👭🏼'
        case 'light':
            return'👭🏻'
        default:
            return'👭'
    }
}

function womanand_manholding_hands(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👫🏿'
        case 'medium-dark':
            return'👫🏾'
        case 'medium':
            return'👫🏽'
        case 'medium-light':
            return'👫🏼'
        case 'light':
            return'👫🏻'
        default:
            return'👫'
    }
}

function menholding_hands(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👬🏿'
        case 'medium-dark':
            return'👬🏾'
        case 'medium':
            return'👬🏽'
        case 'medium-light':
            return'👬🏼'
        case 'light':
            return'👬🏻'
        default:
            return'👬'
    }
}

function kiss(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'💏🏿'
        case 'medium-dark':
            return'💏🏾'
        case 'medium':
            return'💏🏽'
        case 'medium-light':
            return'💏🏼'
        case 'light':
            return'💏🏻'
        default:
            return'💏'
    }
}

function kiss_womanman(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👩🏿‍❤️‍💋‍👨🏿'
        case 'medium-dark':
            return'👩🏾‍❤️‍💋‍👨🏾'
        case 'medium':
            return'👩🏽‍❤️‍💋‍👨🏽'
        case 'medium-light':
            return'👩🏼‍❤️‍💋‍👨🏼'
        case 'light':
            return'👩🏻‍❤️‍💋‍👨🏻'
        default:
            return'👩‍❤️‍💋‍👨'
    }
}

function kiss_manman(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👨🏿‍❤️‍💋‍👨🏿'
        case 'medium-dark':
            return'👨🏾‍❤️‍💋‍👨🏾'
        case 'medium':
            return'👨🏽‍❤️‍💋‍👨🏽'
        case 'medium-light':
            return'👨🏼‍❤️‍💋‍👨🏼'
        case 'light':
            return'👨🏻‍❤️‍💋‍👨🏻'
        default:
            return'👨‍❤️‍💋‍👨'
    }
}

function kiss_womanwoman(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👩🏿‍❤️‍💋‍👩🏿'
        case 'medium-dark':
            return'👩🏾‍❤️‍💋‍👩🏾'
        case 'medium':
            return'👩🏽‍❤️‍💋‍👩🏽'
        case 'medium-light':
            return'👩🏼‍❤️‍💋‍👩🏼'
        case 'light':
            return'👩🏻‍❤️‍💋‍👩🏻'
        default:
            return'👩‍❤️‍💋‍👩'
    }
}

function couple_with_heart(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'💑🏿'
        case 'medium-dark':
            return'💑🏾'
        case 'medium':
            return'💑🏽'
        case 'medium-light':
            return'💑🏼'
        case 'light':
            return'💑🏻'
        default:
            return'💑'
    }
}

function couple_with_heart_womanman(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👩🏿‍❤️‍👨🏿'
        case 'medium-dark':
            return'👩🏾‍❤️‍👨🏾'
        case 'medium':
            return'👩🏽‍❤️‍👨🏽'
        case 'medium-light':
            return'👩🏼‍❤️‍👨🏼'
        case 'light':
            return'👩🏻‍❤️‍👨🏻'
        default:
            return'👩‍❤️‍👨'
    }
}

function couple_with_heart_manman(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👨🏿‍❤️‍👨🏿'
        case 'medium-dark':
            return'👨🏾‍❤️‍👨🏾'
        case 'medium':
            return'👨🏽‍❤️‍👨🏽'
        case 'medium-light':
            return'👨🏼‍❤️‍👨🏼'
        case 'light':
            return'👨🏻‍❤️‍👨🏻'
        default:
            return'👨‍❤️‍👨'
    }
}

function couple_with_heart_womanwoman(tone: SkinTones) {
    switch(tone) {
        case 'dark':
            return'👩🏿‍❤️‍👩🏿'
        case 'medium-dark':
            return'👩🏾‍❤️‍👩🏾'
        case 'medium':
            return'👩🏽‍❤️‍👩🏽'
        case 'medium-light':
            return'👩🏼‍❤️‍👩🏼'
        case 'light':
            return'👩🏻‍❤️‍👩🏻'
        default:
            return'👩‍❤️‍👩'
    }
}

