'use strict'

let player;
// containers
const oliver_container_s1 = document.querySelector("#oliver_container_s1");
const oliver_container_s2 = document.querySelector("#oliver_container_s2");
const oliver_container_s4 = document.querySelector("#oliver_container_s4");
const oliver_container_s9 = document.querySelector("#oliver_container_s9");
const oliver_container_s9_smoking = document.querySelector("#oliver_container_s9_smoking");
const oliver_container_s10 = document.querySelector("#oliver_container_s10");
const oliver_container_s11 = document.querySelector("#oliver_container_s11");
const oliver_container_s12 = document.querySelector("#oliver_container_s12");
const oliver_container_s15 = document.querySelector("#oliver_container_s15");
const oliver_container_s16 = document.querySelector("#oliver_container_s16");
const oliver_container_s21 = document.querySelector("#oliver_container_s21");
const maria_container_s1 = document.querySelector("#maria_container_s1");
const maria_container_s4 = document.querySelector("#maria_container_s4");
const maria_container_s5 = document.querySelector("#maria_container_s5");
const maria_container_s9 = document.querySelector("#maria_container_s9");
const maria_container_s9_smoking = document.querySelector("#maria_container_s9_smoking");
const maria_container_s10 = document.querySelector("#maria_container_s10");
const maria_container_s11 = document.querySelector("#maria_container_s11");
const maria_container_s12 = document.querySelector("#maria_container_s12");
const maria_container_s15 = document.querySelector("#maria_container_s15");
const maria_container_s16 = document.querySelector("#maria_container_s16");
const maria_container_s17 = document.querySelector("#maria_container_s17");
const maria_container_s21 = document.querySelector("#maria_container_s21");
const sif_container_s2 = document.querySelector("#sif_container_s2");
const sif_container_s11 = document.querySelector("#sif_container_s11");
const sif_container_s12 = document.querySelector("#sif_container_s12");
const dance_people_container = document.querySelector("#dance_people_container");
const dance_people_container_s9 = document.querySelector("#dance_people_container_s9");
const william_container_s15 = document.querySelector("#william_container_s15");

// sprites
const oliver_sprite_s1 = document.querySelector("#oliver_sprite_s1");
const oliver_sprite_s2 = document.querySelector("#oliver_sprite_s2");
const oliver_sprite_s4 = document.querySelector("#oliver_sprite_s4");
const oliver_sprite_s9 = document.querySelector("#oliver_sprite_s9");
const oliver_sprite_s9_smoking = document.querySelector("#oliver_sprite_s9_smoking");
const oliver_sprite_s10 = document.querySelector("#oliver_sprite_s10");
const oliver_sprite_s11 = document.querySelector("#oliver_sprite_s11");
const oliver_sprite_s12 = document.querySelector("#oliver_sprite_s12");
const oliver_sprite_s15 = document.querySelector("#oliver_sprite_s15");
const oliver_sprite_s16 = document.querySelector("#oliver_sprite_s16");
const oliver_sprite_s17 = document.querySelector("#oliver_sprite_s17");
const oliver_sprite_s21 = document.querySelector("#oliver_sprite_s21");
const maria_sprite_s1 = document.querySelector("#maria_sprite_s1");
const maria_sprite_s4 = document.querySelector("#maria_sprite_s4");
const maria_sprite_s5 = document.querySelector("#maria_sprite_s5");
const maria_sprite_s9 = document.querySelector("#maria_sprite_s9");
const maria_sprite_s9_smoking = document.querySelector("#maria_sprite_s9_smoking");
const maria_sprite_s10 = document.querySelector("#maria_sprite_s10");
const maria_sprite_s11 = document.querySelector("#maria_sprite_s11");
const maria_sprite_s12 = document.querySelector("#maria_sprite_s12");
const maria_sprite_s15 = document.querySelector("#maria_sprite_s15");
const maria_sprite_s16 = document.querySelector("#maria_sprite_s16");
const maria_sprite_s21 = document.querySelector("#maria_sprite_s21");
const sif_sprite_s2 = document.querySelector("#sif_sprite_s2");
const sif_sprite_s11 = document.querySelector("#sif_sprite_s11");
const sif_sprite_s12 = document.querySelector("#sif_sprite_s12");
const sif_sprite_s15 = document.querySelector("#sif_sprite_s15");
const dance_people_sprite = document.querySelector("#dance_people_sprite");
const dance_people_sprite_s9 = document.querySelector("#dance_people_sprite_s9");
const william_sprite_s12 = document.querySelector("#william_sprite_s12");
const william_sprite_s15 = document.querySelector("#william_sprite_s15");

//scenes
const intro_scene = document.querySelector("#intro");
const livingroom = document.querySelector("#livingroom");
const door = document.querySelector("#door");
const kitchen = document.querySelector("#kitchen");
const kitchen_front = document.querySelector("#kitchen_front");
const schoolparty = document.querySelector("#schoolparty");
const choice_text_container_v2 = document.querySelector("#choice_text_container_v2");
const choice_text_container_v4 = document.querySelector("#choice_text_container_v4");
const choice_text_container_v3 = document.querySelector("#choice_text_container_v3");
const choice_text_container_v5 = document.querySelector("#choice_text_container_v5");
const choice_text_container_v6 = document.querySelector("#choice_text_container_v6");
const choice_text_container_v7 = document.querySelector("#choice_text_container_v7");
const choice_text_container_v8 = document.querySelector("#choice_text_container_v8");
const choice_text_container_v9 = document.querySelector("#choice_text_container_v9");
const choice_text_container_v10 = document.querySelector("#choice_text_container_v10");
const choice_text_container_v11 = document.querySelector("#choice_text_container_v11");
const choice_text_container_v12 = document.querySelector("#choice_text_container_v12");

// elements
const choice_v2_a = document.querySelector("#choice_v2_a");
const choice_v2_b = document.querySelector("#choice_v2_b");
const choice_v3_a = document.querySelector("#choice_v3_a");
const choice_v3_b = document.querySelector("#choice_v3_b");
const choice_v4_a = document.querySelector("#choice_v4_a");
const choice_v4_b = document.querySelector("#choice_v4_b");
const choice_v5_a = document.querySelector("#choice_v5_a");
const choice_v5_b = document.querySelector("#choice_v5_b");
const choice_v6_a = document.querySelector("#choice_v6_a");
const choice_v6_b = document.querySelector("#choice_v6_b");
const choice_v7_a = document.querySelector("#choice_v7_a");
const choice_v7_b = document.querySelector("#choice_v7_b");
const choice_v8_a = document.querySelector("#choice_v8_a");
const choice_v8_b = document.querySelector("#choice_v8_b");
const choice_v9_a = document.querySelector("#choice_v9_a");
const choice_v9_b = document.querySelector("#choice_v9_b");
const choice_v10_a = document.querySelector("#choice_v10_a");
const choice_v10_b = document.querySelector("#choice_v10_b");
const choice_v11_a = document.querySelector("#choice_v11_a");
const choice_v11_b = document.querySelector("#choice_v11_b");
const choice_v12_a = document.querySelector("#choice_v12_a");
const choice_v12_b = document.querySelector("#choice_v12_b");
const clock_animation = document.querySelector("#clock_container");

// sounds
const clock = document.getElementById("clock");
const private_party = document.querySelector("#private_party");
const choice_sound = document.getElementById("choiceSound");

