'use strict'

let player;
// containers
const oliver_container = document.querySelector("#oliver_container");
const oliver_container2 = document.querySelector("#oliver_container2");
const oliver_container3 = document.querySelector("#oliver_container3");
const maria_container = document.querySelector("#maria_container");
const maria_container2 = document.querySelector("#maria_container2");
const sif_container = document.querySelector("#sif_container");
const dance_people_container = document.querySelector("#dance_people_container");

// sprites
const oliver_sprite = document.querySelector("#oliver_sprite");
const oliver_sprite2 = document.querySelector("#oliver_sprite2");
const oliver_sprite3 = document.querySelector("#oliver_sprite3");
const maria_sprite = document.querySelector("#maria_sprite");
const maria_sprite2 = document.querySelector("#maria_sprite2");
const maria_sprite3 = document.querySelector("#maria_sprite3");
const sif_sprite = document.querySelector("#sif_sprite");
const dance_people_sprite = document.querySelector("#dance_people_sprite");

//scenes
const intro_scene = document.querySelector("#intro");
//const fade_id = document.querySelector("#fadeId");
const livingroom = document.querySelector("#livingroom");
const door = document.querySelector("#door");
const kitchen = document.querySelector("#kitchen");
const kitchen_front = document.querySelector("#kitchen_front");
const choice_text_container_v2 = document.querySelector("#choice_text_container_v2");
const choice_text_container_v4 = document.querySelector("#choice_text_container_v4");
const choice_a = document.querySelector(".choice_a");
const choice_b = document.querySelector(".choice_b");

// sounds
const private_party = document.querySelector("#private_party");

// Siden er loadet
window.addEventListener("DOMContentLoaded", intro);
//localStorage.clear();

function intro() {
    intro_scene.addEventListener("click", frontpage);
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
    oliver_container.classList.remove("hide");
    maria_container.classList.remove("hide");
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
    oliver_sprite.classList.add("oliver_talkcycle");

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
    oliver_sprite.classList.remove("oliver_talkcycle");
    // Start anim: mariaTalkcycle
    maria_sprite.classList.add("maria_talkcycle");
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
    maria_sprite.classList.remove("maria_talkcycle");
    // Start anim: oliverWalkToKitchen
    oliver_container.classList.add("oliver_walk_to_kitchen");
    // Start anim: oliverWalkcycle
    oliver_sprite.classList.add("oliver_walkcycle");

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
    maria_container.classList.add("hide");
    maria_container.classList.remove("maria_start_pos")
    // hide Oliver
    oliver_container.classList.add("hide");
    oliver_sprite.classList.remove("oliver_walkcycle");
    // Start anim: fadeToBlack
    // fade_id.classList.add("fade");
    document.querySelector(".oliver_walk_to_kitchen").removeEventListener("webkitAnimationEnd", s1FadeToBlack);
    checkPlayer();
}

