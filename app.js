const catalogData = [
  {
    industry: 'Oils',
    subcategories: [
      { name: 'Citrus', ingredients: ['Expressed Lime Oil', 'Grapefruit Pink Oil', 'Lemon Oil', 'Mandarin Oil', 'Neroli Oil', 'Petitgrain Oil', 'Sweet Orange Oil', 'Tangerine Oil'] },
      { name: 'Floral & Plant', ingredients: ['Aloe Vera Oil', 'Birch Tar Oil', 'Bi-rectified Blue Tansy Oil', 'Cajeput Oil', 'Cedarwood Oil', 'Copaiba Oil', 'Davana Oil', 'Fir Needle (Siberica) Oil', 'Frankincense (Olibanum) Oil', 'Geranium Oil', 'Gurjum Balsam Oil', 'Hyssop Oil', 'Jasmine Absolute Oil', 'Lavender Oil', 'Litsea Cubeba Oil', 'Patchouli-dark Oil', 'Pine Scotch (Sylvestris) Oil', 'Rose Oil', 'Rosewood Natural Oil', 'Sandalwood Oil', 'Spike Lavender Oil', 'Tea Tree Oil', 'Vetiver Oil', 'Wild Verbena Oil', 'Ylang Extra Oil'] },
      { name: 'Nut & Herb', ingredients: ['Almond Oil', 'Amyris Oil', 'Armoise (Artemisia) Oil', 'Macadamian Oil', 'Jojoba Oil', 'Rosemary (Camphor) Oil', 'Sage Clary Oil', 'Sage Dalmatian Oil', 'Tarragon (Estragon) Oil', 'Thyme Red (Borneol) Oil', 'Thyme White Oil', 'Walnut Oil'] },
      { name: 'Seed & Berry', ingredients: ['Blackseed Oil', 'Cardamom Oil', 'Carrot Seed Oil', 'Dill Seed Oil', 'Juniper Berry Oil', 'Star Anise (Anise Seed) Lil', 'Sunflower Seed Oil', 'Safflower Oil'] },
      { name: 'Vegetable & Foodgrade', ingredients: ['Argentine Lemongrass Oil', 'Avocado Oil', 'Basil - M.C. Oil', 'Chamomile Oil', 'Cinnamon Leaf Oil', 'Clove Bud Oil', 'Coriande Oil', 'Olive Oil', 'Peppermint Oil', 'Pepper Black Oil', 'Pimento Leaf (Allspice) Oil', 'Wintergreen Oil'] }
    ]
  },
  {
    industry: 'Herbal Extracts & Botanicals',
    subcategories: [
      { name: 'A-Z', ingredients: ['Acacia Catechu 40%', 'Andrographis 10%', 'Angelica 1%', 'Artichoke 5%', 'Ashwagandha 1.5%', 'Astragalus 70%', 'Bacopa Monnieri 45%', 'Banaba Leaf 2%', 'Bayberry 4:1', 'Bilberry 25%', 'Boswellia Serrata', 'Burdock', "Butcher's Broom", 'Celery Seed 4:1', 'Centella Asiatica', 'Centella Asiatica 4:1', 'Chamomile 1%', 'Chamomile 1.2%', 'Chaste Berry 0.5%', 'Coleus Forskohlii', 'Coriandrum Sativum', 'Crataeva Nurvala', "Devil's Claw 2.0%", 'Eleuthero 0.8%', 'Eyebright 2.5%', 'Fenugreek 60%', 'Ginkgo Biloba 24/6', 'Grape Seed 95%', 'Green Tea 98-45-0.5', 'Gymnema Sylvestre', 'Horsetail 5:1', 'Kudzu Root 40%', 'Licorice Root 25%', 'Maca Extract 4:1', 'Magnolia Bark 2%', 'Melissa 3%', 'Milk Thistle 80%', 'Momordica Charantia', 'Mucuna Pruriens', 'Nettle Root 4:1', 'Olive Leaf 15% Cr', 'Oregano Leaf 2%', 'Passiflora Incarnata Extract 3.5%', "Pau D'arco 4:1", "Pau D'arco 5:1", 'Rhodiola Rosea 1%'] }
    ]
  },
  {
    industry: 'Personal Care',
    subcategories: [
      { name: 'A-Z', ingredients: ['Allantoin', 'Aloe Vera', 'Alpha Lipoic Acid', 'Ascorbyl Palmitate', 'Arbutin', 'Benzocaine', 'Biotin', 'Beta Carotin', 'Caffeine', 'Collagen', 'Citric Acid', 'Co Q 10', 'Dhea', 'Edta', 'Glycolic Acid', 'Grapefruit Seed Extract', 'Herbal Extract', 'Hyaluronic Acid', 'Hydrocortisone', 'Phenoxyethanol', 'Kojic Acid', 'Lidocaine', 'L-Arginine', 'Maura Oil', 'Menthol Crystal', 'Progesterone', 'Retinoic Acid', 'Shea Butter', 'Tamara', 'Vit A Palmitate', 'Vit E 1000 Iu', 'Vit K1 Oil', 'Zinc Sulfate'] },
      { name: 'Vitamins', ingredients: ['Ascorbic Acid', 'Ascorbic Acid DC 97%', 'Ascorbyl Palmitate', 'Calcium Ascorbate', 'Choline Bitartrate', 'Sodium Ascorbate', 'Vitamin D3 100,000 IU', 'Vitamin E Oil 98%', 'Vitamin E Succinate 1185 IU', 'Vitamin E Succinate 1120 IU', 'D-Biotin 99%', 'D-Biotin 1% on DCP', 'Folic Acid', 'Inositol', 'Inositol Nicotinate', 'Pyridoxal-5-phosphate Monohydrate', 'Vitamin A Palmitate 250,000 IU', 'Vitamin A Acetate 500,000 IU', 'Vitamin D3 Pure', 'Vitamin D2 Pure', 'Thiamine HCL - VB1', 'Thiamine Monohydrate - VB1', 'Riboflavin Powder - VB2', "Riboflavin 5' Phosphate - VB2", 'Niacinamide Powder - VB3', 'Niacin - VB3', 'D-Calcium Pantothenate - VB5', 'DL-Panthenol Powder - VB5', 'Pyridoxine Hydrochloride - VB6', 'Cyanocobalamin Pure - VB12', 'Methyl Cobalamin Pure - VB12'] }
    ]
  },
  {
    industry: 'Food & Beverage',
    subcategories: [
      { name: 'Gums', ingredients: ['Arabic', 'Agar Agar', 'Cellulose', 'Gellan', 'Guar', 'Konjac', 'Locust Bean', 'Xanthan 80 Mesh', 'Xanthan 200 Mesh'] },
      { name: 'Amino Acids', ingredients: ['L-Arginine', 'L-Carnitine', 'L-Citrulline', 'L-Glutamine', 'L-Glycine', 'L-Leucine', 'L-Methionine', 'L-Phenylalanine', 'L-Serine', 'L-Theanine', 'L-Taurine', 'L-Tyrosine'] },
      { name: 'Preservatives', ingredients: ['Calcium Di Sodium EDTA', 'Calcium Lactate', 'Potassium Lactate', 'Potassium Benzoate', 'Potassium Sorbate', 'Sodium Benzoate', 'Sodium Erythorbate', 'Gluconolactone'] },
      { name: 'Sweeteners', ingredients: ['D-Cellobiose', 'Erythritol', 'Lactitol', 'Maltitol', 'Mannitol', 'Monk Fruit', 'Sodium Saccharine', 'Sorbitol', 'Stevia', 'Sucralose', 'Xylitol'] },
      { name: 'Organic Sweeteners', ingredients: ['Cane Sugar', 'Enzyme Stevia', 'Erythritol', 'Fructose', 'Isomaltose Oligosaccharide', 'Luo Han Guo', 'Maltodextrin', 'Stevia Reb-A'] },
      { name: 'Nutrition', ingredients: ['Beta Cyclodextrin', 'Caffeine', 'Calcium Alginate', 'Carrageenan', 'CMC', 'Di Sodium Phosphate', 'Glycerol', 'Inositol', 'Lactose', 'Pectin', 'Polydextrose', 'Potassium Sorbate', 'Proteins', 'Sodium Alginate', 'Sorbic Acid'] }
    ]
  }
];

