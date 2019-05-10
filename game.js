'use strict'

let player;
// containers
const oliver_container_s1 = document.querySelector("#oliver_container_s1");
const oliver_container_s2 = document.querySelector("#oliver_container_s2");
const oliver_container_s4 = document.querySelector("#oliver_container_s4");
const oliver_container_s9 = document.querySelector("#oliver_container_s9");
const oliver_container_s10 = document.querySelector("#oliver_container_s10");
const oliver_container_s21 = document.querySelector("#oliver_container_s21");
const maria_container_s1 = document.querySelector("#maria_container_s1");
const maria_container_s4 = document.querySelector("#maria_container_s4");
const maria_container_s5 = document.querySelector("#maria_container_s5");
const maria_container_s9 = document.querySelector("#maria_container_s9");
const maria_container_s9_smoking = document.querySelector("#maria_container_s9_smoking");
const maria_container_s10 = document.querySelector("#maria_container_s10");
const maria_container_s21 = document.querySelector("#maria_container_s21");
const sif_container_s2 = document.querySelector("#sif_container_s2");
const dance_people_container = document.querySelector("#dance_people_container");

// sprites
const oliver_sprite_s1 = document.querySelector("#oliver_sprite_s1");
const oliver_sprite_s2 = document.querySelector("#oliver_sprite_s2");
const oliver_sprite_s4 = document.querySelector("#oliver_sprite_s4");
const oliver_sprite_s9 = document.querySelector("#oliver_sprite_s9");
const oliver_sprite_s10 = document.querySelector("#oliver_sprite_s10");
const oliver_sprite_s21 = document.querySelector("#oliver_sprite_s21");
const maria_sprite_s1 = document.querySelector("#maria_sprite_s1");
const maria_sprite_s4 = document.querySelector("#maria_sprite_s4");
const maria_sprite_s5 = document.querySelector("#maria_sprite_s5");
const maria_sprite_s9 = document.querySelector("#maria_sprite_s9");
const maria_sprite_s9_smoking = document.querySelector("#maria_sprite_s9_smoking");
const maria_sprite_s10 = document.querySelector("#maria_sprite_s10");
const maria_sprite_s21 = document.querySelector("#maria_sprite_s21");
const sif_sprite_s2 = document.querySelector("#sif_sprite_s2");
const dance_people_sprite = document.querySelector("#dance_people_sprite");

//scenes
const intro_scene = document.querySelector("#intro");
//const fade_id = document.querySelector("#fadeId");
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
const choice_v2_a = document.querySelector(".choice_v2_a");
const choice_v2_b = document.querySelector(".choice_v2_b");
const choice_v3_a = document.querySelector(".choice_v3_a");
const choice_v3_b = document.querySelector(".choice_v3_b");
const choice_v4_a = document.querySelector(".choice_v4_a");
const choice_v4_b = document.querySelector(".choice_v4_b");
const choice_v5_a = document.querySelector(".choice_v5_a");
const choice_v5_b = document.querySelector(".choice_v5_b");
const choice_v6_a = document.querySelector(".choice_v6_a");
const choice_v6_b = document.querySelector(".choice_v6_b");
const choice_v7_a = document.querySelector(".choice_v7_a");
const choice_v7_b = document.querySelector(".choice_v7_b");
const choice_v8_a = document.querySelector(".choice_v8_a");
const choice_v8_b = document.querySelector(".choice_v8_b");
const choice_v9_a = document.querySelector(".choice_v9_a");
const choice_v9_b = document.querySelector(".choice_v9_b");
const choice_v10_a = document.querySelector(".choice_v10_a");
const choice_v10_b = document.querySelector(".choice_v10_b");
const choice_v11_a = document.querySelector(".choice_v11_a");
const choice_v11_b = document.querySelector(".choice_v11_b");
const choice_v12_a = document.querySelector(".choice_v12_a");
const choice_v12_b = document.querySelector(".choice_v12_b");
const clock_animation = document.querySelector("#clock_container");

// sounds
const clock = document.getElementById("clock");
const private_party = document.querySelector("#private_party");
const choice_sound = document.getElementById("choiceSound");

//clock fetch
document.addEventListener("DOMContentLoaded", getSvg);

async function getSvg() {
    let clock = await fetch("img/clock/ur.svg");
    let clockSvg = await clock.text();

    document.querySelector("#clock_container").innerHTML = clockSvg;
    clock_animation.classList.add("hide");
}


