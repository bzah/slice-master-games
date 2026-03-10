import sliceMasterImg from "@/assets/games/slice-master.jpg";
import sliceItAllImg from "@/assets/games/slice-it-all.jpg";
import perfectSlicesImg from "@/assets/games/perfect-slices.jpg";
import slideDownImg from "@/assets/games/slide-down.jpg";
import hookAndSliceImg from "@/assets/games/hook-and-slice.jpg";
import fruitSliceHeroImg from "@/assets/games/fruit-slice-hero.jpg";
import samuraiSlashImg from "@/assets/games/samurai-slash-3d.jpg";
import watermelonRunImg from "@/assets/games/watermelon-run-3d.jpg";
import halloweenFruitImg from "@/assets/games/halloween-fruit-slice.jpg";
import cakeSliceNinjaImg from "@/assets/games/cake-slice-ninja.jpg";
import tmntImg from "@/assets/games/tmnt-the-final-slice.jpg";
import sliceOfZenImg from "@/assets/games/slice-of-zen.jpg";
import sliceChefImg from "@/assets/games/slice-chef.jpg";
import sushiSliceImg from "@/assets/games/sushi-slice.jpg";
import veggieSlicerImg from "@/assets/games/veggie-slicer.jpg";
import sliceThemAllImg from "@/assets/games/slice-them-all.jpg";
import mrSliceImg from "@/assets/games/mr-slice.jpg";
import balloonSlicerImg from "@/assets/games/balloon-slicer.jpg";
import swordPlayImg from "@/assets/games/sword-play-ninja.jpg";
import swordMasterImg from "@/assets/games/sword-master.jpg";
import digitalCircusImg from "@/assets/games/digital-circus.jpg";
import jellySlicesImg from "@/assets/games/jelly-slices.jpg";
import sliceThePizzaImg from "@/assets/games/slice-the-pizza.jpg";
import laserSlicerImg from "@/assets/games/laser-slicer.jpg";
import halloweenEndlessImg from "@/assets/games/halloween-endless.jpg";
import mirunasImg from "@/assets/games/mirunas-adventures.jpg";
import beatSlashImg from "@/assets/games/beat-slash.jpg";
import drawWeaponsImg from "@/assets/games/draw-weapons.jpg";
import ponySlicerImg from "@/assets/games/pony-slicer.jpg";
import bearFruitImg from "@/assets/games/bear-fruit.jpg";
import tomJerryImg from "@/assets/games/tom-jerry.jpg";
import slycerImg from "@/assets/games/slycer.jpg";