const catalogSearch = document.getElementById('catalog-search');
const catalogResults = document.getElementById('catalog-results');
const catalogSection = document.getElementById('catalog');
const catalogBackgroundVideos = document.querySelectorAll('.catalog-background-video');
const personalCareBackgroundVideo = document.querySelector('.catalog-background-video-personal');
const nutritionBackgroundVideo = document.querySelector('.catalog-background-video-nutrition');
const herbalBackgroundVideo = document.querySelector('.catalog-background-video-herbal');
const oilsBackgroundVideo = document.querySelector('.catalog-background-video-oils');
const industryTiles = document.querySelectorAll('.industry-tile');
const specSearch = document.getElementById('spec-search');
const specSheetList = document.getElementById('spec-sheet-list');
const specViewer = document.getElementById('spec-viewer');
const cartItems = document.getElementById('cart-items');
const quoteOutput = document.getElementById('quote-output');
const sendQuoteRequest = document.getElementById('send-quote-request');
const cartToast = document.getElementById('cart-toast');
const cartToggle = document.getElementById('cart-toggle');
const cartCount = document.getElementById('cart-count');
const cartFloatCount = document.getElementById('cart-float-count');
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactCompany = document.getElementById('contact-company');
const contactEmail = document.getElementById('contact-email');
const contactPhone = document.getElementById('contact-phone');
const contactMessage = document.getElementById('contact-message');

