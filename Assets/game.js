$(document).ready(function () {

    var barracks = {
        "max": { name: "Maximus", health: 120, attack: 30, counter: 25, image: '<img class="fightPic img-thumbnail" id ="Maximus" src="Assets/images/Maximus.jpg">' },
        "com": { name: "Commodos", health: 100, attack: 15, counter: 40, image: '<img class="fightPic img-thumbnail" id="Commodus" src="Assets/images/Commodus.jpg">' },
        "juba": { name: "Juba", health: 90, attack: 25, counter: 30, image: '<img class="fightPic img-thumbnail" id="Juba" src="Assets/images/Juba.jpg">' },
        "tigris": { name: "Tigris", health: 110, attack: 20, counter: 35, image: '<img class="fightPic img-thumbnail" id="Tigris" src="Assets/images/Tigris.jpg">' },
    };

    var champion = {};
    var challenger = {};
    var selectedChampion = false;
    var selectedChallenger = false;
    var enemies = {}

    $("#max").html(barracks.max.image);
    $("#com").html(barracks.com.image);
    $("#juba").html(barracks.juba.image);
    $("#tigris").html(barracks.tigris.image);

    function gameStart() {
        champion = {};
        challenger = {};
        enemies = {}
        selectedChampion = false;
        selectedChallenger = false;

        $(".red-team, .yellow-team").empty()
    }

    $(".fightPic").on("click", function () {

        if (selectedChallenger) {
            return false
        }
        else if (selectedChampion) {
            switch (this.id) {
                case "Maximus":
                    challenger = barracks.max;
                    $("#fighter1").html(barracks.max.image);
                    break;
                case "Commodus":
                    challenger = barracks.com
                    break;
                case "Juba":
                    challenger = barracks.juba
                    break;
                case "Tigris":
                    challenger = barracks.tigris
                    break;
            }
            $(".yellow-team").html(challenger.image);
            $(".chall-name").text(challenger.name);
            $(".chall-health").text(challenger.health + ": Health");
            $(".chall-attack").text(challenger.attack + ": Attack");
            $(".chall-counter").text(challenger.counter + ": Counter");
            $(".choice").text("Fight!");
        } else {
            switch (this.id) {
                case "Maximus":
                    champion = barracks.max;
                    enemies = [barracks.com, barracks.juba, barracks.tigris]
                    break;
                case "Commodus":
                    champion = barracks.com
                    enemies = [barracks.max, barracks.juba, barracks.tigris]
                    break;
                case "Juba":
                    champion = barracks.juba
                    enemies = [barracks.com, barracks.max, barracks.tigris]
                    break;
                case "Tigris":
                    champion = barracks.tigris
                    enemies = [barracks.com, barracks.juba, barracks.max]
                    break;
            }
            $(".red-team").html(champion.image);
            $(".champ-name").text(champion.name);
            $(".champ-health").text("Health: " + champion.health);
            $(".champ-attack").text("Attack: " + champion.attack);
            $(".champ-counter").text("Counter: " + champion.counter);
            console.log(enemies);
        }
    })

    $(".confirm-champ").on("click", function () {
        selectedChampion = true;
        $(".choice").text("Choose Your Challenger");
        console.log(champion)

    })

    $(".confirm-chall").on("click", function () {
        selectedChallenger = true;
        $(".choice").text("Fight!");
        console.log(challenger)
    })

    $(".attack-btn").on("click", function () {
        $(".results").text(champion.name + " attacked " + challenger.name + " for " + champion.attack + " damage! " + challenger.name + " countered, dealing " + challenger.counter + " damage to " + champion.name)

        challenger.health = challenger.health - champion.attack
        console.log(challenger.health)
        $(".chall-health").text(challenger.health + ": Health");
        champion.health = champion.health - challenger.counter
        $(".champ-health").text("Health: " + champion.health)
        champion.attack = champion.attack + 30;
        $(".champ-attack").text("Attack: " + champion.attack)

        if (challenger.health < 1) {
            selectedChallenger = false;
            challenger = {};
            $(".yellow-team").html("");
            $(".chall-name").text("Challenger");
            $(".chall-health").text("Health");
            $(".chall-attack").text("Attack");
            $(".chall-counter").text("Counter");
            $(".choice").text("Fight!");
        }


    })


})