// dialogs
const oliverBeerHandle = document.getElementById('oliver_beer');
const MariaYesHandle = document.getElementById('maria_yes');
const oliverHeySifHandle = document.getElementById('oliver_hey_sif');
const sifHeyOliverHandle = document.getElementById('sif_hey_oliver');
const mariaWhoHandle = document.getElementById('maria_who');
const oliverChillHandle = document.getElementById('oliver_chill');
const mariaWouldYouRatherHandle = document.getElementById('maria_would_you_rather');
const mariaWhereHaveYouBeenHandle = document.getElementById('maria_where_have_you_been');
const sifChillHandle = document.getElementById('sif_chill');
const oliverJealousHandle = document.getElementById('oliver_jealous');
const mariaNoSmokingHandle = document.getElementById('maria_no_smoking');
const mariaEnoughHandle = document.getElementById('maria_enough');
const mariaLetsGoHandle = document.getElementById('maria_lets_go_home');
const oliverOkHandle = document.getElementById('oliver_ok');
const mariaJealousHandle = document.getElementById('maria_jealous');
const oliverNotTrueHandle = document.getElementById('oliver_not_true');
const mariaGrowUpHandle = document.getElementById('maria_grow_up');
const oliverSorryHandle = document.getElementById('oliver_sorry');
const mariaBeWithYouHandle = document.getElementById('maria_be_with_you');
const mariaGoSifHandle = document.getElementById('maria_go_sif');
const mariaIDontSeeHandle = document.getElementById('maria_i_dont_see');
const oliverSeeNothingHandle = document.getElementById('oliver_see_nothing');
const mariaFlirtingHandle = document.getElementById('maria_flirting');
const oliverNoFlirtingHandle = document.getElementById('oliver_no_fllirting');
const mariaClothesHandle = document.getElementById('maria_clothes');
const oliverClothesHandle = document.getElementById('oliver_clothes');
const mariaBadBoyfriendHandle = document.getElementById('maria_bad_boyfriend');
const slapHandle = document.getElementById('slap');
const oliverBitchHandle = document.getElementById('oliver_bitch');
const oliverNiceHandle = document.getElementById('oliver_nice');
const oliverDeadFishHandle = document.getElementById('oliver_dead_fish');
const williamStopHandle = document.getElementById('william_stop');
const sifPsychoHandle = document.getElementById('sif_psycho');
const mariaYourFaultHandle = document.getElementById('maria_your_fault');
const williamDramaHandle = document.getElementById('william_drama');
const mariaOliverStopHandle = document.getElementById('maria_oliver_stop');
const williamControlHandle = document.getElementById('william_control');
const oliverInLoveHandle = document.getElementById('oliver_in_love');
const williamNotLoveHandle = document.getElementById('william_not_love');
const oliverJustALittleHandle = document.getElementById('oliver_just_a_little');
const oliverTalkAtHomeHandle = document.getElementById('oliver_talk_at_home');
const mariaOkayHandle = document.getElementById('maria_okay');
const mariaComeBabeHandle = document.getElementById('maria_come_babe');
const oliverYesHandle = document.getElementById('oliver_yes');
const oliverIToldYouHandle = document.getElementById('oliver_i_told_you');
const mariaNotCoolHandle = document.getElementById('maria_not_cool');
const oliverTalkingToSifHandle = document.getElementById('oliver_talking_to_sif');
const oliverPromiseHandle = document.getElementById('oliver_promise');
const oliverSorryBabeHandle = document.getElementById('oliver_sorry_babe');
const mariaStopSeeingSifHandle = document.getElementById('maria_stop_seeing_sif');
const oliverOldestFriendHandle = document.getElementById('oliver_oldest_friend');
const oliverWontChooseHandle = document.getElementById('oliver_wont_choose');
const mariaWhoMattersMoreHandle = document.getElementById('maria_who_matters_more');
const oliverNoMoreHandle = document.getElementById('oliver_no_more');

// solution to problem with sound not playing at iPhones found at https://stackoverflow.com/questions/3009888/autoplay-audio-files-on-an-ipad-with-html5?fbclid=IwAR2m33nMW2lEgrfbYDfICAySwkjAzO5bRtmmxuv7DppoiO8-0rjzWKmKPts
$(document).ready(function () {
    addEventListener('touchstart', function (e) {
        console.log("jQuery funktion")
        oliverBeerHandle.play();
        oliverBeerHandle.pause();
        MariaYesHandle.play();
        MariaYesHandle.pause();
        oliverHeySifHandle.play();
        oliverHeySifHandle.pause();
        sifHeyOliverHandle.play();
        sifHeyOliverHandle.pause();
        private_party.play();
        private_party.pause();
        mariaWhoHandle.play();
        mariaWhoHandle.pause();
        mariaWouldYouRatherHandle.play();
        mariaWouldYouRatherHandle.pause();
        mariaWhereHaveYouBeenHandle.play();
        mariaWhereHaveYouBeenHandle.pause();
        sifChillHandle.play();
        sifChillHandle.pause();
        oliverJealousHandle.play();
        oliverJealousHandle.pause();
        mariaNoSmokingHandle.play();
        mariaNoSmokingHandle.pause();
        mariaEnoughHandle.play();
        mariaEnoughHandle.pause();
        mariaLetsGoHandle.play();
        mariaLetsGoHandle.pause();
        oliverOkHandle.play();
        oliverOkHandle.pause();
        mariaJealousHandle.play();
        mariaJealousHandle.pause();
        oliverNotTrueHandle.play();
        oliverNotTrueHandle.pause();
        mariaGrowUpHandle.play();
        mariaGrowUpHandle.pause();
        oliverSorryHandle.play();
        oliverSorryHandle.pause();
        mariaBeWithYouHandle.play();
        mariaBeWithYouHandle.pause();
        mariaGoSifHandle.play();
        mariaGoSifHandle.pause();
        mariaIDontSeeHandle.play();
        mariaIDontSeeHandle.pause();
        oliverSeeNothingHandle.play();
        oliverSeeNothingHandle.pause();
        mariaFlirtingHandle.play();
        mariaFlirtingHandle.pause();
        oliverNoFlirtingHandle.play();
        oliverNoFlirtingHandle.pause();
        mariaClothesHandle.play();
        mariaClothesHandle.pause();
        oliverClothesHandle.play();
        oliverClothesHandle.pause();
        mariaBadBoyfriendHandle.play();
        mariaBadBoyfriendHandle.pause();
        slapHandle.play();
        slapHandle.pause();
        oliverBitchHandle.play();
        oliverBitchHandle.pause();
        oliverNiceHandle.play();
        oliverNiceHandle.pause();
        oliverDeadFishHandle.play();
        oliverDeadFishHandle.pause();
        williamStopHandle.play();
        williamStopHandle.pause();
        sifPsychoHandle.play();
        sifPsychoHandle.pause();
        mariaYourFaultHandle.play();
        mariaYourFaultHandle.pause();
        williamDramaHandle.play();
        williamDramaHandle.pause();
        mariaOliverStopHandle.play();
        mariaOliverStopHandle.pause();
        williamControlHandle.play();
        williamControlHandle.pause();
        oliverInLoveHandle.play();
        oliverInLoveHandle.pause();
        williamNotLoveHandle.play();
        williamNotLoveHandle.pause();
        oliverJustALittleHandle.play();
        oliverJustALittleHandle.pause();
        oliverTalkAtHomeHandle.play();
        oliverTalkAtHomeHandle.pause();
        mariaOkayHandle.play();
        mariaOkayHandle.pause();
        mariaComeBabeHandle.play();
        mariaComeBabeHandle.pause();
        oliverYesHandle.play();
        oliverYesHandle.pause();
        oliverIToldYouHandle.play();
        oliverIToldYouHandle.pause();
        mariaNotCoolHandle.play();
        mariaNotCoolHandle.pause();
        oliverTalkingToSifHandle.play();
        oliverTalkingToSifHandle.pause();
        oliverPromiseHandle.play();
        oliverPromiseHandle.pause();
        oliverSorryBabeHandle.play();
        oliverSorryBabeHandle.pause();
        mariaStopSeeingSifHandle.play();
        mariaStopSeeingSifHandle.pause();
        oliverOldestFriendHandle.play();
        oliverOldestFriendHandle.pause();
        oliverWontChooseHandle.play();
        oliverWontChooseHandle.pause();
        mariaWhoMattersMoreHandle.play();
        mariaWhoMattersMoreHandle.pause();
        oliverNoMoreHandle.play();
        oliverNoMoreHandle.pause();
    });
});

//clock fetch
document.addEventListener("DOMContentLoaded", getSvg);
window.addEventListener("DOMContentLoaded", intro);

async function getSvg() {
    let clock = await fetch("img/clock/ur.svg");
    let clockSvg = await clock.text();

    document.querySelector("#clock_container").innerHTML = clockSvg;
    clock_animation.classList.add("hide");
}

function intro() {
    intro_scene.addEventListener("click", prelude);
    clock_animation.classList.add("hide"); //keep
}

function prelude() {
    console.log("prelude");
    // remove intro scene
    intro_scene.classList.add("hide");
    document.querySelector("#prelude").classList.remove("hide");
    document.querySelector("#prelude_p").classList.add("prelude_fade");

    setTimeout("choosePlayer()", 5000);
    intro_scene.removeEventListener("click", prelude);
}

function choosePlayer() {
    console.log("choosePlayer");
    // Start sound: IntroMusic
    document.getElementById("intro_music").play();

    document.querySelector("#prelude").classList.add("hide");
}

// Remember player maria or oliver
function get_clicked_id(clicked_id) {
    player = clicked_id;
    // onChoice 1a eller 1b
    addEventListener("click", s1Party);
}