const chatToggle = document.getElementById('chat-toggle');
const chatbot = document.getElementById('chatbot');
const chatClose = document.getElementById('chat-close');
const chatBody = document.getElementById('chat-body');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');

const cart = new Map();
let activeIndustry = 'all';

function flattenCatalog() {
  const items = [];
  catalogData.forEach((industryObj) => {
    industryObj.subcategories.forEach((sub) => {
      [...sub.ingredients].sort((a, b) => a.localeCompare(b)).forEach((ingredient) => {
        items.push({ ingredient, industry: industryObj.industry, subcategory: sub.name });
      });
    });
  });
  return items;
}

const allItems = flattenCatalog();

function filteredCatalogItems() {
  const query = catalogSearch.value.trim().toLowerCase();
  return allItems.filter((item) => {
    const matchesIndustry = activeIndustry === 'all' || item.industry === activeIndustry;
    if (!query) return matchesIndustry;
    const text = `${item.ingredient} ${item.industry} ${item.subcategory}`.toLowerCase();
    return matchesIndustry && text.includes(query);
  }).sort((a, b) => a.ingredient.localeCompare(b.ingredient));
}

function renderCatalog() {
  const usePersonalCareBackground = activeIndustry === 'Personal Care';
  const useNutritionBackground = activeIndustry === 'Food & Beverage';
  const useHerbalBackground = activeIndustry === 'Herbal Extracts & Botanicals';
  const useOilsBackground = activeIndustry === 'Oils';
  catalogSection.classList.toggle('catalog-video-background', usePersonalCareBackground || useNutritionBackground || useHerbalBackground || useOilsBackground);
  catalogSection.classList.toggle('personal-care-background', usePersonalCareBackground);
  catalogSection.classList.toggle('nutrition-beverage-background', useNutritionBackground);
  catalogSection.classList.toggle('herbal-extracts-background', useHerbalBackground);
  catalogSection.classList.toggle('essential-oils-background', useOilsBackground);
  catalogBackgroundVideos.forEach((video) => video.pause());
  const activeBackgroundVideo = usePersonalCareBackground
    ? personalCareBackgroundVideo
    : useNutritionBackground
      ? nutritionBackgroundVideo
      : useHerbalBackground
        ? herbalBackgroundVideo
        : useOilsBackground
          ? oilsBackgroundVideo
          : null;
  if (activeBackgroundVideo) activeBackgroundVideo.play().catch(() => {});

  const filtered = filteredCatalogItems();
  catalogResults.innerHTML = '';

  if (filtered.length === 0) {
    catalogResults.innerHTML = '<p>No ingredients match this search.</p>';
    return;
  }

  filtered.forEach((item) => {
    const row = document.createElement('article');
    row.className = 'ingredient-item';
    row.innerHTML = `
      <span class="ingredient-name">${item.ingredient}</span>
      <div class="item-actions">
        <button class="button ghost" data-action="spec">View Spec Sheet</button>
        <button class="button ghost" data-action="add">Add to Cart</button>
      </div>
    `;

    row.querySelector('[data-action="spec"]').addEventListener('click', () => {
      showSpecSheet(item);
      location.hash = 'spec-sheets';
    });

    row.querySelector('[data-action="add"]').addEventListener('click', () => addToCart(item));

    catalogResults.appendChild(row);
  });
}

