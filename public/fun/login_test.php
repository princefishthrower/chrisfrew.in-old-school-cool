<?php
    error_reporting(E_ALL);

    // Create connection
    $link = mysql_connect("localhost", "logondaemon", "Wiskeyy7");

    // Select database
    mysql_select_db("secure_login", $link);

    // Generate query
    $email = rtrim($_GET["email"]);
    $passwordquery = rtrim($_GET["password"]);
    $query = "SELECT * FROM members WHERE email = '".$email."' AND password = '".$passwordquery."'";

    // Get number of rows
    $result = mysql_query($query, $link);
    $numrows = mysql_num_rows($result);

    if ($numrows == 0) {
        ?>
        <b>User not found, try again.</b>
        <br>
        <b>Email:</b>
        <br>
        <input type="text" id="email" style="color:black">
        <br>
        <br>
        <b>Password:</b>
        <br>
        <input type="password" id="password" style="color:black">
        <input type="submit" style="position: absolute; left: -9999px"/>
        <br>
        <br>
        <?php
    } else {
        // do other stuff...
        ?>
        <b>Successful login!<br>Here is the music we have registered with your username:<br><br></b>Cas Haley - Cas Haley:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/Cas Haley - Cas Haley" type="audio/mpeg">
            </audio>
            <br>
            <br>Camille Saint-Saëns - Aquarium.mp3:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/Camille Saint-Saëns - Aquarium.mp3" type="audio/mpeg">
            </audio>
            <br>
            <br>Sweet Baby James:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/Sweet Baby James" type="audio/mpeg">
            </audio>
            <br>
            <br>Sublime Studio Discography:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/Sublime Studio Discography" type="audio/mpeg">
            </audio>
            <br>
            <br>Keystone State of Mind 2:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/Keystone State of Mind 2" type="audio/mpeg">
            </audio>
            <br>
            <br>Yeezus:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/Yeezus" type="audio/mpeg">
            </audio>
            <br>
            <br>Man on the Moon II - The Legend of Mr. Rager:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/Man on the Moon II - The Legend of Mr. Rager" type="audio/mpeg">
            </audio>
            <br>
            <br>Carousel - Let's Go Home (Sound Remedy Remix).mp3:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/Carousel - Let's Go Home (Sound Remedy Remix).mp3" type="audio/mpeg">
            </audio>
            <br>
            <br>Jose_Gonzalez-Veneer:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/Jose_Gonzalez-Veneer" type="audio/mpeg">
            </audio>
            <br>
            <br>Crosby, Stills & Nash - Crosby, Stills & Nash (1969):
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/Crosby, Stills & Nash - Crosby, Stills & Nash (1969)" type="audio/mpeg">
            </audio>
            <br>
            <br>Johnny Cash - Greatest Hits Essentials 3CD [Bubanee]:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/Johnny Cash - Greatest Hits Essentials 3CD [Bubanee]" type="audio/mpeg">
            </audio>
            <br>
            <br>Harvey Danger- Flagpole sitta.mp3:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/Harvey Danger- Flagpole sitta.mp3" type="audio/mpeg">
            </audio>
            <br>
            <br>.:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/." type="audio/mpeg">
            </audio>
            <br>
            <br>..:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/.." type="audio/mpeg">
            </audio>
            <br>
            <br>Crosby,Stills.Nash And Young.Deja Vu.(@):
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/Crosby,Stills.Nash And Young.Deja Vu.(@)" type="audio/mpeg">
            </audio>
            <br>
            <br>The Essential Simon & Garfunkle:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/The Essential Simon & Garfunkle" type="audio/mpeg">
            </audio>
            <br>
            <br>A Kid Named Cudi:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/A Kid Named Cudi" type="audio/mpeg">
            </audio>
            <br>
            <br>DT8 Project - Destination (Album Mix).mp3:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/DT8 Project - Destination (Album Mix).mp3" type="audio/mpeg">
            </audio>
            <br>
            <br>Family Of The Year - Hero.mp3:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/Family Of The Year - Hero.mp3" type="audio/mpeg">
            </audio>
            <br>
            <br>Indicud:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/Indicud" type="audio/mpeg">
            </audio>
            <br>
            <br>Falling (Starkillers Remix).mp3:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/Falling (Starkillers Remix).mp3" type="audio/mpeg">
            </audio>
            <br>
            <br>Bob Marley - The Very Best Of legend:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/Bob Marley - The Very Best Of legend" type="audio/mpeg">
            </audio>
            <br>
            <br>The Snowball Official Mixtape 2011:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/The Snowball Official Mixtape 2011" type="audio/mpeg">
            </audio>
            <br>
            <br>will.i.am - Scream _ Shout ft. Britney Spears.mp3:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/will.i.am - Scream _ Shout ft. Britney Spears.mp3" type="audio/mpeg">
            </audio>
            <br>
            <br>Blues Backing Tracks:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/Blues Backing Tracks" type="audio/mpeg">
            </audio>
            <br>
            <br>Yellowcard:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/Yellowcard" type="audio/mpeg">
            </audio>
            <br>
            <br>Man on the Moon:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/Man on the Moon" type="audio/mpeg">
            </audio>
            <br>
            <br>Hoodie Allen - Make It Home feat. Kina Grannis (NEW SONG).mp3:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/Hoodie Allen - Make It Home feat. Kina Grannis (NEW SONG).mp3" type="audio/mpeg">
            </audio>
            <br>
            <br>Caribou - Bowls.mp3:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/Caribou - Bowls.mp3" type="audio/mpeg">
            </audio>
            <br>
            <br>Sublime - Everything Under The Sun 3CD (2006) 320 vtwin88cube:
            <br>
            <br>
            <audio id="music" controls>
                <source src="/home/chris/Music/Sublime - Everything Under The Sun 3CD (2006) 320 vtwin88cube" type="audio/mpeg">
            </audio>
            <br>
            <br><?php
    }

?>