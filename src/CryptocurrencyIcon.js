import React, { useMemo } from "react";
import { StyleSheet, View } from "react-primitives";
import * as CoinIcons from "./icons";

const sx = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
});

function formatName(name) {
	return name
		? name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
		: "";
}

const CryptocurrencyIcon = ({
	size = 32,
	style,
	name,
	...props
}) => {
	const formattedName = useMemo(() => formatName(name), [name]);

	const circleProps = useMemo(
		() => ({
			borderRadius: size / 2,
			height: size,
			width: size,
		}),
		[size]
	);

	const CryptocurrencyIconElement = CoinIcons[formattedName];

	return (
		<View {...circleProps} style={[sx.container, style]}>
			<CryptocurrencyIconElement
				{...circleProps}
				name={formattedName}
				{...props}
			/>
		</View>
	);
};

const arePropsEqual = (prev, next) =>
	prev.size === next.size &&
	prev.name === next.name;

export default React.memo(CryptocurrencyIcon, arePropsEqual);