// Siden er loadet
window.addEventListener("DOMContentLoaded", intro);

function intro() {
    intro_scene.addEventListener("click", frontpage);
    clock_animation.classList.add("hide"); //keep
}

function frontpage() {
    console.log("frontpage");
    // Start sound: IntroMusic
    document.getElementById("intro_music").play();
    // remove frontpage
    intro_scene.classList.add("hide");

}

// Remember player 1a or 1b
function get_clicked_id(clicked_id) {
    player = clicked_id;
    // onChoice 1a eller 1b
    addEventListener("click", v1FadeToBlack);
}

function v1FadeToBlack() {
    console.log("v1FadeToBlack");
    // Stop sound: IntroMusic
    document.getElementById("intro_music").pause();

    // set scene
    livingroom.classList.remove("hide");
    //livingroom.classList.add("fade");
    door.classList.remove("hide");
    oliver_container_s1.classList.remove("hide");
    maria_container_s1.classList.remove("hide");
    // Start anim: bgDancecycle
    dance_people_container.classList.remove("hide");
    dance_people_sprite.classList.add("dance_people_dancecycle");

    // Start sound: partySound
    private_party.play();

    removeEventListener("click", v1FadeToBlack);
    // Start anim: fadeToBlack
    // fade_id.classList.add("fade");
    //  fade_id.classList.remove("hide");
    // anim: “fadeToBlack” is done
    setTimeout("s1Party()", 1500);
}

function s1Party() {
    console.log("s1Party");
    // hide titlepagedoor
    document.getElementById("titlepage").classList.add("hide");

    // Stop anim: oliverBobblehead
    document.getElementById("oliver").classList.remove("bounce");
    // Stop anim: mariaBobblehead
    document.getElementById("maria").classList.remove("bounce");
    // Start anim: fadeUpFromBlack
    document.getElementById("gamewrapper").classList.remove("fade");

    // fade up from black
    // fade_id.classList.remove("fade");
    // fade_id.classList.add("fade_up");


    //When music has played for 1,5 sec
    setTimeout("setLivingroom()", 1500);
}

function setLivingroom() {

    //  fade_id.classList.remove("fade_up");

    // fade sound: partySound
    private_party.volume = 0.03;

    // Efter 2 sekunder
    setTimeout("s1OliverTalk()", 1000);
}


