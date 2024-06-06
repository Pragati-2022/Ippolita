/* external imports */
import { h, Fragment, Component } from 'preact';
import { observer } from 'mobx-react';

/* searchspring imports */
import { withController } from '@searchspring/snap-preact-components';

export const FilterSummary = withController(
	observer((props) => {
		const { controller } = props;
		const store = controller.store;
		const { filters } = store;
		const clearAll = controller.urlManager.remove('filter');
		filters.map((filter) => {
			const filterLabel = filter.facet.field == 'collection_name' ? `Collection: ${filter.value.label}` : filter.value.label;
			filter.label = filterLabel;
			return filter;
		});

		return (
			filters.length !== 0 && (
				<div class="ss__filters active-facets active-facets-desktop">
					<span className="refineby-text">Refine By</span>
					{filters.map((filter) => (
						<a class="active-facets__button active-facets__button--light" role="button" {...filter.url.link}>
							<span class="active-facets__button-inner button button--tertiary">
								{filter.label}
								<svg
									aria-hidden="true"
									focusable="false"
									role="presentation"
									width="12"
									height="13"
									class="icon icon-close-small"
									viewBox="0 0 12 13"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M8.48627 9.32917L2.82849 3.67098" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
									<path d="M2.88539 9.38504L8.42932 3.61524" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
								</svg>

								<span class="visually-hidden">Remove filter</span>
							</span>
						</a>
					))}

					<div class="active-facets__button-wrapper">
						<a class="active-facets__button-remove underlined-link" role="button" {...clearAll.link}>
							<span>Clear All</span>
						</a>
					</div>
				</div>
			)
		);
	})
);
