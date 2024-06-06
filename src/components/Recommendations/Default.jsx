import { observer } from 'mobx-react';
import { h, render } from 'preact';
import './DefaultRecommendations.scss';
import { Result } from '../Results';
export const Default = observer((props) => {
	const { results } = props.controller.store;

	return (
		<section className="recommendation-scn">
			<h3 class="ss__recommendation__title">Recommended Products</h3>

			<div className="ProductList recs-list recs-slider">
				{results.map((result, i) => (
					<div className={`recs-item item-${i + 1}`} key={result.id}>
						{{}[result.type] || <Result result={result} />}
					</div>
				))}
			</div>
		</section>
	);
});