function s1Party() {
    console.log("s1Party");
    // clean-up
    document.getElementById("intro_music").pause();
    document.getElementById("titlepage").classList.add("hide");
    document.getElementById("oliver").classList.remove("bounce");
    document.getElementById("maria").classList.remove("bounce");

    // set scene
    livingroom.classList.remove("hide");
    door.classList.remove("hide");
    oliver_container_s1.classList.remove("hide");
    maria_container_s1.classList.remove("hide");
    dance_people_container.classList.remove("hide");
    dance_people_sprite.classList.add("dance_people_dancecycle");
    // Start sound: partySound
    private_party.play();

    removeEventListener("click", s1Party);
    setTimeout("s1OliverTalk()", 1500);
}

function s1OliverTalk() {
    console.log("s1OliverTalk");
    // Start anim: oliverTalkcycle
    oliver_sprite_s1.classList.add("oliver_talkcycle");
    // play sound: oliverBeer
    document.getElementById("oliver_beer").play();
    // sound: “oliverBeer” is done
    document.getElementById("oliver_beer").onended = function () {
        setTimeout("s1MariaTalk()", 500);
    }
}

function s1MariaTalk() {
    console.log("s1MariaTalk");
    // Stop anim: oliverTalkcycle
    oliver_sprite_s1.classList.remove("oliver_talkcycle");
    // Start anim: mariaTalkcycle
    maria_sprite_s1.classList.add("maria_talkcycle");
    // play sound: mariaYes
    document.getElementById("maria_yes").play();
    // sound: “mariaYes” is done
    document.getElementById("maria_yes").onended = () => {
        setTimeout("s1OliverWalk()", 500);
    }
}

function s1OliverWalk() {
    console.log("s1OliverWalk");
    // Stop anim: mariaTalkcycle
    maria_sprite_s1.classList.remove("maria_talkcycle");
    // Start anim: oliverWalkToKitchen
    oliver_container_s1.classList.add("oliver_walk_to_kitchen");
    // Start anim: oliverWalkcycle
    oliver_sprite_s1.classList.add("oliver_walkcycle");
    // Anim: “oliverWalkToKitchen” is done
    document.querySelector(".oliver_walk_to_kitchen").addEventListener("webkitAnimationEnd", checkPlayerS1);
}

function checkPlayerS1() {
    console.log("checkPlayer");
    // CheckVariable
    if (player == "oliver") {
        setKitchen();
        console.log(player);
    } else if (player == "maria") {
        s3();
    } else {
        alert("Noget gik galt prøv igen");
    }
    // remove eventlistner
    document.querySelector(".oliver_walk_to_kitchen").removeEventListener("webkitAnimationEnd", checkPlayerS1);
}

function setKitchen() {
    console.log("setKitchen");
    // clean-up
    dance_people_container.classList.add("hide");
    livingroom.classList.add("hide");
    door.classList.add("hide");
    maria_container_s1.classList.add("hide");
    maria_container_s1.classList.remove("maria_start_pos")
    oliver_container_s1.classList.add("hide");
    oliver_sprite_s1.classList.remove("oliver_walkcycle");
    // set scene
    kitchen.classList.remove("hide");
    kitchen_front.classList.remove("hide");
    oliver_container_s2.classList.remove("hide");
    oliver_container_s1.classList.remove("oliver_start_pos");
    oliver_container_s1.classList.remove("oliver_walk_to_kitchen");
    sif_container_s2.classList.remove("hide");
    // Start sound: partySound
    private_party.play();
    // Start anim: oliverWalkIntoKitchen
    oliver_container_s2.classList.add("oliver_walk_into_kitchen");
    // Start anim: oliverWalkcycle
    oliver_sprite_s2.classList.add("oliver_walkcycle");
    // Anim: “oliverWalkIntoKitchen” is done
    document.querySelector(".oliver_walk_into_kitchen").addEventListener("webkitAnimationEnd", s2kitchen);
}

function s2kitchen() {
    console.log("s2kitchen");
    // Stop anim: oliverWalkcycle
    oliver_sprite_s2.classList.remove("oliver_walkcycle");
    // Start anim: oliverTalkcycle
    oliver_sprite_s2.classList.add("oliver_talkcycle");
    // play sound: oliverHejSif
    document.getElementById("oliver_hey_sif").play();
    // sound: “oliverHejSif” is done
    document.getElementById("oliver_hey_sif").onended = function () {
        setTimeout("s2SifTalk()", 100);
    }
    // remove EventListener
    document.querySelector(".oliver_walk_into_kitchen").removeEventListener("webkitAnimationEnd", s2kitchen);
}

function s2SifTalk() {
    console.log("s2SifTalk");
    // Stop anim: oliverTalkcycle
    oliver_sprite_s2.classList.remove("oliver_talkcycle");
    // Start anim: sifTalkcycle
    sif_sprite_s2.classList.add("sif_talkcycle");
    // play sound: sifHejOliver
    document.getElementById("sif_hey_oliver").play();
    // sound: “sifHejOliver” is done
    document.getElementById("sif_hey_oliver").onended = function () {
        setTimeout("s2Clock()", 100);
    }
}

function s2Clock() {
    console.log("s2Clock");
    // Start anim: oliverTalkcycle
    oliver_sprite_s2.classList.add("oliver_talkcycle");
    // play sound: clock
    clock.play();
    clock.playbackRate = 3.0;
    // Start anim: clockTick
    clock_animation.classList.remove("hide");
    // sound: “clock” has played for 5 sec
    setTimeout("v2()", 5000);
}

function v2() {
    console.log("v2");
    // clean-up
    oliver_sprite_s2.classList.remove("oliver_talkcycle");
    sif_sprite_s2.classList.remove("sif_talkcycle");
    kitchen.classList.add("hide");
    kitchen_front.classList.add("hide");
    sif_container_s2.classList.add("hide");
    oliver_container_s2.classList.add("hide");
    // Stop anim: clockTick
    clock_animation.classList.add("hide");
    // Stop sound: clock
    clock.pause();
    // Stop sound: partySound
    private_party.pause();
    // play sound: choiceSound
    choice_sound.play();
    // show choice_scene
    choice_text_container_v2.classList.remove("hide");
    // onChoice 2a eller 2b
    choice_v2_a.addEventListener("click", s4OliverToMaria);
    choice_v2_b.addEventListener("click", s5MariaToOliver);
}

function s4OliverToMaria() {
    console.log("s4OliverToMaria");
    // Stop sound: choiceSound
    choice_sound.pause();
    // set scene
    choice_text_container_v2.classList.add("hide");
    choice_text_container_v3.classList.add("hide");
    livingroom.classList.remove("hide");
    door.classList.remove("hide");
    maria_container_s4.classList.remove("hide");
    oliver_container_s4.classList.remove("hide");
    dance_people_container.classList.remove("hide");
    // fade sound: partySound
    private_party.play();
    // Start anim: OliverWalkToMaria
    oliver_container_s4.classList.add("oliver_walk_into_livingroom");
    // Start anim: OliverWalkcycle
    oliver_sprite_s4.classList.add("oliver_walkcycle_right");
    // remove eventlistners
    choice_v2_a.removeEventListener("click", s4OliverToMaria);
    choice_v2_b.removeEventListener("click", s5MariaToOliver);
    // Anim: “OliverWalkToMaria” is done
    document.querySelector(".oliver_walk_into_livingroom").addEventListener("webkitAnimationEnd", s4MariaTalk);
}

function s4MariaTalk() {
    console.log("s4MariaTalk");
    // Stop anim: oliverWalkcycle
    oliver_sprite_s4.classList.remove("oliver_walkcycle_right");
    // Start anim: mariaTalkcycle
    maria_sprite_s4.classList.add("maria_talkcycle");
    // play sound: mariaWhyWho
    document.getElementById("maria_who").play();
    // turn off eventlister
    document.querySelector(".oliver_walk_into_livingroom").removeEventListener("webkitAnimationEnd", s4MariaTalk);
    // sound: “mariaWhyWho” is done
    document.getElementById("maria_who").onended = function () {
        setTimeout("s4OliverTalk()", 1000);
    }
}

function s4OliverTalk() {
    console.log("s4OliverTalk");
    // Stop anim: mariaTalkcycle
    maria_sprite_s4.classList.remove("maria_talkcycle");
    // Start anim: oliverTalkcycle
    oliver_sprite_s4.classList.add("oliver_talkcycle");
    // play sound: oliverChill
    document.getElementById("oliver_chill").play();
    // sound: “oliverChill” is done
    document.getElementById("oliver_chill").onended = function () {
        setTimeout("s4MariaTalkToOliver()", 1000);
    }
}