function s1OliverTalk() {
    console.log("s1OliverTalk");
    // Start anim: oliverTalkcycle
    oliver_sprite_s1.classList.add("oliver_talkcycle");

    // play sound: oliverBeer
    document.getElementById("oliver_beer").play();

    // sound: “oliverBeer” is done
    document.getElementById("oliver_beer").onended = function () {
        setTimeout("s1MariaTalk()", 1000);

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
        setTimeout("s1OliverWalk()", 1000);
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
    document.querySelector(".oliver_walk_to_kitchen").addEventListener("webkitAnimationEnd", s1FadeToBlack);
}

function s1FadeToBlack() {
    console.log("s1FadeToBlack");
    // Stop anim: bgDancecycle
    dance_people_container.classList.add("hide");
    //  dance_people_sprite.classList.remove("dance_people_dancecycle");
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
    // Start anim: fadeToBlack
    // fade_id.classList.add("fade");
    document.querySelector(".oliver_walk_to_kitchen").removeEventListener("webkitAnimationEnd", s1FadeToBlack);
    checkPlayerS1();
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
}
// Anim: “fadeToBlack” is done
// function s2() {
//     console.log("s2");
//     // stop anim: fadeToBlack
//     //   fade_id.classList.remove("fade");
//     // Start anim: fadeUpFromBlack
//     //   fade_id.classList.add("fade_up");
//     setKitchen();
// }

function setKitchen() {
    console.log("setKitchen");
    //   fade_id.classList.remove("fade_up");
    // set scene
    kitchen.classList.remove("hide");
    kitchen_front.classList.remove("hide");
    oliver_container_s2.classList.remove("hide");
    oliver_container_s1.classList.remove("oliver_start_pos");
    oliver_container_s1.classList.remove("oliver_walk_to_kitchen");

    sif_container_s2.classList.remove("hide");

    // Start sound: partySound
    private_party.play();
    // fade sound: partySound
    private_party.volume = 0.03;

    // Start anim: oliverWalkIntoKitchen
    oliver_container_s2.classList.add("oliver_walk_into_kitchen");
    console.log("oliver walks");
    // Start anim: oliverWalkcycle
    oliver_sprite_s2.classList.add("oliver_walkcycle");

    // Anim: “oliverWalkIntoKitchen” is done
    document.querySelector(".oliver_walk_into_kitchen").addEventListener("webkitAnimationEnd", s2kitchen);
}

function s2kitchen() {
    console.log("s2kitchen");
    // Stop anim: oliverWalkcycle
    oliver_sprite_s2.classList.remove("oliver_walkcycle");
    // fade sound: partySound
    // Start anim: oliverTalkcycle
    oliver_sprite_s2.classList.add("oliver_talkcycle");
    // play sound: oliverHejSif
    document.getElementById("oliver_hey_sif").play();

    // sound: “oliverHejSif” is done
    document.getElementById("oliver_hey_sif").onended = function () {
        setTimeout("s2SifTalk()", 1000);
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
        setTimeout("s2OliverTalk()", 1000);
    }
}

function s2OliverTalk() {
    console.log("s2OliverTalk");
    // Stop anim: sifTalkcycle
    sif_sprite_s2.classList.remove("sif_talkcycle");
    // Start anim: oliverTalkcycle
    oliver_sprite_s2.classList.add("oliver_talkcycle");
    // play sound: oliverGirlfriend
    document.getElementById("oliver_girlfriend").play();
    // sound: “oliverGirlfriend” is done
    document.getElementById("oliver_girlfriend").onended = function () {
        setTimeout("s2Clock()", 1000);
    }
}

function s2Clock() {
    console.log("s2Clock");
    // play sound: clock
    clock.play();
    //clock.playbackrate = 3.0;
    // Start anim: clockTick
    clock_animation.classList.remove("hide");
    // sound: “clock” has playde for 5 sec
    setTimeout("s2FadeToBlack()", 5000);
}

function s2FadeToBlack() {
    console.log("s2FadeToBlack");
    // Stop anim: oliverTalkcycle
    oliver_sprite_s2.classList.remove("oliver_talkcycle");
    // Hide kitchen
    kitchen.classList.add("hide");
    kitchen_front.classList.add("hide");
    sif_container_s2.classList.add("hide");
    oliver_container_s2.classList.add("hide");
    // Start anim: fadeToBlack
    // Stop anim: clockTick
    clock_animation.classList.add("hide");
    // Stop sound: clock
    clock.pause();
    // Stop sound: partySound
    private_party.pause();
    setTimeout("v2()", 50);
}

// anim: “fadeToBlack” is done
function v2() {
    console.log("v2");
    // Start anim: fadeUpFromBlack
    // play sound: choiceSound
    choice_sound.play();
    // show choice_scene
    choice_text_container_v2.classList.remove("hide");
    // Start anim: 2a
    // Start anim: 2b
    // onChoice 2a eller 2b
    choice_v2_a.addEventListener("click", s4OliverToMaria);
    choice_v2_b.addEventListener("click", s5MariaToOliver);
    //v2_2aFadeToBlack();
}

function v2_2aFadeToBlack() {
    console.log("v2_2aFadeToBlack");
    // Stop anim: 2a
    // Stop anim: 2b
    // Start anim: fadeToBlack
}

// Anim: “fadeToBlack” is done
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
    // Start anim: fadeUpFromBlack
    // fade sound: partySound
    private_party.play();
    private_party.volume = 0.03;
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
            setTimeout("s4FadeToBlack()", 1000);
        }

    } else if (player == "maria") {
        document.getElementById("maria_would_you_rather").onended = function () {
            setTimeout("s7OliverToMaria()", 1000);
        }
    } else {
        alert("Noget gik galt prøv igen");
    }
}


function s4FadeToBlack() {
    console.log("s4FadeToBlack");
    // Stop anim: mariaTalkcycle
    maria_sprite_s1.classList.remove("maria_talkcycle");
    //remove scene
    livingroom.classList.add("hide");
    door.classList.add("hide");
    oliver_container_s4.classList.add("hide");
    maria_container_s4.classList.add("hide");
    dance_people_container.classList.add("hide");
    //add scene
    choice_text_container_v4.classList.remove("hide");

    // choice sound
    choice_sound.play();
    v4();

}

function v4() {
    console.log("v4");

    // on choice
    choice_v4_a.addEventListener("click", s8);
    choice_v4_b.addEventListener("click", s10);

    // Start anim: 4a
    // Start anim: 4b
    // play sound: choiceSound
}

