import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Portal,
  Modal,
  Text,
  Button,
  Surface,
  useTheme,
} from "react-native-paper";
import { spacing, difficultyLevels } from "../../constants";

const durationLevels = [
  { label: "Tümü", value: 180 },
  { label: "30 dk", value: 30 },
  { label: "60 dk", value: 60 },
  { label: "90 dk", value: 90 },
];

const ingredientLevels = [
  { label: "Tümü", value: 20 },
  { label: "5", value: 5 },
  { label: "10", value: 10 },
  { label: "15", value: 15 },
];

export const FilterModal = ({
  visible,
  onDismiss,
  filters,
  onFilterChange,
  onApply,
}) => {
  const { colors } = useTheme();
  const [localFilters, setLocalFilters] = React.useState(filters);

  React.useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setLocalFilters((prev) => ({ ...prev, [key]: value }));
    onFilterChange(key, value);
  };

  const styles = StyleSheet.create({
    modalContent: {
      backgroundColor: "white",
      margin: spacing.lg,
      borderRadius: spacing.lg,
    },
    header: {
      padding: spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: colors.backdrop + "20",
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.primary,
      textAlign: "center",
    },
    content: {
      padding: spacing.md,
    },
    section: {
      marginBottom: spacing.lg,
    },
    sectionTitle: {
      fontSize: 15,
      fontWeight: "600",
      marginBottom: spacing.sm,
      color: colors.text,
    },
    optionsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: spacing.xs,
    },
    optionButton: {
      flex: 1,
    },
    buttonLabel: {
      fontSize: 13,
    },
    footer: {
      padding: spacing.md,
      borderTopWidth: 1,
      borderTopColor: colors.backdrop + "20",
      flexDirection: "row",
      justifyContent: "space-between",
      gap: spacing.sm,
    },
    footerButton: {
      flex: 1,
    },
    description: {
      fontSize: 11,
      color: colors.backdrop,
      marginTop: 4,
    },
  });

  return (
    <Portal>
      <Modal visible={visible} onDismiss={onDismiss}>
        <Surface style={styles.modalContent} elevation={5}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Filtreleme Seçenekleri</Text>
          </View>

          <View style={styles.content}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Zorluk Seviyesi</Text>
              <View style={styles.optionsContainer}>
                {difficultyLevels.map((level) => (
                  <Button
                    key={level}
                    mode={
                      localFilters.difficulty === level
                        ? "contained"
                        : "outlined"
                    }
                    onPress={() => handleFilterChange("difficulty", level)}
                    style={styles.optionButton}
                    labelStyle={styles.buttonLabel}
                    compact
                  >
                    {level}
                  </Button>
                ))}
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Pişirme Süresi</Text>
              <View style={styles.optionsContainer}>
                {durationLevels.map((level) => (
                  <Button
                    key={level.value}
                    mode={
                      localFilters.duration === level.value
                        ? "contained"
                        : "outlined"
                    }
                    onPress={() => handleFilterChange("duration", level.value)}
                    style={styles.optionButton}
                    labelStyle={styles.buttonLabel}
                    compact
                  >
                    {level.label}
                  </Button>
                ))}
              </View>
              <Text style={styles.description}>Seçilen süre veya daha az</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Malzeme Sayısı</Text>
              <View style={styles.optionsContainer}>
                {ingredientLevels.map((level) => (
                  <Button
                    key={level.value}
                    mode={
                      localFilters.ingredients === level.value
                        ? "contained"
                        : "outlined"
                    }
                    onPress={() =>
                      handleFilterChange("ingredients", level.value)
                    }
                    style={styles.optionButton}
                    labelStyle={styles.buttonLabel}
                    compact
                  >
                    {level.label}
                  </Button>
                ))}
              </View>
              <Text style={styles.description}>
                Seçilen sayıda veya daha az malzeme
              </Text>
            </View>
          </View>

          <View style={styles.footer}>
            <Button
              mode="outlined"
              onPress={onDismiss}
              style={styles.footerButton}
            >
              İptal
            </Button>
            <Button
              mode="contained"
              onPress={onApply}
              style={styles.footerButton}
            >
              Uygula
            </Button>
          </View>
        </Surface>
      </Modal>
    </Portal>
  );
};
