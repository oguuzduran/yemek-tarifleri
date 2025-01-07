import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Title, useTheme, Surface } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const RecipeCard = ({ recipe, onPress, isGrid, style }) => {
  const { colors } = useTheme();

  const renderInfoItem = (icon, text) => (
    <Surface style={[styles.infoItem, !isGrid && styles.listInfoItem]} elevation={2}>
      <MaterialCommunityIcons name={icon} size={16} color={colors.primary} />
      <Text style={styles.infoText}>{text}</Text>
    </Surface>
  );

  const styles = StyleSheet.create({
    card: {
      elevation: 4,
    },
    gridCard: {
      height: '100%',
    },
    listCard: {
      height: 'auto',
      marginBottom: 16,
    },
    cover: {
      height: 120,
    },
    gridCover: {
      height: 120,
      borderRadius: 8,
    },
    listCover: {
      height: 200,
      borderRadius: 12,
    },
    content: {
      padding: 12,
    },
    listContent: {
      paddingVertical: 16,
    },
    title: {
      fontSize: 16,
      marginBottom: 8,
    },
    listTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    infoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 4,
    },
    gridInfoContainer: {
      flexDirection: 'column',
      gap: 4,
    },
    infoItem: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      padding: 6,
      borderRadius: 8,
    },
    listInfoItem: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      backgroundColor: '#f8f8f8',
      marginHorizontal: 4,
      borderRadius: 12,
      minWidth: 100,
      justifyContent: 'center',
    },
    info: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    infoText: {
      marginLeft: 6,
      fontSize: 13,
      color: '#555',
      fontWeight: '500',
    },
  });

  return (
    <View style={[style]}>
      <Card 
        style={[styles.card, isGrid ? styles.gridCard : styles.listCard]} 
        onPress={onPress}
      >
        <Card.Cover 
          source={{ uri: recipe.image }} 
          style={[styles.cover, isGrid ? styles.gridCover : styles.listCover]} 
        />
        <Card.Content style={[styles.content, !isGrid && styles.listContent]}>
          <Title numberOfLines={2} style={[styles.title, !isGrid && styles.listTitle]}>
            {recipe.title}
          </Title>
          <View style={[styles.infoContainer, isGrid && styles.gridInfoContainer]}>
            {renderInfoItem('clock-outline', `${recipe.duration} dk`)}
            {renderInfoItem('chef-hat', recipe.difficulty)}
            {renderInfoItem('food-variant', `${recipe.ingredients} malzeme`)}
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};
