import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from "./styles";

const AskQuestion = ({ onSelectVariant }) => {
  const variants = [
    {
      id: 1,
      title: 'every day',
    },
    {
      id: 2,
      title: 'once a week',
    },
    {
      id: 3,
      title: 'once a month',
    },
    {
      id: 4,
      title: 'never',
    },
  ];

  const [selectedVariant, setSelectedVariant] = useState(null);

  const handleVariantSelection = (index) => {
    setSelectedVariant(index);
    onSelectVariant(variants[index]);
  };

  return (
    <View style={styles.askQuestion}>
      <Text style={styles.title}>ask this question</Text>
      <View style={styles.variants}>
        {variants.map((variant) => (
          <TouchableOpacity
            key={variant.id}
            onPress={() => handleVariantSelection(variant.id)}
            style={[
              styles.variantButton,
              selectedVariant === variant.id && styles.selectedVariant,
            ]}
          >
            <Text
              style={[
              styles.variantTitle,
              selectedVariant === variant.id && styles.selectedVariantTitle,
            ]}
            >{variant.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default AskQuestion;