// onChoice 2s eller 2b
function v2_2bFadeToBlack() {
    console.log("v2_2bFadeToBlack");
    // Stop anim: 2a
    // Stop anim: 2b
    // Stop sound: choiceSound
    // Start anim: fadeToBlack
}

// Anim: “fadeToBlack” is done
function s5MariaToOliver() {
    console.log("s5MariaToOliver");
    //remove v3
    choice_text_container_v3.classList.add("hide");

    // Stop sound: choiceSound
    choice_sound.pause();
    // clean-up
    choice_text_container_v2.classList.add("hide");
    // maria_container_s1.remove("hide");
    // dance_people_container.classList.remove("hide");
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
    // fade sound: partySound
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
        setTimeout("s5FadeToBlack()", 1000);
    }
}

function s5FadeToBlack() {
    console.log("s5FadeToBlack");
    // remove scene
    kitchen.classList.add("hide");
    kitchen_front.classList.add("hide");
    oliver_container_s2.classList.add("hide");
    maria_container_s5.classList.add("hide");
    sif_container_s2.classList.add("hide");


    // Stop anim: sifTalkcycle
    sif_sprite_s2.classList.remove("sif_talkcycle");
    // Start anim: fadeToBlack
    // checkPlayer
    checkPlayers5();
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
    // Start anim: fadeUpFromBlack
    choice_text_container_v5.classList.remove("hide");
    // Start anim: 5a
    // Start anim: 5b
    // play sound: choiceSound
    choice_sound.play();

    // on choice
    choice_v5_a.addEventListener("click", s10);
    choice_v5_b.addEventListener("click", s11);
}

function s3() {
    console.log("s3");
    // Start anim: fadeUpFromBlack
    // set scene
    livingroom.classList.remove("hide");
    door.classList.remove("hide");
    maria_container_s1.classList.remove("hide");
    maria_container_s1.classList.add("maria_start_pos");
    // Start anim: bgDancecycle
    dance_people_container.classList.remove("hide");
    // Start sound: partySound
    private_party.play();
    private_party.volume = 0.5;
    // sound: “partySound” has played for 3 sec
    setTimeout("s3MariaWaiting()", 1500);

}

function s3MariaWaiting() {
    console.log("s3MariaWaiting");
    // Start anim: clockTick
    clock_animation.classList.remove("hide");
    // play sound: clock
    clock.play();
    // sound: “clock” has played for 5 sec
    setTimeout("s3FadeToBlack()", 5000);
}

function s3FadeToBlack() {
    console.log("s3FadeToBlack");

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
    v3();
}

function v3() {
    console.log("v3");
    // set scene
    choice_text_container_v3.classList.remove("hide");
    // Start anim: fadeUpFromBlack
    // play sound: choiceSound
    choice_sound.play();
    // Start anim: 3a
    // Start anim: 3b
    // on choice
    choice_v3_a.addEventListener("click", s5MariaToOliver);

    choice_v3_b.addEventListener("click", s4OliverToMaria);
}

// // onChoice 3a eller 3b
// function v3_3aFadeToBlack() {
//     console.log("v3_3aFadeToBlack");
//     // Stop anim: 3a
//     // Stop anim: 3b
//     // Stop sound: choiceSound
//     // Start anim: fadeToBlack
// }

// anim: “fadeToBlack” has played for 3 sec
function v6() {
    console.log("v6");
    // Start anim: fadeUpFromBlack
    // play sound: choiceSound

    // Start anim: fadeUpFromBlack
    choice_text_container_v6.classList.remove("hide");
    // Start anim: 6a
    // Start anim: 6b
    // play sound: choiceSound
    choice_sound.play();

    // on choice
    choice_v6_a.addEventListener("click", s12);
    choice_v6_b.addEventListener("click", s15);

}

// onChoice 6a eller 6b
function v3_3bFadeToBlack() {
    console.log("v3_3bFadeToBlack");
    // Stop anim: 3a
    // Stop anim: 3b
    // Stop sound: choiceSound
    // Start anim: fadeToBlack
}

// Anim: “fadeToBlack” is done
function s7OliverToMaria() {
    console.log("s7OliverToMaria");
    // remove v3
    choice_text_container_v3.classList.add("hide");
    choice_sound.pause();
    private_party.volume = 0.03;
    // Stop anim: mariaTalkcycle
    maria_sprite_s4.classList.remove("maria_talkcycle");
    // Start anim: oliverTalkcycle
    oliver_sprite_s4.classList.add("oliver_talkcycle");
    // play sound: oliverJealous
    document.getElementById("oliver_jealous").play();
    // sound: oliver_jealous is done
    document.getElementById("oliver_jealous").onended = function () {
        setTimeout("s7FadeToBlack()", 1000);

    }
}