function s4MariaTalkToOliver() {
    console.log("s4MariaTalkToOliver");
    // Stop anim: oliverTalkcycle
    oliver_sprite_s4.classList.remove("oliver_talkcycle");
    // Start anim: mariaTalkcycle
    maria_sprite_s4.classList.add("maria_talkcycle");
    // play sound: mariaWouldYouRather
    document.getElementById("maria_would_you_rather").play();
    // sound: “mariaWouldYouRather” is done
    checkPlayerS4();
}

function checkPlayerS4() {
    console.log("checkPlayer");
    // CheckVariable
    if (player == "oliver") {
        document.getElementById("maria_would_you_rather").onended = function () {
            setTimeout("v4()", 1000);
        }
    } else if (player == "maria") {
        document.getElementById("maria_would_you_rather").onended = function () {
            setTimeout("s7OliverToMaria()", 1000);
        }
    } else {
        alert("Noget gik galt prøv igen");
    }
}

function v4() {
    console.log("v4");
    // clean-up
    maria_sprite_s1.classList.remove("maria_talkcycle");
    livingroom.classList.add("hide");
    door.classList.add("hide");
    oliver_container_s4.classList.add("hide");
    maria_container_s4.classList.add("hide");
    dance_people_container.classList.add("hide");
    // Stop sound: partySound
    private_party.pause();
    //add scene
    choice_text_container_v4.classList.remove("hide");
    // choice sound
    choice_sound.play();
    // on choice
    choice_v4_a.addEventListener("click", s8);
    choice_v4_b.addEventListener("click", s10);
}

function s5MariaToOliver() {
    console.log("s5MariaToOliver");
    // clean-up
    choice_text_container_v3.classList.add("hide");
    choice_text_container_v6.classList.add("hide");
    // Stop sound: choiceSound
    choice_sound.pause();
    choice_text_container_v2.classList.add("hide");
    // set scene
    kitchen.classList.remove("hide");
    kitchen_front.classList.remove("hide");
    oliver_container_s2.classList.remove("hide");
    oliver_container_s2.classList.remove("oliver_walk_into_kitchen");
    oliver_container_s2.classList.add("oliver_start_pos_kitchen");
    sif_container_s2.classList.remove("hide");
    // Start anim: mariaWalkToOlivers
    maria_container_s5.classList.remove("hide");
    maria_container_s5.classList.add("maria_walk_into_kitchen");
    // Start anim: mariaWalkcycle
    maria_sprite_s5.classList.add("maria_walkcycle");
    // Start sound: partySound
    private_party.play();
    // Anim: “mariaWalkToOliver” is done
    document.querySelector(".maria_walk_into_kitchen").addEventListener("webkitAnimationEnd", s5MariaTalk);
    // clean-up
    choice_v2_a.removeEventListener("click", s4OliverToMaria);
    choice_v2_b.removeEventListener("click", s5MariaToOliver);
}

function s5MariaTalk() {
    console.log("s5MariaTalk");
    // Stop anim: mariaWalkcycle
    maria_sprite_s5.classList.remove("maria_walkcycle");
    // Start anim: mariaTalkcycle
    maria_sprite_s5.classList.add("maria_talkcycle");
    // play sound: mariaWhere
    document.getElementById("maria_where_have_you_been").play();
    // sound: “mariaWhere” is done
    document.getElementById("maria_where_have_you_been").onended = function () {
        setTimeout("s5SifTalk()", 1000);
    }
    document.querySelector(".maria_walk_into_kitchen").removeEventListener("webkitAnimationEnd", s5MariaTalk);
}

function s5SifTalk() {
    console.log("s5SifTalk");
    // Stop anim: mariaTalkcycle
    maria_sprite_s5.classList.remove("maria_talkcycle");
    // Start anim: sifTalkcycle
    sif_sprite_s2.classList.add("sif_talkcycle");
    // play sound: sifChill
    document.getElementById("sif_chill").play();
    // sound: “sifChill” is done
    document.getElementById("sif_chill").onended = function () {
        setTimeout("checkPlayers5()", 1000);
    }
}

function checkPlayers5() {
    console.log("checkPlayers5");
    // CheckVariable
    if (player == "maria") {
        v6();
    } else if (player == "oliver") {
        v5();
    } else {
        alert("Noget gik galt prøv igen");
    }
}

function v5() {
    console.log("v5");
    // remove scene
    kitchen.classList.add("hide");
    kitchen_front.classList.add("hide");
    oliver_container_s2.classList.add("hide");
    maria_container_s5.classList.add("hide");
    sif_container_s2.classList.add("hide");
    private_party.pause();
    // Stop anim: sifTalkcycle
    sif_sprite_s2.classList.remove("sif_talkcycle");
    // set scene
    choice_text_container_v5.classList.remove("hide");
    // play sound: choiceSound
    choice_sound.play();
    // on choice
    choice_v5_a.addEventListener("click", s10);
    choice_v5_b.addEventListener("click", s11);
}

function s3() {
    console.log("s3");
    // set scene
    livingroom.classList.remove("hide");
    door.classList.remove("hide");
    maria_container_s1.classList.remove("hide");
    maria_container_s1.classList.add("maria_start_pos");
    // Start anim: bgDancecycle
    dance_people_container.classList.remove("hide");
    // Start sound: partySound
    private_party.play();
    // sound: “partySound” has played for 1.5 sec
    setTimeout("s3MariaWaiting()", 1500);
}

function s3MariaWaiting() {
    console.log("s3MariaWaiting");
    // Start anim: clockTick
    clock_animation.classList.remove("hide");
    // play sound: clock
    clock.play();
    clock.playbackRate = 3.0;
    // sound: “clock” has played for 5 sec
    setTimeout("v3()", 5000);
}

function v3() {
    console.log("v3");
    // clean-up
    // Stop anim: bgDancecycle
    dance_people_container.classList.add("hide");
    // Stop sound: partySound
    private_party.pause();
    // hide livingroom
    livingroom.classList.add("hide");
    door.classList.add("hide");
    // hide Maria
    maria_container_s1.classList.add("hide");
    maria_container_s1.classList.remove("maria_start_pos")
    // hide Oliver
    oliver_container_s1.classList.add("hide");
    oliver_sprite_s1.classList.remove("oliver_walkcycle");
    // Stop anim: clockTick
    clock_animation.classList.add("hide");
    // Stop sound: clock
    clock.pause();
    // set scene
    choice_text_container_v3.classList.remove("hide");
    // play sound: choiceSound
    choice_sound.play();
    // on choice
    choice_v3_a.addEventListener("click", s5MariaToOliver);
    choice_v3_b.addEventListener("click", s4OliverToMaria);
}

function v6() {
    console.log("v6");
    // clean-up
    kitchen.classList.add("hide");
    kitchen_front.classList.add("hide");
    oliver_container_s2.classList.add("hide");
    maria_container_s5.classList.add("hide");
    sif_container_s2.classList.add("hide");
    private_party.pause();
    // set scene
    choice_text_container_v6.classList.remove("hide");
    // play sound: choiceSound
    choice_sound.play();
    // on choice
    choice_v6_a.addEventListener("click", s12);
    choice_v6_b.addEventListener("click", s15MariaHits);
}

function s7OliverToMaria() {
    console.log("s7OliverToMaria");
    // clean-up
    choice_text_container_v3.classList.add("hide");
    choice_sound.pause();
    private_party.play();
    // Stop anim: mariaTalkcycle
    maria_sprite_s4.classList.remove("maria_talkcycle");
    // Start anim: oliverTalkcycle
    oliver_sprite_s4.classList.add("oliver_talkcycle");
    // play sound: oliverJealous
    document.getElementById("oliver_jealous").play();
    // sound: oliver_jealous is done
    document.getElementById("oliver_jealous").onended = function () {
        setTimeout("v7()", 1000);
    }
}

function v7() {
    console.log("v7");
    // clean-up
    livingroom.classList.add("hide");
    door.classList.add("hide");
    oliver_container_s4.classList.add("hide");
    maria_container_s4.classList.add("hide");
    dance_people_container.classList.add("hide");
    // Stop sound: partySound
    private_party.pause();
    choice_text_container_v7.classList.remove("hide");
    // play sound: choiceSound
    choice_sound.play();
    // on choice
    choice_v7_a.addEventListener("click", s16);
    choice_v7_b.addEventListener("click", s17);
}

