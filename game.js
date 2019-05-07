'use strict'

let player;
// containers
const oliver_container = document.querySelector("#oliver_container");
const maria_container = document.querySelector("#maria_container");
const sif_container = document.querySelector("#sif_container");
const dance_people_container = document.querySelector("#dance_people_container");

// sprites
const oliver_sprite = document.querySelector("#oliver_sprite");
const maria_sprite = document.querySelector("#maria_sprite");
const sif_sprite = document.querySelector("#sif_sprite");
const dance_people_sprite = document.querySelector("#dance_people_sprite");

//scenes
const intro_scene = document.querySelector("#intro");
const fade_id = document.querySelector("#fadeId");
const livingroom = document.querySelector("#livingroom");
const door = document.querySelector("#door");
const kitchen = document.querySelector("#kitchen");
const kitchen_front = document.querySelector("#kitchen_front"); kitchen_front

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
    // Start anim: fadeToBlack
    fade_id.classList.add("fade");
    fade_id.classList.remove("hide");
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
    fade_id.classList.remove("fade");
    fade_id.classList.add("fade_up");

    // Start sound: partySound
    private_party.play();
    //When music has played for 1,5 sec
    setTimeout("setLivingroom()", 1500);
}

function setLivingroom() {

    fade_id.classList.remove("fade_up");
    // set scene
    livingroom.classList.remove("hide");
    door.classList.remove("hide");
    oliver_container.classList.remove("hide");
    maria_container.classList.remove("hide");
    // Start anim: bgDancecycle
    dance_people_container.classList.remove("hide");
    dance_people_sprite.classList.add("dance_people_dancecycle");

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
    document.getElementById("oliver_beer").play();
    // sound: “mariaYes” is done
    document.getElementById("oliver_beer").onended = () => {
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
    //// DER ER NOGET GALT MED DENNE
    //  document.querySelector(".oliver_walk_to_kitchen").addEventListener("webkitAnimationEnd", s1FadeToBlack);
    $(".oliver_walk_to_kitchen").on("animationend", s1FadeToBlack);

    /*  document.querySelector(".oliver_walk_to_kitchen").onanimationend = function () {
         s1FadeToBlack();
     } */
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
    // hide Oliver
    oliver_container.classList.add("hide");
    oliver_sprite.classList.remove("oliver_walkcycle");
    // Start anim: fadeToBlack
    fade_id.classList.add("fade");

    checkPlayer();
}

function checkPlayer() {
    console.log("checkPlayer");
    // CheckVariable
    if (player == "maria") {
        console.log("MARIA");
        s2();
        console.log(player);

    } else if (player == "oliver") {
        // setTimeout("s3()", 1500);
        s3();
    } else {
        alert("Noget gik galt prøv igen");

    }

}
// Anim: “fadeToBlack” is done
function s2() {
    console.log("s2");
    // stop anim: fadeToBlack
    fade_id.classList.remove("fade");
    // Start anim: fadeUpFromBlack
    fade_id.classList.add("fade_up");
    setKitchen();
}

function setKitchen() {
    console.log("setKitchen");
    fade_id.classList.remove("fade_up");
    // set scene
    kitchen.classList.remove("hide");
    kitchen_front.classList.remove("hide");
    oliver_container.classList.remove("hide");
    oliver_container.classList.remove("oliver_start_pos");
    oliver_container.classList.remove("oliver_walk_to_kitchen");

    sif_container.classList.remove("hide");
    // Start anim: bgDancecycle
    // dance_people_container.classList.remove("hide");
    //dance_people_sprite.classList.add("dance_people_dancecycle");

    // Start sound: partySound
    private_party.play();
    // fade sound: partySound
    private_party.volume = 0.03;

    // Start anim: oliverWalkcycle
    oliver_sprite.classList.add("oliver_walkcycle2");
    // Start anim: oliverWalkIntoKitchen
    oliver_container.classList.add("oliver_walk_into_kitchen");

    // Anim: “oliverWalkIntoKitchen” is done
    // document.querySelector(".oliver_walk_into_kitchen").addEventListener("webkitAnimationEnd", s2kitchen);

    $("#oliver_container").on("animationend", s2kitchen);
    console.log("animation ended?");
}


function s2kitchen() {
    console.log("s2kitchen");
    // Stop anim: oliverWalkcycle
    oliver_sprite.classList.remove("oliver_walkcycle");
    // fade sound: partySound
    // Start anim: oliverTalkcycle
    //  oliver_sprite.classList.add("oliver_talkcycle");
    // play sound: oliverHejSif
}

// sound: “oliverHejSif” is done
function s2SifTalk() {
    console.log("s2SifTalk");
    // Stop anim: oliverTalkcycle
    // Start anim: sifTalkcycle
    // play sound: sifHejOliver
}

// sound: “sifHejOliver” is done
function s2OliverTalk() {
    console.log("s2OliverTalk");
    // Stop anim: sifTalkcycle
    // Start anim: oliverTalkcycle
    // play sound: oliverGirlfriend
}

// sound: “oliverGirlfriend” is done
function s2Clock() {
    console.log("s2Clock");
    // Stop anim: oliverTalkcycle
    // play sound: clock
    // Start anim: clockTick
}

// sound: “clock” has playde for 3 sec
function s2FadeToBlack() {
    console.log("s2FadeToBlack");
    // Start anim: fadeToBlack
    // Stop anim: clockTick
    // Stop sound: clock
    // Stop sound: partySound
}

// anim: “fadeToBlack” is done
function v2() {
    console.log("v2");
    // Start anim: fadeUpFromBlack
    // play sound: choiceSound
    // Start anim: 2a
    // Start anim: 2b
}

// onChoice 2a eller 2b
function v2_2aFadeToBlack() {
    console.log("v2_2aFadeToBlack");
    // Stop anim: 2a
    // Stop anim: 2b
    // Stop sound: choiceSound
    // Start anim: fadeToBlack
}

// Anim: “fadeToBlack” is done
function s4OliverToMaria() {
    console.log("s4OliverToMaria");
    // Start anim: fadeUpFromBlack
    // fade sound: partySound
    // Start anim: OliverWalkToMaria
    // Start anim: OliverWalkcycle
}

// Anim: “OliverWalkToMaria” is done
function s4MariaTalk() {
    console.log("s4MariaTalk");
    // Stop anim: oliverWalkcycle
    // Start anim: mariaTalkcycle
    // play sound: mariaWhyWho
}

// sound: “mariaWhyWho” is done
function s4OliverTalk() {
    console.log("s4OliverTalk");
    // Stop anim: mariaTalkcycle
    // Start anim: oliverTalkcycle
    // play sound: oliverChill
}

// sound: “oliverChill” is done
function s4MariaTalkToOliver() {
    console.log("s4MariaTalkToOliver");
    // Stop anim: oliverTalkcycle
    // Start anim: mariaTalkcycle
    // play sound: mariaWouldYouRather
}

// sound: “mariaWouldYouRather” is done
function s4FadeToBlack() {
    console.log("s4FadeToBlack");
    // Stop anim: mariaTalkcycle
    // Start anim: fadeToBlack
}

// anim: “fadeToBlack” has played for 3 sec
function v4() {
    console.log("v4");
    // Start anim: fadeUpFromBlack
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
    // Start anim: fadeUpFromBlack
    // Start anim: mariaWalkToOliver
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