function renderSpecList() {
  const query = specSearch.value.trim().toLowerCase();
  specSheetList.innerHTML = '';

  const filtered = allItems.filter((item) => !query || item.ingredient.toLowerCase().includes(query));
  filtered.sort((a, b) => a.ingredient.localeCompare(b.ingredient));
  if (filtered.length === 0) {
    specSheetList.innerHTML = '<p>No spec entry found.</p>';
    return;
  }

  filtered.forEach((item) => {
    const btn = document.createElement('button');
    btn.className = 'spec-item';
    btn.innerHTML = `${item.ingredient}<span>${item.industry} | ${item.subcategory}</span>`;
    btn.addEventListener('click', () => showSpecSheet(item));
    specSheetList.appendChild(btn);
  });
}

function showSpecSheet(item) {
  const sheet = buildSpecSheetTemplate(item);
  specViewer.innerHTML = `
    <h3>${item.ingredient}</h3>
    <p class="spec-draft-note">AI Draft Spec Sheet. Verify all values with supplier lot documents before commercial use.</p>
    <div class="spec-block">
      <h4>1. Product Identity</h4>
      <ul>${sheet.identity.map((line) => `<li>${line}</li>`).join('')}</ul>
    </div>
    <div class="spec-block">
      <h4>2. Composition</h4>
      <ul>${sheet.composition.map((line) => `<li>${line}</li>`).join('')}</ul>
    </div>
    <div class="spec-block">
      <h4>3. Physical and Chemical Properties</h4>
      <ul>${sheet.physical.map((line) => `<li>${line}</li>`).join('')}</ul>
    </div>
    <div class="spec-block">
      <h4>4. Stability and Storage</h4>
      <ul>${sheet.storage.map((line) => `<li>${line}</li>`).join('')}</ul>
    </div>
  `;
}

function buildSpecSheetTemplate(item) {
  const profile = inferIngredientProfile(item);

  return {
    identity: [
      `Ingredient Name: ${item.ingredient}`,
      `Industry Segment: ${item.industry}`,
      `Subcategory: ${item.subcategory}`,
      `Ingredient Type: ${profile.label}`
    ],
    composition: [
      `Assay/Purity (Typical): ${profile.assay}`,
      `Active Content (Typical): ${profile.active}`,
      `Carrier/Solvent System: ${profile.carrier}`,
      `Standardization Marker: ${profile.marker}`
    ],
    physical: [
      `Appearance: ${profile.appearance}`,
      `Odor: ${profile.odor}`,
      `Solubility: ${profile.solubility}`,
      `pH: ${profile.ph}`,
      `Moisture Content: ${profile.moisture}`,
      `Density/Specific Gravity: ${profile.density}`,
      `Particle Size: ${profile.particleSize}`
    ],
    storage: [
      `Shelf Life (Typical): ${profile.shelfLife}`,
      `Recommended Storage: ${profile.storage}`,
      `Packaging Format: ${profile.packaging}`,
      `Handling Notes: ${profile.handling}`
    ]
  };
}