function s8() {
    console.log("s8");
    // clean-up v4 and v9
    choice_text_container_v4.classList.add("hide");
    choice_text_container_v9.classList.add("hide");
    // clean-up s12
    kitchen.classList.add("hide");
    kitchen_front.classList.add("hide");
    oliver_container_s12.classList.add("hide");
    sif_container_s12.classList.add("hide");
    maria_container_s12.classList.add("hide");
    private_party.pause();
    oliver_sprite_s12.classList.add("oliver_talkcycle");
    // show sign schoolparty
    document.querySelector("#later_container").classList.remove("hide");
    document.querySelector("#later").classList.add("later_fade");
    // turn off sound choice
    choice_sound.pause();
    // go to s9
    setTimeout("s9()", 5000);
}

function s9() {
    console.log("s9");
    // clean-up
    document.querySelector("#later_container").classList.add("hide");
    // set scene
    private_party.play();
    schoolparty.classList.remove("hide");
    document.querySelector("#party_bg").classList.remove("hide");
    dance_people_container_s9.classList.remove("hide");
    maria_container_s9.classList.remove("hide");
    maria_sprite_s9.classList.add("maria_talkcycle");
    oliver_container_s9.classList.remove("hide");
    oliver_sprite_s9.classList.add("oliver_smoking");
    document.querySelector("#shadow_container_s9").classList.remove("hide");
    setTimeout("s9NoSmoking()", 5000);
}

function s9NoSmoking() {
    //    clean up
    schoolparty.classList.add("hide");
    document.querySelector("#party_bg").classList.add("hide");
    dance_people_container_s9.classList.remove("dance_people_start_pos_s9");
    dance_people_container_s9.classList.add("dance_people_start_pos_s9_smoking");
    maria_container_s9.classList.add("hide");
    maria_sprite_s9.classList.remove("maria_talkcycle");
    dance_people_container.classList.add("hide");
    document.querySelector("#shadow_container_s9").classList.add("hide");
    private_party.pause();
    // set scene
    oliver_container_s9_smoking.classList.remove("hide");
    oliver_sprite_s9_smoking.classList.add("oliver_smoking");
    maria_container_s9_smoking.classList.remove("hide");
    maria_container_s9_smoking.classList.add("maria_start_pos_s9_smoking");
    maria_sprite_s9_smoking.classList.add("maria_talkcycle");
    document.querySelector("#light_blue").classList.remove("hide");
    document.querySelector("#light_green").classList.remove("hide");
    document.querySelector("#light_purple").classList.remove("hide");
    document.querySelector("#smokingarea_bg").classList.remove("hide");
    document.querySelector("#smokingarea").classList.remove("hide");
    // maria talks
    document.getElementById("maria_no_smoking").play();
    //on to choice
    document.getElementById("maria_no_smoking").onended = function () {
        setTimeout("checkPlayerS9()", 1000);
    }
}

function checkPlayerS9() {
    console.log("checkPlayer");
    // CheckVariable
    if (player == "oliver") {
        v8();
        console.log(player);
    } else if (player == "maria") {
        s14();
    } else {
        alert("Noget gik galt prøv igen");
    }
}

function v8() {
    console.log("v8")
    // clean-up
    maria_container_s9_smoking.classList.add("hide");
    maria_container_s9_smoking.classList.remove("maria_start_pos_s9_smoking");
    maria_sprite_s9_smoking.classList.remove("maria_talkcycle");
    document.querySelector("#light_blue").classList.add("hide");
    document.querySelector("#light_green").classList.add("hide");
    document.querySelector("#light_purple").classList.add("hide");
    document.querySelector("#smokingarea_bg").classList.add("hide");
    document.querySelector("#smokingarea").classList.add("hide");
    oliver_container_s9.classList.add("hide");
    oliver_container_s9_smoking.classList.add("hide");
    dance_people_container_s9.classList.add("hide");
    // set scene
    choice_text_container_v8.classList.remove("hide");
    // play sound: choiceSound
    choice_sound.play();
    // on choice
    choice_v8_a.addEventListener("click", s18);
    choice_v8_b.addEventListener("click", s19);
}

function s10() {
    console.log("s10");
    // clean-up v4 and v5
    choice_text_container_v4.classList.add("hide");
    choice_sound.pause();
    choice_text_container_v5.classList.add("hide");
    // set scene
    livingroom.classList.remove("hide");
    door.classList.remove("hide");
    dance_people_container.classList.remove("hide");
    oliver_container_s10.classList.remove("hide");
    oliver_container_s10.classList.add("oliver_start_pos");
    maria_container_s10.classList.remove("hide");
    maria_sprite_s10.classList.add("maria_talkcycle");
    document.querySelector("#maria_jealous").play();
    // start sound: partySound
    private_party.play();
    // sound: maria_jealous is done
    document.getElementById("maria_jealous").onended = function () {
        setTimeout("s10OliverTalkes()", 50);
    };
}

function s10OliverTalkes() {
    console.log("s10OliverTalkes");
    maria_sprite_s10.classList.remove("maria_talkcycle");
    oliver_sprite_s10.classList.add("oliver_talkcycle");
    document.querySelector("#oliver_not_true").play();
    // sound: oliver_not_true is done
    document.getElementById("oliver_not_true").onended = function () {
        setTimeout("s10MariaTalkes()", 100);
    };
}

function s10MariaTalkes() {
    console.log("s10MariaTalkes");
    maria_sprite_s10.classList.add("maria_talkcycle");
    oliver_sprite_s10.classList.remove("oliver_talkcycle");
    document.querySelector("#maria_grow_up").play();
    // sound: maria_grow_up is done
    document.getElementById("maria_grow_up").onended = function () {
        setTimeout("s10MariaWalkesOut()", 100);
    };
}

function s10MariaWalkesOut() {
    console.log("s10MariaWalkesOut");
    maria_sprite_s10.classList.remove("maria_talkcycle");
    maria_container_s10.classList.add("maria_storms_out");
    maria_sprite_s10.classList.add("maria_walkcycle");
    // Anim: maria_storms_outcycle is done
    document.querySelector(".maria_storms_out").addEventListener("webkitAnimationEnd", v9);
}

function v9() {
    console.log("v9")
    // clean-up
    livingroom.classList.add("hide");
    door.classList.add("hide");
    dance_people_container.classList.add("hide");
    oliver_container_s10.classList.add("hide");
    maria_container_s10.classList.add("hide");
    // set scene
    choice_text_container_v9.classList.remove("hide");
    // play sound: choiceSound
    choice_sound.play();
    // on choice
    choice_v9_a.addEventListener("click", s8);
    choice_v9_b.addEventListener("click", s21);
}

function s11() {
    console.log("s11");
    // clean-up
    choice_text_container_v5.classList.add("hide");
    choice_sound.pause();
    // set scene
    kitchen.classList.remove("hide");
    kitchen_front.classList.remove("hide");
    oliver_container_s11.classList.remove("hide");
    oliver_container_s11.classList.add("oliver_start_pos_s11");
    maria_container_s11.classList.remove("hide");
    maria_container_s11.classList.remove("maria_walk_into_kitchen");
    maria_container_s11.classList.add("maria_start_pos_s11");
    sif_container_s11.classList.remove("hide");
    private_party.play();
    // maria talks
    maria_sprite_s11.classList.add("maria_talkcycle");
    document.querySelector("#maria_go_sif").play();
    // sound: maria_go_sif is done
    document.getElementById("maria_go_sif").onended = function () {
        setTimeout("s11SifWalkes()", 500);
    };
}

function s11SifWalkes() {
    console.log("v11SifWalkes");
    // clean-up
    maria_sprite_s11.classList.remove("maria_talkcycle");
    sif_container_s11.classList.add("sif_walk_out_of_kitchen");
    // Anim: maria_storms_outcycle is done
    document.querySelector(".sif_walk_out_of_kitchen").addEventListener("webkitAnimationEnd", s11MariaTalk);
}

function s11MariaTalk() {
    console.log("s11MariaTalk");
    maria_sprite_s11.classList.add("maria_talkcycle");
    document.querySelector("#maria_i_dont_see").play();
    document.getElementById("maria_i_dont_see").onended = function () {
        setTimeout("s11OliverTalk()", 500);
    };
}

function s11OliverTalk() {
    console.log("s11OliverTalk");
    // clean-up
    maria_sprite_s11.classList.remove("maria_talkcycle");
    oliver_sprite_s11.classList.add("oliver_talkcycle");
    document.querySelector("#oliver_see_nothing").play();
    document.getElementById("oliver_see_nothing").onended = function () {
        setTimeout("s11MariaTalk2()", 10);
    };
}

