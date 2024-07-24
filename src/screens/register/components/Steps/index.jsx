import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

const Steps = ({ page }) => {
	function steps() {
		let viewSteps = [];
		for (let i = 0; i < 8; i++) {
			viewSteps.push(
				<View
					key={i}
					style={[
						styles.stepLine,
						i < page ? styles.active : styles.passive,
					]}></View>
			);
		}

		return viewSteps;
	}

	return <View style={styles.steps}>{steps()}</View>;
};

export default Steps;