function inferIngredientProfile(item) {
  const name = item.ingredient.toLowerCase();
  const industry = item.industry.toLowerCase();
  const subcategory = item.subcategory.toLowerCase();

  if (industry.includes('oils') || name.includes('oil') || name.includes('butter')) {
    return {
      label: 'Oil / Oleoresin',
      assay: '95%+ volatile or lipid fraction (verify by method)',
      active: 'Naturally variable by source and harvest',
      carrier: 'Neat oil unless diluted grade is specified',
      marker: 'Marker compounds to be defined per ingredient',
      appearance: 'Clear to amber liquid (may vary by batch)',
      odor: 'Characteristic botanical aroma',
      solubility: 'Insoluble in water; soluble in oils and ethanol',
      ph: 'Not applicable for neat oil',
      moisture: 'Typically low, often <= 0.5%',
      density: 'Typically 0.84 - 0.98 g/mL at 25C',
      particleSize: 'Not applicable',
      shelfLife: '18 to 24 months in unopened container',
      storage: 'Store cool, dry, away from light and oxidation',
      packaging: 'HDPE/aluminum drums or pails, nitrogen headspace preferred',
      handling: 'Seal tightly after use; minimize air and heat exposure'
    };
  }

  if (subcategory.includes('vitamin')) {
    return {
      label: 'Vitamin Active / Fortification Grade',
      assay: 'As labeled grade, commonly 95%+ for pure forms',
      active: 'Potency per specification and lot Certificate of Analysis',
      carrier: 'May include starch/silica or oil carrier depending on form',
      marker: 'Primary vitamin potency marker',
      appearance: 'White to yellow powder or oil (ingredient dependent)',
      odor: 'Mild characteristic',
      solubility: 'Water or oil solubility depends on vitamin form',
      ph: 'As applicable in test solution',
      moisture: 'Typically <= 5.0%',
      density: 'Supplier specific, verify lot data',
      particleSize: 'Commonly 60 to 120 mesh for powders',
      shelfLife: '24 months typical in sealed packaging',
      storage: 'Cool, dry, light-protected conditions',
      packaging: 'Food/pharma-grade bags or drums with liners',
      handling: 'Protect from heat, moisture, and UV exposure'
    };
  }

  if (subcategory.includes('gum')) {
    return {
      label: 'Hydrocolloid Gum',
      assay: 'Food-grade conformity per material monograph',
      active: 'Functional polysaccharide content as specified',
      carrier: 'No carrier unless blended grade',
      marker: 'Viscosity profile or hydration performance',
      appearance: 'Off-white to cream free-flowing powder',
      odor: 'Neutral to mild characteristic',
      solubility: 'Hydrates/disperses in water per processing method',
      ph: 'Typically near neutral in solution',
      moisture: 'Typically <= 12.0%',
      density: 'Bulk density supplier dependent',
      particleSize: 'Common mesh range 80 to 200',
      shelfLife: '24 months typical if sealed',
      storage: 'Keep dry; protect from humidity',
      packaging: 'Multiwall bags with inner liner or fiber drums',
      handling: 'Use dust control and dry handling practices'
    };
  }

  if (subcategory.includes('sweetener') || name.includes('sweet')) {
    return {
      label: 'Sweetener Ingredient',
      assay: 'Typically 95%+ depending on grade',
      active: 'Sweetening compound concentration per lot test',
      carrier: 'Neat or blended depending on formulation grade',
      marker: 'Sweetener potency marker per supplier method',
      appearance: 'White to off-white crystalline powder',
      odor: 'Neutral',
      solubility: 'Generally water soluble (varies by sweetener)',
      ph: 'Ingredient dependent in solution',
      moisture: 'Typically <= 5.0%',
      density: 'Supplier specific',
      particleSize: 'Fine granular or powder grade',
      shelfLife: '24 months typical',
      storage: 'Store dry and sealed away from heat',
      packaging: 'Lined bags or drums',
      handling: 'Prevent moisture pickup and caking'
    };
  }

  if (subcategory.includes('amino')) {
    return {
      label: 'Amino Acid',
      assay: 'Typically 98%+ for pure amino grades',
      active: 'Amino acid content per lot Certificate of Analysis',
      carrier: 'None for pure grade unless blended',
      marker: 'Primary amino content',
      appearance: 'White crystalline powder',
      odor: 'Mild to odorless',
      solubility: 'Water solubility varies by amino acid',
      ph: 'Ingredient specific in aqueous solution',
      moisture: 'Typically <= 1.0%',
      density: 'Supplier specific bulk density',
      particleSize: 'Fine powder or crystalline granule',
      shelfLife: '24 months typical sealed',
      storage: 'Store dry, cool, and protected from contamination',
      packaging: 'Lined bags/drums',
      handling: 'Avoid dust generation; keep container closed'
    };
  }

  if (industry.includes('herbal') || name.includes('extract')) {
    return {
      label: 'Botanical Extract Powder',
      assay: 'Botanical ratio/marker as supplier specification',
      active: 'Standardized active range by plant source',
      carrier: 'May include maltodextrin or none (verify grade)',
      marker: 'Plant-specific marker compound',
      appearance: 'Tan to brown fine powder',
      odor: 'Characteristic botanical odor',
      solubility: 'Water and/or hydroalcoholic solubility varies',
      ph: 'Typically 4.0 - 7.0 in test solution',
      moisture: 'Typically <= 8.0%',
      density: 'Supplier specific bulk density',
      particleSize: 'Commonly 80 mesh or finer',
      shelfLife: '24 months typical in original packaging',
      storage: 'Store cool, dry, protected from light',
      packaging: 'Fiber drum or lined bag',
      handling: 'Minimize moisture and oxygen exposure'
    };
  }

  return {
    label: 'Specialty Raw Material',
    assay: 'Per supplier lot specification',
    active: 'Per Certificate of Analysis',
    carrier: 'Ingredient dependent',
    marker: 'To be defined per material',
    appearance: 'Characteristic for ingredient type',
    odor: 'Characteristic',
    solubility: 'Ingredient dependent',
    ph: 'Ingredient dependent',
    moisture: 'Per supplier limit',
    density: 'Per supplier limit',
    particleSize: 'If applicable, per supplier mesh spec',
    shelfLife: '18 to 24 months typical',
    storage: 'Store in sealed container, cool and dry',
    packaging: 'Lined bag, drum, or pail',
    handling: 'Follow product Safety Data Sheet and internal handling SOP'
  };
}

