export interface Game {
  id: string;
  name: string;
  slug: string;
  iframeUrl: string;
  category: string;
  description: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export const categories: Category[] = [
  { id: "fruit-slicing", name: "Fruit Slicing", slug: "fruit-slicing", description: "Slice fruits and food with precision in these satisfying cutting games." },
  { id: "ninja-action", name: "Ninja & Sword", slug: "ninja-action", description: "Wield blades and swords in fast-paced ninja slicing action games." },
  { id: "puzzle", name: "Puzzle & Strategy", slug: "puzzle", description: "Think before you slice in these strategic cutting puzzle games." },
  { id: "arcade", name: "Arcade", slug: "arcade", description: "Fast-paced arcade slicing games with addictive gameplay loops." },
  { id: "character", name: "Character Games", slug: "character", description: "Play slicing games featuring your favorite characters." },
];

export const games: Game[] = [
  {
    id: "slice-master",
    name: "Slice Master",
    slug: "slice-master",
    iframeUrl: "https://www.coolmathgames.com/0-slice-master/play",
    category: "arcade",
    description: "Play Slice Master, the ultimate slicing game from Cool Math Games. Swing your blade and slice through objects with precision in endless challenging levels. Free to play online!",
    featured: true,
  },
  {
    id: "slice-it-all",
    name: "Slice It All",
    slug: "slice-it-all",
    iframeUrl: "https://html5.gamedistribution.com/efa941135635400f94bdb0b7430a92f4/?gdpr-targeting=1&gd_sdk_referrer_url=https://www.play123.com/game/slice-it-all",
    category: "arcade",
    description: "Slice It All is a satisfying physics-based slicing game. Cut through everything in your path as your blade flies through the air. Play free online!",
  },
  {
    id: "perfect-slices",
    name: "Perfect Slices",
    slug: "perfect-slices",
    iframeUrl: "https://www.gameflare.com/embed/perfect-slices/",
    category: "fruit-slicing",
    description: "Perfect Slices challenges you to slice food items with perfect timing. Tap to cut ingredients on the chopping board in this satisfying free game.",
  },
  {
    id: "slide-down",
    name: "Slide Down",
    slug: "slide-down",
    iframeUrl: "https://1games.io/game/slide-down/",
    category: "arcade",
    description: "Slide Down is a fast-paced arcade game. Navigate through obstacles as you slide and slice your way to the bottom. Play free online!",
  },
  {
    id: "hook-and-slice",
    name: "Hook & Slice",
    slug: "hook-and-slice",
    iframeUrl: "https://st1.8games.net/10/8g/igra-samuray-na-kryuke/",
    category: "ninja-action",
    description: "Hook & Slice combines grappling hooks with sword slicing. Swing and cut through enemies as a samurai warrior in this action-packed free game.",
  },
  {
    id: "fruit-slice-hero",
    name: "Fruit Slice Hero",
    slug: "fruit-slice-hero",
    iframeUrl: "https://st.8games.net/10/igra-lomtiki-fruktov/",
    category: "fruit-slicing",
    description: "Become the Fruit Slice Hero! Slice flying fruits with swift blade movements. Avoid bombs and aim for combos in this classic fruit cutting game.",
  },
  {
    id: "samurai-slash-3d",
    name: "Samurai Slash 3D",
    slug: "samurai-slash-3d",
    iframeUrl: "https://st.8games.net/10/igra-samuraj-slesh/",
    category: "ninja-action",
    description: "Samurai Slash 3D puts you in the role of a master samurai. Slash through enemies with precise 3D sword strikes in this free action game.",
  },
  {
    id: "watermelon-run-3d",
    name: "Watermelon Run 3D",
    slug: "watermelon-run-3d",
    iframeUrl: "https://st.8games.net/11/igra-arbuznyj-beg",
    category: "arcade",
    description: "Watermelon Run 3D is a fun runner game where you slice through obstacles as a rolling watermelon. Play this free 3D arcade game online!",
  },
  {
    id: "halloween-fruit-slice",
    name: "Halloween Fruit Slice",
    slug: "halloween-fruit-slice",
    iframeUrl: "https://st.8games.net/12/8g/igra-fruktovaya-dolka-na-khellouin",
    category: "fruit-slicing",
    description: "Halloween Fruit Slice brings spooky fun to fruit cutting! Slice pumpkins and Halloween-themed fruits in this seasonal free online game.",
  },
  {
    id: "cake-slice-ninja",
    name: "Cake Slice Ninja",
    slug: "cake-slice-ninja",
    iframeUrl: "https://st.8games.net/10/igra-narezaj-pirozhnye-kak-nindzya/",
    category: "fruit-slicing",
    description: "Cake Slice Ninja lets you slice cakes and pastries like a ninja chef. Cut desserts with precision in this delicious free slicing game.",
  },
  {
    id: "tmnt-the-final-slice",
    name: "TMNT: The Final Slice",
    slug: "tmnt-the-final-slice",
    iframeUrl: "https://st.8games.net/dasha1/181/teenage_mutant_ninja_turtles_the_final_slice/",
    category: "character",
    description: "Join the Teenage Mutant Ninja Turtles in The Final Slice! Help the TMNT slice through pizza and defeat enemies in this free character game.",
  },
  {
    id: "mini-game-slice-of-zen",
    name: "Mini Game: Slice of Zen",
    slug: "mini-game-slice-of-zen",
    iframeUrl: "https://st.8games.net/7/mini-igra-kusochek-dzena/",
    category: "puzzle",
    description: "Slice of Zen is a calming mini game where you make precise cuts to solve puzzles. Find your zen through the art of slicing in this free game.",
  },
  {
    id: "slice-chef-food-survivor",
    name: "Slice Chef: Food Survivor",
    slug: "slice-chef-food-survivor",
    iframeUrl: "https://st.8games.net/10/igra-povar-protiv-ovoshchej/",
    category: "fruit-slicing",
    description: "Slice Chef: Food Survivor puts you against waves of vegetables! Slice and dice as a chef fighting for survival in this free online game.",
  },
  {
    id: "sushi-slice",
    name: "Sushi Slice",
    slug: "sushi-slice",
    iframeUrl: "https://st.8games.net/10/igra-narezka-sushi/",
    category: "fruit-slicing",
    description: "Sushi Slice lets you master the art of sushi preparation. Cut fish and rolls with precision in this Japanese-themed free slicing game.",
  },
  {
    id: "veggie-slicer",
    name: "Veggie Slicer",
    slug: "veggie-slicer",
    iframeUrl: "https://st.8games.net/igry-fruktovyj-nindzya/igra-rezh-ovoshchi/",
    category: "fruit-slicing",
    description: "Veggie Slicer challenges you to cut vegetables with speed and accuracy. Slice veggies flying through the air in this free online game!",
  },
  {
    id: "slice-them-all",
    name: "Slice Them All",
    slug: "slice-them-all",
    iframeUrl: "https://st.8games.net/10/igra-razrezh-ih-vsekh/",
    category: "ninja-action",
    description: "Slice Them All is an action-packed slicing game. Cut through everything in your path with powerful blade strikes. Play free online!",
  },
  {
    id: "mr-slice",
    name: "Mr. Slice",
    slug: "mr-slice",
    iframeUrl: "https://st.8games.net/10/igra-mister-slajs/",
    category: "puzzle",
    description: "Mr. Slice is a clever puzzle game where you must slice objects strategically. Plan your cuts carefully to complete each level in this free game.",
  },
  {
    id: "balloon-slicer",
    name: "Balloon Slicer",
    slug: "balloon-slicer",
    iframeUrl: "https://st.8games.net/9/igra-rezka-vozdushnykh-sharikov/",
    category: "arcade",
    description: "Balloon Slicer has you popping and slicing balloons with sharp precision. Cut through colorful balloons in this addictive free arcade game.",
  },
  {
    id: "sword-play-ninja-slice-runner",
    name: "Sword Play: Ninja Slice Runner",
    slug: "sword-play-ninja-slice-runner",
    iframeUrl: "https://st.8games.net/10/igra-sword-play-master-klinka-3d/",
    category: "ninja-action",
    description: "Sword Play: Ninja Slice Runner combines running with sword slicing. Sprint and cut through obstacles as a ninja in this free 3D action game.",
  },
  {
    id: "sword-master-slice-your-enemies",
    name: "Sword Master: Slice Your Enemies!",
    slug: "sword-master-slice-your-enemies",
    iframeUrl: "https://st.8games.net/10/8g/igra-master-mecha-razrubi-vragov/",
    category: "ninja-action",
    description: "Sword Master lets you slice your enemies with devastating sword attacks. Become the ultimate blade warrior in this free action slicing game!",
  },
  {
    id: "slice-the-digital-circus",
    name: "Slice the Digital Circus",
    slug: "slice-the-digital-circus",
    iframeUrl: "https://st.8games.net/7/igra-razrubi-tsifrovoj-tsirk/",
    category: "character",
    description: "Slice the Digital Circus features characters from the Amazing Digital Circus. Cut and slice through circus-themed challenges in this free game!",
  },
  {
    id: "jelly-slices",
    name: "Jelly Slices",
    slug: "jelly-slices",
    iframeUrl: "https://st.8games.net/10/igra-zhelejnye-kusochki/",
    category: "puzzle",
    description: "Jelly Slices is a satisfying puzzle game where you slice wobbly jelly into equal pieces. Plan your cuts for perfect portions in this free game.",
  },
  {
    id: "slice-the-pizza",
    name: "Slice the Pizza",
    slug: "slice-the-pizza",
    iframeUrl: "https://st.8games.net/7/igra-razrubi-pitstsu/",
    category: "fruit-slicing",
    description: "Slice the Pizza challenges you to cut pizza into perfect slices. Show your precision cutting skills in this delicious free online game!",
  },
  {
    id: "laser-slicer",
    name: "Laser Slicer",
    slug: "laser-slicer",
    iframeUrl: "https://st.8games.net/7/igra-lazernyj-slajser/",
    category: "puzzle",
    description: "Laser Slicer uses laser beams to cut through objects. Aim your laser precisely to slice through puzzles in this futuristic free game.",
  },
  {
    id: "halloween-endless-slicer",
    name: "Halloween Endless Slicer",
    slug: "halloween-endless-slicer",
    iframeUrl: "https://st.8games.net/10/igra-nindzya-hellouin/",
    category: "ninja-action",
    description: "Halloween Endless Slicer is a spooky ninja slicing game. Cut through endless waves of Halloween objects in this free seasonal game!",
  },
  {
    id: "mirunas-adventures-slime-galaxy",
    name: "Miruna's Adventures: Slime Galaxy",
    slug: "mirunas-adventures-slime-galaxy",
    iframeUrl: "https://game.digitap.eu/022eca6a-849c-5cbe-9adc-b4e2b8966feb/index.html",
    category: "character",
    description: "Miruna's Adventures: Slime Galaxy is a charming adventure game. Help Miruna slice through slimes across the galaxy in this free online game!",
  },
  {
    id: "beat-slash",
    name: "Beat Slash",
    slug: "beat-slash",
    iframeUrl: "https://st.8games.net/10/igra-bit-slesh/",
    category: "ninja-action",
    description: "Beat Slash combines music rhythm with sword slicing. Slash to the beat and cut through obstacles in this free rhythm action game!",
  },
  {
    id: "draw-weapons-rush",
    name: "Draw Weapons Rush",
    slug: "draw-weapons-rush",
    iframeUrl: "https://st.8games.net/10/igra-narisuj-oruzhie/",
    category: "ninja-action",
    description: "Draw Weapons Rush lets you draw your own blades and weapons. Sketch deadly slicing tools and use them in battle in this creative free game!",
  },
  {
    id: "my-little-pony-vine-slicer",
    name: "My Little Pony Vine Slicer",
    slug: "my-little-pony-vine-slicer",
    iframeUrl: "https://st.8games.net/lib/ruffle/?game=https://st.8games.net/15/1/vine_slicer.swf",
    category: "character",
    description: "My Little Pony Vine Slicer features ponies cutting through vines. Help your favorite ponies slice their way through in this free character game!",
  },
  {
    id: "bear-fruit-slice",
    name: "Bear Fruit Slice",
    slug: "bear-fruit-slice",
    iframeUrl: "https://st.8games.net/lib/ruffle/?game=https://st.8games.net/igra_medvedj_reget_fruktu.swf",
    category: "fruit-slicing",
    description: "Bear Fruit Slice stars a cute bear slicing fruits! Help the bear cut through flying fruits with precision in this fun free game.",
  },
  {
    id: "tom-and-jerry-raketenmaus",
    name: "Tom and Jerry: Raketenmaus",
    slug: "tom-and-jerry-raketenmaus",
    iframeUrl: "https://st.8games.net/7/igra-dzherri-i-raketnyj-ranets/",
    category: "character",
    description: "Tom and Jerry: Raketenmaus is a fun action game featuring the classic cartoon duo. Help Jerry slice and dodge in this free character game!",
  },
  {
    id: "slycer",
    name: "Slycer",
    slug: "slycer",
    iframeUrl: "https://st.8games.net/11/igra-razrezh-arbuz/",
    category: "arcade",
    description: "Slycer is a fast-paced watermelon slicing game. Cut through melons with speed and accuracy in this satisfying free arcade game!",
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