function s11MariaTalk2() {
    console.log("s11MariaTalk2");
    oliver_sprite_s11.classList.remove("oliver_talkcycle");
    maria_sprite_s11.classList.add("maria_talkcycle");
    document.querySelector("#maria_flirting").play();
    document.getElementById("maria_flirting").onended = function () {
        setTimeout("s11OliverTalk2()", 500);
    };
}

function s11OliverTalk2() {
    console.log("s11OliverTalk2");
    oliver_sprite_s11.classList.add("oliver_talkcycle");
    maria_sprite_s11.classList.remove("maria_talkcycle");
    document.querySelector("#oliver_no_fllirting").play();
    document.getElementById("oliver_no_fllirting").onended = function () {
        setTimeout("s11MariaTalk3()", 500);
    };
}

function s11MariaTalk3() {
    console.log("s11MariaTalk3");
    oliver_sprite_s11.classList.remove("oliver_talkcycle");
    maria_sprite_s11.classList.add("maria_talkcycle");
    document.querySelector("#maria_clothes").play();
    document.getElementById("maria_clothes").onended = function () {
        setTimeout("s11OliverTalk3()", 500);
    };
}

function s11OliverTalk3() {
    console.log("s11OliverTalk3");
    oliver_sprite_s11.classList.add("oliver_talkcycle");
    maria_sprite_s11.classList.remove("maria_talkcycle");
    document.querySelector("#oliver_clothes").play();
    document.getElementById("oliver_clothes").onended = function () {
        setTimeout("s11MariaTalk4()", 500);
    };
}

function s11MariaTalk4() {
    console.log("s11MariaTalk4");
    oliver_sprite_s11.classList.remove("oliver_talkcycle");
    maria_sprite_s11.classList.add("maria_talkcycle");
    document.querySelector("#maria_bad_boyfriend").play();
    document.getElementById("maria_bad_boyfriend").onended = function () {
        setTimeout("s11OliverTalk4()", 500);
    };
}

function s11OliverTalk4() {
    console.log("s11OliverTalk4");
    oliver_sprite_s11.classList.add("oliver_talkcycle");
    maria_sprite_s11.classList.remove("maria_talkcycle");
    document.querySelector("#oliver_bitch").play();
    document.getElementById("oliver_bitch").onended = function () {
        setTimeout("s11MariaSlap()", 500);
    };
}

function s11MariaSlap() {
    console.log("s11MariaSlap");
    // clean-up
    oliver_sprite_s11.classList.remove("oliver_talkcycle");
    maria_container_s11.classList.add("hide");
    oliver_sprite_s11.classList.add("oliver_slap");
    document.querySelector("#slap").play();
    setTimeout("s11OliverSlapBack()", 2000);
}

function s11OliverSlapBack() {
    console.log("s11OliverSlapBack");
    oliver_container_s11.classList.add("hide");
    maria_container_s11.classList.remove("hide");
    maria_container_s11.classList.remove("maria_start_pos_s11");
    maria_container_s11.classList.add("slap_pos");
    maria_sprite_s11.classList.add("maria_slap");
    document.querySelector("#slap").play();
    setTimeout("theEnd()", 2000);
}

function s12() {
    console.log("s12");
    // clean-up
    choice_text_container_v6.classList.add("hide");
    choice_sound.pause();
    // set scene
    private_party.play();
    kitchen.classList.remove("hide");
    kitchen_front.classList.remove("hide");
    oliver_container_s12.classList.remove("hide");
    oliver_container_s12.classList.add("oliver_start_pos_kitchen");
    sif_container_s12.classList.remove("hide");
    maria_container_s12.classList.remove("hide");
    maria_container_s12.classList.add("maria_start_pos_s11");
    oliver_sprite_s12.classList.add("oliver_talkcycle");
    document.querySelector("#oliver_nice").play();
    document.getElementById("oliver_nice").onended = function () {
        setTimeout("s12OliverMariaWalkOut()", 500);
    };
}

function s12OliverMariaWalkOut() {
    console.log("s12OliverMariaWalkOut");
    // clean-up
    oliver_sprite_s12.classList.remove("oliver_talkcycle");
    maria_container_s12.classList.add("maria_walk_out_of_kitchen");
    oliver_container_s12.classList.add("oliver_walk_out_of_kitchen");
    document.querySelector(".oliver_walk_out_of_kitchen").addEventListener("webkitAnimationEnd", s8);
}

function s14() {
    console.log("s14");
    // clean-up
    maria_sprite_s9_smoking.classList.remove("maria_talkcycle");
    oliver_sprite_s9_smoking.classList.remove("oliver_smoking");
    oliver_sprite_s9_smoking.classList.add("oliver_talkcycle");
    document.querySelector("#oliver_dead_fish").play();
    document.getElementById("oliver_dead_fish").onended = function () {
        setTimeout("v10()", 500);
    };
}

function v10() {
    console.log("v10");
    // clean-up
    maria_container_s9_smoking.classList.add("hide");
    document.querySelector("#light_blue").classList.add("hide");
    document.querySelector("#light_green").classList.add("hide");
    document.querySelector("#light_purple").classList.add("hide");
    document.querySelector("#smokingarea_bg").classList.add("hide");
    document.querySelector("#smokingarea").classList.add("hide");
    oliver_container_s9_smoking.classList.add("hide");
    oliver_container_s9.classList.add("hide");
    dance_people_container_s9.classList.add("hide");
    // set scene
    choice_text_container_v10.classList.remove("hide");
    // play sound: choiceSound
    choice_sound.play();
    // on choice
    choice_v10_a.addEventListener("click", s22);
    choice_v10_b.addEventListener("click", s22);
}

function s15MariaHits() {
    console.log("s15MariaHits");
    // clean-up
    choice_text_container_v6.classList.add("hide");
    choice_sound.pause();
    // set scene
    kitchen.classList.remove("hide");
    kitchen_front.classList.remove("hide");
    private_party.play();
    //ADD IMG OF MARIA HIT SIF
    document.querySelector("#maria_hits_sif").classList.remove("hide");
    document.querySelector("#slap").play();
    setTimeout("s15SifHits()", 2000);
}

function s15SifHits() {
    console.log("s15SifHits");
    //clean-up
    document.querySelector("#maria_hits_sif").classList.add("hide");
    document.querySelector("#sif_hits_maria").classList.remove("hide");
    document.querySelector("#slap").play();
    setTimeout("s15WilliamWalk()", 2000);
}

function s15WilliamWalk() {
    console.log("s15WilliamWalk");
    // clean-up
    document.querySelector("#sif_hits_maria").classList.add("hide");
    // set scene
    oliver_container_s15.classList.remove("hide");
    oliver_container_s15.classList.add("oliver_start_pos_s15");
    maria_container_s15.classList.remove("hide");
    maria_container_s15.classList.add("maria_start_pos_s15");
    sif_container_s15.classList.remove("hide");
    sif_container_s15.classList.add("sif_start_pos_s15");
    william_container_s15.classList.remove("hide");
    william_container_s15.classList.add("william_walk_into_kitchen");
    document.querySelector("#william_stop").play();
    document.querySelector(".william_walk_into_kitchen").addEventListener("webkitAnimationEnd", s15SifTalk);
}

function s15SifTalk() {
    console.log("s15SifTalk");
    sif_sprite_s15.classList.add("sif_talkcycle");
    document.querySelector("#sif_psycho").play();
    document.getElementById("sif_psycho").onended = function () {
        setTimeout("s15SifWalk()", 500);
    };
}

function s15SifWalk() {
    console.log("s15SifWalk");
    // clean-up
    sif_sprite_s15.classList.remove("sif_talkcycle");
    sif_container_s15.classList.add("sif_walk_out_of_kitchen");
    document.querySelector(".sif_walk_out_of_kitchen").addEventListener("webkitAnimationEnd", s15MariaTalk1);
}

function s15MariaTalk1() {
    console.log("s15MariaTalk1");
    maria_sprite_s15.classList.add("maria_talkcycle");
    document.querySelector("#maria_your_fault").play();
    document.getElementById("maria_your_fault").onended = function () {
        setTimeout("s15WilliamTalk1()", 500);
    };
}

function s15WilliamTalk1() {
    console.log("s15WilliamTalk1");
    // clean-up
    maria_sprite_s15.classList.remove("maria_talkcycle");
    document.querySelector("#william_drama").play();
    document.getElementById("william_drama").onended = function () {
        setTimeout("s15MariaTalk2()", 500);
    };
}

