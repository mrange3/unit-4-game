function gameStart() {
    $(document).ready(function () {
        var barracks = {
            "max": { name: "Maximus", health: 125, attack: 30, counter: 15, image: '<img class="fightPic img-thumbnail" id ="Maximus" src="Assets/images/Maximus.jpg">' },
            "com": { name: "Commodus", health: 100, attack: 15, counter: 30, image: '<img class="fightPic img-thumbnail" id="Commodus" src="Assets/images/Commodus.jpg">' },
            "juba": { name: "Juba", health: 90, attack: 25, counter: 20, image: '<img class="fightPic img-thumbnail" id="Juba" src="Assets/images/Juba.jpg">' },
            "tigris": { name: "Tigris", health: 110, attack: 20, counter: 25, image: '<img class="fightPic img-thumbnail" id="Tigris" src="Assets/images/Tigris.jpg">' },
        };

        var champion = {};
        var challenger = {};
        var selectedChampion = false;
        var selectedChallenger = false;
        var attackIncr = 0;
        $("#max").html(barracks.max.image);
        $("#com").html(barracks.com.image);
        $("#juba").html(barracks.juba.image);
        $("#tigris").html(barracks.tigris.image);

        $(".champ-health").text("Health");
        $(".champ-attack").text("Attack");
        $(".champ-counter").text("Counter");
        $(".chall-health").text("Health");
        $(".chall-attack").text("Attack");
        $(".chall-counter").text("Counter");

        $(".tomb1").html("");
        $(".tomb1-text").html("");
        $(".tomb2").html("");
        $(".tomb2-text").html("");
        $(".tomb3").html("");
        $(".tomb3-text").html("");
        $(".red-team, .yellow-team").empty()

        // function gameStart() {
        //     champion = {};
        //     challenger = {};
        //     selectedChampion = false;
        //     selectedChallenger = false;
        //     var  attackIncr = 0;


        //     $("#max").html(barracks.max.image);
        //     $("#com").html(barracks.com.image);
        //     $("#juba").html(barracks.juba.image);
        //     $("#tigris").html(barracks.tigris.image);

        //     barracks = {
        //         "max": { name: "Maximus", health: 125, attack: 30, counter: 15, image: '<img class="fightPic img-thumbnail" id ="Maximus" src="Assets/images/Maximus.jpg">' },
        //         "com": { name: "Commudos", health: 100, attack: 15, counter: 30, image: '<img class="fightPic img-thumbnail" id="Commodus" src="Assets/images/Commodus.jpg">' },
        //         "juba": { name: "Juba", health: 90, attack: 25, counter: 20, image: '<img class="fightPic img-thumbnail" id="Juba" src="Assets/images/Juba.jpg">' },
        //         "tigris": { name: "Tigris", health: 110, attack: 20, counter: 25, image: '<img class="fightPic img-thumbnail" id="Tigris" src="Assets/images/Tigris.jpg">' },
        //     };

        //     $(".champ-health").text("Health");
        //     $(".champ-attack").text("Attack");
        //     $(".champ-counter").text("Counter");
        //     $(".chall-health").text("Health");
        //     $(".chall-attack").text("Attack");
        //     $(".chall-counter").text("Counter");

        //     $(".tomb1").html("");
        //     $(".tomb1-text").html("");
        //     $(".tomb2").html("");
        //     $(".tomb2-text").html("");
        //     $(".tomb3").html("");
        //     $(".tomb3-text").html("");
        //     $(".red-team, .yellow-team").empty()
        // }

        $(".fightPic").on("click", function () {

            if (selectedChallenger) {
                return false
            }
            else if (selectedChampion) {
                switch (this.id) {
                    case "Maximus":
                        challenger = barracks.max;
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
                        break;
                    case "Commodus":
                        champion = barracks.com
                        break;
                    case "Juba":
                        champion = barracks.juba
                        break;
                    case "Tigris":
                        champion = barracks.tigris
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
            switch (champion.name) {
                case "Maximus":
                    $("#max").html("");
                    $("#max-text").html("");
                    attackIncr = 30;
                    break;
                case "Commodus":
                    $("#com").html("");
                    $("#com-text").html("");

                    attackIncr = 15;
                    break;
                case "Juba":
                    $("#juba").html("");
                    $("#juba-text").html("");

                    attackIncr = 25;
                    break;
                case "Tigris":
                    $("#tigris").html("");
                    $("#tigris-text").html("");

                    attackIncr = 20;
                    break;
            }


        })

        $(".confirm-chall").on("click", function () {
            if (selectedChampion) {
                selectedChallenger = true;
                $(".choice").text("Fight!");
                console.log(challenger)
                switch (challenger.name) {
                    case "Maximus":
                        $("#max").html("");
                        $("#max-text").html("");

                        break;
                    case "Commodus":
                        $("#com").html("");
                        $("#com-text").html("");

                        break;
                    case "Juba":
                        $("#juba").html("");
                        $("#juba-text").html("");

                        break;
                    case "Tigris":
                        $("#tigris").html("");
                        $("#tigris-text").html("");

                        break;
                }
            } else {
                return false;
            }
        })

        $(".attack-btn").on("click", function () {
            if (selectedChampion && selectedChallenger) {

                $(".results").text(champion.name + " attacked " + challenger.name + " for " + champion.attack + " damage! " + challenger.name + " countered, dealing " + challenger.counter + " damage to " + champion.name)


                challenger.health = challenger.health - champion.attack
                $(".chall-health").text(challenger.health + ": Health");
                champion.attack = champion.attack + attackIncr;
                $(".champ-attack").text("Attack: " + champion.attack)
                champion.health = champion.health - challenger.counter
                $(".champ-health").text("Health: " + champion.health)


                if (challenger.health < 1 && champion.health < 1 ) {
                    champion.health = champion.health + challenger.counter
                    $(".champ-health").text("Health: " + champion.health)
                    $(".results").text(champion.name + " attacked " + challenger.name + " and has killed him before " + challenger.name + "could counter!");

                }

                if (challenger.health < 1) {
                    selectedChallenger = false;
                    $(".yellow-team").html("");
                    $(".chall-name").text("Challenger");
                    $(".chall-health").text("Health");
                    $(".chall-attack").text("Attack");
                    $(".chall-counter").text("Counter");
                    $(".choice").text("Fight!");
                    $(".results").text(champion.name + " killed " + challenger.name + "!");
                    $(".choice").text("Choose Your Challenger");

                    if ($(".tomb1-text").is(":empty")) {
                        $(".tomb1").html('<img src="Assets/images/rip-tombstone-md.png">');
                        $(".tomb1-text").html(challenger.name);
                        challenger = {};
                    } else if ($(".tomb2-text").is(":empty")) {
                        $(".tomb2").html('<img src="Assets/images/rip-tombstone-md.png">');
                        $(".tomb2-text").html(challenger.name);
                        challenger = {};
                    } else {
                        $(".tomb3").html('<img src="Assets/images/rip-tombstone-md.png">');
                        $(".tomb3-text").html(challenger.name);
                        alert("You Win!")
                        gameStart()
                    }
                }


                if (champion.health < 1) {


                    alert("You Lost");
                    gameStart();
                }


            } else { return false }
        })


    })
}
gameStart()