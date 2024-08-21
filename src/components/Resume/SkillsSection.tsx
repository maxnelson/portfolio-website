import { View, Text } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";

export const SkillsSection = () => {
  return (
    <View style={[styles.margin_top_5, styles.font_size_medium]}>
      <Text style={[]}>
        <Text style={[styles.font_family_helvetica_bold]}>Javascript:</Text>{" "}
        Typescript • React • D3 • Node • Express
      </Text>
      <Text style={[]}>
        <Text style={[styles.font_family_helvetica_bold]}>
          Pre/Post Processing Tools:
        </Text>{" "}
        PostCSS • Rollup • Vite • Grunt • Gulp
      </Text>
      <Text style={[]}>
        <Text style={[styles.font_family_helvetica_bold]}>Databases:</Text>{" "}
        Firebase • Firestore
      </Text>
      <Text style={[]}>
        <Text style={[styles.font_family_helvetica_bold]}>Python:</Text> Flask
      </Text>
      <Text style={[]}>
        <Text style={[styles.font_family_helvetica_bold]}>
          Cloud Platforms:
        </Text>{" "}
        Google Cloud Platform
      </Text>
    </View>
  );
};
