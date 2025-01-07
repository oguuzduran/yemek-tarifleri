import React, { useState, useMemo } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  Dimensions,
  StatusBar,
  SafeAreaView,
} from "react-native";
import {
  useTheme,
  Searchbar,
  Chip,
  Text,
  IconButton,
} from "react-native-paper";
import { RecipeCard } from "../../components/RecipeCard/RecipeCard";
import { FilterModal } from "../../components/FilterModal/FilterModal";
import { categories, spacing, layouts } from "../../constants";
import { recipes } from "../../data/recipes";

const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [isGridView, setIsGridView] = useState(true);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [filters, setFilters] = useState({
    difficulty: null,
    duration: 60,
    ingredients: 10,
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
    },
    header: {
      backgroundColor: colors.primary,
      elevation: 4,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    headerContent: {
      paddingBottom: spacing.sm,
    },
    headerTitle: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      marginVertical: spacing.md,
    },
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: spacing.lg,
      paddingBottom: spacing.md,
    },
    searchbar: {
      flex: 1,
      marginRight: spacing.sm,
      borderRadius: spacing.md,
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      elevation: 0,
    },
    filterButton: {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      borderRadius: spacing.md,
    },
    categoriesContainer: {
      marginBottom: spacing.sm,
      paddingHorizontal: spacing.lg,
      marginTop: spacing.md,
    },
    viewToggleContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: spacing.lg,
      marginBottom: spacing.md,
      marginTop: spacing.xs,
      justifyContent: "space-between",
    },
    viewToggleButtons: {
      flexDirection: "row",
      alignItems: "center",
      gap: -spacing.sm,
    },
    recipeCount: {
      fontSize: 13,
      color: colors.backdrop,
      fontWeight: "500",
      flex: 1,
    },
    chipScrollView: {
      marginBottom: spacing.xs,
    },
    filterChip: {
      marginRight: spacing.sm,
    },
    gridContainer: {
      paddingHorizontal: spacing.sm,
    },
    listContainer: {
      paddingHorizontal: spacing.lg,
    },
    contentContainer: {
      padding: 16,
      paddingBottom: 300,
    },
    row: {
      flex: 1,
      justifyContent: "flex-start",
    },
    gridItem: {
      flex: 1,
      maxWidth: "48%",
      marginHorizontal: "1%",
      marginBottom: 16,
    },
    listItem: {
      width: "100%",
      marginBottom: 16,
    },
  });

  const onChangeSearch = (query) => setSearchQuery(query);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredRecipes = useMemo(() => {
    return Object.values(recipes).filter((recipe) => {
      // Kategori filtresi
      if (selectedCategory !== "Tümü" && recipe.category !== selectedCategory) {
        return false;
      }

      // Arama filtresi
      if (
        searchQuery &&
        !recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Zorluk seviyesi filtresi
      if (
        filters.difficulty &&
        filters.difficulty !== "Tümü" &&
        recipe.difficulty !== filters.difficulty
      ) {
        return false;
      }

      // Süre filtresi
      if (filters.duration && parseInt(recipe.duration) > filters.duration) {
        return false;
      }

      // Malzeme sayısı filtresi
      if (filters.ingredients && recipe.ingredients > filters.ingredients) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, filters]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: colors.primary }}>
        <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>Yemek Tarifleri</Text>
            <View style={styles.searchContainer}>
              <Searchbar
                placeholder="Tarif ara..."
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={styles.searchbar}
                iconColor={colors.primary}
                inputStyle={{ color: colors.primary }}
                placeholderTextColor={colors.primary + "99"}
              />
              <IconButton
                icon="filter-variant"
                size={24}
                onPress={() => setFilterModalVisible(true)}
                mode="contained"
                style={styles.filterButton}
                iconColor={colors.primary}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>

      <SafeAreaView
        style={[styles.content, { backgroundColor: colors.background }]}
        edges={["right", "left"]}
      >
        <View style={styles.categoriesContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.chipScrollView}
          >
            {categories.map((item) => (
              <Chip
                key={item}
                style={styles.filterChip}
                selected={selectedCategory === item}
                onPress={() => setSelectedCategory(item)}
                mode="outlined"
              >
                {item}
              </Chip>
            ))}
          </ScrollView>
        </View>

        <View style={styles.viewToggleContainer}>
          <Text style={styles.recipeCount}>
            Şu anda {filteredRecipes.length} tarif görüntüleniyor
          </Text>
          <View style={styles.viewToggleButtons}>
            <IconButton
              icon="view-list"
              size={18}
              onPress={() => setIsGridView(false)}
              mode={!isGridView ? "contained" : "outlined"}
            />
            <IconButton
              icon="view-grid"
              size={18}
              onPress={() => setIsGridView(true)}
              mode={isGridView ? "contained" : "outlined"}
            />
          </View>
        </View>

        <FlatList
          key={isGridView ? "grid" : "list"}
          data={filteredRecipes}
          renderItem={({ item }) => (
            <RecipeCard
              recipe={item}
              onPress={() =>
                navigation.navigate("RecipeDetail", { recipeId: item.id })
              }
              isGrid={isGridView}
              style={isGridView ? styles.gridItem : styles.listItem}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={isGridView ? 2 : 1}
          contentContainerStyle={styles.contentContainer}
          columnWrapperStyle={isGridView ? styles.row : null}
        />

        <FilterModal
          visible={filterModalVisible}
          onDismiss={() => setFilterModalVisible(false)}
          filters={filters}
          onFilterChange={handleFilterChange}
          onApply={() => setFilterModalVisible(false)}
        />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
