const tooltip = document.querySelector('#tooltip');
const slides = document.querySelectorAll('.slide');
const ctitle = document.querySelector('#title');
const ccaption = document.querySelector('#caption');
const containerB = document.querySelector('#container-inner-b');
const containerA = document.querySelector('#container-a');

// 2D-array which stores all of my data corresponding to each image
const slideinfo = [
    [
        "“Le Billboard”",
        "Here. A monument to your scrolling addiction, immortalized in rustproof irony. Perfect—and utterly pointless.",
        "The Society of the Spectacle       I. The whole of life of those societies in which modern con­ditions of production prevail presents itself as an immense accumulation of spectacles. All that once was directly lived has become mere representation."
    ],
    [
        "“Le Facade”",
        "Facade mockup: because pretending is exhausting, but here we are. Handmade, of course—because wasting time feels noble.",
        "II.  Images detached from every aspect of life merge into a common stream, and the former unity of life is lost for­ever. Apprehended in a partial way, reality unfolds in a new generality as a pseudo-world apart, solely as an object of contemplation."
    ],
    [
        "“Le Sign”",
        "Concrete clarity, stark inevitability—it’s a beacon against mediocrity’s dark tide. “LE SIGN” whispers permanence, ignoring trend-chasers and pointless chaos. Its presence alone mocks attempts to embellish the obvious.",
        "The tendency toward the specialization of images-of-the-world finds its highest expression in the world of the autonomous image, where deceit deceives itself. The spectacle in its generality is a concrete inver­sion of life, and, as such, the autonomous movement of non-life."
    ],
    [
        "“Le Truck”",
        "Le Truck: because sometimes you just need a giant canvas on wheels to shout your minimalist manifesto to the world. Mockup dreams, one oversized vehicle at a time.",
        "V. The spectacle cannot be understood either as a delib­erate distortion of the visual world or as a product of the technology of the mass dissemination of images. It is far better viewed as a weltanschauung that has been actual­ized, translated into the material realm — a world view transformed into an objective force. "
    ],
    [
        "“Le Coffee Cup”",
        "Your morning brew now comes with a side of existential crisis. Sip your latte as if you’re pondering life’s mysteries, all while knowing it’s just a mockup.        ",
        "VI. Understood in its totality, the spectacle is both the outcome and the goal of the dominant mode of production. It is not something added to the real world — not a deco­rative element, so to speak. On the contrary, it is the very heart of society’s real unreality. In all its specific manifesta­tions — news or propaganda, advertising or the actual con­sumption of entertainment — the spectacle epitomizes the prevailing model of social life."
    ],
    [
        "“Le Box”",
        "A box that admits it’s a box. Finally, something honest. You were going to end up here anyway.",
        "It is the omnipresent cele­bration of a choice already made in the sphere of produc­tion, and the consummate result of that choice. In form as in content the spectacle serves as total justification for the conditions and aims of the existing system. It further ensures the permanent presence of that justification, for it governs almost all time spent outside the production process itself."
    ],
    [
        "“Le Business Card”",
        "Someone finally put the business card where it belongs. In cream. On a plate. With a spoon nobody asked for.        ",
        "XV. As the indispensable packaging for things produced as they are now produced, as a general gloss on the ration­ality of the system, and as the advanced economic sector directly responsible for the manufacture of an ever-growing mass of image-objects, the spectacle is the chief product of present-day society."
    ],
    [
        "“Le Sock”",
        "The sock announces itself. The loafer shrugs. You were always going to end up here. Functional, obvious, unavoidable. Move on.",
        "XVII. The first phase of the domination of the economy over social life brought into the definition of all human realization the obvious degradation of being into having. "
    ],
    [
        "“Le Macbook”",
        "Brushed metal meets raw textures. This MacBook mockup blends industrial and minimalism, the perfect balance of bold and refined.        ",
        "The present phase of total occupation of social life by the accumulated results of the economy leads to a generalized sliding of having into appearing, from which all actual “having” must draw its immediate prestige and its ultimate function. At the same time all individual reality has become social reality directly dependent on social power and shaped by it. It is allowed to appear only to the extent that it is not."
    ],
    [
        "“Le Coffee Cup”",
        "A cup that holds no coffee, yet somehow holds your entire aesthetic together. Pair with croissant and existential dread.",
        "XXXVI. This is the principle of commodity fetishism, the domination of society by “intangible as well as tangible things,” which reaches its absolute fulfillment in the spectacle, where the tangible world is replaced by a selection of images which exist above it, and which simultaneously impose themselves as the tangible par excellence."
    ],
    [
        "“Le Juice Bottle”",
        "When life hands you lemons, slap a fancy label on it and call it “Le Juice.” This mockup’s got the juice, sans the sticky fingers. Cheers to pretending you’re fancy!",
        "LXV. The diffuse spectacle accompanies the abundance of commodities, the undisturbed development of modern capitalism. Here every individual commodity is justified in the name of the grandeur of the production of the totality of objects of which the spectacle is an apologetic catalogue. "
    ],
    [
        "“Le Air Freshener”",
        "Because cars smell like despair and pine trees died for less noble causes.",
        "Irreconcilable claims crowd the stage of the affluent economy’s unified spectacle; different star-commodities simultaneously support contradictory projects for provisioning society: the spectacle of automobiles demands a perfect transport network which destroys old cities, while the spectacle of the city itself requires museum-areas."
    ],
    [
        "“Le Soap Bottle”",
        "Drip by drip, behold the minimalist illusion of cleanliness, ready to mock your attempts at adulting—because the suds are always greener on the other side.",
        "Therefore the already problematic satisfaction which is supposed to come from the consumption of the whole, is falsified immediately since the actual consumer can directly touch only a succession of fragments of this commodity happiness, fragments in which the quality attributed to the whole is obviously missing every time."
    ],
    [
        "“Le Tote Bag”",
        "Who needs a personalized tote when you’ve got this canvas delight declaring, “I’m here to carry your existential dread in style!” Perfect for lugging around dreams, or at least a sandwich.",
        "The satisfaction which no longer comes from the use of abundant commodities is now sought in the recognition of their value as commodities: the use of commodities becomes sufficient unto itself; the consumer is filled with religious fervor for the sovereign liberty of the commodities."
    ],
    [
        "“Le Wine Bottle”",
        "Pairs well with olives, red wine, and mild emotional instability. A mockup that gets invited to dinner but never says a word.        ",
        "Waves of enthusiasm for a given product, supported and spread by all the media of communication, are thus propagated with lightning speed. A style of dress emerges from a film; a magazine promotes night spots which launch various clothing fads."
    ],
    [
        "Le Can”",
        "Cracking open an imagination refresher—these cans might only hold the essence of virtual bubbles, but they sure look refreshingly convincing. Cheers to pretending!",
        "Just when the mass of commodities slides toward puerility, the puerile itself becomes a special commodity; this is epitomized by the gadget. We can recognize a mystical abandon to the transcendence of the commodity in free gifts, such as key chains which are not bought but are included by advertisers with prestigious purchases, or which flow by exchange in their own sphere."
    ],
    [
        "“Le Keychain”",
        "Key. Tag. Metal. It knows its job and doesn’t ask for applause. You needed it yesterday. Now it’s here, quiet, rectangular, unforgiving. Try losing it.        ",
        "One who collects the key chains which have been manufactured for collection, accumulates the indulgences of the commodity, a glorious sign of his real presence among the faithful. Reified man advertises the proof of his intimacy with the commodity. "
    ],
    [
        "“Le Cosmetic Tube”",
        "It’s a tube because anything else would waste your time. 40x130mm. Name on the face, cap on, move on.        ",
        "The fetishism of commodities reaches moments of fervent exaltation similar to the ecstasies of the convulsions and miracles of the old religious fetishism. The only use which remains here is the fundamental use of submission."
    ]
]