// sound: “oliverJealous” is done
function s7FadeToBlack() {
    console.log("s7FadeToBlack");
    // hide scene
    // hide livingroom
    livingroom.classList.add("hide");
    door.classList.add("hide");
    oliver_container_s4.classList.add("hide");
    maria_container_s4.classList.add("hide");
    dance_people_container.classList.add("hide");
    // Stop anim: oliverTalkcycle
    oliver_sprite_s4.classList.remove("oliver_talkcycle");
    // Stop sound: partySound
    private_party.pause();
    v7();
}

// anim: “fadeToBlack” has playded for 3 sec
function v7() {
    console.log("v7");

    // Start anim: fadeUpFromBlack
    choice_text_container_v7.classList.remove("hide");
    // Start anim: 7a
    // Start anim: 7b
    // play sound: choiceSound
    // on choice
    choice_v7_a.addEventListener("click", s16);
    choice_v7_b.addEventListener("click", s17);
}

function s8() {

    console.log("s8");
    // hide v4 andv9
    choice_text_container_v4.classList.add("hide");
    choice_text_container_v9.classList.add("hide");
    // show sign schoolparty
    document.querySelector("#later_container").classList.remove("hide");
    document.querySelector("#later_container").classList.add("later_fade");


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
    schoolparty.classList.remove("hide");
    dance_people_container.classList.remove("hide");
    dance_people_container.classList.add("dance_people_start_pos_s9");
    maria_container_s9.classList.remove("hide");
    maria_sprite_s9.classList.add("maria_talkcycle");
    oliver_container_s9.classList.remove("hide");
    setTimeout("s9NoSmoking()", 5000);
}

function s9NoSmoking() {
    //    clean up
    schoolparty.classList.add("hide");
    maria_container_s9.classList.add("hide");
    maria_sprite_s9.classList.remove("maria_talkcycle");
    dance_people_container.classList.add("hide");

    // set scene
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
        setTimeout("v8()", 1000);
    }
}
// SOME KIND OF FADE BETWEEN SCENES

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
    dance_people_container.classList.add("hide");
    // set scene
    //add scene
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

    // sound: maria_jealous is done
    document.getElementById("maria_jealous").onended = function () {
        setTimeout("s10OliverTalkes()", 1000);
    };

}
function s10OliverTalkes() {
    console.log("s10OliverTalkes");
    maria_sprite_s10.classList.remove("maria_talkcycle");
    oliver_sprite_s10.classList.add("oliver_talkcycle");
    document.querySelector("#oliver_not_true").play();

    // sound: oliver_not_true is done
    document.getElementById("oliver_not_true").onended = function () {
        setTimeout("s10MariaTalkes()", 1000);
    };

}

function s10MariaTalkes() {
    console.log("s10MariaTalkes");
    maria_sprite_s10.classList.add("maria_talkcycle");
    oliver_sprite_s10.classList.remove("oliver_talkcycle");
    document.querySelector("#maria_grow_up").play();

    // sound: maria_grow_up is done
    document.getElementById("maria_grow_up").onended = function () {
        setTimeout("s10MariaWalkesOut()", 1000);
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
}

function s12() {
    console.log("s12");
}

function s13() {
    console.log("s13");
}

function s14() {
    console.log("s14");
}

function s15() {
    console.log("s15");
}
function s16() {
    console.log("s16");
}
function s17() {
    console.log("s17");
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
    oliver_container_s9.classList.remove("hide");
    document.querySelector("#light_blue").classList.remove("hide");
    document.querySelector("#light_green").classList.remove("hide");
    document.querySelector("#light_purple").classList.remove("hide");
    document.querySelector("#smokingarea_bg").classList.remove("hide");
    document.querySelector("#smokingarea").classList.remove("hide");
    // maria talkes
    document.getElementById("maria_enough").play();
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
    oliver_container_s9.classList.remove("hide");
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
    oliver_sprite_s9.classList.add("oliver_talkcycle");
    document.getElementById("oliver_ok").play();
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
    oliver_sprite_s21.classList.add("talkcycle");
    document.querySelector("#oliver_sorry").play();
}