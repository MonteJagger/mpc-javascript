console.log('Executing custom script');

let amazonItems = [
  {
    "link": "https://a.co/d/fkwlsvm",
    "find_string": "dark-money-the-hidden-history-of-the-billionaires-behind-the-rise-of-the-radical-right-jane-mayer",
    "innerText": "Purchase on Amazon"
  },
  {
    "link": "https://a.co/d/aTvQsLy",
    "find_string": "corruption-in-america-from-benjamin-franklin-s-snuff-box-to-citizens-united-zephyr-teachout",
    "innerText": "Purchase on Amazon"
  },
  {
    "link": "https://a.co/d/cYnlnqi",
    "find_string": "bag-man-the-wild-crimes-audacious-cover-up-and-spectacular-downfall-of-a-brazen-crook-in-the-white-house-rachel-maddow",
    "innerText": "Purchase on Amazon"
  },
  {
    "link": "https://a.co/d/3tpRJDc",
    "find_string": "blowout-corrupted-democracy-rogue-state-russia-and-the-richest-most-destructive-industry-on-earth-rachel-maddow",
    "innerText": "Purchase on Amazon"
  },
  {
    "link": "https://a.co/d/9ayUN0J",
    "find_string": "american-kleptocracy-how-the-u-s-created-the-world-s-greatest-money-laundering-scheme-in-history-casey-michel",
    "innerText": "Purchase on Amazon"
  },
  {
    "link": "https://a.co/d/hSuSKUk",
    "find_string": "understanding-corruption-how-corruption-works-in-practice-dan-hough-elizabeth-david-barrett-robert-barrington-sam-power",
    "innerText": "Purchase on Amazon"
  },
  {
    "link": "https://a.co/d/0La6bKf",
    "find_string": "corruption-what-everyone-needs-to-know-ray-fissman-miriam-a-golden",
    "innerText": "Purchase on Amazon"
  },
  {
    "link": "https://a.co/d/0CfGVu7",
    "find_string": "corruption-and-government-causes-consequences-and-reform-susan-rose-ackerman-bonnie-j-palifka",
    "innerText": "Purchase on Amazon"
  },
  {
    "link": "https://a.co/d/2k4V7JI",
    "find_string": "the-conundrum-of-corruption-reform-for-social-justice-routledge-corruption-and-anti-corruption-studies-michael-johnston",
    "innerText": "Purchase on Amazon"
  },
  {
    "link": "https://a.co/d/2dzsj5C",
    "find_string": "all-the-president-s-men-bob-woodward-carl-bernstein",
    "innerText": "Purchase on Amazon"
  },
  {
    "link": "https://a.co/d/2xYLimR",
    "find_string": "plunkitt-of-tammany-hall-a-series-of-very-plain-talks-on-very-practical-politics-george-washington-plunkitt",
    "innerText": "Purchase on Amazon"
  },
  {
    "link": "https://a.co/d/4BFFZv5",
    "find_string": "justice-is-a-guide-for-young-truth-seekers",
    "innerText": "Purchase on Amazon"
  },
  {
    "link": "https://a.co/d/09VWv92",
    "find_string": "she-persisted-nellie-bly-michell-knudsen",
    "innerText": "Purchase on Amazon"
  },
  {
    "link": "https://a.co/d/cP0awpL",
    "find_string": "doing-justice-a-prosecutor-s-thoughts-on-crime-punishment-and-the-rule-of-law-preet-bharara",
    "innerText": "Purchase on Amazon"
  },
  {
    "link": "https://a.co/d/3gohFhe",
    "find_string": "on-corruption-in-america-and-what-is-at-stake-sarah-chayes",
    "innerText": "Purchase on Amazon"
  },
  {
    "link": "https://a.co/d/2HbH1XG",
    "find_string": "thieves-of-state-why-corruption-threatens-global-security-sarah-chayes",
    "innerText": "Purchase on Amazon"
  },
  {
    "link": "https://a.co/d/bXvIDGI",
    "find_string": "monopoly-cheaters-edition-board-game",
    "innerText": "Purchase on Amazon"
  },
  {
    "link": "https://a.co/d/hxCEfIm",
    "find_string": "pandasaurus-tammany-hall-board-game",
    "innerText": "Purchase on Amazon"
  },
  {
    "link": "https://www.cafepress.com/museumofpoliticalcorruption",
    "find_string": "the-museum-of-political-corruption-button-collection",
    "innerText": "Purchase on our external gift shop"
  }
];

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

function updateLinks(arrayItems) {
  arrayItems.forEach(item => {
    const { link, find_string, innerText } = item;
    const links = document.querySelectorAll(`a[href*="${find_string}"]`);

    links.forEach((linkElement, i) => {
      linkElement.setAttribute('href', link);
      linkElement.setAttribute('target', '_blank');
      linkElement.setAttribute('rel', 'noopener noreferrer');
      
      const priceWrapper = linkElement.querySelector('.product-price__wrapper');
      if (priceWrapper) {
        priceWrapper.innerHTML = `<span><i>${innerText}</i></span>`;
      }
    });
  });
}

// Create a debounced version of the updateLinks function
const debouncedUpdateLinks = debounce(updateLinks, 500);

// Create a callback function to be called when DOM changes are observed
function onDomChange() {
  debouncedUpdateLinks(amazonItems);
}

// Create an instance of MutationObserver with the callback function
const observer = new MutationObserver(onDomChange);

// Start observing the entire document for changes
observer.observe(document, { childList: true, subtree: true });
