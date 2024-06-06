/* external imports */
import { h, Fragment, Component } from 'preact';
import { observer } from 'mobx-react';

/* searchspring imports */
import { withTheme, withController } from '@searchspring/snap-preact-components';

export const FilterMessages = withTheme(
	withController(
		observer((props) => {
			const { theme, controller } = props;
			const store = controller.store;
			const { custom, facets, filters, pagination } = store;
			const lang = theme.lang[custom.site.lang].messages;

			// create filter messages
			let message = '';
			if (pagination.totalResults === 0 && filters.length === 0) {
				message = lang.noResults;
			} else if (pagination.totalResults === 0 && filters.length) {
				message = lang.selected;
			} else if (pagination.totalResults && filters.length === 0) {
				message = lang.noFilters;
			}

			return (
				facets.length === 0 &&
				message && (
					<div className="ss__filter-messages">
						<p className="ss__filter-messages__content" dangerouslySetInnerHTML={{ __html: message }}></p>
					</div>
				)
			);
		})
	)
);
