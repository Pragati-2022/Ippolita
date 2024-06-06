import { h, Fragment } from 'preact';
import { observer } from 'mobx-react';
import { InlineBanner, withController, Facet, Facets } from '@searchspring/snap-preact-components';
import { until } from '../scripts/functions';
import { useEffect } from 'preact/hooks';
import { SortBy } from './SortBy';
import { DynamicVariants } from './DynamicVariants';

export const Results = withController(
	observer((props) => {
		const controller = props.controller;
		const {
			results,
			pagination: { totalPages },
		} = controller.store;
		return (
		 <div className='sortby-grid-group'>
		 <SortBy />		
        <div class="grid grid--uniform">
            {results.map((result, i) => (
              <>
                {/* {searchVideoResult(i)} */}
                <div className={`splide__slide  small--one-half medium-up--one-quarter  collection-grid-columns item-${i + 1}`} data-aos="row-of-4" key={result.id}>
                  {{
                    banner: <InlineBanner banner={result} />,
                  }[result.type] || <Result result={result} />} 
                </div>
              </>
            ))}
          </div>
		  </div>			
		);
	})
);

export const Result = withController(
	observer((props) => {
		const { result, controller, identity } = props;
		const {
			attributes,
			mappings: { core },
		} = result;
		
		const intellisuggest = (e) => controller.track.product.click(e, result);
		const StrToJson = attributes.ss_sizes ? JSON.parse(attributes.ss_sizes) : '';
		const sizes = StrToJson ? StrToJson.map((size) => size) : '';

		useEffect(()=>{
			document.querySelector('body').classList.add('ss-bodylist');
			 

			function equalHeight(container) {
				var currentTallest = 0;
				var currentRowStart = 0;
				var rowDivs = [];
				var elements = document.querySelectorAll(container);
			
				elements.forEach(function(element) {
				var el = element;
				el.style.height = 'auto';
				var topPosition = el.offsetTop;
			
				if (currentRowStart !== topPosition) {
					rowDivs.forEach(function(rowDiv) {
					rowDiv.style.height = currentTallest + 'px';
					});
					rowDivs = [];
					currentRowStart = topPosition;
					currentTallest = el.offsetHeight;
					rowDivs.push(el);
				} else {
					rowDivs.push(el);
					currentTallest = (currentTallest < el.offsetHeight) ? el.offsetHeight : currentTallest;
				}
			
				rowDivs.forEach(function(rowDiv) {
					rowDiv.style.height = currentTallest + 'px';
				});
				});
			}
			
			equalHeight('.ProductList .Grid__Cell .ProductItem__Title');
			
			
			window.addEventListener('resize', function() {
				equalHeight('.ProductList .Grid__Cell .ProductItem__Title');
			
			});
			
			document.querySelector('button.pdtlist-view-btn')?.addEventListener('click', function(){
				equalHeight('.ProductList .Grid__Cell .ProductItem__Title');
			});
			document.querySelector('button.pdtgrid-view-btn')?.addEventListener('click', function(){
				equalHeight('.ProductList .Grid__Cell .ProductItem__Title');
			});
			
		},[])
		
		const handleAddToCart = async (id, isAvailable) => {
			if (!isAvailable) return;
			try {
				await until(() => {
					return (
						classVariantPLPSection &&
						typeof classVariantPLPSection === 'object' &&
						classVariantPLPSection.addtocart &&
						typeof classVariantPLPSection.addtocart === 'function'
					);
				});
				classVariantPLPSection.addtocart(id);
			} catch {
				// Problem adding to cart
			}
		};

		return (
			result && (
				<>
					<div class="ProductItem ">
						<div class="ProductItem__Wrapper">
							<a
								href={core.url}
								class="ProductItem__ImageWrapper ProductItem__ImageWrapper--withAlternateImage"
								ss-track-intellisuggest={result.attributes.intellisuggestData}
								ss-track-intellisuggest-signature={result.attributes.intellisuggestSignature}
							>
								<div class="grid__item-image-wrapper">
      							 <div class="grid-product__image-mask">
									
								 {attributes.tags?.[0] && <span className='badge-tagline'>{attributes.tags?.[0]}</span> }
									<div class="wishlist-engine wishlist-plp" data-product_id={core.uid} data-variant_id={attributes.ss_id} data-full_button="false" data-css="true"></div>
                  {attributes.ss_image_hover && <img class="ProductItem__Image ProductItem__Image--alternate" src={attributes.ss_image_hover} alt={core.name} />}
									<img class={ attributes.ss_image_hover ? ('ProductItem__Image'): ('ProductItem__Image nopdt-alter-img')} src={core.imageUrl ? core.imageUrl : 'https://cdn.shopify.com/s/files/1/0629/9002/4756/files/no-product-image.jpg'} alt={core.name} />
								 </div>
								</div>
							</a>
							<div class="ProductItem__LabelList">
								<span class="ProductItem__Label Heading Text--subdued">{attributes.tags_label}</span>
							</div>
							<div class="ProductItem__Info ProductItem__Info--center ">
								<h2 class="ProductItem__Title Heading">
									<a href={core.url}>{core.name}</a>
								</h2>
								
								<div class="ProductItem__PriceList  Heading">
									<div class="ProductItem__Price Price Text--subdued">
										<span className='ss-price'>${core.price}</span>
										{core.msrp && <span class="msrp-price">${core.msrp}</span>}
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</>
			)
		);
	})
);

export const NoResults = withController(
	observer((props) => {
		const controller = props.controller;
		const store = controller.store;
		const dym = store.search.didYouMean;
		const contactEmail = 'contact@thesite.com';
			
		return (
			<div className="ss__no-results">
				<div className="ss__no-results__container">
					{dym && (
						<p className="ss__did-you-mean">
							Did you mean <a href={dym.url.href}>{dym.string}</a>?
						</p>
					)}
				</div>

				<div className="ss__no-results__container">
					<h4 style="margin-bottom: 5px;">Suggestions</h4>

					<ul className="ss__no-results__suggestions">
						<li>Check for misspellings.</li>
						<li>Remove possible redundant keywords (ie. "products").</li>
						<li>Use other words to describe what you are searching for.</li>
					</ul>

					<p>
						Still can't find what you're looking for?{' '}
						<a href="/contact-us/" style="font-size: 14px;">
							Contact us
						</a>
						.
					</p>

					<hr />

					<div className="ss__no-results__container">
						<div className="ss__no-results__contact">
							<div className="ss__no-results__contact__phone">
								<h4 style="margin-bottom: 5px;">Call Us</h4>
								<p>555-555-5555</p>
							</div>

							<div className="ss__no-results__contact__email">
								<h4 style="margin-bottom: 5px;">Email Us</h4>
								<p>
									<a href={`mailto:${contactEmail}`} style="font-size: 14px;">
										{contactEmail}
									</a>
								</p>
							</div>

							<div className="ss__no-results__contact__location">
								<h4 style="margin-bottom: 5px;">Physical Address</h4>
								<p>
									123 Street Address
									<br />
									City, State, Zipcode
								</p>
							</div>

							<div className="ss__no-results__contact__hours">
								<h4 style="margin-bottom: 5px;">Hours</h4>
								<p>Monday - Friday: 8am - 9pm MDT</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	})
);