function checkPlayer() {
    console.log("checkPlayer");
    // CheckVariable
    if (player == "maria") {
        setKitchen();
        console.log(player);

    } else if (player == "oliver") {
        // setTimeout("s3()", 1500);
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
    oliver_container2.classList.remove("hide");
    oliver_container.classList.remove("oliver_start_pos");
    oliver_container.classList.remove("oliver_walk_to_kitchen");

    sif_container.classList.remove("hide");

    // Start sound: partySound
    private_party.play();
    // fade sound: partySound
    private_party.volume = 0.03;

    // Start anim: oliverWalkIntoKitchen
    oliver_container2.classList.add("oliver_walk_into_kitchen");
    console.log("oliver walks");
    // Start anim: oliverWalkcycle
    oliver_sprite2.classList.add("oliver_walkcycle");

    // Anim: “oliverWalkIntoKitchen” is done
    document.querySelector(".oliver_walk_into_kitchen").addEventListener("webkitAnimationEnd", s2kitchen);
}

function s2kitchen() {
    console.log("s2kitchen");
    // Stop anim: oliverWalkcycle
    oliver_sprite2.classList.remove("oliver_walkcycle");
    // fade sound: partySound
    // Start anim: oliverTalkcycle
    oliver_sprite2.classList.add("oliver_talkcycle");
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
    oliver_sprite2.classList.remove("oliver_talkcycle");
    // Start anim: sifTalkcycle
    sif_sprite.classList.add("sif_talkcycle");
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
    sif_sprite.classList.remove("sif_talkcycle");
    // Start anim: oliverTalkcycle
    oliver_sprite2.classList.add("oliver_talkcycle");
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
    document.getElementById("clock").play();
    // Start anim: clockTick
    // sound: “clock” has playde for 3 sec
    setTimeout("s2FadeToBlack()", 5000);
}

function s2FadeToBlack() {
    console.log("s2FadeToBlack");
    // Stop anim: oliverTalkcycle
    oliver_sprite2.classList.remove("oliver_talkcycle");
    // Hide kitchen
    kitchen.classList.add("hide");
    kitchen_front.classList.add("hide");
    sif_container.classList.add("hide");
    oliver_container2.classList.add("hide");
    // Start anim: fadeToBlack
    // Stop anim: clockTick
    // Stop sound: clock
    document.getElementById("clock").pause();
    // Stop sound: partySound
    private_party.pause();
    setTimeout("v2()", 50);
}

// anim: “fadeToBlack” is done
function v2() {
    console.log("v2");
    // Start anim: fadeUpFromBlack
    // play sound: choiceSound
    document.getElementById("choiceSound").play();
    // show choice_scene
    choice_text_container_v2.classList.remove("hide");
    // Start anim: 2a
    // Start anim: 2b
    // onChoice 2a eller 2b
    choice_a.addEventListener("click", s4OliverToMaria);
    choice_b.addEventListener("click", s5MariaToOliver);
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
    document.getElementById("choiceSound").pause();
    // set scene
    choice_text_container_v2.classList.add("hide");
    livingroom.classList.remove("hide");
    door.classList.remove("hide");
    maria_container2.classList.remove("hide");
    oliver_container3.classList.remove("hide");
    dance_people_container.classList.remove("hide");
    // Start anim: fadeUpFromBlack
    // fade sound: partySound
    private_party.play();
    // Start anim: OliverWalkToMaria
    oliver_container3.classList.add("oliver_walk_into_livingroom");
    // Start anim: OliverWalkcycle
    oliver_sprite3.classList.add("oliver_walkcycle_right");
    // remove eventlistners
    choice_a.removeEventListener("click", s4OliverToMaria);
    choice_b.removeEventListener("click", s5MariaToOliver);
    // Anim: “OliverWalkToMaria” is done
    document.querySelector(".oliver_walk_into_livingroom").addEventListener("webkitAnimationEnd", s4MariaTalk);
}

function s4MariaTalk() {
    console.log("s4MariaTalk");
    // Stop anim: oliverWalkcycle
    oliver_sprite3.classList.remove("oliver_walkcycle_right");
    // Start anim: mariaTalkcycle
    maria_sprite2.classList.add("maria_talkcycle");
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
    maria_sprite2.classList.remove("maria_talkcycle");
    // Start anim: oliverTalkcycle
    oliver_sprite3.classList.add("oliver_talkcycle");
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
    oliver_sprite3.classList.remove("oliver_talkcycle");
    // Start anim: mariaTalkcycle
    maria_sprite2.classList.add("maria_talkcycle");
    // play sound: mariaWouldYouRather
    document.getElementById("maria_would_you_rather").play();
    // sound: “mariaWouldYouRather” is done
    document.getElementById("maria_would_you_rather").onended = function () {
        setTimeout("s4FadeToBlack()", 1000);
    }

}

function s4FadeToBlack() {
    console.log("s4FadeToBlack");
    // Stop anim: mariaTalkcycle
    maria_sprite.classList.remove("maria_talkcycle");
    //remove scene
    livingroom.classList.add("hide");
    door.classList.add("hide");
    oliver_container3.classList.add("hide");
    maria_container2.classList.add("hide");
    dance_people_container.classList.add("hide");
    //add scene
    choice_text_container_v4.classList.remove("hide");
    // Start anim: fadeToBlack
    v4();
}

// anim: “fadeToBlack” has played for 3 sec
function v4() {
    console.log("v4");
    // Start anim: fadeUpFromBlack

    //choice_a.addEventListener("click", s4OliverToMaria);
    //choice_b.addEventListener("click", s5MariaToOliver);
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
    // Stop sound: choiceSound
    document.getElementById("choiceSound").pause();
    // set scene
    choice_text_container_v2.classList.add("hide");
    // maria_container.remove("hide");
    // dance_people_container.classList.remove("hide");
    // set scene
    kitchen.classList.remove("hide");
    kitchen_front.classList.remove("hide");
    oliver_container2.classList.remove("hide");
    oliver_container2.classList.remove("oliver_walk_into_kitchen");
    oliver_container2.classList.add("oliver_start_pos_kitchen");
    sif_container.classList.remove("hide");
    maria_container3.classList.remove("hide");
    maria_container3.classList.add("maria_walk_into_kitchen");
    maria_sprite3.classList.add("maria_walkcycle");

    // Start anim: mariaWalkToOlivers
    // Start anim: mariaWalkcycle
    // Start sound: partySound
    // fade sound: partySound
}

// Anim: “mariaWalkToOliver” is done
function s5MariaTalk() {
    console.log("s5MariaTalk");
    // Stop anim: mariaWalkcycle
    // Start anim: mariaTalkcycle
    // play sound: mariaWhere
}

// sound: “mariaWhere” is done
function s5MariaTalk() {
    console.log("s5MariaTalk");
    // Stop anim: mariaTalkcycle
    // Start anim: sifTalkcycle
    // play sound: sifChill
}

// sound: “sifChill” is done
function s5FadeToBlack() {
    console.log("s5FadeToBlack");
    // Stop anim: sifTalkcycle
    // Start anim: fadeToBlack
    // checkPlayer
}

// “checkPlayer” er checket 
function v5() {
    console.log("v5");
    // Start anim: fadeUpFromBlack
    // Start anim: 5a
    // Start anim: 5b
    // play sound: choiceSound
}

// Anim: “fadeToBlack” is done
function s3() {
    console.log("s3");
    // Start anim: fadeUpFromBlack
    // Start sound: partySound
    // Start anim: bgDancecycle
}

// sound: “partySound” has played for 3 sec
function s3MariaWaiting() {
    console.log("s3MariaWaiting");
    // Start anim: clockTick
    // play sound: clock
}

// sound: “clock” has played for 5 sec
function s3FadeToBlack() {
    console.log("s3FadeToBlack");
    // Start anim: fadeToBlack
    // Stop anim: clockTick
    // Stop sound: clock
}

// anim: “fadeToBlack” has playde for 3 sec and playser=1b
function v3() {
    console.log("v3");
    // Start anim: fadeUpFromBlack
    // play sound: choiceSound
    // Start anim: 3a
    // Start anim: 3b
}

// onChoice 3a eller 3b
function v3_3aFadeToBlack() {
    console.log("v3_3aFadeToBlack");
    // Stop anim: 3a
    // Stop anim: 3b
    // Stop sound: choiceSound
    // Start anim: fadeToBlack
}

// anim: “fadeToBlack” has played for 3 sec
function v6() {
    console.log("v6");
    // Start anim: fadeUpFromBlack
    // Start anim: 6a
    // Start anim: 6b
    // play sound: choiceSound
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
    // Start sound: partySound
    // fade sound: partySound
    // Start anim: fadeUpFromBlack
    // Start anim: OliverWalkToMaria
    // Start anim: OliverWalkcycle
}

// Anim: “OliverWalkToMaria” is done
function s7MariaTalk() {
    console.log("s7MariaTalk");
    // Stop anim: oliverWalkcycle
    // Start anim: mariaTalkcycle
    // play sound: mariaWhyWho
}

// sound: “mariaWhyWho” is done
function s7OliverTalk() {
    console.log("s7OliverTalk");
    // Stop anim: mariaTalkcycle
    // Start anim: oliverTalkcycle
    // play sound: oliverChill
}

// sound: “oliverChill” is done
function s7MariaTalkToOliver() {
    console.log("s7MariaTalkToOliver");
    // Stop anim: oliverTalkcycle
    // Start anim: mariaTalkcycle
    // play sound: mariaWouldYouRather
}

// sound: “mariaWouldYouRather” is done
function s7OliverTalk2() {
    console.log("s7OliverTalk2");
    // Stop anim: mariaTalkcycle
    // Start anim: oliverTalkcycle
    // play sound: oliverJealous
}

// sound: “oliverJealous” is done
function s7FadeToBlack() {
    console.log("s7FadeToBlack");
    // Start anim: fadeToBlack
    // Stop anim: oliverTalkcycle
    // Stop sound: partySound
}

// anim: “fadeToBlack” has playded for 3 sec
function v7() {
    console.log("v7");
    // Start anim: fadeUpFromBlack
    // Start anim: 7a
    // Start anim: 7b
    // play sound: choiceSound
}