function s15MariaTalk2() {
    console.log("s15MariaTalk2");
    maria_sprite_s15.classList.add("maria_talkcycle");
    document.querySelector("#maria_oliver_stop").play();
    document.getElementById("maria_oliver_stop").onended = function () {
        setTimeout("s15WilliamTalk2()", 500);
    };
}

function s15WilliamTalk2() {
    console.log("s15WilliamTalk2");
    // clean-up
    maria_sprite_s15.classList.remove("maria_talkcycle");
    document.querySelector("#william_control").play();
    document.getElementById("william_control").onended = function () {
        setTimeout("s15OliverTalk()", 500);
    };
}

function s15OliverTalk() {
    console.log("s15OliverTalk");
    oliver_sprite_s15.classList.add("oliver_talkcycle");
    document.querySelector("#oliver_in_love").play();
    document.getElementById("oliver_in_love").onended = function () {
        setTimeout("s15WilliamTalk3()", 500);
    };
}

function s15WilliamTalk3() {
    console.log("s15WilliamTalk3");
    oliver_sprite_s15.classList.remove("oliver_talkcycle");
    document.querySelector("#william_not_love").play();
    document.getElementById("william_not_love").onended = function () {
        setTimeout("v11()", 500);
    };
}

function v11() {
    console.log("v11");
    // clean-up
    kitchen.classList.add("hide");
    kitchen_front.classList.add("hide");
    oliver_container_s15.classList.add("hide");
    maria_container_s15.classList.add("hide");
    sif_container_s15.classList.add("hide");
    william_container_s15.classList.add("hide");
    private_party.pause();
    // set scene
    choice_text_container_v11.classList.remove("hide");
    // play sound: choiceSound
    choice_sound.play();
    // on choice
    choice_v11_a.addEventListener("click", s23);
    choice_v11_b.addEventListener("click", s24);
}

function s16() {
    console.log("s16");
    // clean-up
    choice_text_container_v7.classList.add("hide");
    choice_sound.pause();
    // set scene
    private_party.play();
    livingroom.classList.remove("hide");
    door.classList.remove("hide");
    dance_people_container.classList.remove("hide");
    oliver_container_s16.classList.remove("hide");
    oliver_container_s16.classList.add("oliver_start_pos");
    maria_container_s16.classList.remove("hide");
    oliver_sprite_s16.classList.add("oliver_talkcycle");
    document.querySelector("#oliver_i_told_you").play();
    document.getElementById("oliver_i_told_you").onended = function () {
        setTimeout("s16MariaTalk()", 1000);
    };
}

function s16MariaTalk() {
    console.log("s16MariaTalk");
    oliver_sprite_s16.classList.remove("oliver_talkcycle");
    maria_sprite_s16.classList.add("maria_talkcycle");
    document.querySelector("#maria_not_cool").play();
    document.getElementById("maria_not_cool").onended = function () {
        setTimeout("s16OliverTalk()", 1000);
    };
}

function s16OliverTalk() {
    console.log("s16OliverTalk");
    maria_sprite_s16.classList.remove("maria_talkcycle");
    oliver_sprite_s16.classList.add("oliver_talkcycle");
    document.querySelector("#oliver_talking_to_sif").play();
    document.getElementById("oliver_talking_to_sif").onended = function () {
        setTimeout("v12()", 1000);
    };
}

function v12() {
    console.log("v12");
    // clean-up
    livingroom.classList.add("hide");
    door.classList.add("hide");
    dance_people_container.classList.add("hide");
    oliver_container_s16.classList.add("hide");
    maria_container_s17.classList.add("hide");
    maria_container_s16.classList.add("hide");
    private_party.pause();
    // set scene
    choice_text_container_v12.classList.remove("hide");
    // play sound: choiceSound
    choice_sound.play();
    // on choice
    choice_v12_a.addEventListener("click", s25);
    choice_v12_b.addEventListener("click", s26);
}

function s17() {
    console.log("s17");
    // clean-up
    choice_text_container_v7.classList.add("hide");
    choice_sound.pause();
    // set scene
    private_party.play();
    livingroom.classList.remove("hide");
    door.classList.remove("hide");
    dance_people_container.classList.remove("hide");
    oliver_container_s16.classList.remove("hide");
    oliver_container_s16.classList.add("oliver_start_pos");
    maria_container_s17.classList.remove("hide");
    oliver_sprite_s16.classList.add("oliver_talkcycle");
    document.querySelector("#oliver_sorry_babe").play();
    document.getElementById("oliver_sorry_babe").onended = function () {
        setTimeout("s17MariaTalk()", 1000);
    };
}

function s17MariaTalk() {
    console.log("s17MariaTalk");
    oliver_sprite_s16.classList.remove("oliver_talkcycle");
    maria_sprite_s17.classList.add("maria_talkcycle");
    document.querySelector("#maria_stop_seeing_sif").play();
    document.getElementById("maria_stop_seeing_sif").onended = function () {
        setTimeout("s17OliverTalk()", 1000);
    };
}

function s17OliverTalk() {
    console.log("s17OliverTalk");
    maria_sprite_s17.classList.remove("maria_talkcycle");
    oliver_sprite_s16.classList.add("oliver_talkcycle");
    document.querySelector("#oliver_oldest_friend").play();
    document.getElementById("oliver_oldest_friend").onended = function () {
        setTimeout("v12()", 1000);
    };
}

function s18() {
    console.log("s18");
    // clean-up
    choice_text_container_v8.classList.add("hide");
    choice_sound.pause();
    // set scene
    maria_container_s9_smoking.classList.remove("hide");
    maria_container_s9_smoking.classList.add("maria_start_pos_s9_smoking");
    maria_sprite_s9_smoking.classList.add("maria_talkcycle");
    oliver_container_s9_smoking.classList.remove("hide");
    document.querySelector("#light_blue").classList.remove("hide");
    document.querySelector("#light_green").classList.remove("hide");
    document.querySelector("#light_purple").classList.remove("hide");
    document.querySelector("#smokingarea_bg").classList.remove("hide");
    document.querySelector("#smokingarea").classList.remove("hide");
    // maria talkes
    document.getElementById("maria_enough").play();
    document.getElementById("maria_enough").onended = function () {
        setTimeout("s18OliverTalk()", 1000);
    }
}

function s18OliverTalk() {
    console.log("s18OliverTalk");
    // clean-up
    maria_sprite_s9_smoking.classList.remove("maria_talkcycle");
    oliver_sprite_s9_smoking.classList.add("oliver_talkcycle");
    document.getElementById("oliver_no_more").play();
    document.getElementById("oliver_no_more").onended = function () {
        setTimeout("theEnd()", 1000);
    }
}

function s19() {
    console.log("s19");
    // clean-up
    choice_text_container_v8.classList.add("hide");
    choice_sound.pause();
    // set scene
    maria_container_s9_smoking.classList.remove("hide");
    maria_container_s9_smoking.classList.add("maria_start_pos_s9_smoking");
    maria_sprite_s9_smoking.classList.add("maria_talkcycle");
    oliver_container_s9_smoking.classList.remove("hide");
    document.querySelector("#light_blue").classList.remove("hide");
    document.querySelector("#light_green").classList.remove("hide");
    document.querySelector("#light_purple").classList.remove("hide");
    document.querySelector("#smokingarea_bg").classList.remove("hide");
    document.querySelector("#smokingarea").classList.remove("hide");
    // maria talkes
    document.getElementById("maria_lets_go_home").play();
    document.getElementById("maria_lets_go_home").onended = function () {
        setTimeout("s19OliverTalks()", 1000);
    }
}

function s19OliverTalks() {
    console.log("s19OliverTalks");
    // clean-up
    maria_sprite_s9_smoking.classList.remove("maria_talkcycle");
    oliver_sprite_s9_smoking.classList.remove("oliver_smoking");
    oliver_sprite_s9_smoking.classList.add("oliver_talkcycle");
    document.getElementById("oliver_ok").play();
    document.getElementById("oliver_ok").onended = function () {
        setTimeout("theEnd()", 1000);
    }
}

function s21() {
    console.log("s21");
    // clean-up
    choice_text_container_v9.classList.add("hide");
    choice_sound.pause();
    // set scene
    maria_container_s21.classList.remove("hide");
    oliver_container_s21.classList.remove("hide");
    oliver_container_s21.classList.add("oliver_walks_to_maria_s21");
    // Anim: “oliverWalkToKitchen” is done
    document.querySelector(".oliver_walks_to_maria_s21").addEventListener("webkitAnimationEnd", s21OliverTalks);
}

