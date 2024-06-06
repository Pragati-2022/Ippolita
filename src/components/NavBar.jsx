import { h } from 'preact';

const Navabar = () => {
	return (
		<div>
			<div id="shopify-section-announcement-bar" class="shopify-section">
				<section id="section-announcement-bar" data-section-id="announcement-bar" data-section-type="announcement-bar">
					<div class="AnnouncementBar">
						<div class="AnnouncementBar__Wrapper" style="height: 40px">
							<div id="announcement-87fffe99-10b4-4bd1-b768-3b5a980ff72c" style="opacity: 0">
								<a href="/collections/new-arrivals"> FREE WORLDWIDE SHIPPING ON ORDERS $100+ </a>
							</div>
							<div id="announcement-84bb7e25-9e90-4f08-b198-e434b3bcf3e2" style="opacity: 1">
								Get{' '}
								<span style="text-decoration: underline">
									<a href="/pages/welcome">15% OFF </a>
								</span>{' '}
								Your First Order
							</div>
						</div>
					</div>
				</section>
				<script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
			</div>
			<div id="shopify-section-header" class="shopify-section shopify-section--header">
				<div id="Search" class="Search" aria-hidden="true">
					<div class="Search__Inner">
						<div class="Search__SearchBar">
							<form action="/search" name="GET" role="search" class="Search__Form">
								<div class="Search__InputIconWrapper">
									<span class="hidden-tablet-and-up">
										<svg class="Icon Icon--search" role="presentation" viewBox="0 0 18 17">
											<g transform="translate(1 1)" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="square">
												<path d="M16 16l-5.0752-5.0752"></path>
												<circle cx="6.4" cy="6.4" r="6.4"></circle>
											</g>
										</svg>
									</span>
									<span class="hidden-phone">
										<svg class="Icon Icon--search-desktop" role="presentation" viewBox="0 0 21 21">
											<g transform="translate(1 1)" stroke="currentColor" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="square">
												<path d="M18 18l-5.7096-5.7096"></path>
												<circle cx="7.2" cy="7.2" r="7.2"></circle>
											</g>
										</svg>
									</span>
								</div>

								<input
									type="search"
									class="Search__Input Heading"
									name="q"
									autocomplete="off"
									autocorrect="off"
									autocapitalize="off"
									placeholder="Search..."
									autofocus=""
								/>
								<input type="hidden" name="type" value="product" />
							</form>

							<button class="Search__Close Link Link--primary" data-action="close-search">
								<svg class="Icon Icon--close" role="presentation" viewBox="0 0 16 14">
									<path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fill-rule="evenodd"></path>
								</svg>
							</button>
						</div>

						<div class="Search__Results" aria-hidden="true"></div>
					</div>
				</div>

				<div id="qab_placeholder" style="height: 0px">
					<div
						id="qab_background"
						style="opacity: 1; margin: 0px; padding: 0px; left: 0px; height: auto; width: 100%; z-index: 1000; position: relative"
					>
						<div
							id="qab_bar"
							style="
							text-align: center;
							margin: 0px;
							padding: 13px 10px;
							left: 0px;
							height: auto;
							width: 100%;
							box-sizing: border-box;
							border: none;
							background-color: rgb(241, 228, 216);
							color: rgb(17, 17, 17);
							font-size: 12px;
							line-height: 15px;
							font-family: Helvetica;
						"
						>
							<div id="qab_content" style="text-align: center; display: inline-block; font-size: 12px">
								<span id="qab_message" style="color: inherit; font-size: 12px">
									FREE SHIPPING ON U.S. ORDERS OVER $100{' '}
								</span>
							</div>
						</div>
					</div>
				</div>
				<header
					id="section-header"
					class="Header Header--initialized Header--withIcons Header--center Header--transparent"
					data-section-id="header"
					data-section-type="header"
					data-section-settings='{
		  "navigationStyle": "center",
		  "hasTransparentHeader": true,
		  "isSticky": true
		}'
					role="banner"
				>
					<div class="Header__Wrapper">
						<div class="Header__FlexItem Header__FlexItem--fill">
							<button
								class="Header__Icon Icon-Wrapper Icon-Wrapper--clickable hidden-desk"
								aria-expanded="false"
								data-action="open-drawer"
								data-drawer-id="sidebar-menu"
								aria-label="Open navigation"
							>
								<span class="hidden-tablet-and-up">
									<svg class="Icon Icon--nav" role="presentation" viewBox="0 0 20 14">
										<path d="M0 14v-1h20v1H0zm0-7.5h20v1H0v-1zM0 0h20v1H0V0z" fill="currentColor"></path>
									</svg>
								</span>
								<span class="hidden-phone">
									<svg class="Icon Icon--nav-desktop" role="presentation" viewBox="0 0 24 16">
										<path d="M0 15.985v-2h24v2H0zm0-9h24v2H0v-2zm0-7h24v2H0v-2z" fill="currentColor"></path>
									</svg>
								</span>
							</button>
							<nav class="Header__MainNav hidden-pocket hidden-lap" aria-label="Main navigation">
								<ul class="HorizontalList HorizontalList--spacingExtraLoose">
									<li class="HorizontalList__Item HorizontalList__Item--new-arrivals">
										<a href="/collections/new-arrivals-custom" class="Heading u-h6">
											<span class="Heading--l1">NEW ARRIVALS</span>
											<span class="Header__LinkSpacer">NEW ARRIVALS</span>
										</a>
									</li>
									<li class="HorizontalList__Item HorizontalList__Item--best-sellers" aria-haspopup="true">
										<a href="/collections/best-sellers-custom" class="Heading u-h6">
											<span class="Heading--l1">BEST SELLERS</span>
											<span class="Header__LinkSpacer">BEST SELLERS</span>
										</a>
										<div class="MegaMenu" aria-hidden="true">
											<div class="MegaMenu__Inner">
												<div class="MegaMenu__Item MegaMenu__Item--fit">
													<a href="#" class="MegaMenu__Title Heading Text--subdued u-h7">
														BEST SELLERS
													</a>
													<ul class="Linklist">
														<li class="Linklist__Item">
															<a href="/collections/best-sellers" class="Link Link--secondary">
																Best Sellers
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/exclusives" class="Link Link--secondary">
																Exclusives
															</a>
														</li>
													</ul>
												</div>
												<div class="MegaMenu__Item MegaMenu__Item--fit">
													<a href="#" class="MegaMenu__Title Heading Text--subdued u-h7">
														ICONIC KIKIDM
													</a>
													<ul class="Linklist">
														<li class="Linklist__Item">
															<a href="/collections/all-over-lace" class="Link Link--secondary">
																All Over Lace
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/coquette-collection" class="Link Link--secondary">
																Coquette
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/crochet-collection" class="Link Link--secondary">
																Crochet
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/enchante-collection" class="Link Link--secondary">
																Enchante
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/some-erotic-direction" class="Link Link--secondary">
																French Lessons
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/handcuff" class="Link Link--secondary">
																Handcuff
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/illusion-collection" class="Link Link--secondary">
																Illusion
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/intime" class="Link Link--secondary">
																Intime &amp; Ribbed Intime
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/jolie-collection" class="Link Link--secondary">
																Jolie
															</a>
														</li>
													</ul>
												</div>
												<div class="MegaMenu__Item MegaMenu__Item--fit">
													<a href="#" class="MegaMenu__Title Heading Text--subdued u-h7">
														ICONIC KIKIDM
													</a>
													<ul class="Linklist">
														<li class="Linklist__Item">
															<a href="/collections/juliette-collection" class="Link Link--secondary">
																Juliette
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/lace-inset" class="Link Link--secondary">
																Lace Inset
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/leche-moi-collection" class="Link Link--secondary">
																Leche Moi
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/orchid-collection" class="Link Link--secondary">
																Orchid
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/sheer-striped-lace" class="Link Link--secondary">
																Sheer Striped Lace
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/tiered-collection" class="Link Link--secondary">
																Tiered
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/tous-les-jours-1" class="Link Link--secondary">
																Tous Les Jours
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/tuxedo" class="Link Link--secondary">
																Tuxedo
															</a>
														</li>
													</ul>
												</div>
												<div class="MegaMenu__Item" style="width: 660px; min-width: 425px">
													<div class="MegaMenu__Push MegaMenu__Push--shrink">
														<a class="MegaMenu__PushLink" href="/collections/exclusives">
															<div
																class="MegaMenu__PushImageWrapper AspectRatio"
																style="
																background: url(//kikidm.com/cdn/shop/files/one_1x1.jpg?v=1668997647);
																max-width: 370px;
																--aspect-ratio: 1.608695652173913;
															"
															>
																<img
																	class="Image--fadeIn Image--lazyLoaded"
																	data-src="//kikidm.com/cdn/shop/files/one_370x230@2x.jpg?v=1668997647"
																	alt=""
																	src="//kikidm.com/cdn/shop/files/one_370x230@2x.jpg?v=1668997647"
																/>

																<span class="Image__Loader"></span>
															</div>
															<p class="MegaMenu__PushHeading Heading u-h6">EXCLUSIVES</p>
														</a>
													</div>
													<div class="MegaMenu__Push MegaMenu__Push--shrink">
														<a class="MegaMenu__PushLink" href="/collections/best-sellers-custom">
															<div
																class="MegaMenu__PushImageWrapper AspectRatio"
																style="
																background: url(//kikidm.com/cdn/shop/files/Untitled-1_660a2161-636b-4903-a5e5-75b3be4ad467_1x1.jpg?v=1669174674);
																max-width: 370px;
																--aspect-ratio: 1.608695652173913;
															"
															>
																<img
																	class="Image--fadeIn Image--lazyLoaded"
																	data-src="//kikidm.com/cdn/shop/files/Untitled-1_660a2161-636b-4903-a5e5-75b3be4ad467_370x230@2x.jpg?v=1669174674"
																	alt=""
																	src="//kikidm.com/cdn/shop/files/Untitled-1_660a2161-636b-4903-a5e5-75b3be4ad467_370x230@2x.jpg?v=1669174674"
																/>

																<span class="Image__Loader"></span>
															</div>
															<p class="MegaMenu__PushHeading Heading u-h6">BEST SELLERS</p>
														</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li class="HorizontalList__Item HorizontalList__Item--lingerie" aria-haspopup="true">
										<a href="/collections/lingerie" class="Heading u-h6">
											<span class="Heading--l1">Lingerie</span>
											<span class="Header__LinkSpacer">Lingerie</span>
										</a>
										<div class="MegaMenu" aria-hidden="true">
											<div class="MegaMenu__Inner">
												<div class="MegaMenu__Item MegaMenu__Item--fit">
													<a href="/collections/lingerie" class="MegaMenu__Title Heading Text--subdued u-h7">
														Lingerie
													</a>
													<ul class="Linklist">
														<li class="Linklist__Item">
															<a href="/collections/bras" class="Link Link--secondary">
																Bras
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/panties-garters" class="Link Link--secondary">
																Panties
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/garter-belts-1" class="Link Link--secondary">
																Garter Belts
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/bodysuits" class="Link Link--secondary">
																Catsuits &amp; Bodysuits
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/camisoles" class="Link Link--secondary">
																Camis &amp; Tanks
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/corsets-bustiers" class="Link Link--secondary">
																Corsets &amp; Bustiers
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/slips-1" class="Link Link--secondary">
																Slips &amp; Nighties
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/rompers-teddys" class="Link Link--secondary">
																Rompers &amp; Teddies
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/lingerie" class="Link Link--secondary">
																Shop All
															</a>
														</li>
													</ul>
												</div>
												<div class="MegaMenu__Item MegaMenu__Item--fit">
													<a href="/collections/bras" class="MegaMenu__Title Heading Text--subdued u-h7">
														Bras
													</a>
													<ul class="Linklist">
														<li class="Linklist__Item">
															<a href="/collections/balconette-bra" class="Link Link--secondary">
																Balconette Bra
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/demi-bra" class="Link Link--secondary">
																Demi Bra
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/longline-bra" class="Link Link--secondary">
																Longline Bra
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/ouvert-bra" class="Link Link--secondary">
																Ouvert Bra
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/soft-bras" class="Link Link--secondary">
																Soft Bra
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/bras" class="Link Link--secondary">
																Shop All
															</a>
														</li>
													</ul>
												</div>
												<div class="MegaMenu__Item MegaMenu__Item--fit">
													<a href="/collections/panties-garters" class="MegaMenu__Title Heading Text--subdued u-h7">
														Panties
													</a>
													<ul class="Linklist">
														<li class="Linklist__Item">
															<a href="/collections/g-string" class="Link Link--secondary">
																G-String
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/thong" class="Link Link--secondary">
																Thong
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/panty" class="Link Link--secondary">
																Panty
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/high-waisted-panty" class="Link Link--secondary">
																High Waisted Panty
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/ouvert-panty" class="Link Link--secondary">
																Ouvert Panty
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/garter-belts-1" class="Link Link--secondary">
																Garter Belts
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/panties-garters" class="Link Link--secondary">
																Shop All
															</a>
														</li>
													</ul>
												</div>
												<div class="MegaMenu__Item" style="width: 660px; min-width: 425px">
													<div class="MegaMenu__Push MegaMenu__Push--shrink">
														<a class="MegaMenu__PushLink" href="https://kikidm.com/collections/tous-les-jours-1">
															<div
																class="MegaMenu__PushImageWrapper AspectRatio"
																style="
																background: url(//kikidm.com/cdn/shop/files/TOUS-LES-JOURS-DROPDOWN_c9d83ffb-b7a9-473c-9155-005d4ef498e1_1x1.jpg?v=1695152891);
																max-width: 370px;
																--aspect-ratio: 1.608695652173913;
															"
															>
																<img
																	class="Image--lazyLoad Image--fadeIn"
																	data-src="//kikidm.com/cdn/shop/files/TOUS-LES-JOURS-DROPDOWN_c9d83ffb-b7a9-473c-9155-005d4ef498e1_370x230@2x.jpg?v=1695152891"
																	alt=""
																/>

																<span class="Image__Loader"></span>
															</div>
															<p class="MegaMenu__PushHeading Heading u-h6">TOUS LES JOURS COLLECTION</p>
														</a>
													</div>
													<div class="MegaMenu__Push MegaMenu__Push--shrink">
														<a class="MegaMenu__PushLink" href="https://kikidm.com/collections/handcuff">
															<div
																class="MegaMenu__PushImageWrapper AspectRatio"
																style="
																background: url(//kikidm.com/cdn/shop/files/HANDCUFF-DROPDOWN_1x1.jpg?v=1695152984);
																max-width: 370px;
																--aspect-ratio: 1.608695652173913;
															"
															>
																<img
																	class="Image--lazyLoad Image--fadeIn"
																	data-src="//kikidm.com/cdn/shop/files/HANDCUFF-DROPDOWN_370x230@2x.jpg?v=1695152984"
																	alt=""
																/>

																<span class="Image__Loader"></span>
															</div>
															<p class="MegaMenu__PushHeading Heading u-h6">HANDCUFF COLLECTION</p>
														</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li class="HorizontalList__Item HorizontalList__Item--loungewear" aria-haspopup="true">
										<a href="/collections/loungewear" class="Heading u-h6">
											<span class="Heading--l1">Loungewear</span>
											<span class="Header__LinkSpacer">Loungewear</span>
										</a>
										<div class="MegaMenu MegaMenu--spacingEvenly" aria-hidden="true">
											<div class="MegaMenu__Inner">
												<div class="MegaMenu__Item MegaMenu__Item--fit">
													<a href="/collections/loungewear" class="MegaMenu__Title Heading Text--subdued u-h7">
														Loungewear
													</a>
													<ul class="Linklist">
														<li class="Linklist__Item">
															<a href="/collections/sleepwear-robes" class="Link Link--secondary">
																Pajamas
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/robes-1" class="Link Link--secondary">
																Robes
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/slips-1" class="Link Link--secondary">
																Slips &amp; Nighties
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/rompers-teddys" class="Link Link--secondary">
																Rompers &amp; Teddies
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/camisoles" class="Link Link--secondary">
																Camis &amp; Tanks
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/loungewear" class="Link Link--secondary">
																Shop All
															</a>
														</li>
													</ul>
												</div>
												<div class="MegaMenu__Item" style="width: 660px; min-width: 425px">
													<div class="MegaMenu__Push MegaMenu__Push--shrink">
														<a class="MegaMenu__PushLink" href="https://kikidm.com/collections/sleepwear-robes">
															<div
																class="MegaMenu__PushImageWrapper AspectRatio"
																style="
																background: url(//kikidm.com/cdn/shop/files/silk-pajamas-dropdown_1x1.jpg?v=1695155593);
																max-width: 370px;
																--aspect-ratio: 1.608695652173913;
															"
															>
																<img
																	class="Image--lazyLoad Image--fadeIn"
																	data-src="//kikidm.com/cdn/shop/files/silk-pajamas-dropdown_370x230@2x.jpg?v=1695155593"
																	alt=""
																/>

																<span class="Image__Loader"></span>
															</div>
															<p class="MegaMenu__PushHeading Heading u-h6">SILK PAJAMAS</p>
														</a>
													</div>
													<div class="MegaMenu__Push MegaMenu__Push--shrink">
														<a class="MegaMenu__PushLink" href="https://kikidm.com/collections/camisoles">
															<div
																class="MegaMenu__PushImageWrapper AspectRatio"
																style="
																background: url(//kikidm.com/cdn/shop/files/camis-and-tanks-dropdown_f9242278-d1bd-490a-8fe5-4d28aa03d4d7_1x1.jpg?v=1695155878);
																max-width: 370px;
																--aspect-ratio: 1.608695652173913;
															"
															>
																<img
																	class="Image--lazyLoad Image--fadeIn"
																	data-src="//kikidm.com/cdn/shop/files/camis-and-tanks-dropdown_f9242278-d1bd-490a-8fe5-4d28aa03d4d7_370x230@2x.jpg?v=1695155878"
																	alt=""
																/>

																<span class="Image__Loader"></span>
															</div>
															<p class="MegaMenu__PushHeading Heading u-h6">CAMIS &amp; TANKS</p>
														</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li class="HorizontalList__Item HorizontalList__Item--bridal">
										<a href="/collections/bridal-1" class="Heading u-h6">
											<span class="Heading--l1">BRIDAL</span>
											<span class="Header__LinkSpacer">BRIDAL</span>
										</a>
									</li>
									<li class="HorizontalList__Item HorizontalList__Item--clothing" aria-haspopup="true">
										<a href="/collections/ready-to-wear" class="Heading u-h6">
											<span class="Heading--l1">CLOTHING</span>
											<span class="Header__LinkSpacer">CLOTHING</span>
										</a>
										<div class="MegaMenu MegaMenu--spacingEvenly" aria-hidden="true">
											<div class="MegaMenu__Inner">
												<div class="MegaMenu__Item MegaMenu__Item--fit">
													<a href="/collections/ready-to-wear" class="MegaMenu__Title Heading Text--subdued u-h7">
														Clothing
													</a>
													<ul class="Linklist">
														<li class="Linklist__Item">
															<a href="/collections/dresses-gowns" class="Link Link--secondary">
																Dresses
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/camisoles" class="Link Link--secondary">
																Camis &amp; Tanks
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/bodysuits" class="Link Link--secondary">
																Catsuits &amp; Bodysuits
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/corsets-bustiers" class="Link Link--secondary">
																Corsets &amp; Bustiers
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/tops" class="Link Link--secondary">
																Tops &amp; T's
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/bottoms" class="Link Link--secondary">
																Bottoms
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/leather-goods" class="Link Link--secondary">
																Leather
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/jewelry" class="Link Link--secondary">
																Jewelry
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/ready-to-wear" class="Link Link--secondary">
																Shop All
															</a>
														</li>
													</ul>
												</div>
												<div class="MegaMenu__Item" style="width: 660px; min-width: 425px">
													<div class="MegaMenu__Push MegaMenu__Push--shrink">
														<a class="MegaMenu__PushLink" href="/collections/tops">
															<div
																class="MegaMenu__PushImageWrapper AspectRatio"
																style="
																background: url(//kikidm.com/cdn/shop/files/girlfriend-dropdown_1x1.jpg?v=1690395151);
																max-width: 370px;
																--aspect-ratio: 1.5;
															"
															>
																<img
																	class="Image--lazyLoad Image--fadeIn"
																	data-src="//kikidm.com/cdn/shop/files/girlfriend-dropdown_370x230@2x.jpg?v=1690395151"
																	alt=""
																/>

																<span class="Image__Loader"></span>
															</div>
															<p class="MegaMenu__PushSubHeading Heading Text--subdued u-h7">TOPS &amp; T'S</p>
														</a>
													</div>
													<div class="MegaMenu__Push MegaMenu__Push--shrink">
														<a class="MegaMenu__PushLink" href="https://kikidm.com/collections/dresses-gowns">
															<div
																class="MegaMenu__PushImageWrapper AspectRatio"
																style="
																background: url(//kikidm.com/cdn/shop/files/slips-dropdown_1x1.jpg?v=1691469205);
																max-width: 370px;
																--aspect-ratio: 1.5;
															"
															>
																<img
																	class="Image--lazyLoad Image--fadeIn"
																	data-src="//kikidm.com/cdn/shop/files/slips-dropdown_370x230@2x.jpg?v=1691469205"
																	alt=""
																/>

																<span class="Image__Loader"></span>
															</div>
															<p class="MegaMenu__PushSubHeading Heading Text--subdued u-h7">DRESSES &amp; GOWNS</p>
														</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li class="HorizontalList__Item HorizontalList__Item--pleasure" aria-haspopup="true">
										<a href="/collections/pleasure-custom" class="Heading u-h6">
											<span class="Heading--l1">Pleasure</span>
											<span class="Header__LinkSpacer">Pleasure</span>
										</a>
										<div class="MegaMenu MegaMenu--spacingEvenly" aria-hidden="true">
											<div class="MegaMenu__Inner">
												<div class="MegaMenu__Item MegaMenu__Item--fit">
													<a href="/collections/pleasure-custom" class="MegaMenu__Title Heading Text--subdued u-h7">
														Pleasure
													</a>
													<ul class="Linklist">
														<li class="Linklist__Item">
															<a href="/collections/pleasure-for-one" class="Link Link--secondary">
																Self Play
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/partnered-playtime" class="Link Link--secondary">
																Partner Play
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/bondage-101" class="Link Link--secondary">
																Bondage Play
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/masks" class="Link Link--secondary">
																Masks &amp; Blindfolds
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/massage-oil-candles" class="Link Link--secondary">
																Candles
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/jewelry" class="Link Link--secondary">
																Jewelry
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/pleasure-custom" class="Link Link--secondary">
																Shop All
															</a>
														</li>
													</ul>
												</div>
												<div class="MegaMenu__Item" style="width: 660px; min-width: 425px">
													<div class="MegaMenu__Push MegaMenu__Push--shrink">
														<a class="MegaMenu__PushLink" href="/collections/pleasure-for-one">
															<div
																class="MegaMenu__PushImageWrapper AspectRatio"
																style="
																background: url(//kikidm.com/cdn/shop/files/7EA75B2B-2A8A-491E-AD3C-A89CC921233A-86BE303C-A902-420D-B894-288766335FD0_b400e27c-9ec7-4b7c-9069-fde66e2b31ec_1x1.jpg?v=1650327196);
																max-width: 370px;
																--aspect-ratio: 1.5;
															"
															>
																<img
																	class="Image--lazyLoad Image--fadeIn"
																	data-src="//kikidm.com/cdn/shop/files/7EA75B2B-2A8A-491E-AD3C-A89CC921233A-86BE303C-A902-420D-B894-288766335FD0_b400e27c-9ec7-4b7c-9069-fde66e2b31ec_370x230@2x.jpg?v=1650327196"
																	alt=""
																/>

																<span class="Image__Loader"></span>
															</div>
															<p class="MegaMenu__PushHeading Heading u-h6">SELF PLAY</p>
														</a>
													</div>
													<div class="MegaMenu__Push MegaMenu__Push--shrink">
														<a class="MegaMenu__PushLink" href="/collections/partnered-playtime">
															<div
																class="MegaMenu__PushImageWrapper AspectRatio"
																style="
																background: url(//kikidm.com/cdn/shop/files/131579363_192594819244675_6480976047791124303_n_1x1.png.jpg?v=1622645738);
																max-width: 370px;
																--aspect-ratio: 1.5;
															"
															>
																<img
																	class="Image--lazyLoad Image--fadeIn"
																	data-src="//kikidm.com/cdn/shop/files/131579363_192594819244675_6480976047791124303_n_370x230@2x.png?v=1622645738"
																	alt=""
																/>

																<span class="Image__Loader"></span>
															</div>
															<p class="MegaMenu__PushHeading Heading u-h6">PARTNER PLAY</p>
														</a>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li class="HorizontalList__Item HorizontalList__Item--lifestyle" aria-haspopup="true">
										<a href="/collections/lifestyle" class="Heading u-h6">
											<span class="Heading--l1">LIFESTYLE</span>
											<span class="Header__LinkSpacer">LIFESTYLE</span>
										</a>
										<div class="MegaMenu MegaMenu--spacingEvenly" aria-hidden="true">
											<div class="MegaMenu__Inner">
												<div class="MegaMenu__Item MegaMenu__Item--fit">
													<a href="#" class="MegaMenu__Title Heading Text--subdued u-h7">
														LIFESTYLE
													</a>
													<ul class="Linklist">
														<li class="Linklist__Item">
															<a href="/collections/lifestyle" class="Link Link--secondary">
																Lifestyle
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/massage-oil-candles" class="Link Link--secondary">
																Candles
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/books" class="Link Link--secondary">
																Books
															</a>
														</li>
														<li class="Linklist__Item">
															<a href="/collections/lifestyle" class="Link Link--secondary">
																Shop All
															</a>
														</li>
													</ul>
												</div>
												<div class="MegaMenu__Item" style="width: 660px; min-width: 425px">
													<div class="MegaMenu__Push MegaMenu__Push--shrink">
														<a class="MegaMenu__PushLink" href="/collections/lifestyle">
															<div
																class="MegaMenu__PushImageWrapper AspectRatio"
																style="
																background: url(//kikidm.com/cdn/shop/files/Screen_Shot_2022-11-28_at_11.37.36_1x1.png.jpg?v=1669664456);
																max-width: 370px;
																--aspect-ratio: 1.608695652173913;
															"
															>
																<img
																	class="Image--lazyLoad Image--fadeIn"
																	data-src="//kikidm.com/cdn/shop/files/Screen_Shot_2022-11-28_at_11.37.36_370x230@2x.png?v=1669664456"
																	alt=""
																/>

																<span class="Image__Loader"></span>
															</div>
															<p class="MegaMenu__PushHeading Heading u-h6">LIFESTYLE</p>
														</a>
													</div>
													<div class="MegaMenu__Push MegaMenu__Push--shrink">
														<a class="MegaMenu__PushLink" href="/collections/books">
															<div
																class="MegaMenu__PushImageWrapper AspectRatio"
																style="
																background: url(//kikidm.com/cdn/shop/files/Screen_Shot_2022-11-28_at_11.38.05_1x1.png.jpg?v=1669664442);
																max-width: 370px;
																--aspect-ratio: 1.608695652173913;
															"
															>
																<img
																	class="Image--lazyLoad Image--fadeIn"
																	data-src="//kikidm.com/cdn/shop/files/Screen_Shot_2022-11-28_at_11.38.05_370x230@2x.png?v=1669664442"
																	alt=""
																/>

																<span class="Image__Loader"></span>
															</div>
															<p class="MegaMenu__PushHeading Heading u-h6">BOOKS</p>
														</a>
													</div>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</nav>
						</div>
						<div class="Header__FlexItem Header__FlexItem--logo">
							<div class="Header__Logo">
								<a href="/" class="Header__LogoLink">
									<img
										class="Header__LogoImage Header__LogoImage--primary"
										src="//kikidm.com/cdn/shop/files/kikilogoblack-transparent_250x.png?v=1673507930"
										srcset="
										//kikidm.com/cdn/shop/files/kikilogoblack-transparent_250x.png?v=1673507930    1x,
										//kikidm.com/cdn/shop/files/kikilogoblack-transparent_250x@2x.png?v=1673507930 2x
									"
										width="250"
										alt="Kiki de Montparnasse"
									/>
									<img
										class="Header__LogoImage Header__LogoImage--transparent"
										src="//kikidm.com/cdn/shop/files/kiki_logo_black_short_250x.png?v=1613781795"
										srcset="
										//kikidm.com/cdn/shop/files/kiki_logo_black_short_250x.png?v=1613781795    1x,
										//kikidm.com/cdn/shop/files/kiki_logo_black_short_250x@2x.png?v=1613781795 2x
									"
										width="250"
										alt="Kiki de Montparnasse"
									/>
								</a>
							</div>
						</div>

						<div class="Header__FlexItem Header__FlexItem--fill">
							<a href="/account/login" class="Header__Icon Icon-Wrapper Icon-Wrapper--clickable hidden-phone Heading u-h7">
								Account
							</a>
							<a
								href="/cart"
								class="Header__Icon Icon-Wrapper Icon-Wrapper--clickable"
								data-action="open-drawer"
								data-drawer-id="sidebar-cart"
								aria-expanded="false"
								aria-label="Open cart"
							>
								<span class="hidden-tablet-and-up">
									<svg class="Icon Icon--cart" role="presentation" viewBox="0 0 17 20">
										<path
											d="M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z"
											fill="currentColor"
										></path>
									</svg>
								</span>
								<span class="hidden-phone">
									<svg class="Icon Icon--cart-desktop" role="presentation" viewBox="0 0 19 23">
										<path
											d="M0 22.985V5.995L2 6v.03l17-.014v16.968H0zm17-15H2v13h15v-13zm-5-2.882c0-2.04-.493-3.203-2.5-3.203-2 0-2.5 1.164-2.5 3.203v.912H5V4.647C5 1.19 7.274 0 9.5 0 11.517 0 14 1.354 14 4.647v1.368h-2v-.912z"
											fill="currentColor"
										></path>
									</svg>
								</span>
								<span class="Header__CartDot"></span>
							</a>
						</div>
					</div>
				</header>
				<script>
					document.documentElement.style.setProperty('--header-height', document.getElementById('shopify-section-header').offsetHeight + 'px');
				</script>
			</div>
			<div class="product-grid-container" id="ProductGridContainer">
				<div id="searchspring-content">{/* SS:TARGET: RESULTS/PAGINATION */}</div>
			</div>
		</div>
	);
};
export default Navabar;