function addToCart(item) {
  const key = item.ingredient;
  const existing = cart.get(key);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.set(key, { ...item, qty: 1 });
  }
  triggerCartAnimation();
  showCartToast(`${item.ingredient} added to cart`);
  renderCart();
}

function setCartQuantity(key, qty) {
  const existing = cart.get(key);
  if (!existing) return;
  existing.qty = qty;
  renderCart();
}

function removeFromCart(key) {
  cart.delete(key);
  renderCart();
}

function renderCart() {
  const entries = [...cart.values()];
  const count = String(entries.reduce((sum, i) => sum + i.qty, 0));
  cartCount.textContent = count;
  if (cartFloatCount) cartFloatCount.textContent = count;

  const draw = (container) => {
    container.innerHTML = '';
    if (entries.length === 0) {
      container.innerHTML = '<p>No ingredients in cart.</p>';
      return;
    }

    entries.forEach((item) => {
      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = `
        <span>${item.ingredient}</span>
        <label class="qty-control">
          Qty
          <select data-qty="${item.ingredient}">
            ${Array.from({ length: 20 }, (_, i) => i + 1)
              .map((n) => `<option value="${n}" ${n === item.qty ? 'selected' : ''}>${n}</option>`)
              .join('')}
          </select>
        </label>
        <button class="button ghost" data-remove="${item.ingredient}">Remove</button>
      `;
      row.querySelector('select').addEventListener('change', (e) => setCartQuantity(item.ingredient, Number(e.target.value)));
      row.querySelector('[data-remove]').addEventListener('click', () => removeFromCart(item.ingredient));
      container.appendChild(row);
    });
  };

  draw(cartItems);
  updateQuoteSummaryAndLink();
}

function updateQuoteSummaryAndLink() {
  const entries = [...cart.values()];
  if (entries.length === 0) {
    quoteOutput.textContent = 'Add ingredients to cart to prepare your quote request.';
    sendQuoteRequest.href = 'mailto:farahs@aetnatrading.com';
    return;
  }

  let summary = 'Request for Quote Summary\n\n';
  entries.forEach((item, idx) => {
    summary += `${idx + 1}. ${item.ingredient} | ${item.industry} | ${item.subcategory} | Requested quantity: ${item.qty} unit(s)\n`;
  });

  quoteOutput.textContent = summary;

  const subject = encodeURIComponent('Request for Quote - Aetna Trading');
  const body = encodeURIComponent(`${summary}\n\nI want more information about unit size and lead time.\n\nCompany Name:\nContact Name:\nEmail:\nPhone:\nShipping Destination:`);
  sendQuoteRequest.href = `mailto:farahs@aetnatrading.com?subject=${subject}&body=${body}`;
}

function setupQuoteRequestLink() {
  sendQuoteRequest.addEventListener('click', (e) => {
    if (cart.size === 0) {
      e.preventDefault();
      quoteOutput.textContent = 'Please add at least one ingredient before requesting a quote.';
      location.hash = 'cart';
    }
  });
}

