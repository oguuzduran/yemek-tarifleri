import React from 'react';
import { ScrollView, View, StyleSheet, Image, Text } from 'react-native';
import { Title, useTheme, Surface, Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { recipes } from '../../data/recipes';

const InfoBadge = ({ icon, text, color }) => (
  <Surface style={styles.infoBadge} elevation={2}>
    <MaterialCommunityIcons name={icon} size={20} color={color} />
    <Text style={styles.infoBadgeText}>{text}</Text>
  </Surface>
);

const SectionTitle = ({ icon, title, color }) => (
  <View style={styles.sectionTitleContainer}>
    <MaterialCommunityIcons name={icon} size={24} color={color} />
    <Text style={styles.sectionTitle}>{title}</Text>
  </View>
);

const RecipeDetailScreen = ({ route }) => {
  const { colors } = useTheme();
  const { recipeId } = route.params;
  const recipeData = recipes[recipeId];

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: recipeData.image }} 
          style={styles.image}
          resizeMode="cover"
        />
        <Surface style={styles.titleCard} elevation={4}>
          <Title style={styles.title}>{recipeData.title}</Title>
        </Surface>
      </View>

      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <InfoBadge 
            icon="clock-outline" 
            text={`${recipeData.duration} dk`}
            color={colors.primary}
          />
          <InfoBadge 
            icon="chef-hat" 
            text={recipeData.difficulty}
            color={colors.primary}
          />
          <InfoBadge 
            icon="account-group" 
            text={recipeData.servings}
            color={colors.primary}
          />
        </View>

        <View style={styles.section}>
          <SectionTitle 
            icon="format-list-bulleted" 
            title="Malzemeler"
            color={colors.primary}
          />
          <Surface style={styles.sectionContent} elevation={1}>
            {recipeData.ingredientsList.map((ingredient, index) => (
              <View key={index} style={styles.ingredientItem}>
                <MaterialCommunityIcons 
                  name="circle-small" 
                  size={20} 
                  color={colors.primary}
                />
                <Text style={styles.ingredientText}>{ingredient}</Text>
              </View>
            ))}
          </Surface>
        </View>

        <View style={styles.section}>
          <SectionTitle 
            icon="food" 
            title="Hazırlanışı"
            color={colors.primary}
          />
          <Surface style={styles.sectionContent} elevation={1}>
            {recipeData.instructions.map((instruction, index) => (
              <View key={index} style={styles.instructionItem}>
                <View style={[styles.stepNumber, { backgroundColor: colors.primary }]}>
                  <Text style={styles.stepNumberText}>{index + 1}</Text>
                </View>
                <Text style={styles.instructionText}>{instruction}</Text>
              </View>
            ))}
          </Surface>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    position: 'relative',
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  titleCard: {
    position: 'absolute',
    bottom: -20,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  infoBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    minWidth: 100,
    justifyContent: 'center',
  },
  infoBadgeText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '500',
    color: '#555',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  sectionContent: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
  },
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  ingredientText: {
    fontSize: 16,
    color: '#444',
    flex: 1,
  },
  instructionItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  stepNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  stepNumberText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  instructionText: {
    fontSize: 16,
    color: '#444',
    flex: 1,
    lineHeight: 24,
  },
});

export default RecipeDetailScreen;
