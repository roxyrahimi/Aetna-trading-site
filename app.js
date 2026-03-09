const catalogData = [
  {
    industry: 'Oils',
    subcategories: [
      { name: 'Citrus', ingredients: ['Expressed Lime', 'Grapefruit Pink', 'Lemon', 'Mandarin - Natural', 'Neroli', 'Petitgrain', 'Sweet Orange', 'Tangerine'] },
      { name: 'Floral & Plant', ingredients: ['Aloe Vera', 'Birch Tar', 'Bi-rectified Blue Tansy', 'Cajeput', 'Cedarwood', 'Copaiba', 'Davana', 'Fir Needle (Siberica)', 'Frankincense (Olibanum)', 'Geranium', 'Gurjum Balsam', 'Hyssop', 'Jasmine Absolute', 'Lavender', 'Litsea Cubeba', 'Patchouli - Dark', 'Pine Scotch (Sylvestris)', 'Rose', 'Rosewood Natural', 'Sandalwood', 'Spike Lavender', 'Tea Tree', 'Vetiver', 'Wild Verbena', 'Ylang Extra'] },
      { name: 'Nut & Herb', ingredients: ['Almond', 'Amyris', 'Armoise (Artemisia)', 'Macadamian', 'Jojoba', 'Rosemary (Camphor)', 'Sage Clary', 'Sage Dalmatian', 'Tarragon (Estragon)', 'Thyme Red (Borneol)', 'Thyme White', 'Walnut'] },
      { name: 'Seed & Berry', ingredients: ['Blackseed', 'Cardamom', 'Carrot Seed', 'Dill Seed', 'Juniper Berry', 'Star Anise (Anise Seed)', 'Sunflower Seed', 'Safflower'] },
      { name: 'Vegetable & Foodgrade', ingredients: ['Argentine Lemongrass', 'Avocado', 'Basil - M.C.', 'Chamomile', 'Cinnamon Leaf', 'Clove Bud', 'Coriander', 'Olive', 'Peppermint', 'Pepper Black', 'Pimento Leaf (Allspice)', 'Wintergreen'] }
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
const specSearch = document.getElementById('spec-search');
const specSheetList = document.getElementById('spec-sheet-list');
const specViewer = document.getElementById('spec-viewer');
const cartItems = document.getElementById('cart-items');
const drawerCartItems = document.getElementById('drawer-cart-items');
const quoteOutput = document.getElementById('quote-output');
const sendQuoteRequest = document.getElementById('send-quote-request');
const cartToggle = document.getElementById('cart-toggle');
const cartClose = document.getElementById('cart-close');
const cartDrawer = document.getElementById('cart-drawer');
const cartCount = document.getElementById('cart-count');
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

function flattenCatalog() {
  const items = [];
  catalogData.forEach((industryObj) => {
    industryObj.subcategories.forEach((sub) => {
      sub.ingredients.forEach((ingredient) => {
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
    if (!query) return true;
    const text = `${item.ingredient} ${item.industry} ${item.subcategory}`.toLowerCase();
    return text.includes(query);
  });
}

function renderCatalog() {
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
      <div class="ingredient-main">
        <span class="ingredient-name">${item.ingredient}</span>
        <span class="ingredient-meta">${item.industry} | ${item.subcategory}</span>
      </div>
      <div class="ingredient-main">
        <span class="ingredient-meta">Available for sourcing</span>
      </div>
      <div class="item-actions">
        <button class="button ghost" data-action="spec">View Spec Sheet</button>
        <button class="button ghost" data-action="add">Add to Cart</button>
        <button class="button primary" data-action="buy">Purchase Now</button>
      </div>
    `;

    row.querySelector('[data-action="spec"]').addEventListener('click', () => {
      showSpecSheet(item);
      location.hash = 'spec-sheets';
    });

    row.querySelector('[data-action="add"]').addEventListener('click', () => addToCart(item));

    row.querySelector('[data-action="buy"]').addEventListener('click', () => {
      addToCart(item);
      location.hash = 'quote';
    });

    catalogResults.appendChild(row);
  });
}

function renderSpecList() {
  const query = specSearch.value.trim().toLowerCase();
  specSheetList.innerHTML = '';

  const filtered = allItems.filter((item) => !query || item.ingredient.toLowerCase().includes(query));
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
      <h4>7. Stability and Storage</h4>
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
      'Product Code: Internal code required',
      `Ingredient Type: ${profile.label}`,
      'CAS Number: Confirm with supplier Certificate of Analysis'
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
  renderCart();
}

function removeFromCart(key) {
  cart.delete(key);
  renderCart();
}

function renderCart() {
  const entries = [...cart.values()];
  cartCount.textContent = String(entries.reduce((sum, i) => sum + i.qty, 0));

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
        <span>${item.ingredient} x${item.qty}</span>
        <button class="button ghost">Remove</button>
      `;
      row.querySelector('button').addEventListener('click', () => removeFromCart(item.ingredient));
      container.appendChild(row);
    });
  };

  draw(cartItems);
  draw(drawerCartItems);
  updateQuoteSummaryAndLink();
}

function updateQuoteSummaryAndLink() {
  const entries = [...cart.values()];
  if (entries.length === 0) {
    quoteOutput.textContent = 'Add ingredients to cart to prepare your quote request.';
    sendQuoteRequest.href = 'mailto:sales@aetnatrading.com';
    return;
  }

  let summary = 'Request for Quote Summary\n\n';
  entries.forEach((item, idx) => {
    summary += `${idx + 1}. ${item.ingredient} | ${item.industry} | ${item.subcategory} | Requested quantity: ${item.qty} unit(s)\n`;
  });
  summary += '\nPlease confirm minimum order quantity, lead time, and final pricing.';

  quoteOutput.textContent = summary;

  const subject = encodeURIComponent('Request for Quote - Aetna Trading');
  const body = encodeURIComponent(`${summary}\n\nCompany Name:\nContact Name:\nEmail:\nPhone:\nShipping Destination:`);
  sendQuoteRequest.href = `mailto:sales@aetnatrading.com?subject=${subject}&body=${body}`;
}

function setupQuoteRequestLink() {
  sendQuoteRequest.addEventListener('click', (e) => {
    if (cart.size === 0) {
      e.preventDefault();
      quoteOutput.textContent = 'Please add at least one ingredient before requesting a quote.';
      location.hash = 'quote';
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
    window.location.href = `mailto:sales@aetnatrading.com?subject=${subject}&body=${body}`;
  });
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

  if (lower.includes('purchase') || lower.includes('buy') || lower.includes('order')) {
    return 'Use Catalog to add ingredients to cart, open Request for Quote, then send by email to sales@aetnatrading.com.';
  }

  if (lower.includes('replace') || lower.includes('substitute') || lower.includes('alternative')) {
    return 'I can capture your substitution request. Share the ingredient name and application, and our team will provide approved alternatives.';
  }

  if (lower.includes('quote') || lower.includes('request for quote')) {
    return 'Open the Request for Quote tab, add items to cart, then click Request Quote by Email.';
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

function setupCartDrawer() {
  cartToggle.addEventListener('click', () => cartDrawer.classList.toggle('hidden'));
  cartClose.addEventListener('click', () => cartDrawer.classList.add('hidden'));
}

renderCatalog();
renderSpecList();
renderCart();
setupCartDrawer();
setupChatbot();
setupQuoteRequestLink();
setupContactForm();

catalogSearch.addEventListener('input', renderCatalog);
specSearch.addEventListener('input', renderSpecList);