function setupContactForm() {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website Contact - ${contactName.value.trim() || 'New Inquiry'}`);
    const body = encodeURIComponent(
      `Name: ${contactName.value.trim()}\n` +
      `Company: ${contactCompany.value.trim()}\n` +
      `Email: ${contactEmail.value.trim()}\n` +
      `Phone: ${contactPhone.value.trim()}\n\n` +
      `Message:\n${contactMessage.value.trim()}`
    );
    window.location.href = `mailto:roxy@aetnatrading.com?subject=${subject}&body=${body}`;
  });
}

function setupIndustryFilters() {
  industryTiles.forEach((tile) => {
    tile.addEventListener('click', () => {
      activeIndustry = tile.dataset.industry || 'all';
      industryTiles.forEach((el) => el.classList.remove('active'));
      tile.classList.add('active');
      renderCatalog();
      location.hash = 'catalog';
    });
  });
}

function showCartToast(message) {
  cartToast.textContent = message;
  cartToast.classList.remove('hidden');
  cartToast.classList.remove('show');
  void cartToast.offsetWidth;
  cartToast.classList.add('show');

  setTimeout(() => {
    cartToast.classList.add('hidden');
  }, 1400);
}

function setupRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.14 });

  reveals.forEach((el) => observer.observe(el));
}

function addUserLine(text) {
  const p = document.createElement('p');
  p.className = 'user';
  p.textContent = text;
  chatBody.appendChild(p);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function addBotLine(text) {
  const p = document.createElement('p');
  p.className = 'bot';
  p.textContent = text;
  chatBody.appendChild(p);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function findIngredientMention(text) {
  const lower = text.toLowerCase();
  return allItems.find((item) => lower.includes(item.ingredient.toLowerCase()));
}

function chatbotReply(text) {
  const lower = text.toLowerCase();

  if (lower.includes('unit') || lower.includes('size') || lower.includes('pack') || lower.includes('repack') || lower.includes('lead time')) {
    return 'Most ingredients come in 25 kg units. Some products can be repackaged into smaller portions on request. Share the ingredient and quantity, and we will confirm available unit sizes and lead time.';
  }

  if (lower.includes('purchase') || lower.includes('buy') || lower.includes('order')) {
    return 'Use Catalog to add ingredients to cart, open Request for Quote, then send by email to farahs@aetnatrading.com. Most items are in 25 kg units, with smaller repack options available on request.';
  }

  if (lower.includes('replace') || lower.includes('substitute') || lower.includes('alternative')) {
    return 'I can capture your substitution request. Share the ingredient name and application, and our team will provide approved alternatives.';
  }

  if (lower.includes('quote') || lower.includes('request for quote')) {
    return 'Open the Request for Quote tab, add items to cart, then click Request Quote by Email. Include if you want more information about unit size and lead time.';
  }

  if (lower.includes('spec')) {
    return 'Open the Spec Sheets tab and click an ingredient to view its spec-sheet entry.';
  }

  if (lower.includes('ingredient') || lower.includes('have') || lower.includes('carry')) {
    const mention = findIngredientMention(text);
    if (mention) {
      return `Yes, ${mention.ingredient} appears in our catalog under ${mention.industry} > ${mention.subcategory}.`;
    }
    return 'Send the exact ingredient name and I will check the catalog.';
  }

  return 'I can help with availability checks, substitution requests, Request for Quote steps, and spec-sheet navigation.';
}

function setupChatbot() {
  chatToggle.addEventListener('click', () => chatbot.classList.toggle('hidden'));
  chatClose.addEventListener('click', () => chatbot.classList.add('hidden'));

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (!text) return;
    addUserLine(text);
    setTimeout(() => addBotLine(chatbotReply(text)), 120);
    chatInput.value = '';
  });
}

function setupCartNavigation() {
  cartToggle.addEventListener('click', () => {
    location.hash = 'cart';
  });
}

function triggerCartAnimation() {
  cartToggle.classList.remove('cart-bump');
  void cartToggle.offsetWidth;
  cartToggle.classList.add('cart-bump');
  const cartFloat = document.getElementById('cart-float');
  if (cartFloat) {
    cartFloat.classList.remove('cart-bump');
    void cartFloat.offsetWidth;
    cartFloat.classList.add('cart-bump');
  }
}

renderCatalog();
renderSpecList();
renderCart();
setupCartNavigation();
setupChatbot();
setupQuoteRequestLink();
setupContactForm();
setupIndustryFilters();
setupRevealAnimations();

catalogSearch.addEventListener('input', renderCatalog);
specSearch.addEventListener('input', renderSpecList);