export interface Game {
  id: string;
  name: string;
  slug: string;
  iframeUrl: string;
  category: string;
  description: string;
  longDescription: string;
  coverUrl: string;
  featured?: boolean;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export const categories: Category[] = [
  { id: "fruit-slicing", name: "Fruit Slicing", slug: "fruit-slicing", description: "Play the best free fruit slicing games online! Slice fruits and food with precision timing in these satisfying cutting games. Perfect your blade skills and achieve high scores in our curated collection of fruit slicer games." },
  { id: "ninja-action", name: "Ninja & Sword", slug: "ninja-action", description: "Unleash your inner warrior with free ninja and sword slicing games! Wield katanas, slash through enemies, and master the art of the blade in fast-paced action games you can play online for free." },
  { id: "puzzle", name: "Puzzle & Strategy", slug: "puzzle", description: "Challenge your mind with free puzzle slicing games! Think before you cut — plan strategic slices to solve brain-teasing levels. These free online puzzle games combine satisfying cuts with clever problem-solving." },
  { id: "arcade", name: "Arcade", slug: "arcade", description: "Play addictive free arcade slicing games online! Fast-paced gameplay, satisfying cuts, and endless fun await in our collection of the best arcade slice games. No download required — play instantly in your browser." },
  { id: "character", name: "Character Games", slug: "character", description: "Play free slicing games featuring your favorite characters! From classic cartoons to popular franchises, enjoy character-themed cutting and slicing adventures in your browser." },
];

export const games: Game[] = [
  {
    id: "slice-master",
    name: "Slice Master",
    slug: "slice-master",
    iframeUrl: "/games/slice-master.html",
    category: "arcade",
    coverUrl: sliceMasterImg,
    tags: ["slice master", "cool math games", "slice master cool math", "coolmathgames slice master", "slicing game", "free online"],
    description: "Play Slice Master online for free — the #1 slicing game on Cool Math Games! Swing your razor-sharp blade and slice through objects with perfect precision. Master each level by cutting everything in your path to earn maximum points. Slice Master is the ultimate browser-based slicing game, playable on desktop and mobile with no download needed. Challenge yourself with increasingly difficult levels and become the true Slice Master!",
    longDescription: "Slice Master is the internet's most popular free online slicing game, originally featured on Cool Math Games and now available to play right here on slice-master.us. In this addictive arcade game, you control a razor-sharp blade that swings through the air like a pendulum. Your goal is simple but challenging: slice through every object in your path to earn the maximum number of points on each level.\n\nWhat makes Slice Master so addictive is its perfect blend of simple controls and deep gameplay. Just tap or click to release your blade at the right moment, and watch as it cuts through furniture, food, geometric shapes, and countless other objects. The physics engine makes every slice feel satisfying and realistic. As you progress through hundreds of levels, the challenges become increasingly complex with moving targets, obstacles to avoid, and bonus objects worth extra points.\n\nSlice Master on Cool Math Games became a viral sensation thanks to its pick-up-and-play simplicity combined with a surprisingly high skill ceiling. Speedrunners and casual players alike find something to love. The game features multiple blade skins you can unlock, daily challenges, and a scoring system that rewards precision over speed. Whether you're playing Slice Master at school during a break, at work during lunch, or at home on your couch, this unblocked slicing game delivers endless entertainment.\n\nThe game works flawlessly on all devices — desktop computers, laptops, Chromebooks, iPads, Android tablets, and smartphones. Touch controls are optimized for mobile play, while mouse and keyboard controls provide pixel-perfect precision on desktop. No app download is required; simply open your browser and start slicing!",
    featured: true,
  },
  {
    id: "slice-it-all",
    name: "Slice It All",
    slug: "slice-it-all",
    iframeUrl: "/games/slice-it-all.html",
    category: "arcade",
    coverUrl: sliceItAllImg,
    tags: ["slice it all", "physics slicing", "flip and slice", "arcade cutter", "free online"],
    description: "Play Slice It All free online — a satisfying physics-based slicing game where your blade flies through the air cutting everything! Time your taps perfectly to flip and slice through objects, earning coins and unlocking new blades. This addictive free slicing game features smooth physics and endless replayability. Play Slice It All unblocked in your browser!",
    longDescription: "Slice It All takes the slicing genre to new heights with its innovative physics-based gameplay. Unlike traditional slicing games where you swipe across the screen, Slice It All has you timing taps to flip a knife end-over-end through the air. Each flip sends your blade spinning forward, slicing through anything it touches — tables, chairs, watermelons, and more.\n\nThe game's brilliance lies in its satisfying physics engine. Every object you slice reacts realistically, splitting apart and tumbling away as your knife continues its airborne journey. Land on the blade tip to bounce higher and farther, or hit flat to stop short. This risk-reward mechanic creates an addictive loop: do you play it safe with small flips, or go for massive air to reach bonus objects?\n\nAs you progress through Slice It All's levels, you'll earn coins that can be spent on new blade designs — from kitchen knives to katanas to fantasy swords. Each blade has its own visual flair, making the collection aspect another compelling reason to keep playing. The game also features various environments and object types that keep each level feeling fresh and unpredictable.\n\nSlice It All is perfect for quick gaming sessions on mobile or desktop. The one-touch controls make it incredibly accessible, while the leaderboard system adds competitive motivation. Play this free unblocked slicing game anywhere — at school, at work, or at home. No download or sign-up required, just pure slicing satisfaction.",
  },
  {
    id: "perfect-slices",
    name: "Perfect Slices",
    slug: "perfect-slices",
    iframeUrl: "/games/perfect-slices.html",
    category: "fruit-slicing",
    coverUrl: perfectSlicesImg,
    tags: ["perfect slices", "food cutting", "chopping game", "kitchen slicer", "satisfying game", "free online"],
    description: "Play Perfect Slices free online — the most satisfying food cutting game! Tap to slice ingredients on the chopping board with perfect timing. Cut vegetables, fruits, and more as they slide past your blade. Avoid hitting the wooden blocks and achieve perfect slices every time! This free slicing game is great for relaxing and sharpening your reflexes.",
    longDescription: "Perfect Slices delivers one of the most satisfying gaming experiences in the slicing genre. Set in a vibrant kitchen environment, you take on the role of a master chef wielding a razor-sharp knife on a chopping board. Ingredients slide past your blade on a conveyor belt, and your job is to chop them with perfect timing and precision.\n\nThe gameplay is deceptively simple: tap the screen or click to bring your knife down. But timing is everything — slice at the right moment to cut food items cleanly, but watch out for the wooden blocks interspersed between the ingredients. Hitting a wooden block costs you a life, adding tension to what might otherwise be a relaxing experience. The contrast between the satisfying *thwack* of a perfect slice and the anxiety of an approaching obstacle creates genuinely compelling gameplay.\n\nPerfect Slices features a huge variety of foods to cut, from carrots and cucumbers to watermelons, sausages, and even exotic ingredients. Each food item slices differently, with satisfying visual and audio feedback that makes every cut feel rewarding. The game's colorful graphics and cheerful sound design create an atmosphere that's both fun and relaxing.\n\nAs you advance through levels, the conveyor belt speeds up and the patterns become more complex. Power-ups occasionally appear, giving you abilities like a wider blade or slow motion. Perfect Slices is ideal for casual gaming sessions and is a fantastic choice for anyone who enjoys ASMR-style satisfying gameplay. Play free online with no download on any device!",
  },
  {
    id: "slide-down",
    name: "Slide Down",
    slug: "slide-down",
    iframeUrl: "/games/slide-down.html",
    category: "arcade",
    coverUrl: slideDownImg,
    tags: ["slide down", "arcade runner", "obstacle game", "reflex game", "free online"],
    description: "Play Slide Down free online — a thrilling arcade game where you slide and cut through colorful obstacles! Navigate your way down through increasingly challenging levels, slicing through barriers and collecting rewards. This fast-paced free browser game tests your reflexes and timing skills.",
    longDescription: "Slide Down is a fast-paced arcade game that combines sliding mechanics with slicing action for an exhilarating gaming experience. As you descend through a vertical obstacle course, you must navigate your character through narrow gaps, cut through breakable barriers, and avoid deadly obstacles.\n\nThe controls are smooth and intuitive — swipe or drag to move left and right as you slide downward at increasing speeds. What sets Slide Down apart from other arcade games is the slicing element: certain barriers can be cut through with your blade, creating satisfying visual effects as you shatter obstacles in your path. Strategic players will learn which obstacles are breakable and which must be avoided.\n\nEach level introduces new mechanics and obstacle patterns, keeping the gameplay fresh across hundreds of stages. Color-coded barriers, moving platforms, rotating blades, and timed gates all add layers of complexity. Collecting gems and power-ups along the way allows you to unlock new character skins and trail effects.\n\nSlide Down's visual design is colorful and appealing, with smooth animations and particle effects that make each slice feel impactful. The game runs at a buttery-smooth framerate in your browser, whether you're playing on a high-end desktop or a budget smartphone. It's the perfect game for quick sessions — easy to pick up, hard to put down. Play free and unblocked at slice-master.us!",
  },
  {
    id: "hook-and-slice",
    name: "Hook & Slice",
    slug: "hook-and-slice",
    iframeUrl: "/games/hook-and-slice.html",
    category: "ninja-action",
    coverUrl: hookAndSliceImg,
    tags: ["hook and slice", "samurai game", "grappling hook", "ninja action", "katana game", "free online"],
    description: "Play Hook & Slice free online — an action-packed samurai slicing game! Swing on grappling hooks and slice through enemies with your katana. Combine acrobatic moves with devastating blade strikes in this unique free ninja game. Master the hook-and-slash mechanics to become an unstoppable warrior!",
    longDescription: "Hook & Slice combines the thrill of grappling-hook swinging with the satisfaction of samurai sword combat in one unforgettable free online game. You play as a nimble warrior who uses a grappling hook to swing through levels while slicing enemies with a razor-sharp katana. The dual mechanics create a unique gameplay loop unlike anything else in the genre.\n\nThe grappling hook lets you latch onto anchor points and swing in wide arcs, building momentum for devastating aerial slashes. Timing your release perfectly launches you at high speed toward groups of enemies, allowing you to cut through them in a single fluid motion. Chain multiple swings and slashes together for massive combo scores and spectacular acrobatic displays.\n\nThe game features multiple environments — from ancient Japanese temples and bamboo forests to modern rooftops and underground caves. Each environment introduces new enemy types with different attack patterns and weaknesses. Some enemies require precise timing to defeat, while others need to be approached from specific angles using the grappling hook.\n\nHook & Slice's art style blends traditional Japanese aesthetics with modern game design, creating visuals that are both beautiful and functional. The combat animations are smooth and satisfying, with slow-motion effects triggered during particularly impressive kills. Sound design features authentic katana sound effects and an atmospheric soundtrack. Play this unique ninja slicing game free online — no downloads required!",
  },
  {
    id: "fruit-slice-hero",
    name: "Fruit Slice Hero",
    slug: "fruit-slice-hero",
    iframeUrl: "/games/fruit-slice-hero.html",
    category: "fruit-slicing",
    coverUrl: fruitSliceHeroImg,
    tags: ["fruit slice", "fruit ninja", "fruit cutting", "slice hero", "fruit slicer online", "free online"],
    description: "Play Fruit Slice Hero free online — become the ultimate fruit cutting champion! Slice flying watermelons, oranges, apples, and more with swift blade movements. Avoid bombs, aim for combo multipliers, and set high scores in this classic fruit ninja-style slicing game. Play free and unblocked in any browser!",
    longDescription: "Fruit Slice Hero is the definitive free online fruit cutting game, inspired by the classic fruit ninja genre that took mobile gaming by storm. Fruits are launched into the air from the bottom of the screen, and your job is to slice through them with swift mouse swipes or finger gestures before they fall. It's simple, addictive, and incredibly satisfying.\n\nThe game features a wide variety of fruits to slice — juicy watermelons that split in half with a satisfying splash, oranges that burst into segments, apples that crack cleanly, bananas, pineapples, coconuts, and seasonal fruits that rotate throughout the year. Each fruit has unique visual effects when sliced, and the juice splatters that remain on screen add to the mesmerizing visual experience.\n\nBut beware of the bombs! Mixed in with the fruits are explosive bombs that end your run if sliced. As you progress, the bombs become more frequent and harder to avoid, creating intense moments where you need to thread your blade between closely packed fruits and explosives. Power-ups like freeze time, double points, and frenzy mode keep gameplay dynamic.\n\nFruit Slice Hero features multiple game modes: Classic mode gives you three lives; Arcade mode has a timer with bonus time fruits; Zen mode offers a relaxing, bomb-free experience. The global leaderboard lets you compete against players worldwide. Whether you're a fruit ninja veteran or a newcomer to slicing games, Fruit Slice Hero offers endless fun. Play free online at slice-master.us on any device!",
  },
  {
    id: "samurai-slash-3d",
    name: "Samurai Slash 3D",
    slug: "samurai-slash-3d",
    iframeUrl: "/games/samurai-slash-3d.html",
    category: "ninja-action",
    coverUrl: samuraiSlashImg,
    tags: ["samurai slash", "3D sword game", "katana combat", "samurai game online", "ninja slash 3D", "free online"],
    description: "Play Samurai Slash 3D free online — step into the role of a master samurai! Slash through enemies with precise 3D katana strikes and experience cinematic combat. This free action slicing game features stunning 3D graphics and satisfying sword gameplay you can play in your browser.",
    longDescription: "Samurai Slash 3D transports you to feudal Japan in a stunning 3D action game where every sword strike feels powerful and satisfying. As a legendary samurai warrior, you face waves of enemies in beautifully rendered 3D environments, using your katana to deliver devastating slashes that cut through armor and bone.\n\nThe 3D perspective adds a new dimension to slicing gameplay. Rather than simple 2D swipes, you control the exact angle and direction of your sword strikes in three-dimensional space. Horizontal slashes cut through groups of enemies, vertical strikes cleave through armored opponents, and diagonal cuts can split enemies from shoulder to hip. The variety of attack angles gives you tactical options in every encounter.\n\nEach level of Samurai Slash 3D places you in a new scenario — defending a village from bandits, storming a castle, fighting in a bamboo forest at night, or facing down a powerful boss enemy. Boss battles require you to learn attack patterns and find openings for your counter-strikes, adding a strategic layer to the fast-paced combat.\n\nThe game's 3D graphics are impressive for a browser game, with detailed character models, dynamic lighting, and cinematic camera angles during special moves. Slow-motion finishing strikes let you appreciate the precision of your cuts. The soundtrack features traditional Japanese instruments mixed with modern percussion, creating an epic atmosphere. Play Samurai Slash 3D free and unblocked — no download needed!",
  },
  {
    id: "watermelon-run-3d",
    name: "Watermelon Run 3D",
    slug: "watermelon-run-3d",
    iframeUrl: "/games/watermelon-run-3d.html",
    category: "arcade",
    coverUrl: watermelonRunImg,
    tags: ["watermelon game", "3D runner", "fruit runner", "arcade game online", "watermelon slicer", "free online"],
    description: "Play Watermelon Run 3D free online — a hilarious runner game where you roll and slice as a watermelon! Dodge obstacles, collect power-ups, and cut through barriers in colorful 3D levels. This fun free arcade game is perfect for quick gaming sessions on mobile or desktop.",
    longDescription: "Watermelon Run 3D is a delightfully quirky endless runner game where you play as a watermelon rolling through a colorful 3D world. Part runner, part slicer — you roll forward automatically while dodging obstacles, collecting coins, and using your melon's natural cutting ability to slice through breakable barriers.\n\nThe gameplay combines classic endless runner mechanics with the satisfying physics of watermelon slicing. As you roll through each level, you encounter various obstacles: wooden fences that you can smash through, steel barriers you must dodge, ramps that launch you into the air, and conveyor belts that change your direction. The watermelon's squishy physics make every collision feel uniquely entertaining.\n\nPower-ups scattered throughout levels give you temporary abilities: speed boosts that turn you into a blurring green projectile, size increases that let you smash through larger obstacles, and magnet powers that attract nearby coins. Special golden watermelons hidden in secret paths unlock bonus levels with unique challenges and rewards.\n\nWatermelon Run 3D's visual design is bright, colorful, and full of personality. The 3D environments range from sunny farmlands and tropical beaches to snowy mountains and futuristic cities. Each environment has unique obstacles and visual themes that keep the gameplay fresh. The cheerful soundtrack and satisfying sound effects make this the perfect game for lightening your mood. Play free on any device at slice-master.us!",
  },
  {
    id: "halloween-fruit-slice",
    name: "Halloween Fruit Slice",
    slug: "halloween-fruit-slice",
    iframeUrl: "/games/halloween-fruit-slice.html",
    category: "fruit-slicing",
    coverUrl: halloweenFruitImg,
    tags: ["halloween game", "fruit slice halloween", "pumpkin slicer", "spooky cutting game", "seasonal game", "free online"],
    description: "Play Halloween Fruit Slice free online — a spooky twist on classic fruit cutting! Slice pumpkins, haunted fruits, and Halloween-themed treats in this seasonal free slicing game. Enjoy festive graphics and satisfying blade action as you carve your way through spooky levels.",
    longDescription: "Halloween Fruit Slice puts a spooky seasonal spin on the beloved fruit slicing formula. Instead of regular fruits, you're slicing pumpkins, ghostly apples, bat-shaped treats, spider-web melons, and other Halloween-themed objects. The entire game is wrapped in delightfully creepy atmosphere with dark backgrounds, eerie lighting, and festive decorations.\n\nThe core gameplay follows the proven fruit ninja formula — objects are launched into the air and you must slice them with swift blade movements before they fall. But Halloween Fruit Slice adds unique seasonal twists: ghost fruits that turn invisible mid-flight and must be sliced by memory, pumpkin bombs that explode into smaller pumpkins, and special witch's cauldron power-ups that create a frenzy of sliceable objects.\n\nThe visual design is outstanding, featuring a spooky graveyard background with animated elements like flying bats, flickering jack-o-lanterns, and drifting fog. The blade trail leaves a green ghostly glow, and sliced objects splatter with purple and orange effects. Sound design includes creepy ambient sounds, satisfying slice effects, and a Halloween-themed soundtrack.\n\nHalloween Fruit Slice is perfect for getting into the Halloween spirit while enjoying addictive slicing gameplay. The game features seasonal leaderboards and special achievements like 'Pumpkin Carver' and 'Ghost Hunter'. While themed for Halloween, the game is enjoyable year-round for anyone who loves spooky aesthetics. Play free online at slice-master.us — no tricks, just treats!",
  },
  {
    id: "cake-slice-ninja",
    name: "Cake Slice Ninja",
    slug: "cake-slice-ninja",
    iframeUrl: "/games/cake-slice-ninja.html",
    category: "fruit-slicing",
    coverUrl: cakeSliceNinjaImg,
    tags: ["cake slice", "dessert ninja", "cake cutting game", "pastry slicer", "bakery game", "free online"],
    description: "Play Cake Slice Ninja free online — cut cakes and pastries with ninja precision! Slice through flying desserts including cupcakes, layer cakes, and donuts. This delicious free slicing game combines sweet treats with fast-paced blade action. Play unblocked and free in your browser!",
    longDescription: "Cake Slice Ninja serves up a delicious twist on the slicing genre by replacing fruits with mouth-watering desserts. Flying cupcakes, multi-layer wedding cakes, glazed donuts, cream puffs, and chocolate éclairs soar through the air waiting to be sliced by your ninja blade. Every cut reveals the dessert's cross-section in delectable detail.\n\nThe gameplay is fast-paced and satisfying. Different desserts require different slicing techniques — thin cookies can be cut with a quick tap, while massive wedding cakes need a full-screen swipe. Multi-layer cakes can be sliced multiple times for bonus points, revealing layers of cream, jam, and sponge cake. Special golden desserts appear occasionally, offering massive score bonuses if you can slice them before they disappear.\n\nWatch out for the kitchen hazards! Burning pans, dropped spatulas, and rogue kitchen timers act as the 'bombs' of this game — hitting them costs you points or ends your run. Power-ups include the Chef's Hat (doubles points), Frosting Frenzy (slows time), and Bakery Bonanza (fills the screen with sliceable treats).\n\nCake Slice Ninja features beautiful bakery-themed backgrounds that change as you level up — from a cozy home kitchen to a professional bakery, a French patisserie, and a fantastical candy land. The visual effects when slicing desserts are especially satisfying, with cream splatters, crumb explosions, and frosting drizzles. This family-friendly game is perfect for dessert lovers and slicing fans alike. Play free online!",
  },
  {
    id: "tmnt-the-final-slice",
    name: "TMNT: The Final Slice",
    slug: "tmnt-the-final-slice",
    iframeUrl: "/games/tmnt-the-final-slice.html",
    category: "character",
    coverUrl: tmntImg,
    tags: ["TMNT game", "ninja turtles", "pizza slice game", "character game", "teenage mutant ninja turtles", "free online"],
    description: "Play TMNT: The Final Slice free online — join the Teenage Mutant Ninja Turtles in this pizza-slicing adventure! Help Leonardo, Raphael, Donatello, and Michelangelo slice through pizza and defeat enemies. This free character game brings the beloved turtles to your browser!",
    longDescription: "TMNT: The Final Slice brings the Teenage Mutant Ninja Turtles to the world of slicing games in an action-packed pizza-themed adventure. Choose your favorite turtle — Leonardo with his twin katanas, Raphael with his sais, Donatello with his bo staff, or Michelangelo with his nunchucks — and slash your way through waves of enemies and mountains of pizza.\n\nThe game perfectly captures the spirit of the TMNT franchise. Each turtle has a unique slicing style and special ability. Leonardo's precise cuts deal extra damage, Raphael's aggressive strikes hit multiple enemies, Donatello's sweeping attacks have the widest range, and Michelangelo's fast combos rack up the highest scores. You can switch between turtles between levels to find your favorite playstyle.\n\nLevels alternate between combat scenarios and pizza-slicing challenges. In combat levels, you slash through Foot Clan ninjas, Kraang droids, and other iconic TMNT villains. Pizza levels are pure slicing fun — giant pizzas fly through the air and you must cut them into the exact number of slices requested. Boss battles against Shredder, Krang, and Bebop & Rocksteady provide epic climactic challenges.\n\nThe art style faithfully recreates the animated series' look with vibrant colors and expressive character animations. Voice clips, the classic theme music, and authentic sound effects complete the nostalgia package. TMNT: The Final Slice is a must-play for fans of the franchise and slicing game enthusiasts. Cowabunga! Play free at slice-master.us!",
  },
  {
    id: "mini-game-slice-of-zen",
    name: "Mini Game: Slice of Zen",
    slug: "mini-game-slice-of-zen",
    iframeUrl: "/games/mini-game-slice-of-zen.html",
    category: "puzzle",
    coverUrl: sliceOfZenImg,
    tags: ["zen game", "relaxing puzzle", "mindful slicing", "calm cutting game", "zen puzzle", "free online"],
    description: "Play Slice of Zen free online — a calming puzzle game where precision cuts create harmony. Make careful slices to solve each zen-inspired level. This free relaxing slicing game is perfect for unwinding while exercising your brain. Find your inner peace through the art of cutting!",
    longDescription: "Mini Game: Slice of Zen is a meditative puzzle experience that transforms the act of cutting into an art form. Each level presents you with a shape or pattern that must be divided into specific sections using a limited number of cuts. The challenge lies in finding the perfect angle and position for each slice to achieve the desired result.\n\nUnlike fast-paced slicing games, Slice of Zen encourages you to take your time. There are no timers, no scores, and no pressure — just you, your blade, and the puzzle. The game's zen philosophy is reflected in every aspect of its design, from the soft ambient soundtrack featuring wind chimes and flowing water to the minimalist visual style with soothing pastel colors.\n\nThe puzzles start simple but gradually introduce complex geometric challenges. Some levels require you to divide a circle into equal parts; others ask you to create specific shapes by cutting away material from a larger form. Later levels introduce multi-layered objects, curved surfaces, and restrictions on cut angles. There are over 100 handcrafted puzzles, each designed to be satisfying to solve.\n\nSlice of Zen is the perfect game for unwinding after a stressful day. Its gentle difficulty curve means you'll never feel frustrated, and the meditative atmosphere helps you relax and focus. The game has been praised for its unique approach to the slicing genre, proving that cutting games can be peaceful as well as exciting. Play free online and find your inner zen!",
  },
  {
    id: "slice-chef-food-survivor",
    name: "Slice Chef: Food Survivor",
    slug: "slice-chef-food-survivor",
    iframeUrl: "/games/slice-chef-food-survivor.html",
    category: "fruit-slicing",
    coverUrl: sliceChefImg,
    tags: ["chef game", "food survivor", "cooking slicer", "kitchen action", "food cutting", "free online"],
    description: "Play Slice Chef: Food Survivor free online — battle waves of flying vegetables as a master chef! Slash through incoming produce with your kitchen knife to survive. This unique free slicing game combines cooking action with survival gameplay. How long can you last against the food invasion?",
    longDescription: "Slice Chef: Food Survivor flips the script on cooking games by turning food preparation into an action-packed survival challenge. Waves of rogue vegetables, fruits, and ingredients fly toward you from all directions, and your only defense is your trusty kitchen knife. Slice them before they hit you, or it's game over!\n\nThe survival mechanics add real tension to the slicing gameplay. Each wave brings more food items at faster speeds, and the variety of produce keeps you on your toes. Tomatoes fly in straight lines, onions curve unpredictably, potatoes are heavy and drop fast, and chili peppers leave a burning trail that damages you if crossed. Learning each ingredient's flight pattern is key to lasting longer.\n\nBetween waves, you can spend collected coins on upgrades for your chef character: sharper knives for one-hit cuts, protective aprons for extra lives, and special abilities like the Blender Tornado (a spinning attack that shreds everything nearby) or the Freezer Blast (temporarily freezes all airborne food). These upgrades become essential as the difficulty ramps up in later waves.\n\nThe game features charming cartoon graphics with a professional kitchen backdrop. Sliced ingredients splatter realistically, and a combo counter rewards fast cutting with score multipliers. Weekly leaderboards let you compete against other chefs worldwide. Slice Chef: Food Survivor is perfect for players who want their slicing games with an extra serving of challenge. Play free at slice-master.us!",
  },
  {
    id: "sushi-slice",
    name: "Sushi Slice",
    slug: "sushi-slice",
    iframeUrl: "/games/sushi-slice.html",
    category: "fruit-slicing",
    coverUrl: sushiSliceImg,
    tags: ["sushi game", "japanese food", "sushi cutting", "fish slicer", "sashimi game", "free online"],
    description: "Play Sushi Slice free online — master the art of Japanese sushi preparation! Cut fish, rolls, and ingredients with precision to create perfect sushi. This free slicing game features beautiful Japanese-themed visuals and satisfying knife mechanics. Play free and unblocked!",
    longDescription: "Sushi Slice immerses you in the artful world of Japanese sushi preparation. As a sushi chef in training, you must master the precise art of cutting fish, vegetables, and rice rolls to create beautiful and authentic sushi dishes. Each level presents a new ingredient or technique to learn, building your skills from simple cuts to complex sashimi presentations.\n\nThe game's cutting mechanics are remarkably refined. Different ingredients require different cutting techniques: salmon needs thin, angled slices for sashimi; tuna requires precise blocks for nigiri; cucumber must be cut into perfect circles for maki rolls; and nori sheets need to be trimmed to exact sizes. The angle, speed, and position of your cuts all affect the final result, which is scored on precision and presentation.\n\nAs you progress through Sushi Slice, you unlock new recipes and ingredients. Start with basic maki rolls and work your way up to complex chirashi bowls, artistic sashimi platters, and intricate temaki hand rolls. Special challenge levels test your speed and accuracy with timed orders from demanding customers. Bonus ingredients like wagyu beef and truffle add luxury to your sushi repertoire.\n\nThe visual design is gorgeous, featuring a traditional Japanese restaurant setting with wooden counters, bamboo decorations, and soft lighting. The attention to detail in the food rendering is outstanding — each ingredient looks realistic and appetizing. Traditional Japanese music and ambient restaurant sounds create an authentic atmosphere. Sushi Slice is both a fun game and an appreciation of Japanese culinary art. Play free online!",
  },
  {
    id: "veggie-slicer",
    name: "Veggie Slicer",
    slug: "veggie-slicer",
    iframeUrl: "/games/veggie-slicer.html",
    category: "fruit-slicing",
    coverUrl: veggieSlicerImg,
    tags: ["veggie slicer", "vegetable cutting", "healthy food game", "kitchen slicer", "produce cutter", "free online"],
    description: "Play Veggie Slicer free online — slice vegetables with speed and precision! Cut carrots, peppers, broccoli, and more as they fly through the air. This classic free vegetable cutting game tests your reflexes and accuracy. Play unblocked in any browser on desktop or mobile!",
    longDescription: "Veggie Slicer puts a healthy spin on the fruit ninja formula by focusing entirely on vegetables. Carrots, bell peppers, broccoli, eggplants, onions, zucchini, and dozens of other vegetables are tossed into the air, and your mission is to slice them with perfectly timed blade swipes. It's fast, it's fun, and it might even make you want to eat more vegetables!\n\nThe game features an impressive variety of vegetables, each with unique slicing properties. Carrots snap cleanly in half with a satisfying crunch, bell peppers split open to reveal their colorful insides, tomatoes burst with juicy splatter effects, and hard vegetables like turnips require a stronger swipe. The attention to detail in how each vegetable reacts to being cut adds depth to what could be a simple swiping game.\n\nVeggie Slicer includes multiple game modes to keep things interesting. Classic Mode challenges you to maintain a streak without missing; Time Attack gives you 60 seconds to score as many points as possible; Zen Mode offers relaxing, endless cutting without penalties; and Challenge Mode presents specific objectives like 'slice 10 peppers without hitting a single carrot.' Daily challenges and weekly tournaments add competitive depth.\n\nThe game's educational aspect makes it particularly suitable for younger players, with fun veggie facts displayed between levels. The bright, colorful graphics and cheerful music create an inviting atmosphere. Power-ups include the Salad Bowl (bonus points for variety), the Golden Knife (cuts through everything), and Slow Motion (makes precision cuts easier). Play Veggie Slicer free online at slice-master.us!",
  },
  {
    id: "slice-them-all",
    name: "Slice Them All",
    slug: "slice-them-all",
    iframeUrl: "/games/slice-them-all.html",
    category: "ninja-action",
    coverUrl: sliceThemAllImg,
    tags: ["slice them all", "action slicer", "ninja cutter", "slash game", "combat slicing", "free online"],
    description: "Play Slice Them All free online — an action-packed slicing game where you cut through everything! Use powerful blade strikes to slice through all objects in your path. This satisfying free slicing game features endless levels and increasingly challenging obstacles. Play for free!",
    longDescription: "Slice Them All is an adrenaline-pumping action game that lives up to its name — everything in your path must be sliced, diced, and destroyed. Armed with an ever-sharpening blade, you charge through levels filled with objects, enemies, and obstacles, cutting through all of them with satisfying precision.\n\nThe game's progression system keeps things exciting. Each level increases in complexity, introducing new types of objects that require different cutting strategies. Wooden objects split easily, metal requires charged strikes, glass shatters into beautiful fragments, and certain enchanted objects can only be cut with special blade abilities that you unlock as you advance.\n\nCombo mechanics are the heart of Slice Them All's scoring system. Consecutive cuts without pausing build your combo multiplier, and long chains trigger spectacular special effects — screen-clearing shockwaves, blade tornadoes, and devastating finishing moves. The highest combos require perfect timing and spatial awareness, providing a satisfying challenge for skilled players.\n\nSlice Them All features a weapon upgrade system that lets you customize your blade's appearance and abilities. Start with a basic knife and work your way up to legendary swords, energy blades, and mythical weapons. Each weapon has unique visual effects and cutting properties. The game's stylish art direction combines sharp geometric shapes with explosive particle effects, creating a visually spectacular experience. Play free and unblocked at slice-master.us!",
  },
  {
    id: "mr-slice",
    name: "Mr. Slice",
    slug: "mr-slice",
    iframeUrl: "/games/mr-slice.html",
    category: "puzzle",
    coverUrl: mrSliceImg,
    tags: ["mr slice", "puzzle slicer", "brain teaser", "strategy cutting", "logic game", "free online"],
    description: "Play Mr. Slice free online — a clever puzzle slicing game where strategic cuts are key! Plan your slices carefully to complete each brain-teasing level. This free puzzle game combines cutting mechanics with logical thinking. Can you outsmart every level and become the true Mr. Slice?",
    longDescription: "Mr. Slice is a brilliant puzzle game that proves slicing can be as much about brains as reflexes. Each level presents a unique spatial puzzle: you have a limited number of cuts to divide objects, eliminate targets, or create specific shapes. The challenge lies in figuring out where to place each cut for maximum effect.\n\nThe puzzle design is incredibly clever. Early levels teach you the basics — slicing a circle in half, cutting a triangle into three equal pieces. But the difficulty ramps up quickly with multi-step puzzles where each cut affects the physics of subsequent cuts. Objects can slide, fall, and bounce after being cut, meaning you need to predict chain reactions and use physics to your advantage.\n\nMr. Slice features over 200 handcrafted puzzles across themed worlds. The Forest World introduces basic cutting mechanics; the Ice World adds slippery surfaces; the Lava World features destructible platforms; and the Space World introduces zero-gravity physics. Each world culminates in a complex boss puzzle that tests everything you've learned.\n\nThe game rewards creative solutions with a star rating system. While every puzzle has a straightforward solution, finding the most efficient path earns you three stars. Some puzzles have hidden solutions that are incredibly satisfying to discover. Mr. Slice is perfect for puzzle enthusiasts who want a mental challenge wrapped in satisfying slicing gameplay. Play free online!",
  },
  {
    id: "balloon-slicer",
    name: "Balloon Slicer",
    slug: "balloon-slicer",
    iframeUrl: "/games/balloon-slicer.html",
    category: "arcade",
    coverUrl: balloonSlicerImg,
    tags: ["balloon slicer", "balloon pop", "balloon cutting", "arcade popper", "party game", "free online"],
    description: "Play Balloon Slicer free online — pop and slice colorful balloons with precision! Cut through waves of floating balloons to earn points and unlock new levels. This addictive free arcade slicing game is fun for all ages. Play unblocked in your browser!",
    longDescription: "Balloon Slicer is a colorful and addictive arcade game where you slash through floating balloons with satisfying precision. Balloons of every color rise from the bottom of the screen, and your job is to pop them with swift cutting gestures before they float away. It sounds simple, but the variety of balloon types and the increasing challenge create a surprisingly deep game.\n\nDifferent balloon types require different strategies. Regular balloons pop with a single cut; multi-layer balloons need multiple slashes; water balloons splash when popped, temporarily obscuring your view; helium balloons rise quickly and must be caught fast; and special golden balloons trigger bonus rounds worth massive points. Bomb balloons, naturally, should be avoided at all costs.\n\nThe game features a delightful party atmosphere with confetti effects, cheerful music, and vibrant colors. Each level has a target number of balloons to pop, and bonus objectives challenge you to achieve specific combos or pop certain balloon types. Completing objectives earns you upgrades like wider blades, laser cuts, and special abilities.\n\nBalloon Slicer is particularly family-friendly, making it a great choice for younger players. The non-violent gameplay, bright colors, and cheerful sound effects create a positive gaming experience. Yet the game has enough depth to keep older players engaged, especially in the later levels where balloon patterns become complex and require quick decision-making. Play free at slice-master.us!",
  },
  {
    id: "sword-play-ninja-slice-runner",
    name: "Sword Play: Ninja Slice Runner",
    slug: "sword-play-ninja-slice-runner",
    iframeUrl: "/games/sword-play-ninja-slice-runner.html",
    category: "ninja-action",
    coverUrl: swordPlayImg,
    tags: ["sword play", "ninja runner", "slice runner", "3D ninja", "sword combat", "free online"],
    description: "Play Sword Play: Ninja Slice Runner free online — combine running with epic sword slicing! Sprint through obstacles and cut through everything with your ninja blade in 3D. This free action runner game features satisfying sword combat and fast-paced gameplay. Play free on desktop or mobile!",
    longDescription: "Sword Play: Ninja Slice Runner merges the endless runner genre with thrilling ninja sword combat in a stunning 3D package. You sprint forward automatically through beautifully crafted 3D environments while wielding a gleaming katana. Your job: time your sword strikes perfectly to cut through enemies, obstacles, and objects in your path.\n\nThe sword mechanics feel incredibly satisfying. Swipe in different directions to perform various slash types — horizontal sweeps to clear groups of enemies, vertical chops to split barriers, and diagonal cuts for style points. String together multiple slashes for devastating combos that trigger slow-motion effects and spectacular visual feedback.\n\nLevels are varied and visually stunning, taking you through ancient Japanese villages, neon-lit cyberpunk cities, volcanic wastelands, and floating sky temples. Each environment introduces unique obstacles and enemy types. Samurai warriors require precise timing to defeat, while mechanical robots need specific weak-point slashes. Boss encounters at the end of each world provide epic climactic battles.\n\nThe game features an extensive upgrade system: collect coins to unlock new swords (each with unique abilities), ninja outfits (providing stat bonuses), and special powers (like clone dash and shadow slash). Daily challenges and a global leaderboard add competitive replay value. Sword Play: Ninja Slice Runner is a must-play for fans of action games and the ninja aesthetic. Play free online at slice-master.us!",
  },
  {
    id: "sword-master-slice-your-enemies",
    name: "Sword Master: Slice Your Enemies!",
    slug: "sword-master-slice-your-enemies",
    iframeUrl: "/games/sword-master-slice-your-enemies.html",
    category: "ninja-action",
    coverUrl: swordMasterImg,
    tags: ["sword master", "enemy slicer", "combat game", "warrior blade", "action slash", "free online"],
    description: "Play Sword Master: Slice Your Enemies free online — become the ultimate blade warrior! Wield devastating swords to slice through waves of enemies in this epic free action game. Master different blade techniques and upgrade your weapons. Play this unblocked slicing game in any browser!",
    longDescription: "Sword Master: Slice Your Enemies is an intense action game that puts you in the role of an elite swordsman facing endless waves of opponents. Every swipe of your blade sends enemies flying, and the satisfying slow-motion effects on critical hits make you feel like an unstoppable warrior.\n\nThe combat system has surprising depth for a browser game. Different enemies require different approaches: shield-bearing knights need overhead strikes, agile rogues must be caught with wide sweeps, armored brutes require charged power attacks, and mages need quick interrupt strikes. Learning each enemy type's weakness and adapting your strategy on the fly is key to survival.\n\nProgression is rewarding and meaningful. Defeating enemies earns experience points that level up your character, unlocking new sword techniques and passive abilities. The weapon shop offers dozens of swords, from rapiers and claymores to magical blades that deal elemental damage. Each weapon type has a unique fighting style that changes how you approach combat.\n\nArena mode is where Sword Master truly shines. Endless waves of increasingly powerful enemies test your skills to the absolute limit. How many waves can you survive? The global leaderboard tracks the best warriors, and weekly tournaments offer special rewards. The game's dynamic difficulty system ensures that both newcomers and experienced players find the right level of challenge. Play Sword Master free at slice-master.us!",
  },
  {
    id: "slice-the-digital-circus",
    name: "Slice the Digital Circus",
    slug: "slice-the-digital-circus",
    iframeUrl: "/games/slice-the-digital-circus.html",
    category: "character",
    coverUrl: digitalCircusImg,
    tags: ["digital circus", "TADC game", "circus slicer", "character slice", "pomni game", "free online"],
    description: "Play Slice the Digital Circus free online — cut and slash through the Amazing Digital Circus world! Slice circus-themed characters and objects in this fun free character game. Enjoy vibrant visuals and addictive gameplay inspired by the popular series. Play free and unblocked!",
    longDescription: "Slice the Digital Circus brings the viral world of The Amazing Digital Circus to the slicing game genre. Inspired by the hit web series, this colorful game lets you slash through circus-themed objects, props, and elements from the digital world. Fans of the series will recognize familiar visual elements and references throughout.\n\nThe game captures the chaotic, colorful energy of the Digital Circus perfectly. Objects range from circus props like balls, rings, and tents to digital elements like glitching cubes and pixelated fragments. Each object has unique visual effects when sliced — circus balls burst into confetti, digital objects glitch and fragment, and special items trigger screen-filling spectacles.\n\nGameplay mechanics include a unique 'Glitch Mode' power-up that temporarily transforms the entire screen into a digital wonderland of sliceable objects. Combo systems reward skilled players with increasingly flashy effects, from fireworks to circus spotlights. The difficulty curve is well-balanced, making the game accessible to younger fans while offering enough challenge for experienced gamers.\n\nThe art direction is outstanding, faithfully recreating the Digital Circus aesthetic with bright colors, surreal shapes, and a slightly unsettling digital atmosphere. The soundtrack mixes circus music with electronic beats, perfectly matching the source material's unique vibe. Whether you're a fan of The Amazing Digital Circus or just looking for a visually stunning slicing game, this is a must-play. Free at slice-master.us!",
  },
  {
    id: "jelly-slices",
    name: "Jelly Slices",
    slug: "jelly-slices",
    iframeUrl: "/games/jelly-slices.html",
    category: "puzzle",
    coverUrl: jellySlicesImg,
    tags: ["jelly slices", "jelly puzzle", "wobble cutter", "gelatin game", "satisfying puzzle", "free online"],
    description: "Play Jelly Slices free online — a satisfying puzzle game where you slice wobbly jelly into equal pieces! Plan your cuts carefully to divide each colorful jelly perfectly. This relaxing free puzzle slicing game features beautiful visuals and brain-teasing levels. Play unblocked!",
    longDescription: "Jelly Slices combines the satisfying physics of wobbly gelatin with clever puzzle design for a uniquely enjoyable experience. Each level presents a colorful jelly shape that must be divided into a specific number of equal pieces using limited cuts. The jelly wobbles and jiggles realistically after each slice, making every cut feel satisfyingly tactile.\n\nThe challenge lies in achieving equal portions. Your cuts must be precisely placed to divide the jelly into pieces of the same size. A percentage indicator shows how close each piece is to the ideal size, and you need to achieve a minimum accuracy percentage to pass the level. Three-star ratings require near-perfect precision, providing a challenge for completionists.\n\nAs you progress through the game's levels, the jelly shapes become increasingly complex. Simple circles and squares give way to stars, hearts, irregular polygons, and multi-colored jellies with internal patterns. Some advanced levels feature layered jellies where cuts affect multiple layers simultaneously, requiring three-dimensional thinking.\n\nThe visual design is a feast for the eyes. Jellies are rendered with gorgeous translucent effects, internal light refraction, and realistic wobble physics. Each jelly flavor has a unique color palette and visual texture. The ambient soundtrack features soft, relaxing melodies that complement the meditative gameplay. Jelly Slices is the perfect blend of satisfying physics and brain-teasing puzzles. Play free at slice-master.us!",
  },
  {
    id: "slice-the-pizza",
    name: "Slice the Pizza",
    slug: "slice-the-pizza",
    iframeUrl: "/games/slice-the-pizza.html",
    category: "fruit-slicing",
    coverUrl: sliceThePizzaImg,
    tags: ["pizza game", "pizza slicer", "food cutting", "pizza cutter", "cooking slice", "free online"],
    description: "Play Slice the Pizza free online — cut pizza into perfect slices! Test your precision cutting skills by dividing delicious pizzas into equal portions. This free slicing game is satisfying, fun, and challenges your accuracy. Play in your browser with no download needed!",
    longDescription: "Slice the Pizza transforms the everyday act of cutting pizza into a precision gaming challenge. Each level presents a freshly baked pizza that must be divided into a specific number of equal slices. Sounds easy? Try cutting a circular pizza into 7 perfectly equal pieces, or dividing a heart-shaped Valentine's pizza into 5 portions!\n\nThe game's physics engine realistically simulates the act of pizza cutting. Your blade glides through cheese, toppings, and crust with satisfying visual and audio feedback. Different pizza types behave differently — thin crust pizzas cut cleanly, deep dish pizzas require more force, and loaded pizzas have toppings that shift after cutting. These subtle mechanics add surprising depth to the gameplay.\n\nWith over 150 levels, Slice the Pizza takes you on a worldwide pizza tour. Start with classic Margherita and Pepperoni in Italy, then explore American deep dish, Japanese okonomiyaki-style, Brazilian pizza with unusual toppings, and even dessert pizzas with chocolate and fruit. Each pizza style presents unique cutting challenges based on its shape, size, and toppings.\n\nThe game rewards precision with a star rating system and tracks your accuracy percentage for each level. Special challenge modes include Speed Cut (minimum time), Blind Cut (pizza disappears after viewing), and Party Mode (cut pizzas for multiple groups simultaneously). Slice the Pizza is a surprisingly addictive game that appeals to foodies and puzzle fans alike. Play free at slice-master.us!",
  },
  {
    id: "laser-slicer",
    name: "Laser Slicer",
    slug: "laser-slicer",
    iframeUrl: "/games/laser-slicer.html",
    category: "puzzle",
    coverUrl: laserSlicerImg,
    tags: ["laser slicer", "laser puzzle", "sci-fi cutter", "beam game", "neon slicer", "free online"],
    description: "Play Laser Slicer free online — use futuristic laser beams to slice through objects! Aim your laser with precision to cut through puzzle elements in this sci-fi themed free slicing game. Features neon visuals and challenging levels that test your accuracy and strategic thinking.",
    longDescription: "Laser Slicer reimagines the cutting game genre with a futuristic sci-fi twist. Instead of blades and swords, you wield powerful laser beams to slice through objects in neon-drenched puzzle levels. Aim your laser emitter, set the beam angle, and fire — watching as the concentrated light cuts through materials with precision and spectacular visual effects.\n\nThe laser mechanics add a unique strategic layer to slicing gameplay. Lasers travel in straight lines, but can be reflected off mirrors, split by prisms, and amplified by power nodes. Each level is essentially a light-beam puzzle: position your laser sources and reflectors to direct cutting beams exactly where they need to go to slice target objects while avoiding sensitive areas.\n\nAs you advance, new laser types become available: red lasers cut through organic materials, blue lasers affect metal, green lasers pass through glass, and the powerful white laser cuts through everything but requires a full charge. Combining different laser colors to solve multi-material puzzles creates satisfying 'eureka!' moments.\n\nThe visual design is stunning, featuring a dark cyberpunk aesthetic with glowing neon elements. Laser beams cast dynamic light and shadows across the environment, and sliced objects glow along their cut edges before separating. The electronic soundtrack pulses with synthesizer beats that intensify during complex sequences. Laser Slicer is a must-play for sci-fi fans and puzzle enthusiasts. Play free at slice-master.us!",
  },
  {
    id: "halloween-endless-slicer",
    name: "Halloween Endless Slicer",
    slug: "halloween-endless-slicer",
    iframeUrl: "/games/halloween-endless-slicer.html",
    category: "ninja-action",
    coverUrl: halloweenEndlessImg,
    tags: ["halloween slicer", "endless ninja", "spooky game", "pumpkin slash", "halloween action", "free online"],
    description: "Play Halloween Endless Slicer free online — a spooky ninja cutting game with endless waves! Slash through pumpkins, ghosts, and Halloween objects as a ninja warrior. This free seasonal slicing game features endless gameplay and festive Halloween graphics. How long can you survive?",
    longDescription: "Halloween Endless Slicer challenges you to survive as long as possible against an endless onslaught of spooky Halloween objects. Armed with a ninja blade, you slash through pumpkins, ghosts, bats, spiders, candy, and other Halloween-themed targets in increasingly intense waves. It's the ultimate test of endurance for slicing game fans.\n\nThe endless format keeps you on the edge of your seat. Each wave introduces more objects at faster speeds, with new Halloween creatures appearing as you progress. Early waves feature slow-moving pumpkins and candy; later waves bring fast-flying bats, teleporting ghosts, and giant boss pumpkins that require multiple hits. The difficulty scales smoothly, ensuring every run feels challenging but fair.\n\nSpecial Halloween power-ups appear periodically: the Witch's Broom gives you a sweeping attack that clears the screen; the Vampire Fangs provide a life-stealing ability; the Ghost Cloak makes you temporarily invincible; and the Full Moon triggers a frenzy mode with double points. Strategic use of these power-ups is key to achieving high scores on the leaderboard.\n\nThe game's spooky atmosphere is spot-on, with a haunted cemetery background, flickering candlelight, drifting fog, and a creepy soundtrack that intensifies as you progress. Visual effects include glowing jack-o-lantern splatters, ghostly wisps, and bat-wing confetti. Halloween Endless Slicer is perfect for Halloween season but enjoyable year-round. Play free at slice-master.us!",
  },
  {
    id: "mirunas-adventures-slime-galaxy",
    name: "Miruna's Adventures: Slime Galaxy",
    slug: "mirunas-adventures-slime-galaxy",
    iframeUrl: "/games/mirunas-adventures-slime-galaxy.html",
    category: "character",
    coverUrl: mirunasImg,
    tags: ["miruna adventure", "slime game", "galaxy game", "character adventure", "cute slicer", "free online"],
    description: "Play Miruna's Adventures: Slime Galaxy free online — join Miruna on a colorful journey through a galaxy of slimes! Slice and battle through slimy creatures in this charming free adventure game. Features cute visuals, engaging gameplay, and a magical story. Play in your browser!",
    longDescription: "Miruna's Adventures: Slime Galaxy is a charming adventure game that follows the brave young explorer Miruna as she journeys through a galaxy made entirely of slime. Each planet in the Slime Galaxy is home to different types of slime creatures, and Miruna must slice, puzzle, and adventure her way through each world to save the galaxy from the corrupting Dark Slime.\n\nThe gameplay blends platforming, puzzle-solving, and slicing mechanics. Miruna can jump between platforms, collect star fragments, and use her Crystal Blade to slice through slime obstacles. Different slime types present different challenges: Jelly Slimes can be cut into pieces; Bouncy Slimes launch you into the air; Sticky Slimes slow you down; and Explosive Slimes must be cut from a safe distance.\n\nEach planet in the Slime Galaxy has a unique theme and set of challenges. The Candy Planet features sweet-themed slimes and sugary platforms; the Ocean Planet has underwater sections with aquatic slimes; the Fire Planet challenges you with heat-resistant lava slimes; and the Crystal Planet features beautiful but deadly glass slimes. Boss battles at the end of each world require mastering that planet's unique mechanics.\n\nThe art style is absolutely adorable, with colorful, rounded designs that appeal to players of all ages. Miruna herself is an expressive and endearing character, and the slime creatures range from cute to intimidating. The orchestral soundtrack adds emotional depth to the adventure. Miruna's Adventures is a heartwarming game that proves slicing can tell a beautiful story. Play free at slice-master.us!",
  },
  {
    id: "beat-slash",
    name: "Beat Slash",
    slug: "beat-slash",
    iframeUrl: "/games/beat-slash.html",
    category: "ninja-action",
    coverUrl: beatSlashImg,
    tags: ["beat slash", "rhythm slicer", "music game", "beat saber style", "rhythm action", "free online"],
    description: "Play Beat Slash free online — slash to the rhythm in this music-powered slicing game! Combine musical beats with sword strikes to cut through obstacles. This unique free rhythm action game blends music gameplay with satisfying blade mechanics. Feel the beat and slash!",
    longDescription: "Beat Slash is an electrifying rhythm game that combines the precision of music gameplay with the satisfaction of sword slicing. Notes and obstacles fly toward you in sync with energetic music tracks, and you must slash them with perfectly timed blade strikes. Hit the beats accurately to build combos, rack up points, and achieve the highest possible score.\n\nThe game draws clear inspiration from VR rhythm games, but translates the experience perfectly for 2D browser play. Colored notes approach from different directions, requiring you to swipe in the correct direction at the exact moment they reach the strike zone. Accuracy matters — perfectly timed hits earn 'Perfect' ratings, while slightly off-beat hits get 'Good' or 'Miss' ratings.\n\nBeat Slash features a diverse soundtrack spanning multiple genres: EDM bangers, rock anthems, pop hits, classical remixes, and original compositions. Each track has multiple difficulty levels (Easy, Normal, Hard, Expert), creating massive replay value. The note patterns are carefully choreographed to match each song's rhythm, melody, and energy, making every track feel unique.\n\nVisual effects respond dynamically to your performance. Perfect hits trigger flashy neon explosions, combo streaks light up the background, and failing notes cause visual distortion. The overall aesthetic is neon-drenched and cyberpunk-inspired, with pulsing backgrounds that react to the music. Beat Slash is perfect for music lovers and action game fans alike. Play free at slice-master.us!",
  },
  {
    id: "draw-weapons-rush",
    name: "Draw Weapons Rush",
    slug: "draw-weapons-rush",
    iframeUrl: "/games/draw-weapons-rush.html",
    category: "ninja-action",
    coverUrl: drawWeaponsImg,
    tags: ["draw weapons", "drawing game", "creative slicer", "sketch blade", "draw and fight", "free online"],
    description: "Play Draw Weapons Rush free online — draw your own blades and weapons! Sketch swords, axes, and slicing tools, then watch them come to life in battle. This creative free game combines drawing mechanics with action gameplay. Unleash your imagination and draw the ultimate weapon!",
    longDescription: "Draw Weapons Rush is one of the most creative games in the slicing genre, letting you literally draw your own weapons before using them in combat. At the start of each level, you're given a blank canvas where you can sketch any shape — the game's AI then transforms your drawing into a functional weapon with physics properties based on your design.\n\nThe genius of Draw Weapons Rush lies in how your drawings affect gameplay. A long, thin sword swings differently than a heavy axe. A curved blade has different cutting angles than a straight one. Draw a massive hammer and you'll have slow but powerful attacks; sketch a pair of daggers for quick, precise strikes. The system encourages experimentation and creativity, rewarding players who think outside the box.\n\nEach level presents enemies and obstacles that require different weapon solutions. Some levels need long-reach weapons to hit distant targets; others require heavy weapons to break through armor; and puzzle levels need specifically shaped tools to fit through gaps or activate mechanisms. The variety ensures that no single weapon design works for every situation.\n\nThe drawing system is intuitive and responsive, working well with both mouse and touch controls. Your weapon sketches are preserved in a gallery, and you can favorite designs for quick access in future levels. The game features a sharing system where you can challenge friends with your custom weapons. With its unique blend of creativity and action, Draw Weapons Rush stands out from every other slicing game. Play free at slice-master.us!",
  },
  {
    id: "my-little-pony-vine-slicer",
    name: "My Little Pony Vine Slicer",
    slug: "my-little-pony-vine-slicer",
    iframeUrl: "/games/my-little-pony-vine-slicer.html",
    category: "character",
    coverUrl: ponySlicerImg,
    tags: ["MLP game", "my little pony", "vine slicer", "pony game online", "character cutter", "free online"],
    description: "Play My Little Pony Vine Slicer free online — help your favorite ponies slice through magical vines! Join the ponies in this enchanted garden adventure where you cut vines to clear the path. This free character slicing game features beloved pony characters. Play unblocked!",
    longDescription: "My Little Pony Vine Slicer brings the magical world of Equestria to the slicing genre in a family-friendly adventure. The Everfree Forest has been overrun with enchanted vines, and it's up to you and your favorite ponies to slice through them and restore peace. Each pony brings unique abilities that help clear different types of magical vines.\n\nThe game faithfully captures the My Little Pony aesthetic with bright colors, adorable character designs, and a positive, friendship-focused narrative. As you progress through the Everfree Forest, you encounter story scenes that explain why the vines have grown out of control and how each pony's unique talent helps solve the crisis.\n\nGameplay involves slicing through tangled vines that block paths, trap woodland creatures, and obscure hidden treasures. Different vine types require different approaches: regular green vines are easy to cut, thorny vines must be sliced at specific points, magical glowing vines need a charged power cut, and some vines regenerate if not cut quickly enough. Power-ups include Rainbow Dash's speed boost, Applejack's power strike, and Twilight Sparkle's magic blast.\n\nThe game is perfectly suited for younger players, with gentle difficulty, encouraging messages, and no violent content. However, the puzzle-like vine patterns in later levels provide enough challenge to engage older players too. Collectible friendship tokens unlock bonus content and character customizations. My Little Pony Vine Slicer is a delightful game for fans of the franchise and families looking for safe, fun gaming. Play free at slice-master.us!",
  },
  {
    id: "bear-fruit-slice",
    name: "Bear Fruit Slice",
    slug: "bear-fruit-slice",
    iframeUrl: "/games/bear-fruit-slice.html",
    category: "fruit-slicing",
    coverUrl: bearFruitImg,
    tags: ["bear fruit", "cute slicer", "fruit cutting bear", "kid-friendly", "animal game", "free online"],
    description: "Play Bear Fruit Slice free online — help an adorable bear slice flying fruits! Cut through watermelons, oranges, and apples as the cute bear character. This charming free fruit cutting game is perfect for younger players and fruit slicing fans. Play free and unblocked!",
    longDescription: "Bear Fruit Slice puts an adorable twist on the fruit cutting genre by featuring a lovable bear character as your slicing companion. This cute bear uses its claws to swipe through flying fruits, and your job is to guide its movements to slice every piece of fruit while keeping the bear safe from hazards.\n\nThe bear character adds personality and charm to the fruit slicing formula. It reacts to your performance with adorable animations — celebrating with a happy dance after great combos, looking worried when bombs appear, and doing a sad shake when you miss too many fruits. These character moments create an emotional connection that sets Bear Fruit Slice apart from generic fruit ninja clones.\n\nThe game features a progression system where the bear travels through different environments — starting in a sunny forest, then visiting a tropical island, a snowy mountain, a desert oasis, and a magical fairy garden. Each environment introduces new fruit types native to that region, along with environment-specific hazards and power-ups.\n\nBear Fruit Slice is designed with younger players in mind, featuring large, easy-to-hit fruits, forgiving timing windows, and no game-over penalties in the main story mode. However, a Challenge Mode offers stricter scoring for experienced players. The game includes educational elements, teaching fruit names and nutrition facts between levels. It's a perfect first slicing game for children and a relaxing option for adults. Play free at slice-master.us!",
  },
  {
    id: "tom-and-jerry-raketenmaus",
    name: "Tom and Jerry: Raketenmaus",
    slug: "tom-and-jerry-raketenmaus",
    iframeUrl: "/games/tom-and-jerry-raketenmaus.html",
    category: "character",
    coverUrl: tomJerryImg,
    tags: ["tom and jerry", "raketenmaus", "cartoon game", "mouse rocket", "character action", "free online"],
    description: "Play Tom and Jerry: Raketenmaus free online — the classic cat and mouse duo in a rocket-powered adventure! Help Jerry dodge and slice through obstacles while Tom gives chase. This free character action game features the beloved cartoon rivals. Play unblocked in your browser!",
    longDescription: "Tom and Jerry: Raketenmaus (Rocket Mouse) brings the timeless cat-and-mouse rivalry to the slicing game genre. Jerry has strapped on a rocket pack and is blasting through the house, kitchen, garden, and beyond, while Tom desperately tries to catch him. Your job is to help Jerry slice through obstacles and outsmart Tom at every turn.\n\nThe gameplay combines runner mechanics with slicing action. Jerry flies forward on his rocket while you swipe to cut through obstacles — curtains, laundry lines, spider webs, and Tom's traps. Meanwhile, Tom appears at random intervals to throw objects, set traps, and try to grab Jerry. Quick slicing reflexes are needed to cut through Tom's attacks and keep Jerry safe.\n\nThe game is filled with references and humor from the classic Tom and Jerry cartoons. Expect anvils, frying pans, mouse traps, and elaborate Rube Goldberg-style contraptions. The art style faithfully recreates the cartoon's look, and the slapstick physics make every collision and slice feel authentically Tom and Jerry.\n\nMultiple environments recreate iconic locations from the show: the living room with its dangerous furniture, the kitchen full of cutting implements, the backyard with the bulldog's territory, and even special locations like a haunted house and a pirate ship. Each environment has unique obstacles and Tom attack patterns. Tom and Jerry: Raketenmaus is a nostalgic treat for fans of the classic cartoons. Play free at slice-master.us!",
  },
  {
    id: "slycer",
    name: "Slycer",
    slug: "slycer",
    iframeUrl: "/games/slycer.html",
    category: "arcade",
    coverUrl: slycerImg,
    tags: ["slycer", "watermelon slicer", "arcade cutter", "melon game", "fruit arcade", "free online"],
    description: "Play Slycer free online — a fast-paced watermelon slicing arcade game! Cut through juicy melons with speed and accuracy in this satisfying free slicing game. Features smooth gameplay and addictive mechanics that keep you coming back for more. Play Slycer unblocked in any browser!",
    longDescription: "Slycer is a focused, fast-paced slicing game that strips the genre down to its purest form: you, a blade, and a never-ending supply of watermelons. It's deceptively simple in concept but incredibly addictive in practice. Watermelons fly through the air in various patterns, and your goal is to slice through as many as possible to achieve the highest score.\n\nWhat makes Slycer stand out is its precision mechanics. Unlike games where any swipe counts as a hit, Slycer rewards the placement and angle of your cuts. Slicing a watermelon exactly through the center earns bonus points; off-center cuts still count but score less. This precision system adds a skill element that keeps experienced players engaged long after they've mastered the basics.\n\nThe watermelons come in various types, each worth different points: green watermelons are standard, yellow watermelons are worth double, mini watermelons move faster but are worth triple, and the rare golden watermelon triggers a bonus round. As the game progresses, the watermelon patterns become increasingly complex — spirals, waves, clusters, and rapid-fire sequences test different aspects of your slicing ability.\n\nSlycer's minimalist design lets the gameplay shine. Clean, crisp graphics ensure watermelons and your blade are always clearly visible, while satisfying splash effects and crunchy sound effects make every slice feel rewarding. The game tracks your high scores and personal bests, motivating you to improve. It's the perfect game for short gaming sessions or extended score-chasing marathons. Play free at slice-master.us!",
  },
];

export const featuredGame = games.find((g) => g.featured)!;

export function getGamesByCategory(categoryId: string): Game[] {
  return games.filter((g) => g.category === categoryId);
}

export function getRelatedGames(game: Game, limit = 8): Game[] {
  const sameCategory = games.filter((g) => g.id !== game.id && g.category === game.category);
  const others = games.filter((g) => g.id !== game.id && g.category !== game.category);
  return [...sameCategory, ...others].slice(0, limit);
}

export function searchGames(query: string): Game[] {
  const q = query.toLowerCase();
  return games.filter((g) => g.name.toLowerCase().includes(q) || g.description.toLowerCase().includes(q) || g.tags.some(tag => tag.toLowerCase().includes(q)));
}
