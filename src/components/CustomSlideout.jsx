import { h, Component, Fragment } from 'preact';
import { useState, useRef, useEffect } from 'preact/hooks';
import { observer } from 'mobx-react';

/* searchspring imports */
import { withController } from '@searchspring/snap-preact-components';

/* local imports */
import { FilterMessages } from '../sidebar/FilterMessages';

export const CustomSlideout = withController(
	observer(({ controller }) => {
		const [open, setOpen] = useState(false);
		const {
			pagination: { totalResults },
			sorting,
		} = controller.store;
		const { options } = sorting;
		const clearAll = controller.urlManager.remove('filter');
		const { facets } = controller.store;
		const wrapperContainer = useRef();

		const handleToggleSubMenu = (e, open, subMenu) => {
			const target = e.target;
			const menuClass = 'submenu-open';
			const menu = target.closest('.mobile-facets__main.has-submenu');
			const subMenuClass = 'menu-opening';
			const faectsDtl = document.querySelectorAll('.mobile-facets__details');
			faectsDtl.forEach(function (item) {
				item.classList.remove(subMenuClass);
				item.removeAttribute('open');
			});
			if (menu && subMenu) {
				if (open) {
					target.classList.add(menuClass);
					subMenu.classList.add(subMenuClass);

					setTimeout(() => {
						if (!target.hasAttribute('open')) {
							target.setAttribute('open', true);
						}
					}, 250);
				} else {
					menu.classList.remove(menuClass);
					subMenu.classList.remove(subMenuClass);
					subMenu.removeAttribute('open');
				}
			}
		};

		// Sometimes client JS is not removing the open class as expected,
		// causing slideout not to close properly
		useEffect(() => {
			document.querySelectorAll('.ProductListWrapper .mobile-facets__details .mobile-facets__summary').forEach((facet) => {
				facet.addEventListener('click', () => {
					facet.classList.toggle('facet-open');
				});
			});
			if (!open && wrapperContainer.current) {
				wrapperContainer.current.removeAttribute('open');
			}
		}, [open]);

		return (
			<div class="mobile-facets__main has-submenu gradient ">
				{sorting && sorting.options.length ? (
					<MobileFacet
						facet={{ label: `Sort By ${sorting.current.label}`, values: sorting.options }}
						handleToggleSubMenu={handleToggleSubMenu}
						type="sort"
						currentSort={sorting.current.label}
					/>
				) : null}

				{facets && facets.length ? (
					facets.map((facet) => {
						if (facet.field !== 'collection_name') {
							return <MobileFacet facet={facet} handleToggleSubMenu={handleToggleSubMenu} type="facet" currentSort={false} />;
						}
					})
				) : (
					//  <FilterMessages />
					 
					<div />
				)}
				
			</div>
		);
	})
);

const MobileFacet = ({ facet, handleToggleSubMenu, type, currentSort }) => {
	const { label, values } = facet;
	const subMenuRef = useRef();

	return (
		<div class={`mobile-facets__details ${label.toLowerCase().replace(' ', '-')}-dtl`} ref={subMenuRef}>
			<div class="mobile-facets__summary focus-inset" onClick={(e) => handleToggleSubMenu(e, true, subMenuRef.current)}>
				<div>
					<span>{label.toLowerCase().replace('_', ' ')}</span>
					<span class="mobile-facets__arrow no-js-hidden">
						
					</span>
				</div>
			</div>
			<div class={`mobile-facets__submenu gradient`}>
				
				<ul class="mobile-facets__list list-unstyled" role="list">
					{values.map((value, i) => (
						<li class="mobile-facets__item list-menu__item" {...value.url.link}>
							<label for={`Filter-${label}-mobile-${i + 1}`} class="mobile-facets__label">
								<input
									class="mobile-facets__checkbox"
									type="checkbox"
									name={`Filter-${label}-mobile-${i + 1}`}
									value="1"
									checked={type === 'sort' ? currentSort === value.label : value.filtered}
								/>

								<span class="mobile-facets__highlight"></span>
								{label === 'Color' ? (
									<span className="f-colorbox">
										<img
											src={`https://kikidm.com/cdn/shop/files/${
												'color-' + value.value?.toLowerCase().replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '-')
											}.png?v=3`}
											alt=""
										/>
									</span>
								) : (
									''
								)}
								<svg class="icon icon-checkmark" width="1.1rem" height="0.7rem" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M1.5 3.5L2.83333 4.75L4.16667 6L9.5 1"
										stroke="currentColor"
										stroke-width="1.75"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<span aria-hidden="true">{value.label} <small className='facets-count'>({value.count})</small></span>
								<span class="visually-hidden">{value.label} <small className='facets-count'>({value.count})</small></span>
							</label>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