//prevent anything from changing when scrolling
let isScrolling = false;
let scrollTimeout;

containerB.addEventListener('scroll', () => {
  isScrolling = true;
  tooltip.style.opacity = 0;

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    isScrolling = false;
  }, 120);
});



//gets corresponding title/caption/tooltip from array +  mouse interaction

slides.forEach(slide => {
    slide.addEventListener('mouseenter', e => {
      if (isScrolling) return;
  
    const index = Number(e.currentTarget.dataset.index);

    const titleText = slideinfo[index][0];
    const captionText = slideinfo[index][1];
    const tooltipText = slideinfo[index][2];
  
      // Update title & caption
      ctitle.textContent = titleText;
      ccaption.textContent = captionText;

      tooltip.textContent = tooltipText;
      tooltip.style.opacity = 1;
    });
  
    slide.addEventListener('mousemove', e => {
      if (isScrolling) return;
  
      tooltip.style.transform =
        `translate(${e.clientX + 12}px, ${e.clientY + 12}px)`;
    });
  
    slide.addEventListener('mouseleave', () => {
      tooltip.style.opacity = 0;
    });
  });


//   slides.addEventListener('mouseenter', e => {
//     containerA.style.opacity = 0;
  
//     requestAnimationFrame(() => {
//       ctitle.textContent = titleText;
//       ccaption.textContent = captionText;
//       containerA.style.opacity = 1;
//     });
//   });
  