/* external imports */
import { h, Fragment, Component } from 'preact';
import { observer } from 'mobx-react';

@observer
export class DynamicVariants extends Component {
	render() {
		const { controller, result } = this.props;
		const store = controller.store;
		const variantsConfig = store.custom.variantsConfig;
		console.log('variantsConfig Test', variantsConfig);
		const { attributes, custom } = result;
		const intellisuggest = (e) => controller.track.product.click(e, result);

		return variantsConfig.swap && attributes[variantsConfig.field] && attributes[variantsConfig.field].length > 1 ? (
			<fieldset class="js product-form__input item-color" data-option-index="option1" data-product-id="7185841586372">
				{attributes[variantsConfig.field].map((variant) => {
					const swatchHandle = `swatch-${variant.color.toLowerCase().replace(/[\s//]/g, '-')}`;

					return (
						<label
							style={{ backgroundImage: `url(//cdn.shopify.com/s/files/1/3050/6604/files/${swatchHandle}.jpg)` }}
							class=""
							className={`${custom.variantSelected[variantsConfig.simple] == variant[variantsConfig.simple] ? 'current-active' : ''}`}
							onClick={(e) => {
								variantsConfig.swap(result, variant);
								intellisuggest(e);
							}}
						></label>
					);
				})}
			</fieldset>
		) : null;
	}
}
