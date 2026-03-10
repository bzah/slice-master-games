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
  coverUrl: string;
  featured?: boolean;
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
    description: "Play Slice Master online for free — the #1 slicing game on Cool Math Games! Swing your razor-sharp blade and slice through objects with perfect precision. Master each level by cutting everything in your path to earn maximum points. Slice Master is the ultimate browser-based slicing game, playable on desktop and mobile with no download needed. Challenge yourself with increasingly difficult levels and become the true Slice Master!",
    featured: true,
  },
  {
    id: "slice-it-all",
    name: "Slice It All",
    slug: "slice-it-all",
    iframeUrl: "/games/slice-it-all.html",
    category: "arcade",
    coverUrl: sliceItAllImg,
    description: "Play Slice It All free online — a satisfying physics-based slicing game where your blade flies through the air cutting everything! Time your taps perfectly to flip and slice through objects, earning coins and unlocking new blades. This addictive free slicing game features smooth physics and endless replayability. Play Slice It All unblocked in your browser!",
  },
  {
    id: "perfect-slices",
    name: "Perfect Slices",
    slug: "perfect-slices",
    iframeUrl: "/games/perfect-slices.html",
    category: "fruit-slicing",
    coverUrl: perfectSlicesImg,
    description: "Play Perfect Slices free online — the most satisfying food cutting game! Tap to slice ingredients on the chopping board with perfect timing. Cut vegetables, fruits, and more as they slide past your blade. Avoid hitting the wooden blocks and achieve perfect slices every time! This free slicing game is great for relaxing and sharpening your reflexes.",
  },
  {
    id: "slide-down",
    name: "Slide Down",
    slug: "slide-down",
    iframeUrl: "/games/slide-down.html",
    category: "arcade",
    coverUrl: slideDownImg,
    description: "Play Slide Down free online — a thrilling arcade game where you slide and cut through colorful obstacles! Navigate your way down through increasingly challenging levels, slicing through barriers and collecting rewards. This fast-paced free browser game tests your reflexes and timing skills.",
  },
  {
    id: "hook-and-slice",
    name: "Hook & Slice",
    slug: "hook-and-slice",
    iframeUrl: "/games/hook-and-slice.html",
    category: "ninja-action",
    coverUrl: hookAndSliceImg,
    description: "Play Hook & Slice free online — an action-packed samurai slicing game! Swing on grappling hooks and slice through enemies with your katana. Combine acrobatic moves with devastating blade strikes in this unique free ninja game. Master the hook-and-slash mechanics to become an unstoppable warrior!",
  },
  {
    id: "fruit-slice-hero",
    name: "Fruit Slice Hero",
    slug: "fruit-slice-hero",
    iframeUrl: "/games/fruit-slice-hero.html",
    category: "fruit-slicing",
    coverUrl: fruitSliceHeroImg,
    description: "Play Fruit Slice Hero free online — become the ultimate fruit cutting champion! Slice flying watermelons, oranges, apples, and more with swift blade movements. Avoid bombs, aim for combo multipliers, and set high scores in this classic fruit ninja-style slicing game. Play free and unblocked in any browser!",
  },
  {
    id: "samurai-slash-3d",
    name: "Samurai Slash 3D",
    slug: "samurai-slash-3d",
    iframeUrl: "/games/samurai-slash-3d.html",
    category: "ninja-action",
    coverUrl: samuraiSlashImg,
    description: "Play Samurai Slash 3D free online — step into the role of a master samurai! Slash through enemies with precise 3D katana strikes and experience cinematic combat. This free action slicing game features stunning 3D graphics and satisfying sword gameplay you can play in your browser.",
  },
  {
    id: "watermelon-run-3d",
    name: "Watermelon Run 3D",
    slug: "watermelon-run-3d",
    iframeUrl: "https://st.8games.net/11/igra-arbuznyj-beg",
    category: "arcade",
    coverUrl: watermelonRunImg,
    description: "Play Watermelon Run 3D free online — a hilarious runner game where you roll and slice as a watermelon! Dodge obstacles, collect power-ups, and cut through barriers in colorful 3D levels. This fun free arcade game is perfect for quick gaming sessions on mobile or desktop.",
  },
  {
    id: "halloween-fruit-slice",
    name: "Halloween Fruit Slice",
    slug: "halloween-fruit-slice",
    iframeUrl: "https://st.8games.net/12/8g/igra-fruktovaya-dolka-na-khellouin",
    category: "fruit-slicing",
    coverUrl: halloweenFruitImg,
    description: "Play Halloween Fruit Slice free online — a spooky twist on classic fruit cutting! Slice pumpkins, haunted fruits, and Halloween-themed treats in this seasonal free slicing game. Enjoy festive graphics and satisfying blade action as you carve your way through spooky levels.",
  },
  {
    id: "cake-slice-ninja",
    name: "Cake Slice Ninja",
    slug: "cake-slice-ninja",
    iframeUrl: "https://st.8games.net/10/igra-narezaj-pirozhnye-kak-nindzya/",
    category: "fruit-slicing",
    coverUrl: cakeSliceNinjaImg,
    description: "Play Cake Slice Ninja free online — cut cakes and pastries with ninja precision! Slice through flying desserts including cupcakes, layer cakes, and donuts. This delicious free slicing game combines sweet treats with fast-paced blade action. Play unblocked and free in your browser!",
  },
  {
    id: "tmnt-the-final-slice",
    name: "TMNT: The Final Slice",
    slug: "tmnt-the-final-slice",
    iframeUrl: "https://st.8games.net/dasha1/181/teenage_mutant_ninja_turtles_the_final_slice/",
    category: "character",
    coverUrl: tmntImg,
    description: "Play TMNT: The Final Slice free online — join the Teenage Mutant Ninja Turtles in this pizza-slicing adventure! Help Leonardo, Raphael, Donatello, and Michelangelo slice through pizza and defeat enemies. This free character game brings the beloved turtles to your browser!",
  },
  {
    id: "mini-game-slice-of-zen",
    name: "Mini Game: Slice of Zen",
    slug: "mini-game-slice-of-zen",
    iframeUrl: "https://st.8games.net/7/mini-igra-kusochek-dzena/",
    category: "puzzle",
    coverUrl: sliceOfZenImg,
    description: "Play Slice of Zen free online — a calming puzzle game where precision cuts create harmony. Make careful slices to solve each zen-inspired level. This free relaxing slicing game is perfect for unwinding while exercising your brain. Find your inner peace through the art of cutting!",
  },
  {
    id: "slice-chef-food-survivor",
    name: "Slice Chef: Food Survivor",
    slug: "slice-chef-food-survivor",
    iframeUrl: "https://st.8games.net/10/igra-povar-protiv-ovoshchej/",
    category: "fruit-slicing",
    coverUrl: sliceChefImg,
    description: "Play Slice Chef: Food Survivor free online — battle waves of flying vegetables as a master chef! Slash through incoming produce with your kitchen knife to survive. This unique free slicing game combines cooking action with survival gameplay. How long can you last against the food invasion?",
  },
  {
    id: "sushi-slice",
    name: "Sushi Slice",
    slug: "sushi-slice",
    iframeUrl: "https://st.8games.net/10/igra-narezka-sushi/",
    category: "fruit-slicing",
    coverUrl: sushiSliceImg,
    description: "Play Sushi Slice free online — master the art of Japanese sushi preparation! Cut fish, rolls, and ingredients with precision to create perfect sushi. This free slicing game features beautiful Japanese-themed visuals and satisfying knife mechanics. Play free and unblocked!",
  },
  {
    id: "veggie-slicer",
    name: "Veggie Slicer",
    slug: "veggie-slicer",
    iframeUrl: "https://st.8games.net/igry-fruktovyj-nindzya/igra-rezh-ovoshchi/",
    category: "fruit-slicing",
    coverUrl: veggieSlicerImg,
    description: "Play Veggie Slicer free online — slice vegetables with speed and precision! Cut carrots, peppers, broccoli, and more as they fly through the air. This classic free vegetable cutting game tests your reflexes and accuracy. Play unblocked in any browser on desktop or mobile!",
  },
  {
    id: "slice-them-all",
    name: "Slice Them All",
    slug: "slice-them-all",
    iframeUrl: "https://st.8games.net/10/igra-razrezh-ih-vsekh/",
    category: "ninja-action",
    coverUrl: sliceThemAllImg,
    description: "Play Slice Them All free online — an action-packed slicing game where you cut through everything! Use powerful blade strikes to slice through all objects in your path. This satisfying free slicing game features endless levels and increasingly challenging obstacles. Play for free!",
  },
  {
    id: "mr-slice",
    name: "Mr. Slice",
    slug: "mr-slice",
    iframeUrl: "https://st.8games.net/10/igra-mister-slajs/",
    category: "puzzle",
    coverUrl: mrSliceImg,
    description: "Play Mr. Slice free online — a clever puzzle slicing game where strategic cuts are key! Plan your slices carefully to complete each brain-teasing level. This free puzzle game combines cutting mechanics with logical thinking. Can you outsmart every level and become the true Mr. Slice?",
  },
  {
    id: "balloon-slicer",
    name: "Balloon Slicer",
    slug: "balloon-slicer",
    iframeUrl: "https://st.8games.net/9/igra-rezka-vozdushnykh-sharikov/",
    category: "arcade",
    coverUrl: balloonSlicerImg,
    description: "Play Balloon Slicer free online — pop and slice colorful balloons with precision! Cut through waves of floating balloons to earn points and unlock new levels. This addictive free arcade slicing game is fun for all ages. Play unblocked in your browser!",
  },
  {
    id: "sword-play-ninja-slice-runner",
    name: "Sword Play: Ninja Slice Runner",
    slug: "sword-play-ninja-slice-runner",
    iframeUrl: "https://st.8games.net/10/igra-sword-play-master-klinka-3d/",
    category: "ninja-action",
    coverUrl: swordPlayImg,
    description: "Play Sword Play: Ninja Slice Runner free online — combine running with epic sword slicing! Sprint through obstacles and cut through everything with your ninja blade in 3D. This free action runner game features satisfying sword combat and fast-paced gameplay. Play free on desktop or mobile!",
  },
  {
    id: "sword-master-slice-your-enemies",
    name: "Sword Master: Slice Your Enemies!",
    slug: "sword-master-slice-your-enemies",
    iframeUrl: "https://st.8games.net/10/8g/igra-master-mecha-razrubi-vragov/",
    category: "ninja-action",
    coverUrl: swordMasterImg,
    description: "Play Sword Master: Slice Your Enemies free online — become the ultimate blade warrior! Wield devastating swords to slice through waves of enemies in this epic free action game. Master different blade techniques and upgrade your weapons. Play this unblocked slicing game in any browser!",
  },
  {
    id: "slice-the-digital-circus",
    name: "Slice the Digital Circus",
    slug: "slice-the-digital-circus",
    iframeUrl: "https://st.8games.net/7/igra-razrubi-tsifrovoj-tsirk/",
    category: "character",
    coverUrl: digitalCircusImg,
    description: "Play Slice the Digital Circus free online — cut and slash through the Amazing Digital Circus world! Slice circus-themed characters and objects in this fun free character game. Enjoy vibrant visuals and addictive gameplay inspired by the popular series. Play free and unblocked!",
  },
  {
    id: "jelly-slices",
    name: "Jelly Slices",
    slug: "jelly-slices",
    iframeUrl: "https://st.8games.net/10/igra-zhelejnye-kusochki/",
    category: "puzzle",
    coverUrl: jellySlicesImg,
    description: "Play Jelly Slices free online — a satisfying puzzle game where you slice wobbly jelly into equal pieces! Plan your cuts carefully to divide each colorful jelly perfectly. This relaxing free puzzle slicing game features beautiful visuals and brain-teasing levels. Play unblocked!",
  },
  {
    id: "slice-the-pizza",
    name: "Slice the Pizza",
    slug: "slice-the-pizza",
    iframeUrl: "https://st.8games.net/7/igra-razrubi-pitstsu/",
    category: "fruit-slicing",
    coverUrl: sliceThePizzaImg,
    description: "Play Slice the Pizza free online — cut pizza into perfect slices! Test your precision cutting skills by dividing delicious pizzas into equal portions. This free slicing game is satisfying, fun, and challenges your accuracy. Play in your browser with no download needed!",
  },
  {
    id: "laser-slicer",
    name: "Laser Slicer",
    slug: "laser-slicer",
    iframeUrl: "https://st.8games.net/7/igra-lazernyj-slajser/",
    category: "puzzle",
    coverUrl: laserSlicerImg,
    description: "Play Laser Slicer free online — use futuristic laser beams to slice through objects! Aim your laser with precision to cut through puzzle elements in this sci-fi themed free slicing game. Features neon visuals and challenging levels that test your accuracy and strategic thinking.",
  },
  {
    id: "halloween-endless-slicer",
    name: "Halloween Endless Slicer",
    slug: "halloween-endless-slicer",
    iframeUrl: "https://st.8games.net/10/igra-nindzya-hellouin/",
    category: "ninja-action",
    coverUrl: halloweenEndlessImg,
    description: "Play Halloween Endless Slicer free online — a spooky ninja cutting game with endless waves! Slash through pumpkins, ghosts, and Halloween objects as a ninja warrior. This free seasonal slicing game features endless gameplay and festive Halloween graphics. How long can you survive?",
  },
  {
    id: "mirunas-adventures-slime-galaxy",
    name: "Miruna's Adventures: Slime Galaxy",
    slug: "mirunas-adventures-slime-galaxy",
    iframeUrl: "https://game.digitap.eu/022eca6a-849c-5cbe-9adc-b4e2b8966feb/index.html",
    category: "character",
    coverUrl: mirunasImg,
    description: "Play Miruna's Adventures: Slime Galaxy free online — join Miruna on a colorful journey through a galaxy of slimes! Slice and battle through slimy creatures in this charming free adventure game. Features cute visuals, engaging gameplay, and a magical story. Play in your browser!",
  },
  {
    id: "beat-slash",
    name: "Beat Slash",
    slug: "beat-slash",
    iframeUrl: "https://st.8games.net/10/igra-bit-slesh/",
    category: "ninja-action",
    coverUrl: beatSlashImg,
    description: "Play Beat Slash free online — slash to the rhythm in this music-powered slicing game! Combine musical beats with sword strikes to cut through obstacles. This unique free rhythm action game blends music gameplay with satisfying blade mechanics. Feel the beat and slash!",
  },
  {
    id: "draw-weapons-rush",
    name: "Draw Weapons Rush",
    slug: "draw-weapons-rush",
    iframeUrl: "https://st.8games.net/10/igra-narisuj-oruzhie/",
    category: "ninja-action",
    coverUrl: drawWeaponsImg,
    description: "Play Draw Weapons Rush free online — draw your own blades and weapons! Sketch swords, axes, and slicing tools, then watch them come to life in battle. This creative free game combines drawing mechanics with action gameplay. Unleash your imagination and draw the ultimate weapon!",
  },
  {
    id: "my-little-pony-vine-slicer",
    name: "My Little Pony Vine Slicer",
    slug: "my-little-pony-vine-slicer",
    iframeUrl: "https://st.8games.net/lib/ruffle/?game=https://st.8games.net/15/1/vine_slicer.swf",
    category: "character",
    coverUrl: ponySlicerImg,
    description: "Play My Little Pony Vine Slicer free online — help your favorite ponies slice through magical vines! Join the ponies in this enchanted garden adventure where you cut vines to clear the path. This free character slicing game features beloved pony characters. Play unblocked!",
  },
  {
    id: "bear-fruit-slice",
    name: "Bear Fruit Slice",
    slug: "bear-fruit-slice",
    iframeUrl: "https://st.8games.net/lib/ruffle/?game=https://st.8games.net/igra_medvedj_reget_fruktu.swf",
    category: "fruit-slicing",
    coverUrl: bearFruitImg,
    description: "Play Bear Fruit Slice free online — help an adorable bear slice flying fruits! Cut through watermelons, oranges, and apples as the cute bear character. This charming free fruit cutting game is perfect for younger players and fruit slicing fans. Play free and unblocked!",
  },
  {
    id: "tom-and-jerry-raketenmaus",
    name: "Tom and Jerry: Raketenmaus",
    slug: "tom-and-jerry-raketenmaus",
    iframeUrl: "https://st.8games.net/7/igra-dzherri-i-raketnyj-ranets/",
    category: "character",
    coverUrl: tomJerryImg,
    description: "Play Tom and Jerry: Raketenmaus free online — the classic cat and mouse duo in a rocket-powered adventure! Help Jerry dodge and slice through obstacles while Tom gives chase. This free character action game features the beloved cartoon rivals. Play unblocked in your browser!",
  },
  {
    id: "slycer",
    name: "Slycer",
    slug: "slycer",
    iframeUrl: "https://st.8games.net/11/igra-razrezh-arbuz/",
    category: "arcade",
    coverUrl: slycerImg,
    description: "Play Slycer free online — a fast-paced watermelon slicing arcade game! Cut through juicy melons with speed and accuracy in this satisfying free slicing game. Features smooth gameplay and addictive mechanics that keep you coming back for more. Play Slycer unblocked in any browser!",
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
  return games.filter((g) => g.name.toLowerCase().includes(q) || g.description.toLowerCase().includes(q));
}