function s21OliverTalks() {
    console.log("s21MariaTalk");
    oliver_sprite_s21.classList.add("oliver_talkcycle");
    document.querySelector("#oliver_sorry").play();
    document.getElementById("oliver_sorry").onended = function () {
        setTimeout("s21MariaTalks()", 1000);
    }
}

function s21MariaTalks() {
    console.log("s21MariaTalks");
    oliver_sprite_s21.classList.remove("oliver_talkcycle");
    maria_sprite_s21.classList.add("maria_talkcycle");
    document.querySelector("#maria_be_with_you").play();
    document.getElementById("maria_be_with_you").onended = function () {
        setTimeout("theEnd()", 1000);
    }
}

function s22() {
    console.log("s22");
    // clean-up
    choice_text_container_v10.classList.add("hide");
    choice_sound.pause();
    document.querySelector("#splitscreen").classList.remove("hide");
    document.querySelector("#wind").play();
    setTimeout("theEnd()", 5000);
}

function s23() {
    console.log("s23");
    // clean-up
    choice_text_container_v11.classList.add("hide");
    choice_sound.pause();
    // set scene
    private_party.play();
    kitchen.classList.remove("hide");
    kitchen_front.classList.remove("hide");
    oliver_container_s15.classList.remove("hide");
    maria_container_s15.classList.remove("hide");
    william_container_s15.classList.remove("hide");
    william_container_s15.classList.remove("william_walk_into_kitchen");
    oliver_sprite_s15.classList.add("oliver_talkcycle");
    document.querySelector("#oliver_just_a_little").play();
    document.getElementById("oliver_just_a_little").onended = function () {
        setTimeout("s23OliverTalk()", 1000);
    }
}

function s23OliverTalk() {
    console.log("s23OliverTalk");
    document.querySelector("#oliver_talk_at_home").play();
    document.getElementById("oliver_talk_at_home").onended = function () {
        setTimeout("s23MariaTalk()", 1000);
    }
}

function s23MariaTalk() {
    console.log("s23MariaTalk");
    // clean-up
    oliver_sprite_s15.classList.remove("oliver_talkcycle");
    maria_sprite_s15.classList.add("maria_talkcycle");
    document.querySelector("#maria_okay").play();
    document.getElementById("maria_okay").onended = function () {
        setTimeout("s23OliverMariaWalk()", 1000);
    }
}

function s23OliverMariaWalk() {
    console.log("s23OliverMariaWalk");
    // clean-up
    maria_sprite_s15.classList.remove("maria_talkcycle");
    oliver_sprite_s12.classList.remove("oliver_talkcycle");
    maria_container_s12.classList.add("maria_walk_out_of_kitchen");
    oliver_container_s12.classList.add("oliver_walk_out_of_kitchen");
    theEnd();
}

function s24() {
    console.log("s24");
    // clean-up
    choice_text_container_v11.classList.add("hide");
    choice_sound.pause();
    // set scene
    kitchen.classList.remove("hide");
    kitchen_front.classList.remove("hide");
    oliver_container_s15.classList.remove("hide");
    maria_container_s15.classList.remove("hide");
    william_container_s15.classList.remove("hide");
    william_container_s15.classList.remove("william_walk_into_kitchen");
    maria_sprite_s15.classList.add("maria_talkcycle");
    document.querySelector("#maria_come_babe").play();
    document.getElementById("maria_come_babe").onended = function () {
        setTimeout("s24OliverTalk()", 1000);
    }
}

function s24OliverTalk() {
    console.log("s24OliverTalk");
    maria_sprite_s15.classList.remove("maria_talkcycle");
    document.querySelector("#oliver_yes").play();
    document.getElementById("oliver_yes").onended = function () {
        setTimeout("s24OliverMariaWalk()", 1000);
    }
}

function s24OliverMariaWalk() {
    console.log("s24OliverMariaWalk");
    // clean-up
    maria_sprite_s15.classList.remove("maria_talkcycle");
    maria_container_s15.classList.add("maria_walk_out_of_kitchen");
    oliver_container_s15.classList.add("oliver_walk_out_of_kitchen");
    document.querySelector(".oliver_walk_out_of_kitchen").addEventListener("webkitAnimationEnd", theEnd);
}

function s25() {
    console.log("s25");
    // clean-up
    choice_text_container_v12.classList.add("hide");
    choice_sound.pause();
    // set scene
    livingroom.classList.remove("hide");
    door.classList.remove("hide");
    dance_people_container.classList.remove("hide");
    oliver_container_s16.classList.remove("hide");
    oliver_container_s16.classList.add("oliver_start_pos");
    maria_container_s16.classList.remove("hide");
    oliver_sprite_s16.classList.add("oliver_talkcycle");
    document.querySelector("#oliver_promise").play();
    document.getElementById("oliver_promise").onended = function () {
        setTimeout("theEnd()", 1000);
    };
}

function s26() {
    console.log("s26");
    // clean-up
    choice_text_container_v12.classList.add("hide");
    choice_sound.pause();
    // set scene
    livingroom.classList.remove("hide");
    door.classList.remove("hide");
    dance_people_container.classList.remove("hide");
    oliver_container_s16.classList.remove("hide");
    oliver_container_s16.classList.add("oliver_start_pos");
    maria_container_s16.classList.remove("hide");
    oliver_sprite_s16.classList.add("oliver_talkcycle");
    document.querySelector("#oliver_wont_choose").play();
    document.getElementById("oliver_wont_choose").onended = function () {
        setTimeout("s26MariaTalk()", 1000);
    };
}

function s26MariaTalk() {
    console.log("s26MariaTalk");
    oliver_sprite_s16.classList.remove("oliver_talkcycle");
    maria_sprite_s16.classList.add("maria_talkcycle");
    document.querySelector("#maria_who_matters_more").play();
    document.getElementById("maria_who_matters_more").onended = function () {
        setTimeout("s26OliverTalk()", 1000);
    };
}

function s26OliverTalk() {
    console.log("s26OliverTalk");
    maria_sprite_s16.classList.remove("maria_talkcycle");
    oliver_sprite_s16.classList.add("oliver_talkcycle");
    document.querySelector("#oliver_no_more").play();
    document.getElementById("oliver_no_more").onended = function () {
        setTimeout("s26OliverWalk()", 1000);
    };
}

function s26OliverWalk() {
    console.log("s26OliverWalk");
    oliver_sprite_s16.classList.remove("oliver_talkcycle");
    oliver_sprite_s16.classList.add("oliver_walkcycle_right");
    oliver_container_s16.classList.add("oliver_storms_out");
    document.querySelector(".oliver_storms_out").addEventListener("webkitAnimationEnd", theEnd);
}

function theEnd() {
    console.log("theEnd");
    // clean-up all
    private_party.pause();
    // clean-up s11
    kitchen.classList.add("hide");
    kitchen_front.classList.add("hide");
    oliver_container_s11.classList.add("hide");
    maria_container_s11.classList.add("hide");
    //maria_container_s11.classList.add("maria_walk_into_kitchen");
    sif_container_s11.classList.add("hide");
    // clean-up s15
    oliver_container_s15.classList.add("hide");
    maria_container_s15.classList.add("hide");
    william_container_s15.classList.add("hide");
    // clean-up s18 og s19
    maria_container_s9_smoking.classList.add("hide");
    oliver_container_s9.classList.add("hide");
    oliver_container_s9_smoking.classList.add("hide");
    document.querySelector("#light_blue").classList.add("hide");
    document.querySelector("#light_green").classList.add("hide");
    document.querySelector("#light_purple").classList.add("hide");
    document.querySelector("#smokingarea_bg").classList.add("hide");
    document.querySelector("#smokingarea").classList.add("hide");
    private_party.pause();
    // clean-up s21
    maria_container_s21.classList.add("hide");
    oliver_container_s21.classList.add("hide");
    // clean-up s22
    document.querySelector("#splitscreen").classList.add("hide");
    document.querySelector("#wind").pause();
    // clean-up s25
    livingroom.classList.add("hide");
    door.classList.add("hide");
    dance_people_container.classList.add("hide");
    oliver_container_s16.classList.add("hide");
    maria_container_s16.classList.add("hide");

    document.querySelector("#red_curtains").play();
    document.querySelector("#replay").classList.remove("hide");
    document.querySelector("#play_again").addEventListener("click", reload)
}

function reload() {
    location.reload();
}